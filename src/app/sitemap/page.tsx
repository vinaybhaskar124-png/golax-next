import Sitemap from "@/views/Sitemap";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Sitemap",
  description: "Complete sitemap of Golax India Pvt Ltd website — all pages, services, locations and blog posts.",
  canonicalUrl: "/sitemap",
});

export default function Page() {
  return <Sitemap />;
}
