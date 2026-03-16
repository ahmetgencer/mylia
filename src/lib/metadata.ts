import { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  ogImage,
}: PageMetadataOptions): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;
  const fullTitle =
    path === "" ? title : `${title} | ${SITE_CONFIG.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "veteriner",
      "menemen veteriner",
      "ulukent veteriner",
      "egekent veteriner",
      "kedi veteriner",
      "köpek veteriner",
      "İzmir veteriner",
      ...keywords,
    ],
    authors: [{ name: SITE_CONFIG.name }],
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type: "website",
      ...(ogImage && {
        images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}
