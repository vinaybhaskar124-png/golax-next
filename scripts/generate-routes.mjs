#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = path.resolve(__dirname, "../src/app");

function write(rel, content) {
  const file = path.join(app, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
  console.log("Created", rel);
}

const staticPages = [
  {
    path: "about/page.tsx",
    view: "About",
    title: "About Us – IT Company in Patna",
    description:
      "Learn about Golax India Pvt Ltd — Patna's trusted IT company with 10+ years of experience in web development, software, mobile apps & digital marketing.",
    canonical: "/about",
  },
  {
    path: "services/page.tsx",
    view: "Services",
    title: "IT Services in Patna – Web, Software, Apps & SEO",
    description:
      "Explore Golax India's full range of IT services in Patna & Bihar — web development, custom software, mobile apps, digital marketing, SEO & IT consulting.",
    canonical: "/services",
  },
  {
    path: "industries/page.tsx",
    view: "Industries",
    title: "Industries We Serve – IT Solutions Patna",
    description:
      "Golax India delivers tailored IT solutions for healthcare, education, retail, manufacturing, agriculture & finance sectors across Patna and Bihar.",
    canonical: "/industries",
  },
  {
    path: "portfolio/page.tsx",
    view: "Portfolio",
    title: "Portfolio – IT Projects & Case Studies",
    description:
      "View Golax India's portfolio of successful IT projects in Patna — web development, mobile apps, custom software & digital marketing case studies.",
    canonical: "/portfolio",
  },
  {
    path: "careers/page.tsx",
    view: "Careers",
    title: "Careers – Join Golax India Patna",
    description:
      "Explore career opportunities at Golax India, Patna's leading IT company. Open roles in web development, mobile apps, software engineering & digital marketing.",
    canonical: "/careers",
  },
  {
    path: "blog/page.tsx",
    view: "Blog",
    title: "Blog – IT, Web Development & SEO Insights",
    description:
      "Read Golax India's blog for expert insights on web development, mobile apps, SEO, digital marketing & technology trends for businesses in Patna and India.",
    canonical: "/blog",
  },
  {
    path: "contact/page.tsx",
    view: "Contact",
    title: "Contact Us – Get a Free Quote",
    description:
      "Contact Golax India for a free IT consultation in Patna. Call +91 94700 24607 or fill our form for web development, software, mobile apps & digital marketing.",
    canonical: "/contact",
  },
  {
    path: "locations/page.tsx",
    view: "Locations",
    title: "Service Locations – Patna, Bihar & Global",
    description:
      "Golax India serves businesses across Patna, all Bihar cities, and globally — US, UK, Canada, Australia, UAE & more. Find IT services near you.",
    canonical: "/locations",
  },
  {
    path: "sitemap/page.tsx",
    view: "Sitemap",
    title: "Sitemap",
    description: "Complete sitemap of Golax India Pvt Ltd website — all pages, services, locations and blog posts.",
    canonical: "/sitemap",
  },
];

for (const p of staticPages) {
  write(
    p.path,
    `import ${p.view} from "@/views/${p.view}";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: ${JSON.stringify(p.title)},
  description: ${JSON.stringify(p.description)},
  canonicalUrl: ${JSON.stringify(p.canonical)},
});

export default function Page() {
  return <${p.view} />;
}
`
  );
}

const serviceHubs = [
  ["web-development", "Web Development Company in Patna", "Custom website & web app development in Patna, Bihar — React, Next.js, WordPress, e-commerce & more by Golax India."],
  ["software-development", "Software Development Company in Patna", "Custom software, ERP, CRM & SaaS development in Patna, Bihar. Enterprise solutions by Golax India."],
  ["mobile-app-development", "Mobile App Development Company in Patna", "iOS, Android & cross-platform mobile app development in Patna — Flutter, React Native by Golax India."],
  ["digital-marketing", "Digital Marketing & SEO Company in Patna", "SEO, Google Ads, social media & content marketing services in Patna, Bihar by Golax India."],
  ["it-consulting", "IT Consulting & Cloud Services in Patna", "IT consulting, cloud migration, DevOps & managed IT services in Patna, Bihar by Golax India."],
];

const hubViewMap = {
  "web-development": "WebDevelopment",
  "software-development": "SoftwareDevelopment",
  "mobile-app-development": "MobileAppDevelopment",
  "digital-marketing": "DigitalMarketing",
  "it-consulting": "ITConsulting",
};

for (const [slug, title, desc] of serviceHubs) {
  write(
    `services/${slug}/page.tsx`,
    `import ${hubViewMap[slug]} from "@/views/services/${hubViewMap[slug]}";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(desc)},
  canonicalUrl: "/services/${slug}",
  ogImage: "https://golaxindiapvtltd.in/og-${slug}.jpg",
});

export default function Page() {
  return <${hubViewMap[slug]} />;
}
`
  );
}

write(
  "services/[service]/[location]/page.tsx",
  `import { notFound } from "next/navigation";
import ServiceLocationTemplate from "@/components/services/ServiceLocationTemplate";
import { getServiceLocationData } from "@/data/serviceLocations";
import { getServiceLocationParams } from "@/lib/static-params";
import { buildMetadata } from "@/lib/seo/metadata";

export async function generateStaticParams() {
  return getServiceLocationParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; location: string }>;
}) {
  const { service, location } = await params;
  const data = getServiceLocationData(service, location);
  if (!data) return {};
  return buildMetadata({
    title: data.seoTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    canonicalUrl: \`/services/\${service}/\${location}\`,
    ogImage: \`https://golaxindiapvtltd.in/og-services/\${service}-\${location}.jpg\`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ service: string; location: string }>;
}) {
  const { service, location } = await params;
  const data = getServiceLocationData(service, location);
  if (!data) notFound();
  return <ServiceLocationTemplate data={data} />;
}
`
);

write(
  "services/[service]/global/[country]/page.tsx",
  `import { notFound } from "next/navigation";
import ServiceInternationalTemplate from "@/components/services/ServiceInternationalTemplate";
import { getServiceInternationalData } from "@/data/serviceLocations";
import { getServiceInternationalParams } from "@/lib/static-params";
import { buildMetadata } from "@/lib/seo/metadata";

export async function generateStaticParams() {
  return getServiceInternationalParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; country: string }>;
}) {
  const { service, country } = await params;
  const data = getServiceInternationalData(service, country);
  if (!data) return {};
  return buildMetadata({
    title: data.seoTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    canonicalUrl: \`/services/\${service}/global/\${country}\`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ service: string; country: string }>;
}) {
  const { service, country } = await params;
  const data = getServiceInternationalData(service, country);
  if (!data) notFound();
  return <ServiceInternationalTemplate data={data} />;
}
`
);

write(
  "locations/patna/[area]/page.tsx",
  `import { notFound } from "next/navigation";
import LocationPageTemplate from "@/components/locations/LocationPageTemplate";
import { patnaAreas } from "@/data/locations";
import { getPatnaAreaParams } from "@/lib/static-params";
import { buildMetadata } from "@/lib/seo/metadata";

export async function generateStaticParams() {
  return getPatnaAreaParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area } = await params;
  const data = patnaAreas.find((a) => a.slug === area);
  if (!data) return {};
  return buildMetadata({
    title: \`IT Company in \${data.city}, Patna\`,
    description: data.description,
    canonicalUrl: \`/locations/patna/\${area}\`,
    ogImage: \`https://golaxindiapvtltd.in/og-locations/patna-\${area}.jpg\`,
  });
}

export default async function Page({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params;
  const data = patnaAreas.find((a) => a.slug === area);
  if (!data) notFound();
  return <LocationPageTemplate location={data} />;
}
`
);

write(
  "locations/[city]/page.tsx",
  `import { notFound } from "next/navigation";
import LocationPageTemplate from "@/components/locations/LocationPageTemplate";
import { biharCities } from "@/data/locations";
import { getBiharCityParams } from "@/lib/static-params";
import { buildMetadata } from "@/lib/seo/metadata";

export async function generateStaticParams() {
  return getBiharCityParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const data = biharCities.find((c) => c.slug === city);
  if (!data) return {};
  return buildMetadata({
    title: \`IT Company in \${data.city}, Bihar\`,
    description: data.description,
    canonicalUrl: \`/locations/\${city}\`,
    ogImage: \`https://golaxindiapvtltd.in/og-locations/\${city}.jpg\`,
  });
}

export default async function Page({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const data = biharCities.find((c) => c.slug === city);
  if (!data) notFound();
  return <LocationPageTemplate location={data} />;
}
`
);

write(
  "locations/global/[country]/page.tsx",
  `import { notFound } from "next/navigation";
import InternationalLocationTemplate from "@/components/locations/InternationalLocationTemplate";
import { internationalLocations } from "@/data/internationalLocations";
import { getInternationalCountryParams } from "@/lib/static-params";
import { buildMetadata } from "@/lib/seo/metadata";

export async function generateStaticParams() {
  return getInternationalCountryParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const data = internationalLocations.find((l) => l.slug === country);
  if (!data) return {};
  return buildMetadata({
    title: \`Offshore Web & Software Development for \${data.country}\`,
    description: data.description,
    canonicalUrl: \`/locations/global/\${country}\`,
    ogImage: \`https://golaxindiapvtltd.in/og-locations/global-\${country}.jpg\`,
  });
}

export default async function Page({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const data = internationalLocations.find((l) => l.slug === country);
  if (!data) notFound();
  return <InternationalLocationTemplate location={data} />;
}
`
);

write(
  "locations/global/[country]/[city]/page.tsx",
  `import { notFound } from "next/navigation";
import InternationalCityTemplate from "@/components/locations/InternationalCityTemplate";
import { internationalLocations } from "@/data/internationalLocations";
import { getInternationalCityParams, slugifyCity } from "@/lib/static-params";
import { buildMetadata } from "@/lib/seo/metadata";

export async function generateStaticParams() {
  return getInternationalCityParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string; city: string }>;
}) {
  const { country, city } = await params;
  const countryData = internationalLocations.find((l) => l.slug === country);
  const cityName = countryData?.majorCities.find((c) => slugifyCity(c) === city);
  if (!countryData || !cityName) return {};
  return buildMetadata({
    title: \`Offshore IT Services in \${cityName}, \${countryData.country}\`,
    description: \`Hire Golax India for offshore web development, software & mobile apps serving \${cityName}, \${countryData.country}. Indian IT expertise, global delivery.\`,
    canonicalUrl: \`/locations/global/\${country}/\${city}\`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ country: string; city: string }>;
}) {
  const { country, city } = await params;
  const countryData = internationalLocations.find((l) => l.slug === country);
  if (!countryData) notFound();
  const cityName = countryData.majorCities.find((c) => slugifyCity(c) === city);
  if (!cityName) notFound();
  return <InternationalCityTemplate country={countryData} cityName={cityName} citySlug={city} />;
}
`
);

write(
  "blog/[slug]/page.tsx",
  `import { notFound, redirect } from "next/navigation";
import BlogPost from "@/views/BlogPost";
import { blogSlugs, legacyBlogRedirects } from "@/lib/static-params";
import { buildMetadata } from "@/lib/seo/metadata";

export async function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (legacyBlogRedirects[slug]) return {};
  if (!blogSlugs.includes(slug)) return {};
  return buildMetadata({
    title: slug.replace(/-/g, " "),
    description: "Expert IT insights from Golax India — web development, SEO, mobile apps & digital transformation.",
    canonicalUrl: \`/blog/\${slug}\`,
    ogImage: \`https://golaxindiapvtltd.in/og-blog/\${slug}.jpg\`,
    ogType: "article",
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (legacyBlogRedirects[slug]) {
    redirect(\`/blog/\${legacyBlogRedirects[slug]}\`);
  }
  if (!blogSlugs.includes(slug)) notFound();
  return <BlogPost slug={slug} />;
}
`
);

const legalPages = [
  ["privacy-policy", "PrivacyPolicy", "Privacy Policy"],
  ["terms-of-service", "TermsOfService", "Terms of Service"],
  ["cookie-policy", "CookiePolicy", "Cookie Policy"],
  ["disclaimer", "Disclaimer", "Disclaimer"],
  ["refund-policy", "RefundPolicy", "Refund Policy"],
];

for (const [slug, view, title] of legalPages) {
  write(
    `legal/${slug}/page.tsx`,
    `import ${view} from "@/views/legal/${view}";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(title + " — Golax India Pvt Ltd, Patna, Bihar.")},
  canonicalUrl: "/legal/${slug}",
});

export default function Page() {
  return <${view} />;
}
`
  );

  write(
    `${slug}/page.tsx`,
    `import { redirect } from "next/navigation";

export default function Page() {
  redirect("/legal/${slug}");
}
`
  );
}

write(
  "not-found.tsx",
  `import NotFound from "@/views/NotFound";

export default function NotFoundPage() {
  return <NotFound />;
}
`
);

console.log("All routes generated.");
