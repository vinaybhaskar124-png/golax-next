#!/usr/bin/env node
/**
 * Generates per-location OG share images by overlaying city name onto template.
 * Output: public/og-locations/<slug>.jpg (1200x630)
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const src = fs.readFileSync(path.join(root, "src/data/locations.ts"), "utf8");

// Split file into Patna areas vs Bihar cities sections, then extract entries
const patnaIdx = src.indexOf("export const patnaAreas");
const biharIdx = src.indexOf("export const biharCities");
const patnaBlock = src.slice(patnaIdx, biharIdx);
const biharBlock = src.slice(biharIdx);

const entryRe = /city:\s*"([^"]+)",\s*slug:\s*"([^"]+)"/g;
const locations = [];
let m;
while ((m = entryRe.exec(patnaBlock))) {
  locations.push({ city: m[1], slug: m[2], isPatnaArea: true });
}
while ((m = entryRe.exec(biharBlock))) {
  locations.push({ city: m[1], slug: m[2], isPatnaArea: false });
}
console.log(`Found ${locations.length} locations`);

const template = path.join(root, "public/og-location-template.jpg");
const outDir = path.join(root, "public/og-locations");
fs.mkdirSync(outDir, { recursive: true });

// ImageMagick command — use `magick` (v7) if available, fall back to nix
const magick = "nix run nixpkgs#imagemagick -- ";

for (const loc of locations) {
  const out = path.join(outDir, `${loc.slug}.jpg`);
  const region = loc.isPatnaArea ? "Patna, Bihar" : "Bihar, India";
  const headline = `IT Company in\n${loc.city}`;
  const sub = `Web • App • Software • Marketing`;
  const brand = `Golax India  •  ${region}`;

  // Layered text overlays on the empty left half (canvas is 1200x630, text area starts at x=70)
  const cmd = `${magick} "${template}" -resize 1200x630^ -gravity center -extent 1200x630 \
    -font Liberation-Sans-Bold -pointsize 28 -fill "#7dd3fc" -gravity NorthWest -annotate +70+90 "${brand.replace(/"/g, '\\"')}" \
    -font Liberation-Sans-Bold -pointsize 70 -fill white -gravity NorthWest -annotate +70+150 "IT Company in" \
    -font Liberation-Sans-Bold -pointsize 92 -fill white -gravity NorthWest -annotate +70+240 "${loc.city.replace(/"/g, '\\"')}" \
    -font Liberation-Sans -pointsize 32 -fill "#cbd5e1" -gravity NorthWest -annotate +70+400 "${sub}" \
    -font Liberation-Sans -pointsize 24 -fill "#94a3b8" -gravity NorthWest -annotate +70+475 "Get a free quote • +91 94700 24607" \
    -quality 85 "${out}"`;

  execSync(cmd, { stdio: "pipe" });
  console.log(`✓ ${loc.slug}`);
}

console.log(`\nGenerated ${locations.length} OG images in ${outDir}`);
