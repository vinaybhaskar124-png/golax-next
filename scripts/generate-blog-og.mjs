#!/usr/bin/env node
/**
 * Generates per-blog-post OG share images using the branded template.
 * Output: public/og-blog/<slug>.jpg (1200x630)
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

// Manually curated headlines (short + punchy) so they fit the template nicely.
// `headline` shows on big rows; `sub` is the subtitle below.
const POSTS = [
  { slug: "digital-transformation-patna-businesses", category: "Digital Transformation", headline: "Digital Transformation", sub: "for Patna Businesses" },
  { slug: "seo-tips-local-businesses-patna", category: "Local SEO", headline: "10 Local SEO Tips", sub: "to Rank in Patna" },
  { slug: "mobile-app-development-trends-2026", category: "Mobile Development", headline: "Mobile App Trends", sub: "to Watch in 2026" },
  { slug: "choosing-right-technology-stack", category: "Technology", headline: "Choose the Right", sub: "Tech Stack for Startups" },
  { slug: "ecommerce-website-essentials", category: "E-commerce", headline: "E-commerce Essentials", sub: "for 2026 Stores" },
  { slug: "cloud-migration-guide-smes", category: "Cloud Computing", headline: "Cloud Migration", sub: "Guide for SMEs" },
  { slug: "social-media-marketing-bihar", category: "Digital Marketing", headline: "Social Media Wins", sub: "for Bihar Brands" },
  { slug: "website-security-best-practices", category: "Security", headline: "Website Security", sub: "Best Practices" },
  { slug: "react-vs-angular-2026", category: "Technology", headline: "React vs Angular", sub: "Which to Pick in 2026" },
  { slug: "ai-transforming-business-operations", category: "AI & Technology", headline: "AI is Transforming", sub: "Business in India" },
  { slug: "building-scalable-web-applications", category: "Web Development", headline: "Scalable Web Apps", sub: "A Complete Guide" },
  { slug: "government-schemes-digital-india", category: "Business", headline: "Govt Schemes for", sub: "Digital Bihar Businesses" },
  // 13th (UX) included so it stays consistent if the count grows
  { slug: "ux-design-principles-conversion", category: "Design", headline: "UX Principles", sub: "That Boost Conversions" },
];

const template = path.join(root, "public/og-location-template.jpg");
const outDir = path.join(root, "public/og-blog");
fs.mkdirSync(outDir, { recursive: true });

const magick = "nix run nixpkgs#imagemagick -- ";

const escape = (s) => s.replace(/"/g, '\\"');

let count = 0;
for (const p of POSTS) {
  const out = path.join(outDir, `${p.slug}.jpg`);
  const brand = `Golax India  •  Blog`;
  const tagline = p.category;

  const cmd = `${magick} "${template}" -resize 1200x630^ -gravity center -extent 1200x630 \
    -font Liberation-Sans-Bold -pointsize 26 -fill "#7dd3fc" -gravity NorthWest -annotate +70+85 "${escape(brand)}" \
    -font Liberation-Sans-Bold -pointsize 64 -fill white -gravity NorthWest -annotate +70+145 "${escape(p.headline)}" \
    -font Liberation-Sans-Bold -pointsize 64 -fill white -gravity NorthWest -annotate +70+225 "${escape(p.sub)}" \
    -font Liberation-Sans-Bold -pointsize 28 -fill "#fbbf24" -gravity NorthWest -annotate +70+360 "${escape(tagline.toUpperCase())}" \
    -font Liberation-Sans -pointsize 24 -fill "#cbd5e1" -gravity NorthWest -annotate +70+420 "Insights from Golax India Pvt Ltd" \
    -font Liberation-Sans -pointsize 22 -fill "#94a3b8" -gravity NorthWest -annotate +70+475 "Read more • golaxindiapvtltd.in" \
    -quality 85 "${out}"`;

  execSync(cmd, { stdio: "pipe" });
  count++;
  console.log(`✓ ${p.slug}`);
}

console.log(`\nGenerated ${count} blog OG images in ${outDir}`);
