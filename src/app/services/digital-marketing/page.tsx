import DigitalMarketing from "@/views/services/DigitalMarketing";
import ServiceHubSchemas from "@/components/seo/ServiceHubSchemas";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Digital Marketing & SEO Company in India",
  description:
    "SEO, Google Ads, social media & content marketing for businesses across India — rank on Google, generate leads, and grow online. Golax India.",
  keywords:
    "SEO company India, digital marketing agency India, SEO services India, Google Ads India, local SEO India, social media marketing India, best SEO company India",
  canonicalUrl: "/services/digital-marketing",
});

export default function Page() {
  return (
    <>
      <ServiceHubSchemas slug="digital-marketing" />
      <DigitalMarketing />
    </>
  );
}
