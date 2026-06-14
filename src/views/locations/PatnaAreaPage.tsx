"use client";

import { useParams } from "next/navigation";
import { redirect } from "next/navigation";
import LocationPageTemplate from "@/components/locations/LocationPageTemplate";
import { patnaAreas } from "@/data/locations";

export default function PatnaAreaPage() {
  const { area } = useParams<{ area: string }>();
  
  const locationData = patnaAreas.find(loc => loc.slug === area);
  
  if (!locationData) {
    return <Navigate href="/locations" replace />;
  }
  
  return <LocationPageTemplate location={locationData} />;
}
