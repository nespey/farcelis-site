import type { Metadata } from "next";

import { seo, site } from "@/lib/site-data";

const defaultOgImage = `${site.domain}/images/hero-control-layer-preview.png`;

export function buildMetadata(entry: (typeof seo)[keyof typeof seo]): Metadata {
  return {
    metadataBase: new URL(site.domain),
    title: entry.title,
    description: entry.description,
    applicationName: "Farcelis | Control Layer System",
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
          url: defaultOgImage,
          width: 1400,
          height: 900,
          alt: `${site.shortName} Control Layer preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.description,
      images: [defaultOgImage],
    },
  };
}

