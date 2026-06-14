import JsonLd from "./JsonLd";

export default function OrganizationSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://golaxindiapvtltd.in/#organization",
    name: "Golax India Pvt Ltd",
    url: "https://golaxindiapvtltd.in",
    logo: "https://golaxindiapvtltd.in/logo.png",
    description:
      "India-based IT company offering web development, software development, mobile apps, digital marketing and IT consulting — serving clients across India and 12+ countries worldwide.",
    foundingLocation: {
      "@type": "Place",
      name: "Patna, Bihar, India",
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Singapore" },
      { "@type": "Country", name: "Germany" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9470024607",
      contactType: "customer service",
      email: "contact@golaxindia.com",
      availableLanguage: ["English", "Hindi"],
      areaServed: ["IN", "US", "GB", "CA", "AU", "AE"],
    },
    sameAs: [
      "https://www.facebook.com/golaxindiapvtltd",
      "https://www.linkedin.com/company/golaxindiapvtltd",
      "https://twitter.com/golaxindiapvtltd",
      "https://www.instagram.com/golaxindiapvtltd",
    ],
  };

  return <JsonLd data={schemaData} />;
}
