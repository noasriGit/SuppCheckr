import type { MetadataRoute } from "next";
import { shouldBlockAllCrawlers } from "@/config/site";
import { CANONICAL_ORIGIN } from "@/lib/seo/canonical";

export default function robots(): MetadataRoute.Robots {
  if (shouldBlockAllCrawlers()) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${CANONICAL_ORIGIN}/sitemap.xml`,
  };
}
