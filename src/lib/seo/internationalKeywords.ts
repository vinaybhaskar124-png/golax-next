import { getServiceKeywords } from "@/data/serviceKeywords";
import type { InternationalLocationData } from "@/data/internationalLocations";
import { slugifyCity } from "@/data/internationalLocations";

const SERVICE_SLUGS = [
  "web-development",
  "software-development",
  "mobile-app-development",
  "digital-marketing",
  "seo-services",
  "it-consulting",
] as const;

const SERVICE_LABELS: Record<(typeof SERVICE_SLUGS)[number], string> = {
  "web-development": "Web Development",
  "software-development": "Software Development",
  "mobile-app-development": "Mobile App Development",
  "digital-marketing": "Digital Marketing",
  "seo-services": "SEO Services",
  "it-consulting": "IT Consulting",
};

/** Meta keywords for /locations/global/[country] */
export function buildInternationalCountryKeywords(loc: InternationalLocationData): string {
  const phrases = new Set<string>();
  const { country, slug } = loc;

  [
    `offshore web development company for ${country}`,
    `offshore software development company for ${country}`,
    `outsource software development to India from ${country}`,
    `outsource web development to India from ${country}`,
    `hire offshore developers from India ${country}`,
    `hire dedicated developers for ${country}`,
    `IT outsourcing company for ${country}`,
    `offshore IT services ${country}`,
    `web development company in ${country}`,
    `software development company in ${country}`,
    `mobile app development company in ${country}`,
    `digital marketing agency ${country}`,
    `SEO services for ${country} businesses`,
    `best IT company for ${country}`,
    `affordable web development ${country}`,
    `SaaS development company ${country}`,
    `e-commerce development ${country}`,
    `React development company ${country}`,
    `Next.js development ${country}`,
    `Flutter app development ${country}`,
  ].forEach((p) => phrases.add(p));

  SERVICE_SLUGS.forEach((serviceSlug) => {
    getServiceKeywords(serviceSlug)
      .slice(0, 8)
      .forEach((kw) => {
        phrases.add(`${kw} in ${country}`);
        phrases.add(`${kw} for ${country}`);
        phrases.add(`offshore ${kw} ${country}`);
      });
  });

  loc.majorCities.slice(0, 8).forEach((city) => {
    phrases.add(`web development company in ${city}`);
    phrases.add(`software development company in ${city}`);
    phrases.add(`mobile app development company in ${city}`);
    phrases.add(`IT company in ${city}, ${country}`);
    phrases.add(`offshore development for ${city}`);
    getServiceKeywords("web-development")
      .slice(0, 4)
      .forEach((kw) => phrases.add(`${kw} in ${city}`));
  });

  // Service × country page intents
  SERVICE_SLUGS.forEach((serviceSlug) => {
    phrases.add(`${SERVICE_LABELS[serviceSlug].toLowerCase()} for ${country}`);
  });

  return Array.from(phrases).slice(0, 90).join(", ");
}

/** Meta keywords for /locations/global/[country]/[city] */
export function buildInternationalCityKeywords(
  city: string,
  loc: InternationalLocationData,
): string {
  const phrases = new Set<string>();
  const { country, slug } = loc;

  [
    `web development company in ${city}`,
    `software development company in ${city}`,
    `mobile app development company in ${city}`,
    `IT company in ${city}`,
    `IT services in ${city}`,
    `digital marketing agency ${city}`,
    `SEO company in ${city}`,
    `best web development company in ${city}`,
    `affordable website design ${city}`,
    `hire developers in ${city}`,
    `outsource development from ${city} to India`,
    `offshore web development for ${city} businesses`,
    `${city} startup development partner`,
    `software company in ${city}, ${country}`,
    `web design company ${city}`,
    `app development company ${city}`,
  ].forEach((p) => phrases.add(p));

  SERVICE_SLUGS.forEach((serviceSlug) => {
    getServiceKeywords(serviceSlug)
      .slice(0, 10)
      .forEach((kw) => {
        phrases.add(`${kw} in ${city}`);
        phrases.add(`${kw} ${city}`);
        phrases.add(`best ${kw} in ${city}`);
      });
    phrases.add(`${SERVICE_LABELS[serviceSlug].toLowerCase()} in ${city}`);
    phrases.add(`${SERVICE_LABELS[serviceSlug].toLowerCase()} company ${city}`);
  });

  phrases.add(`offshore IT services ${city} ${country}`);
  phrases.add(`web development ${country} ${city}`);

  return Array.from(phrases).slice(0, 90).join(", ");
}

