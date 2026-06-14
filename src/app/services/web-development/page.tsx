import WebDevelopment from "@/views/services/WebDevelopment";
import ServiceHubSchemas from "@/components/seo/ServiceHubSchemas";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Web Development Company in India",
  description:
    "Custom website & web app development across India and globally — React, Next.js, WordPress, e-commerce. HQ in Patna, serving Delhi, Mumbai, USA, UK & more.",
  keywords:
    "web development company India, website development company India, web design company India, e-commerce development India, React Next.js development India, affordable website India, best web developer India",
  canonicalUrl: "/services/web-development",
});

export default function Page() {
  return (
    <>
      <ServiceHubSchemas slug="web-development" />
      <WebDevelopment />
    </>
  );
}
