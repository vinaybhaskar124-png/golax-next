import { notFound } from "next/navigation";
import InternationalLocationTemplate from "@/components/locations/InternationalLocationTemplate";
import { internationalLocations } from "@/data/internationalLocations";
import { getInternationalCountryParams } from "@/lib/static-params";
import { buildMetadata, DEFAULT_OG_IMAGE } from "@/lib/seo/metadata";
import { buildInternationalCountryKeywords } from "@/lib/seo/internationalKeywords";

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
    title: `Offshore Web & Software Development for ${data.country}`,
    description: data.description,
    keywords: buildInternationalCountryKeywords(data),
    canonicalUrl: `/locations/global/${country}`,
    ogImage: DEFAULT_OG_IMAGE,
  });
}

export default async function Page({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const data = internationalLocations.find((l) => l.slug === country);
  if (!data) notFound();
  return <InternationalLocationTemplate location={data} />;
}
