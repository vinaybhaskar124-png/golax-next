import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/seo/metadata";
import {
  getServiceLocationParams,
  getServiceInternationalParams,
  getPatnaAreaParams,
  getIndiaCityParams,
  getInternationalCountryParams,
  getInternationalCityParams,
  blogSlugs,
  serviceHubSlugs,
} from "@/lib/static-params";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  const entry = (path: string, priority = 0.7, changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] = "monthly") => ({
    url: `${BASE_URL}${path}`,
    lastModified: today,
    changeFrequency,
    priority,
  });

  const urls: MetadataRoute.Sitemap = [
    entry("/", 1, "daily"),
    entry("/about", 0.9, "weekly"),
    entry("/services", 0.9, "weekly"),
    entry("/industries", 0.8),
    entry("/portfolio", 0.8),
    entry("/careers", 0.8, "weekly"),
    entry("/blog", 0.9, "weekly"),
    entry("/contact", 0.9, "weekly"),
    entry("/locations", 0.9, "weekly"),
    entry("/sitemap", 0.5),
    ...serviceHubSlugs.map((s) => entry(`/services/${s}`, 0.9, "weekly")),
    ...getPatnaAreaParams().map((p) => entry(`/locations/patna/${p.area}`, 0.8)),
    ...getIndiaCityParams().map((p) => entry(`/locations/${p.city}`, 0.8)),
    ...getServiceLocationParams().map((p) => entry(`/services/${p.service}/${p.location}`, 0.7)),
    ...getInternationalCountryParams().map((p) => entry(`/locations/global/${p.country}`, 0.85, "weekly")),
    ...getServiceInternationalParams().map((p) => entry(`/services/${p.service}/global/${p.country}`, 0.8)),
    ...getInternationalCityParams().map((p) => entry(`/locations/global/${p.country}/${p.city}`, 0.8)),
    ...blogSlugs.map((slug) => entry(`/blog/${slug}`, 0.8, "weekly")),
    ...["privacy-policy", "terms-of-service", "cookie-policy", "disclaimer", "refund-policy"].map((slug) =>
      entry(`/legal/${slug}`, 0.3)
    ),
  ];

  return urls;
}
