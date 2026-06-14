"use client";

import { useParams } from "next/navigation";
import { redirect } from "next/navigation";
import ServiceLocationTemplate from "@/components/services/ServiceLocationTemplate";
import { getServiceLocationData } from "@/data/serviceLocations";

export default function ServiceLocationPage() {
  const { service, location } = useParams<{ service: string; location: string }>();
  
  if (!service || !location) {
    return <Navigate href="/services" replace />;
  }
  
  const data = getServiceLocationData(service, location);
  
  if (!data) {
    return <Navigate href="/services" replace />;
  }
  
  return <ServiceLocationTemplate data={data} />;
}