/** Meta keywords for /services/[service]/global/[country] */
export function buildServiceInternationalKeywords(
  serviceSlug: string,
  loc: InternationalLocationData,
): string {
  const pool = getServiceKeywords(serviceSlug);
  const serviceTitle = SERVICE_LABELS[serviceSlug as (typeof SERVICE_SLUGS)[number]] ?? serviceSlug.replace(/-/g, " ");
  const { country } = loc;
  const phrases = new Set<string>();

  [
    `${serviceTitle.toLowerCase()} for ${country}`,
    `${serviceTitle.toLowerCase()} company in ${country}`,
    `offshore ${serviceTitle.toLowerCase()} for ${country} businesses`,
    `outsource ${serviceTitle.toLowerCase()} from ${country} to India`,
    `hire ${serviceTitle.toLowerCase()} team for ${country}`,
    `best ${serviceSlug.replace(/-/g, " ")} agency for ${country}`,
    `affordable ${serviceTitle.toLowerCase()} ${country}`,
    `top ${serviceTitle.toLowerCase()} company ${country}`,
  ].forEach((p) => phrases.add(p));

  pool.slice(0, 20).forEach((kw) => {
    phrases.add(`${kw} in ${country}`);
    phrases.add(`${kw} for ${country}`);
    phrases.add(`offshore ${kw} ${country}`);
  });

  loc.majorCities.slice(0, 6).forEach((city) => {
    phrases.add(`${serviceTitle.toLowerCase()} company in ${city}`);
    pool.slice(0, 5).forEach((kw) => phrases.add(`${kw} in ${city}`));
  });

  return Array.from(phrases).slice(0, 90).join(", ");
}

export interface SearchTermLink {
  label: string;
  href?: string;
}

/** Visible on-page keyword topics with internal links (country pages). */
export function getCountrySearchTerms(loc: InternationalLocationData): SearchTermLink[] {
  const terms: SearchTermLink[] = [];
  const { country, slug } = loc;

  SERVICE_SLUGS.forEach((serviceSlug) => {
    const label = SERVICE_LABELS[serviceSlug];
    terms.push({
      label: `${label.toLowerCase()} company in ${country}`,
      href: `/services/${serviceSlug}/global/${slug}`,
    });
    terms.push({
      label: `offshore ${label.toLowerCase()} for ${country}`,
      href: `/services/${serviceSlug}/global/${slug}`,
    });
    getServiceKeywords(serviceSlug)
      .slice(0, 2)
      .forEach((kw) => {
        terms.push({
          label: `${kw} in ${country}`,
          href: `/services/${serviceSlug}/global/${slug}`,
        });
      });
  });

  loc.majorCities.slice(0, 6).forEach((city) => {
    terms.push({
      label: `web development company in ${city}`,
      href: `/locations/global/${slug}/${slugifyCity(city)}`,
    });
    terms.push({
      label: `software development company in ${city}`,
      href: `/locations/global/${slug}/${slugifyCity(city)}`,
    });
  });

  [
    `outsource software development to India from ${country}`,
    `hire offshore developers from India for ${country}`,
    `IT outsourcing company for ${country}`,
    `SaaS development company ${country}`,
    `e-commerce website development ${country}`,
    `React Next.js development ${country}`,
    `mobile app developers for ${country} startups`,
    `digital marketing agency ${country}`,
    `SEO services for ${country} businesses`,
    `dedicated development team ${country}`,
  ].forEach((label) => terms.push({ label }));

  return terms.slice(0, 36);
}

