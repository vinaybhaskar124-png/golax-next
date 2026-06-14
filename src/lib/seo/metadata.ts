import type { Metadata } from "next";

const SITE_NAME = "Golax India Pvt Ltd";
export const BASE_URL = "https://golaxindiapvtltd.in";
export const DEFAULT_OG_IMAGE = `${BASE_URL}/opengraph-image`;

export interface PageSeoInput {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

export function buildMetadata({
  title,
  description,
  keywords = "IT company in India, web development company India, software development India, offshore IT company India, digital marketing agency India, mobile app development India",
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noindex = false,
}: PageSeoInput): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;

  return {
    metadataBase: new URL(BASE_URL),
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: SITE_NAME }],
    ...(googleVerification
      ? { verification: { google: googleVerification } }
      : {}),
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
    openGraph: {
      title: fullTitle,
      description,
      type: ogType as "website" | "article",
      siteName: SITE_NAME,
      locale: "en_IN",
      images: [{ url: ogImage, width: 1200, height: 630, alt: SITE_NAME }],
      ...(canonicalUrl ? { url: `${BASE_URL}${canonicalUrl}` } : {}),
    },
    twitter: {
      card: "summary_large_image",
      site: "@golaxindia",
      creator: "@golaxindia",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: canonicalUrl
      ? { canonical: `${BASE_URL}${canonicalUrl}` }
      : undefined,
  };
}

export const defaultMetadata = buildMetadata({
  title: "Leading IT Company in India | Web, Software & Apps",
  description:
    "Golax India Pvt Ltd — India-based IT company offering web development, software, mobile apps, SEO & IT consulting across 25+ cities in India and 12+ countries. HQ in Patna, Bihar.",
  canonicalUrl: "/",
});
