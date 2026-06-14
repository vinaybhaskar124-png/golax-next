import SoftwareDevelopment from "@/views/services/SoftwareDevelopment";
import ServiceHubSchemas from "@/components/seo/ServiceHubSchemas";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Software Development Company in India",
  description:
    "Custom software, ERP, CRM & SaaS development across India and for offshore clients. Enterprise solutions by Golax India — HQ Patna.",
  keywords:
    "software development company India, custom software India, ERP development India, CRM software India, SaaS development India, enterprise software India, outsource software development India",
  canonicalUrl: "/services/software-development",
});

export default function Page() {
  return (
    <>
      <ServiceHubSchemas slug="software-development" />
      <SoftwareDevelopment />
    </>
  );
}
