import type { Metadata } from "next";
import { siteConfig, shouldBlockAllCrawlers } from "@/config/site";
import { shouldNoindexStaticPath } from "@/lib/seo/indexing";

export function buildPageMetadata(options: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  const url = `${siteConfig.url}${options.path}`;
  const noindex =
    options.noindex ??
    (shouldBlockAllCrawlers() || shouldNoindexStaticPath(options.path));

  return {
    title: options.title,
    description: options.description,
    alternates: { canonical: url },
    openGraph: {
      title: options.title,
      description: options.description,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function entityNoindex(entity: {
  noindex: boolean;
  isPlaceholder: boolean;
  status: string;
}): boolean {
  return (
    entity.noindex ||
    entity.isPlaceholder ||
    entity.status === "placeholder" ||
    entity.status === "draft" ||
    entity.status === "review_ready" ||
    entity.status === "archived" ||
    shouldBlockAllCrawlers()
  );
}
