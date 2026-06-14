import About from "@/views/About";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "About Us – India-Based IT Company",
  description: "Learn about Golax India — founded 2014 in Patna, now serving 25+ Indian cities and 12+ countries with web development, software, mobile apps & digital marketing.",
  canonicalUrl: "/about",
});

export default function Page() {
  return <About />;
}
