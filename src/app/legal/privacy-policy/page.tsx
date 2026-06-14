import PrivacyPolicy from "@/views/legal/PrivacyPolicy";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy — Golax India Pvt Ltd, Patna, Bihar.",
  canonicalUrl: "/legal/privacy-policy",
});

export default function Page() {
  return <PrivacyPolicy />;
}
