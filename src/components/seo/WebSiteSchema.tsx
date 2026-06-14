import JsonLd from "./JsonLd";
import { BASE_URL } from "@/lib/seo/metadata";

export default function WebSiteSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: "Golax India Pvt Ltd",
    url: BASE_URL,
    description:
      "India-based IT company — web development, software, mobile apps, digital marketing and IT consulting for clients across India and 12+ countries.",
    publisher: {
      "@type": "Organization",
      name: "Golax India Pvt Ltd",
      url: BASE_URL,
    },
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/sitemap?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return <JsonLd data={schemaData} />;
}
