import MobileAppDevelopment from "@/views/services/MobileAppDevelopment";
import ServiceHubSchemas from "@/components/seo/ServiceHubSchemas";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Mobile App Development Company in India",
  description:
    "iOS, Android & cross-platform Flutter/React Native apps for businesses in India and globally. Golax India — affordable app development with App Store launch support.",
  keywords:
    "mobile app development company India, app developers India, Flutter app development India, React Native developers India, iOS Android app development India, hire app developers India",
  canonicalUrl: "/services/mobile-app-development",
});

export default function Page() {
  return (
    <>
      <ServiceHubSchemas slug="mobile-app-development" />
      <MobileAppDevelopment />
    </>
  );
}
