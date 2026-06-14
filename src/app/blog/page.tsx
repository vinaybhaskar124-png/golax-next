import Blog from "@/views/Blog";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Blog – IT, Web Development & SEO Insights",
  description: "Expert insights on web development, mobile apps, SEO, digital marketing and technology trends for businesses across India and globally.",
  canonicalUrl: "/blog",
});

export default function Page() {
  return <Blog />;
}
