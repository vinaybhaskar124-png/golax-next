import { notFound } from "next/navigation";
import ServiceLocationTemplate from "@/components/services/ServiceLocationTemplate";
import { getServiceLocationData } from "@/data/serviceLocations";
import { getServiceLocationParams } from "@/lib/static-params";
import { buildMetadata, DEFAULT_OG_IMAGE } from "@/lib/seo/metadata";

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
  const locationString = data.location.isPatnaArea
    ? `${data.location.city}, Patna`
    : `${data.location.city}, ${data.location.state}`;
  return buildMetadata({
    title: `${data.service.title} Company in ${locationString}`,
    description: `Need more leads from ${locationString}? Golax India provides ${data.service.title.toLowerCase()} for businesses that want faster growth, better visibility, and more enquiries.`,
    canonicalUrl: `/services/${service}/${location}`,
    ogImage: DEFAULT_OG_IMAGE,
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