/** Visible on-page keyword topics (city pages). */
export function getCitySearchTerms(city: string, loc: InternationalLocationData): SearchTermLink[] {
  const terms: SearchTermLink[] = [];
  const { country, slug } = loc;

  SERVICE_SLUGS.forEach((serviceSlug) => {
    const label = SERVICE_LABELS[serviceSlug];
    terms.push({
      label: `${label.toLowerCase()} in ${city}`,
      href: `/services/${serviceSlug}/global/${slug}`,
    });
    getServiceKeywords(serviceSlug)
      .slice(0, 3)
      .forEach((kw) => {
        terms.push({
          label: `${kw} in ${city}`,
          href: `/services/${serviceSlug}/global/${slug}`,
        });
      });
  });

  [
    `best web development company in ${city}`,
    `affordable website design ${city}`,
    `hire developers in ${city}`,
    `outsource development from ${city} to India`,
    `IT company in ${city}, ${country}`,
    `startup app development ${city}`,
    `SaaS development ${city}`,
    `e-commerce development ${city}`,
  ].forEach((label) => terms.push({ label }));

  return terms.slice(0, 32);
}

/** Long-form city SEO paragraphs (city pages are thinner than country pages). */
export function buildCitySeoSections(
  city: string,
  loc: InternationalLocationData,
): { heading: string; body: string }[] {
  const { country, currency, timezoneOverlap, majorCities } = loc;
  const cityList = majorCities.filter((c) => c !== city).slice(0, 4).join(", ");

  return [
    {
      heading: `Web Development Company in ${city}, ${country}`,
      body: `Searching for a web development company in ${city}? Golax India delivers custom websites, e-commerce stores, SaaS dashboards, and landing pages for ${city}-based startups, agencies, and enterprises. We specialize in React, Next.js, WordPress, Shopify, and headless commerce — shipped with Core Web Vitals optimization, SEO-ready architecture, and ${currency} billing that beats local ${city} agency rates by 40–60%.

Every ${city} web project is led by a senior full-stack engineer with 5+ years of experience, supported by a dedicated English-fluent project manager available during ${city} business hours (${timezoneOverlap} overlap daily).`,
    },
    {
      heading: `Software & SaaS Development for ${city} Businesses`,
      body: `Our software development team helps ${city} founders and CTOs build custom ERPs, CRMs, HRMS platforms, marketplaces, billing engines, and SaaS products. Whether you're validating an MVP or modernizing a legacy system, we deliver clean architecture, automated tests, CI/CD pipelines, and documentation that survives investor due diligence.

${city} clients typically save 50–70% vs hiring locally while shipping in 6–12 weeks instead of 6–12 months.`,
    },
    {
      heading: `Mobile App Development Company in ${city}`,
      body: `Need a mobile app development company in ${city}? We build native iOS (Swift), native Android (Kotlin), and cross-platform Flutter / React Native apps for ${city} fintech, healthcare, e-commerce, on-demand, and B2B clients. Every app includes UX design, backend APIs, push notifications, in-app payments (Stripe, Apple Pay, Google Pay), and App Store + Play Store submission support.`,
    },
    {
      heading: `Digital Marketing & SEO Services in ${city}`,
      body: `Our digital marketing team helps ${city} businesses grow through local and national SEO, Google Ads, Meta Ads, LinkedIn campaigns, content marketing, and email lifecycle flows. We target high-intent ${city} keywords, fix technical SEO issues, and build topical authority that compounds month over month.

Most ${city} clients see measurable organic traffic growth within 4–6 months of consistent SEO work.`,
    },
    {
      heading: `Why Outsource from ${city} to Golax India?`,
      body: `Hiring senior developers in ${city} is expensive and slow. Outsourcing to Golax India gives ${city} businesses access to India's deepest engineering talent pool — React, Next.js, Node.js, Python, Flutter, AWS — at transparent ${currency} pricing with ${timezoneOverlap} of daily overlap.

We sign NDAs, MSAs, and IP-assignment agreements before any code is written. All work product belongs to your ${country} entity on payment.`,
    },
    {
      heading: `Also Serving ${cityList ? `${cityList} & More in ${country}` : `All of ${country}`}`,
      body: cityList
        ? `In addition to ${city}, we actively serve businesses across ${cityList}, and every major market in ${country}. Each city page and service page is tailored to local search intent — so whether your customers search "web development company in ${city}" or "hire offshore developers for ${country}", you'll find Golax India ranking for the terms that matter.`
        : `We serve businesses across ${country} with the same senior team, transparent ${currency} pricing, and offshore delivery model trusted by startups and enterprises alike.`,
    },
  ];
}
