"use client";

import { useParams } from "next/navigation";
import { redirect } from "next/navigation";
import ServiceInternationalTemplate from "@/components/services/ServiceInternationalTemplate";
import { getServiceInternationalData } from "@/data/internationalLocations";

export default function ServiceInternationalPage() {
  const { service, country } = useParams<{ service: string; country: string }>();
  if (!service || !country) return <Navigate href="/services" replace />;
  const data = getServiceInternationalData(service, country);
  if (!data) return <Navigate href="/services" replace />;
  return <ServiceInternationalTemplate data={data} />;
}
