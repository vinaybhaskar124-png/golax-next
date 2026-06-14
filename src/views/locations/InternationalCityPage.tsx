"use client";

import { useParams } from "next/navigation";
import { redirect } from "next/navigation";
import InternationalCityTemplate from "@/components/locations/InternationalCityTemplate";
import { getInternationalCity } from "@/data/internationalLocations";

export default function InternationalCityPage() {
  const { country, city } = useParams<{ country: string; city: string }>();
  if (!country || !city) return <Navigate href="/locations" replace />;
  const data = getInternationalCity(country, city);
  if (!data) return <Navigate href={`/locations/global/${country}`} replace />;
  return <InternationalCityTemplate data={data} />;
}
