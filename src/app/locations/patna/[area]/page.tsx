import { notFound } from "next/navigation";
import LocationPageTemplate from "@/components/locations/LocationPageTemplate";
import { patnaAreas } from "@/data/locations";
import { getPatnaAreaParams } from "@/lib/static-params";
import { buildMetadata, DEFAULT_OG_IMAGE } from "@/lib/seo/metadata";

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
    title: `IT Company in ${data.city}, Patna`,
    description: data.description,
    canonicalUrl: `/locations/patna/${area}`,
    ogImage: DEFAULT_OG_IMAGE,
  });
}

export default async function Page({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params;
  const data = patnaAreas.find((a) => a.slug === area);
  if (!data) notFound();
  return <LocationPageTemplate location={data} />;
}
