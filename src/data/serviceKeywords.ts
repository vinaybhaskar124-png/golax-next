// Per-service high-intent keyword pools used across all service / location templates.
// Helpers expand them into city-specific or country-specific phrases for SEO/AEO/GEO.

const BASE: Record<string, string[]> = {
  "web-development": [
    "web development company",
    "website development company",
    "website design company",
    "website designing company",
    "web designing company",
    "best web development company",
    "top website development agency",
    "professional website developers",
    "custom website development",
    "responsive website design",
    "e-commerce website development",
    "WordPress website development",
    "Shopify website development",
    "WooCommerce development",
    "React website development",
    "Next.js development services",
    "landing page design",
    "business website development",
    "corporate website design",
    "PHP website development",
    "static website design",
    "dynamic website development",
    "website development cost",
    "affordable website design",
    "web portal development",
    "PWA development",
  ],
  "software-development": [
    "software development company",
    "custom software development",
    "bespoke software development",
    "enterprise software development",
    "ERP software development",
    "CRM software development",
    "HRM software development",
    "school management software",
    "hospital management software",
    "billing software development",
    "inventory management software",
    "POS software development",
    "SaaS development company",
    "B2B software development",
    "business automation software",
    "workflow automation",
    "API development company",
    "database design services",
    "legacy software modernization",
    "Java software development",
    "Python software development",
    ".NET software development",
    "Node.js development services",
    "microservices development",
    "AI software development",
  ],
  "mobile-app-development": [
    "mobile app development company",
    "best mobile app developers",
    "iOS app development",
    "Android app development",
    "iPhone app development",
    "cross-platform app development",
    "React Native app development",
    "Flutter app development",
    "hybrid app development",
    "Kotlin app development",
    "Swift app development",
    "fintech app development",
    "healthcare app development",
    "ecommerce app development",
    "food delivery app development",
    "on-demand app development",
    "mobile UI UX design",
    "app maintenance services",
    "mobile app cost",
    "app development agency",
    "enterprise mobile app development",
    "Play Store app submission",
    "App Store launch services",
    "mobile app testing services",
  ],
  "digital-marketing": [
    "digital marketing company",
    "digital marketing agency",
    "best digital marketing agency",
    "SEO services",
    "SEO company",
    "local SEO services",
    "national SEO services",
    "international SEO agency",
    "Google Ads agency",
    "PPC management services",
    "Facebook ads agency",
    "Instagram marketing agency",
    "Meta ads management",
    "LinkedIn ads management",
    "YouTube ads agency",
    "social media marketing agency",
    "content marketing services",
    "email marketing services",
    "WhatsApp marketing",
    "influencer marketing agency",
    "performance marketing agency",
    "growth marketing agency",
    "lead generation services",
    "conversion rate optimization",
    "Google My Business optimization",
    "ORM services",
    "branding agency",
  ],
  "seo-services": [
    "SEO company",
    "SEO services",
    "best SEO agency",
    "top SEO experts",
    "local SEO services",
    "ecommerce SEO services",
    "technical SEO audit",
    "on-page SEO services",
    "off-page SEO services",
    "link building services",
    "SEO consulting",
    "Google ranking services",
    "keyword research services",
    "Google Maps SEO",
    "voice search SEO",
    "schema markup services",
    "Core Web Vitals optimization",
    "AI search optimization (AEO)",
    "generative engine optimization (GEO)",
  ],
  "it-consulting": [
    "IT consulting company",
    "IT consulting services",
    "IT services company",
    "managed IT services",
    "cloud consulting services",
    "AWS consulting partner",
    "Azure consulting services",
    "Google Cloud consulting",
    "cloud migration services",
    "DevOps consulting",
    "cybersecurity services",
    "IT infrastructure consulting",
    "digital transformation consulting",
    "CTO as a service",
    "IT strategy consulting",
    "offshore IT services",
    "dedicated developer hiring",
    "IT staff augmentation",
    "technology consulting firm",
  ],
};

/** Get the raw service-related keyword pool (no location suffix). */
export const getServiceKeywords = (slug: string): string[] => BASE[slug] ?? [];

/**
 * Expand service keywords with city/region suffixes — drives keyword-rich
 * meta-tags on service × location pages.
 * Returns a deduplicated comma-joined string under ~1.5KB.
 */
export const buildServiceLocationKeywords = (
  serviceSlug: string,
  location: { city: string; state?: string; country?: string },
): string => {
  const pool = getServiceKeywords(serviceSlug);
  const { city, state, country } = location;
  const suffixes = [
    `in ${city}`,
    `${city}`,
    state ? `in ${state}` : "",
    country ? `in ${country}` : "",
    `near me`,
  ].filter(Boolean);

  const phrases = new Set<string>();
  pool.forEach((kw) => {
    suffixes.forEach((suffix) => phrases.add(`${kw} ${suffix}`.trim()));
  });
  // Add "best / top / cheap / affordable" intent modifiers for the headline term
  const head = pool[0];
  if (head) {
    ["best", "top", "affordable", "cheap", "trusted", "leading"].forEach((m) =>
      phrases.add(`${m} ${head} in ${city}`),
    );
  }

  return Array.from(phrases).slice(0, 60).join(", ");
};

/** Build a single combined keyword string for a location page that lists all services. */
export const buildLocationAllServicesKeywords = (location: {
  city: string;
  state?: string;
  country?: string;
}): string => {
  const slugs = ["web-development", "software-development", "mobile-app-development", "digital-marketing", "seo-services", "it-consulting"];
  const phrases = new Set<string>();
  slugs.forEach((s) => {
    const head = BASE[s]?.[0];
    if (!head) return;
    phrases.add(`${head} in ${location.city}`);
    phrases.add(`best ${head} in ${location.city}`);
    if (location.state) phrases.add(`${head} in ${location.state}`);
    if (location.country) phrases.add(`${head} in ${location.country}`);
  });
  // Some extra high-intent generic terms
  ["IT company", "IT services", "software company", "tech company"].forEach((t) => {
    phrases.add(`${t} in ${location.city}`);
    if (location.state) phrases.add(`${t} in ${location.state}`);
  });
  return Array.from(phrases).join(", ");
};

/** Build a keyword string for the global service hub page (no location). */
export const buildServiceHubKeywords = (serviceSlug: string): string => {
  const pool = getServiceKeywords(serviceSlug);
  return pool.join(", ");
};
