import Services from "@/views/Services";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "IT Services in India – Web, Software, Apps & SEO",
  description: "Golax India's full range of IT services — web development, software, mobile apps, digital marketing, SEO & consulting across India and 12+ countries.",
  keywords:
    "IT services India, web development India, software development India, mobile app development India, digital marketing India, SEO services India, IT company services India",
  canonicalUrl: "/services",
});

export default function Page() {
  return <Services />;
}
