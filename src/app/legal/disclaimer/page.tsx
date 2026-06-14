import Disclaimer from "@/views/legal/Disclaimer";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Disclaimer",
  description: "Disclaimer — Golax India Pvt Ltd, Patna, Bihar.",
  canonicalUrl: "/legal/disclaimer",
});

export default function Page() {
  return <Disclaimer />;
}
