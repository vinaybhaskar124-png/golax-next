import ITConsulting from "@/views/services/ITConsulting";
import ServiceHubSchemas from "@/components/seo/ServiceHubSchemas";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "IT Consulting & Cloud Services in India",
  description:
    "Cloud migration, DevOps, cybersecurity & IT strategy consulting for Indian businesses and offshore clients. AWS, Azure, GCP experts — Golax India.",
  keywords:
    "IT consulting company India, cloud migration India, AWS consulting India, DevOps services India, cybersecurity consulting India, managed IT services India",
  canonicalUrl: "/services/it-consulting",
});

export default function Page() {
  return (
    <>
      <ServiceHubSchemas slug="it-consulting" />
      <ITConsulting />
    </>
  );
}
