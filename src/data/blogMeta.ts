import { getSeoBlogMeta } from "@/data/seoBlogPosts";

/** Metadata for legacy blog posts (pre–seoBlogPosts.ts). */
const legacyBlogMeta: Record<
  string,
  { seoTitle: string; description: string; keywords: string }
> = {
  "digital-transformation-patna-businesses": {
    seoTitle: "Patna Digital Transformation Guide",
    description:
      "How Patna & Bihar businesses can thrive with digital transformation — e-commerce, cloud, SEO & automation strategies for 2026.",
    keywords:
      "digital transformation Patna, digital marketing Patna, IT company Patna, business technology Bihar, e-commerce Patna",
  },
  "seo-tips-local-businesses-patna": {
    seoTitle: "10 Local SEO Tips for Patna Business",
    description:
      "10 practical local SEO tips for Patna businesses — Google Business Profile, local keywords, reviews & rankings in 2026.",
    keywords:
      "local SEO Patna, SEO tips Patna, Google ranking Patna, SEO company Patna, local business SEO Bihar",
  },
  "mobile-app-development-trends-2026": {
    seoTitle: "Top Mobile App Trends 2026",
    description:
      "Mobile app development trends for 2026 — AI, Flutter, React Native, 5G & cross-platform strategies for Indian businesses.",
    keywords:
      "mobile app trends 2026, app development trends India, Flutter 2026, React Native trends, mobile app development India",
  },
  "choosing-right-technology-stack": {
    seoTitle: "Choose Your Startup Tech Stack",
    description:
      "How to choose the right technology stack for your startup — React, Node.js, Python, budget, scalability & team skills.",
    keywords:
      "technology stack startup, choose tech stack, React vs Node, startup development India, software stack 2026",
  },
  "ecommerce-website-essentials": {
    seoTitle: "Must-Have E-commerce Features 2026",
    description:
      "Essential e-commerce website features for 2026 — checkout, mobile UX, payments, SEO & conversion optimization.",
    keywords:
      "e-commerce website features, online store India, WooCommerce features, Shopify India, e-commerce development",
  },
  "cloud-migration-guide-smes": {
    seoTitle: "Cloud Migration Guide for SMBs",
    description:
      "Cloud migration guide for SMEs — AWS, Azure, cost planning, security & step-by-step migration for Indian businesses.",
    keywords:
      "cloud migration SME, AWS migration India, cloud computing SMB, Azure India, IT consulting cloud",
  },
  "social-media-marketing-bihar": {
    seoTitle: "Social Media Marketing for Bihar",
    description:
      "Social media marketing strategies for Bihar businesses — Facebook, Instagram, WhatsApp & content that converts.",
    keywords:
      "social media marketing Bihar, digital marketing Patna, Instagram marketing Bihar, Facebook ads Patna",
  },
  "website-security-best-practices": {
    seoTitle: "Website Security Best Practices",
    description:
      "Website security best practices for small businesses — SSL, backups, malware protection & secure hosting in 2026.",
    keywords:
      "website security India, SSL certificate, website hacking prevention, secure website SMB, cybersecurity small business",
  },
  "react-vs-angular-2026": {
    seoTitle: "React vs Angular: 2026 Comparison",
    description:
      "React vs Angular in 2026 — performance, ecosystem, hiring & which JavaScript framework to choose for your project.",
    keywords:
      "React vs Angular 2026, JavaScript framework comparison, React development India, Angular vs React startup",
  },
  "ai-transforming-business-operations": {
    seoTitle: "How AI Transforms Indian Business",
    description:
      "How AI transforms business operations in India — chatbots, automation, predictive analytics & practical use cases for SMEs.",
    keywords:
      "AI business India, artificial intelligence SME, AI automation India, ChatGPT business, AI software development",
  },
  "building-scalable-web-applications": {
    seoTitle: "Scalable Web App Development Guide",
    description:
      "Building scalable web applications — architecture, microservices, caching, databases & performance for high-traffic apps.",
    keywords:
      "scalable web application, web app architecture, microservices India, high traffic website, Node.js scalability",
  },
  "government-schemes-digital-india": {
    seoTitle: "Digital India Schemes for Bihar",
    description:
      "Government Digital India schemes & MSME subsidies for Bihar businesses — funding opportunities for digitization in 2026.",
    keywords:
      "Digital India scheme, MSME digital subsidy Bihar, government IT scheme India, startup funding Bihar",
  },
  "ux-design-principles-conversion": {
    seoTitle: "UX Principles That Boost Conversion",
    description:
      "UX design principles that boost conversion rates — navigation, CTAs, mobile UX, trust signals & A/B testing tips.",
    keywords:
      "UX design conversion, website UX India, conversion rate optimization, UI UX design company, CRO tips",
  },
};

export function getBlogMetadata(slug: string) {
  return getSeoBlogMeta(slug) ?? legacyBlogMeta[slug] ?? null;
}

export function getAllBlogSlugs(): string[] {
  return [
    ...Object.keys(legacyBlogMeta),
    // seo slugs imported dynamically to avoid duplication — use static-params as source of truth
  ];
}
