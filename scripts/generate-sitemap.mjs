#!/usr/bin/env node
/**
 * Generates public/sitemap.xml from data sources.
 * Run with: node scripts/generate-sitemap.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const BASE = "https://golaxindiapvtltd.in";
const today = new Date().toISOString().slice(0, 10);

// --- Extract data via regex (avoids ts-node dependency) ---
function readText(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function extractSlugs(src, key = "slug") {
  const re = new RegExp(`${key}:\\s*["']([a-z0-9-]+)["']`, "g");
  const out = [];
  let m;
  while ((m = re.exec(src))) out.push(m[1]);
  return out;
}

const locationsSrc = readText("src/data/locations.ts");
const serviceLocationsSrc = readText("src/data/serviceLocations.ts");
const internationalSrc = readText("src/data/internationalLocations.ts");
const blogSrc = readText("src/pages/BlogPost.tsx");

// Identify which slugs belong to patnaAreas vs biharCities by splitting the file
const patnaIdx = locationsSrc.indexOf("patnaAreas");
const biharIdx = locationsSrc.indexOf("biharCities");
const patnaBlock = locationsSrc.slice(patnaIdx, biharIdx);
const biharBlock = locationsSrc.slice(biharIdx);
const patnaSlugs = extractSlugs(patnaBlock);
const biharSlugs = extractSlugs(biharBlock);

// Service slugs: only the ones in services array
const servicesArrayMatch = serviceLocationsSrc.match(/export const services[\s\S]*?\n\];/);
const serviceSlugs = extractSlugs(servicesArrayMatch ? servicesArrayMatch[0] : serviceLocationsSrc);

// International country slugs
const internationalSlugs = extractSlugs(internationalSrc);

const blogSlugs = extractSlugs(blogSrc);

console.log(`Patna areas: ${patnaSlugs.length}`);
console.log(`Bihar cities: ${biharSlugs.length}`);
console.log(`Services: ${serviceSlugs.length}`);
console.log(`Blog posts: ${blogSlugs.length}`);

const urls = [];
const add = (loc, priority = "0.7", changefreq = "monthly") =>
  urls.push({ loc, priority, changefreq, lastmod: today });

// Core pages
add("/", "1.0", "daily");
add("/about", "0.9", "weekly");
add("/services", "0.9", "weekly");
add("/industries", "0.8", "monthly");
add("/portfolio", "0.8", "monthly");
add("/careers", "0.8", "weekly");
add("/blog", "0.9", "weekly");
add("/contact", "0.9", "weekly");
add("/locations", "0.9", "weekly");
add("/sitemap", "0.5", "monthly");

// Service hub pages (only real top-level routes — skip slugs without a hub page)
const serviceHubSlugs = serviceSlugs.filter((s) => s !== "seo-services");
for (const s of serviceHubSlugs) add(`/services/${s}`, "0.9", "weekly");

// Patna area pages
for (const a of patnaSlugs) add(`/locations/patna/${a}`, "0.8", "monthly");

// Bihar city pages
for (const c of biharSlugs) add(`/locations/${c}`, "0.8", "monthly");

// Service x location combinations (high SEO value)
const allLocations = [...patnaSlugs, ...biharSlugs];
for (const s of serviceSlugs) {
  for (const loc of allLocations) {
    add(`/services/${s}/${loc}`, "0.7", "monthly");
  }
}

// International country landing pages (offshore / GEO targeting)
for (const c of internationalSlugs) add(`/locations/global/${c}`, "0.85", "weekly");

// Service x international country combinations
for (const s of serviceSlugs) {
  for (const c of internationalSlugs) {
    add(`/services/${s}/global/${c}`, "0.8", "monthly");
  }
}

// International city landing pages — extract each country's first majorCities array
const slugifyCity = (city) =>
  city
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

let internationalCityCount = 0;
for (const countrySlug of internationalSlugs) {
  // Find the country block; pick the FIRST majorCities after the slug declaration
  const slugIdx = internationalSrc.indexOf(`slug: "${countrySlug}"`);
  if (slugIdx === -1) continue;
  const after = internationalSrc.slice(slugIdx);
  const m = after.match(/majorCities:\s*\[([^\]]+)\]/);
  if (!m) continue;
  const cities = [...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]);
  for (const city of cities) {
    const citySlug = slugifyCity(city);
    add(`/locations/global/${countrySlug}/${citySlug}`, "0.8", "monthly");
    internationalCityCount++;
  }
}

console.log(`International countries: ${internationalSlugs.length}`);
console.log(`International cities: ${internationalCityCount}`);


// Blog posts
for (const b of blogSlugs) add(`/blog/${b}`, "0.6", "monthly");

// Legal pages
const legal = [
  "privacy-policy",
  "terms-of-service",
  "cookie-policy",
  "disclaimer",
  "refund-policy",
];
for (const l of legal) add(`/legal/${l}`, "0.4", "yearly");

// Build XML
const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map(
    (u) =>
      `  <url>\n    <loc>${BASE}${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
  ),
  "</urlset>",
  "",
].join("\n");

const out = path.join(root, "public/sitemap.xml");
fs.writeFileSync(out, xml, "utf8");
console.log(`Wrote ${urls.length} URLs to ${out}`);
