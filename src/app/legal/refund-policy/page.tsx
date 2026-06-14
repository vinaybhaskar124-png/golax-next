import RefundPolicy from "@/views/legal/RefundPolicy";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Refund Policy",
  description: "Refund Policy — Golax India Pvt Ltd, Patna, Bihar.",
  canonicalUrl: "/legal/refund-policy",
});

export default function Page() {
  return <RefundPolicy />;
}
