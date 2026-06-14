import Industries from "@/views/Industries";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Industries We Serve – IT Solutions India",
  description: "Golax India delivers tailored IT solutions for healthcare, education, retail, manufacturing, agriculture and finance — across India and globally.",
  canonicalUrl: "/industries",
});

export default function Page() {
  return <Industries />;
}
