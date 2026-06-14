import TermsOfService from "@/views/legal/TermsOfService";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "Terms of Service — Golax India Pvt Ltd, Patna, Bihar.",
  canonicalUrl: "/legal/terms-of-service",
});

export default function Page() {
  return <TermsOfService />;
}
