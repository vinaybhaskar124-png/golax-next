import { BASE_URL } from "@/lib/seo/metadata";

export interface FaqItem {
  question: string;
  answer: string;
}

export function buildFAQPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}

export interface ServiceSchemaInput {
  name: string;
  description: string;
  slug: string;
  serviceType?: string;
}

export function buildServiceSchema({
  name,
  description,
  slug,
  serviceType,
}: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/services/${slug}#service`,
    name,
    description,
    serviceType: serviceType ?? name,
    provider: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Golax India Pvt Ltd",
      url: BASE_URL,
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    url: `${BASE_URL}/services/${slug}`,
  };
}

export interface BlogPostingInput {
  slug: string;
  headline: string;
  description: string;
  datePublished: string;
  author?: string;
  category?: string;
}

export function parseBlogDateToIso(dateStr: string): string {
  const parsed = new Date(dateStr);
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString().split("T")[0];
  }
  return new Date().toISOString().split("T")[0];
}

export function buildBlogPostingSchema({
  slug,
  headline,
  description,
  datePublished,
  author = "Golax India",
  category,
}: BlogPostingInput) {
  const url = `${BASE_URL}/blog/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline,
    description,
    datePublished: parseBlogDateToIso(datePublished),
    dateModified: parseBlogDateToIso(datePublished),
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Golax India Pvt Ltd",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    inLanguage: "en-IN",
    ...(category ? { articleSection: category } : {}),
  };
}

/** HQ coordinates — only use on Patna / home LocalBusiness schema */
export const HQ_GEO = {
  latitude: 25.5941,
  longitude: 85.1376,
};
