import type { MetadataRoute } from "next";
import { siteConfig, shouldBlockAllCrawlers } from "@/config/site";

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
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
