import Careers from "@/views/Careers";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Careers – Join Golax India",
  description: "Career opportunities at Golax India — web development, mobile apps, software engineering and digital marketing roles. India-based team, global clients.",
  canonicalUrl: "/careers",
});

export default function Page() {
  return <Careers />;
}
