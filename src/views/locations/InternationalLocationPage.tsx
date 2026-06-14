"use client";

import { useParams } from "next/navigation";
import { redirect } from "next/navigation";
import InternationalLocationTemplate from "@/components/locations/InternationalLocationTemplate";
import { getInternationalLocation } from "@/data/internationalLocations";

export default function InternationalLocationPage() {
  const { country } = useParams<{ country: string }>();
  const data = country ? getInternationalLocation(country) : undefined;
  if (!data) return <Navigate href="/locations" replace />;
  return <InternationalLocationTemplate location={data} />;
}
