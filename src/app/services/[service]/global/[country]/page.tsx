import { notFound } from "next/navigation";
import ServiceInternationalTemplate from "@/components/services/ServiceInternationalTemplate";
import { getServiceInternationalData } from "@/data/internationalLocations";
import { getServiceInternationalParams } from "@/lib/static-params";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildServiceInternationalKeywords } from "@/lib/seo/internationalKeywords";

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
    title: `${data.service.title} for ${data.location.country} | Offshore from India`,
    description: `Offshore ${data.service.title.toLowerCase()} for ${data.location.country} businesses. Hire Golax India — senior engineers, transparent ${data.location.currency} pricing, ${data.location.timezoneOverlap} timezone overlap.`,
    keywords: buildServiceInternationalKeywords(service, data.location),
    canonicalUrl: `/services/${service}/global/${country}`,
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
