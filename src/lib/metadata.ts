import type { Metadata } from "next";

import type { SeoEntry } from "@/lib/site-data";
import { site } from "@/lib/site-data";

const defaultOgImage = `${site.domain}/images/hero-control-layer-preview.png`;

export function buildMetadata(entry: SeoEntry): Metadata {
  const image = entry.image?.startsWith("http")
    ? entry.image
    : entry.image
      ? `${site.domain}${entry.image}`
      : defaultOgImage;

  return {
    metadataBase: new URL(site.domain),
    title: entry.title,
    description: entry.description,
    applicationName: "Farcelis AI Consulting",
    keywords: [
      "Farcelis",
      "Farcelis AI Consulting",
      "Farcelis Control Layer",
      "AI consulting",
      "operational systems",
      "workflow automation",
      "business process optimization",
    ],
    alternates: {
      canonical: entry.path,
    },
    openGraph: {
      type: "website",
      url: entry.path,
      title: entry.title,
      description: entry.description,
      siteName: site.shortName,
      images: [
        {
          url: image,
          width: 1400,
          height: 900,
          alt: `${site.shortName} AI operational systems preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.description,
      images: [image],
    },
  };
}
