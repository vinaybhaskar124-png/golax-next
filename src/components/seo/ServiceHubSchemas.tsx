import JsonLd from "./JsonLd";
import {
  buildBreadcrumbSchema,
  buildFAQPageSchema,
  buildServiceSchema,
} from "@/lib/seo/schema";
import {
  serviceFaqsBySlug,
  serviceMetaForSchema,
} from "@/data/serviceFaqs";

interface Props {
  slug: string;
}

export default function ServiceHubSchemas({ slug }: Props) {
  const meta = serviceMetaForSchema[slug];
  const faqs = serviceFaqsBySlug[slug];
  if (!meta) return null;

  return (
    <>
      <JsonLd data={buildServiceSchema({ ...meta, slug })} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: meta.name, path: `/services/${slug}` },
        ])}
      />
      {faqs?.length ? <JsonLd data={buildFAQPageSchema(faqs)} /> : null}
    </>
  );
}
