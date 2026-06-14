import Locations from "@/views/Locations";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Service Locations – India, Bihar & Global",
  description: "Golax India serves Delhi, Mumbai, Bangalore, 25+ Indian cities, all Bihar districts, and globally — US, UK, Canada, Australia, UAE & more.",
  canonicalUrl: "/locations",
});

export default function Page() {
  return <Locations />;
}
