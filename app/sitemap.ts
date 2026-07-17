import type { MetadataRoute } from "next";
import { siteConfig, shouldBlockAllCrawlers } from "@/config/site";
import { getSitemapRecords } from "@/lib/seo/htmlSitemap";

export default function sitemap(): MetadataRoute.Sitemap {
  if (shouldBlockAllCrawlers()) {
    return [];
  }

  const base = siteConfig.url;

  return getSitemapRecords().map((record) => ({
    url: `${base}${record.url}`,
    lastModified: record.updatedAt ? new Date(record.updatedAt) : new Date(),
    changeFrequency: record.url === "/" ? ("weekly" as const) : ("weekly" as const),
    priority: record.url === "/" ? 1 : record.contentType === "page" ? 0.7 : undefined,
  }));
}
