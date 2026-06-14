#!/usr/bin/env node
/**
 * Generates per-service-location OG share images for the top 30 highest-intent
 * service+city combinations. Output: public/og-services/<service>-<location>.jpg
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

// Top 30 highest-intent service + city combos
// Strategy: 5 services x 6 top locations (Patna premium areas + biggest Bihar cities)
const SERVICES = [
  { slug: "web-development", short: "Web Development" },
  { slug: "mobile-app-development", short: "Mobile App Development" },
  { slug: "software-development", short: "Software Development" },
  { slug: "digital-marketing", short: "Digital Marketing & SEO" },
  { slug: "it-consulting", short: "IT Consulting" },
];

const TOP_LOCATIONS = [
  { slug: "boring-road", city: "Boring Road", region: "Patna, Bihar" },
  { slug: "kankarbagh", city: "Kankarbagh", region: "Patna, Bihar" },
  { slug: "patna", city: "Patna", region: "Bihar, India" },
  { slug: "gaya", city: "Gaya", region: "Bihar, India" },
  { slug: "muzaffarpur", city: "Muzaffarpur", region: "Bihar, India" },
  { slug: "bhagalpur", city: "Bhagalpur", region: "Bihar, India" },
];

const template = path.join(root, "public/og-location-template.jpg");
const outDir = path.join(root, "public/og-services");
fs.mkdirSync(outDir, { recursive: true });

const magick = "nix run nixpkgs#imagemagick -- ";

let count = 0;
for (const service of SERVICES) {
  for (const loc of TOP_LOCATIONS) {
    const out = path.join(outDir, `${service.slug}-${loc.slug}.jpg`);
    const brand = `Golax India  •  ${loc.region}`;
    const headline = service.short;
    const sub = `Company in ${loc.city}`;
    const tagline = `Top-rated • Affordable • Trusted`;

    const cmd = `${magick} "${template}" -resize 1200x630^ -gravity center -extent 1200x630 \
      -font Liberation-Sans-Bold -pointsize 26 -fill "#7dd3fc" -gravity NorthWest -annotate +70+85 "${brand.replace(/"/g, '\\"')}" \
      -font Liberation-Sans-Bold -pointsize 60 -fill white -gravity NorthWest -annotate +70+145 "${headline.replace(/"/g, '\\"')}" \
      -font Liberation-Sans-Bold -pointsize 78 -fill white -gravity NorthWest -annotate +70+225 "${sub.replace(/"/g, '\\"')}" \
      -font Liberation-Sans -pointsize 30 -fill "#cbd5e1" -gravity NorthWest -annotate +70+380 "${tagline}" \
      -font Liberation-Sans -pointsize 24 -fill "#94a3b8" -gravity NorthWest -annotate +70+450 "Get a free quote • +91 94700 24607" \
      -font Liberation-Sans -pointsize 22 -fill "#64748b" -gravity NorthWest -annotate +70+495 "golaxindiapvtltd.in" \
      -quality 85 "${out}"`;

    execSync(cmd, { stdio: "pipe" });
    count++;
    console.log(`✓ ${service.slug}-${loc.slug}`);
  }
}

console.log(`\nGenerated ${count} service-location OG images in ${outDir}`);
