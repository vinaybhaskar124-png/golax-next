import { biharCities, type LocationData } from "./locations";
import { indiaCities } from "./indiaCities";

export function getCityBySlug(slug: string): LocationData | undefined {
  return indiaCities.find((c) => c.slug === slug) ?? biharCities.find((c) => c.slug === slug);
}

export function getAllDomesticCities(): LocationData[] {
  const biharSlugs = new Set(biharCities.map((c) => c.slug));
  const indiaOnly = indiaCities.filter((c) => !biharSlugs.has(c.slug));
  return [...indiaOnly, ...biharCities];
}
