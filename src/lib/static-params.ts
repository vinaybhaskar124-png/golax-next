import { services, getAllLocations } from "@/data/serviceLocations";
import { patnaAreas } from "@/data/locations";
import { getAllDomesticCities } from "@/data/allCities";
import { internationalLocations } from "@/data/internationalLocations";

export function slugifyCity(city: string) {
  return city
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getServiceLocationParams() {
  const locations = getAllLocations();
  const params: { service: string; location: string }[] = [];
  for (const service of services) {
    for (const loc of locations) {
      params.push({ service: service.slug, location: loc.slug });
    }
  }
  return params;
}

export function getServiceInternationalParams() {
  const params: { service: string; country: string }[] = [];
  for (const service of services) {
    for (const country of internationalLocations) {
      params.push({ service: service.slug, country: country.slug });
    }
  }
  return params;
}

export function getPatnaAreaParams() {
  return patnaAreas.map((area) => ({ area: area.slug }));
}

export function getBiharCityParams() {
  return getAllDomesticCities().map((city) => ({ city: city.slug }));
}

export function getIndiaCityParams() {
  return getAllDomesticCities().map((city) => ({ city: city.slug }));
}

export function getInternationalCountryParams() {
  return internationalLocations.map((loc) => ({ country: loc.slug }));
}

export function getInternationalCityParams() {
  const params: { country: string; city: string }[] = [];
  for (const loc of internationalLocations) {
    for (const city of loc.majorCities) {
      params.push({ country: loc.slug, city: slugifyCity(city) });
    }
  }
  return params;
}

/** Blog slugs extracted from BlogPost view data */
import { seoBlogSlugs } from "@/data/seoBlogPosts";

export const blogSlugs = [
  ...seoBlogSlugs,
  "digital-transformation-patna-businesses",
  "seo-tips-local-businesses-patna",
  "mobile-app-development-trends-2026",
  "choosing-right-technology-stack",
  "ecommerce-website-essentials",
  "cloud-migration-guide-smes",
  "social-media-marketing-bihar",
  "website-security-best-practices",
  "react-vs-angular-2026",
  "ai-transforming-business-operations",
  "building-scalable-web-applications",
  "government-schemes-digital-india",
  "ux-design-principles-conversion",
];

export const legacyBlogRedirects: Record<string, string> = {
  "digital-transformation-guide-patna": "digital-transformation-patna-businesses",
};

export const serviceHubSlugs = [
  "web-development",
  "software-development",
  "mobile-app-development",
  "digital-marketing",
  "it-consulting",
];
