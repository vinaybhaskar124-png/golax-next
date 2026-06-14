#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const components = path.resolve(__dirname, "../src/components");

const files = [];
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const f = path.join(dir, e.name);
    if (e.isDirectory()) walk(f);
    else if (e.name.endsWith(".tsx")) files.push(f);
  }
}
walk(components);
walk(path.resolve(__dirname, "../src/views"));

for (const file of files) {
  let c = fs.readFileSync(file, "utf8");
  const orig = c;

  if (c.includes("react-router-dom")) {
    c = c.replace(/import\s*\{\s*Link\s*\}\s*from\s*["']react-router-dom["'];?\n?/g, 'import Link from "next/link";\n');
    c = c.replace(/\bto=\{/g, "href={");
    c = c.replace(/\bto="/g, 'href="');
    c = c.replace(/\bto='/g, "href='");
  }

  c = c.replace(/import\s*\{[^}]*Helmet[^}]*\}\s*from\s*["']react-helmet-async["'];?\n/g, "");
  c = c.replace(/import\s*SEOHead\s*from\s*["']@\/components\/seo\/SEOHead["'];?\n/g, "");

  if (!c.includes('import JsonLd') && c.includes("<Helmet>")) {
    c = c.replace(
      /(import Layout from "@\/components\/layout\/Layout";?\n)/,
      '$1import JsonLd from "@/components/seo/JsonLd";\n'
    );
  }

  // Remove SEOHead JSX
  c = c.replace(/<SEOHead[\s\S]*?\/>\n/g, "");

  // Convert Helmet JSON-LD blocks to JsonLd
  c = c.replace(
    /<Helmet>\s*<script type="application\/ld\+json">\s*\{JSON\.stringify\(([\s\S]*?)\)\}\s*<\/script>\s*<\/Helmet>/g,
    "<JsonLd data={$1} />"
  );

  const needsClient =
    /useState|useEffect|useRef|useParams|usePathname|framer-motion|onClick|onChange|onSubmit|AnimatePresence/.test(c);
  if (needsClient && !c.startsWith('"use client"')) {
    c = `"use client";\n\n${c}`;
  }

  if (c !== orig) {
    fs.writeFileSync(file, c);
    console.log("Fixed:", path.relative(components, file));
  }
}
