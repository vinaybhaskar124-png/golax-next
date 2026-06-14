import CookiePolicy from "@/views/legal/CookiePolicy";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Cookie Policy",
  description: "Cookie Policy — Golax India Pvt Ltd, Patna, Bihar.",
  canonicalUrl: "/legal/cookie-policy",
});

export default function Page() {
  return <CookiePolicy />;
}
