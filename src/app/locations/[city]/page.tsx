import { notFound } from "next/navigation";
import LocationPageTemplate from "@/components/locations/LocationPageTemplate";
import { getCityBySlug } from "@/data/allCities";
import { getIndiaCityParams } from "@/lib/static-params";
import { buildMetadata, DEFAULT_OG_IMAGE } from "@/lib/seo/metadata";

export async function generateStaticParams() {
  return getIndiaCityParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const data = getCityBySlug(city);
  if (!data) return {};
  return buildMetadata({
    title: `IT Company in ${data.city}, ${data.state}`,
    description: data.description,
    keywords: `IT company in ${data.city}, web development company in ${data.city}, software company in ${data.city}, digital marketing ${data.city}, mobile app development ${data.city}`,
    canonicalUrl: `/locations/${city}`,
    ogImage: DEFAULT_OG_IMAGE,
  });
}

export default async function Page({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const data = getCityBySlug(city);
  if (!data) notFound();
  return <LocationPageTemplate location={data} />;
}
