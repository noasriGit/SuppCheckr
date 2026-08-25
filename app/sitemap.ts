import type { MetadataRoute } from "next";
import { shouldBlockAllCrawlers } from "@/config/site";
import { getSitemapRecords } from "@/lib/seo/htmlSitemap";
import { canonicalUrl } from "@/lib/seo/canonical";

export default function sitemap(): MetadataRoute.Sitemap {
  if (shouldBlockAllCrawlers()) {
    return [];
  }

  return getSitemapRecords().map((record) => ({
    url: canonicalUrl(record.url),
    ...(record.updatedAt ? { lastModified: new Date(record.updatedAt) } : {}),
    changeFrequency: "weekly" as const,
    priority: record.url === "/" ? 1 : record.contentType === "page" ? 0.7 : undefined,
  }));
}
