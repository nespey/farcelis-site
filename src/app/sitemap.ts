import type { MetadataRoute } from "next";

import { seo, site } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(seo).map((entry) => ({
    url: `${site.domain}${entry.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: entry.path === "/" ? 1 : 0.8,
  }));
}
