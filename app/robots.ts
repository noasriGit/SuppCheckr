import type { MetadataRoute } from "next";
import { shouldBlockAllCrawlers } from "@/config/site";

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
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://suppcheckr.com"}/sitemap.xml`,
  };
}
