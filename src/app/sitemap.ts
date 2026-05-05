import type { MetadataRoute } from "next";

import { blogPosts, industryFocus, insightArticles, products, seo, site, teamMembers } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = Object.values(seo).map((entry) => ({
    url: `${site.domain}${entry.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: entry.path === "/" ? 1 : 0.8,
  }));

  const dynamicRoutes = [
    ...products
      .filter((product) => product.slug !== "control-layer")
      .map((product) => `/products/${product.slug}`),
    ...industryFocus.map((industry) => `/industries/${industry.slug}`),
    ...teamMembers.map((member) => `/team/${member.slug}`),
    ...insightArticles
      .filter((article) => article.slug !== "funnel-broken-foundation")
      .map((article) => `/insights/${article.slug}`),
    ...blogPosts.map((post) => `/insights/blog/${post.slug}`),
  ].map((path) => ({
    url: `${site.domain}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.72,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
