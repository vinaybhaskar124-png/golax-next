import JsonLd from "./JsonLd";
import { buildFAQPageSchema, type FaqItem } from "@/lib/seo/schema";

interface Props {
  faqs: FaqItem[];
}

export default function FAQPageSchema({ faqs }: Props) {
  if (!faqs.length) return null;
  return <JsonLd data={buildFAQPageSchema(faqs)} />;
}
