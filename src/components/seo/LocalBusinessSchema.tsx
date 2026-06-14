import JsonLd from "./JsonLd";

export default function LocalBusinessSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://golaxindiapvtltd.in",
    name: "Golax India Pvt Ltd",
    image: "https://golaxindiapvtltd.in/logo.png",
    description:
      "India-based IT company headquartered in Patna, Bihar — software development, web development, mobile apps, digital marketing, and IT consulting for clients across India and worldwide.",
    url: "https://golaxindiapvtltd.in",
    telephone: "+91-9470024607",
    email: "contact@golaxindia.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "1st Floor, Flat No-102, Sneh Highway Views, Bypass Rd, Near Jaganpura More, Nalanda Colony, Kankarbagh",
      addressLocality: "Patna",
      addressRegion: "Bihar",
      postalCode: "800020",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.5941,
      longitude: 85.1376,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    priceRange: "$$",
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "State", name: "Bihar" },
      { "@type": "City", name: "Patna" },
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Bangalore" },
    ],
    sameAs: [
      "https://www.facebook.com/golaxindiapvtltd",
      "https://www.linkedin.com/company/golaxindiapvtltd",
      "https://twitter.com/golaxindiapvtltd",
      "https://www.instagram.com/golaxindiapvtltd",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description: "Custom website development for businesses across India and globally",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Software Development",
            description: "Custom software development for businesses across India and globally",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description: "iOS and Android app development for India and international clients",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Marketing",
            description: "SEO and digital marketing services across India and globally",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IT Consulting",
            description: "IT consulting and cloud services for India and international clients",
          },
        },
      ],
    },
  };

  return <JsonLd data={schemaData} />;
}
