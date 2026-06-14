import type { Metadata } from "next";
import Index from "@/views/Index";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import WebSiteSchema from "@/components/seo/WebSiteSchema";
import FAQPageSchema from "@/components/seo/FAQPageSchema";
import { homeFaqs } from "@/data/siteFaqs";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Leading IT Company in India | Web, Software & Apps",
  description:
    "Golax India — India-based IT company for web development, software, mobile apps, SEO & consulting. Serving Delhi, Mumbai, Bangalore, USA, UK, UAE & 12+ countries. HQ: Patna.",
  keywords:
    "IT company in India, web development company India, software company India, offshore development India, IT company Patna, digital marketing India",
  canonicalUrl: "/",
});

export default function HomePage() {
  return (
    <>
      <WebSiteSchema />
      <OrganizationSchema />
      <LocalBusinessSchema />
      <FAQPageSchema faqs={homeFaqs} />
      <Index />
    </>
  );
}
