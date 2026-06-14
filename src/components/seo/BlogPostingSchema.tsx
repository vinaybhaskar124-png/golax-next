import JsonLd from "./JsonLd";
import { buildBlogPostingSchema } from "@/lib/seo/schema";

interface Props {
  slug: string;
  headline: string;
  description: string;
  datePublished: string;
  author?: string;
  category?: string;
}

export default function BlogPostingSchema(props: Props) {
  return <JsonLd data={buildBlogPostingSchema(props)} />;
}
