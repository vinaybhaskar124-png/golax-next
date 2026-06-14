import { seoBlogPosts } from "@/data/seoBlogPosts";
import { getBlogMetadata } from "@/data/blogMeta";

const legacyBlogDates: Record<string, { date: string; author: string; category: string }> = {
  "digital-transformation-patna-businesses": { date: "February 1, 2026", author: "Vikash Kumar", category: "Digital Transformation" },
  "seo-tips-local-businesses-patna": { date: "January 15, 2026", author: "Meera Patel", category: "SEO" },
  "mobile-app-development-trends-2026": { date: "January 20, 2026", author: "Rajesh Singh", category: "Mobile Apps" },
  "choosing-right-technology-stack": { date: "December 10, 2025", author: "Vikash Kumar", category: "Technology" },
  "ecommerce-website-essentials": { date: "November 28, 2025", author: "Anita Sharma", category: "E-commerce" },
  "cloud-migration-guide-smes": { date: "November 15, 2025", author: "Rajesh Singh", category: "Cloud" },
  "social-media-marketing-bihar": { date: "October 20, 2025", author: "Meera Patel", category: "Digital Marketing" },
  "website-security-best-practices": { date: "October 5, 2025", author: "Anita Sharma", category: "Security" },
  "react-vs-angular-2026": { date: "September 18, 2025", author: "Rajesh Singh", category: "Web Development" },
  "ai-transforming-business-operations": { date: "September 1, 2025", author: "Vikash Kumar", category: "AI" },
  "building-scalable-web-applications": { date: "August 12, 2025", author: "Anita Sharma", category: "Web Development" },
  "government-schemes-digital-india": { date: "July 25, 2025", author: "Vikash Kumar", category: "Digital India" },
  "ux-design-principles-conversion": { date: "July 10, 2025", author: "Meera Patel", category: "UX Design" },
};

export function getBlogSchemaData(slug: string) {
  const seoPost = seoBlogPosts.find((p) => p.slug === slug);
  const meta = getBlogMetadata(slug);
  const legacy = legacyBlogDates[slug];

  if (seoPost) {
    return {
      slug,
      headline: seoPost.seoTitle,
      description: seoPost.metaDescription,
      datePublished: seoPost.date,
      author: seoPost.author,
      category: seoPost.category,
    };
  }

  if (meta && legacy) {
    return {
      slug,
      headline: meta.seoTitle,
      description: meta.description,
      datePublished: legacy.date,
      author: legacy.author,
      category: legacy.category,
    };
  }

  return null;
}
