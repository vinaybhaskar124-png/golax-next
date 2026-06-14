"use client";

import { useParams } from "next/navigation";
import { redirect } from "next/navigation";
import LocationPageTemplate from "@/components/locations/LocationPageTemplate";
import { biharCities } from "@/data/locations";

export default function BiharCityPage() {
  const { city } = useParams<{ city: string }>();
  
  const locationData = biharCities.find(loc => loc.slug === city);
  
  if (!locationData) {
    return <Navigate href="/locations" replace />;
  }
  
  return <LocationPageTemplate location={locationData} />;
}
