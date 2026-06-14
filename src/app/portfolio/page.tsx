import Portfolio from "@/views/Portfolio";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Portfolio – IT Projects Across India",
  description: "Golax India portfolio — web development, mobile apps, custom software and digital marketing projects for clients across India and internationally.",
  canonicalUrl: "/portfolio",
});

export default function Page() {
  return <Portfolio />;
}
