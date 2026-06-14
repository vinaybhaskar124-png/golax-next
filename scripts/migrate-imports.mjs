#!/usr/bin/env node
/**
 * Migrates copied Vite views/components from react-router to Next.js patterns.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const src = path.join(root, "src");

const dirs = [
  path.join(src, "views"),
  path.join(src, "components"),
];

const CLIENT_HINTS = [
  "useState",
  "useEffect",
  "useRef",
  "useParams",
  "usePathname",
  "useRouter",
  "useToast",
  "framer-motion",
  "onClick",
  "onChange",
  "onSubmit",
  "AnimatePresence",
];

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.(tsx|ts)$/.test(entry.name)) files.push(full);
  }
  return files;
}

function migrateFile(file) {
  if (file.includes("FloatingChat")) {
    return false;
  }

  let content = fs.readFileSync(file, "utf8");
  const original = content;

  // Skip already migrated layout/header/footer
  if (
    file.endsWith("layout\\Header.tsx") ||
    file.endsWith("layout/Header.tsx") ||
    file.endsWith("layout\\Footer.tsx") ||
    file.endsWith("layout/Footer.tsx") ||
    file.endsWith("layout\\Layout.tsx") ||
    file.endsWith("layout/Layout.tsx") ||
    file.endsWith("ScrollToTop.tsx") ||
    file.endsWith("Providers.tsx")
  ) {
    return false;
  }

  // react-router-dom → next
  content = content.replace(
    /import\s*\{([^}]+)\}\s*from\s*["']react-router-dom["'];?\n/g,
    (_, imports) => {
      const parts = imports.split(",").map((s) => s.trim()).filter(Boolean);
      const lines = [];
      const nextImports = [];
      for (const p of parts) {
        if (p === "Link") nextImports.push("Link");
        else if (p === "useParams" || p === "useLocation" || p === "useNavigate") nextImports.push(p === "useLocation" ? "usePathname" : p === "useNavigate" ? "useRouter" : p);
        else if (p === "Navigate") lines.push('import { redirect } from "next/navigation";');
        else if (p.startsWith("Link")) nextImports.push("Link");
      }
      if (nextImports.length) {
        const unique = [...new Set(nextImports)];
        if (unique.includes("Link")) {
          lines.unshift('import Link from "next/link";');
          const rest = unique.filter((x) => x !== "Link");
          if (rest.length) lines.unshift(`import { ${rest.join(", ")} } from "next/navigation";`);
        } else {
          lines.unshift(`import { ${unique.join(", ")} } from "next/navigation";`);
        }
      }
      return lines.join("\n") + "\n";
    }
  );

  content = content.replace(/\bto=\{/g, "href={");
  content = content.replace(/\bto="/g, 'href="');
  content = content.replace(/\bto='/g, "href='");

  // useLocation → usePathname
  content = content.replace(/\buseLocation\(\)/g, "usePathname()");
  content = content.replace(/\blocation\.pathname\b/g, "pathname");

  // Remove react-helmet-async
  content = content.replace(/import\s*\{[^}]*Helmet[^}]*\}\s*from\s*["']react-helmet-async["'];?\n/g, "");
  content = content.replace(/import\s*SEOHead\s*from\s*["']@\/components\/seo\/SEOHead["'];?\n/g, "");
  content = content.replace(/<SEOHead[\s\S]*?\/>\n/g, "");
  content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>\n/g, "");

  // Remove LocalBusinessSchema import usage from views - keep component for manual use
  // Keep JSON-LD script blocks inside Helmet removal might remove them - need to preserve json-ld
  // The script above removes entire Helmet blocks including json-ld - we'll add JsonLd at route level later

  if (content !== original) {
    const needsClient = CLIENT_HINTS.some((h) => content.includes(h));
    if (needsClient && !content.startsWith('"use client"')) {
      content = `"use client";\n\n${content}`;
    }
    fs.writeFileSync(file, content);
    return true;
  }
  return false;
}

let count = 0;
for (const dir of dirs) {
  for (const file of walk(dir)) {
    if (migrateFile(file)) {
      count++;
      console.log("Migrated:", path.relative(root, file));
    }
  }
}
console.log(`Done. ${count} files updated.`);
