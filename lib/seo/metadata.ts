import type { Metadata } from "next";
import { siteConfig, shouldBlockAllCrawlers } from "@/config/site";
import { shouldNoindexStaticPath } from "@/lib/seo/indexing";
import { canonicalUrl } from "@/lib/seo/canonical";
import { resolveDocumentTitle } from "@/lib/seo/titles";
import { isPlaceholderProductImage } from "@/lib/product/productImageContext";

export function buildRobots(noindex: boolean): NonNullable<Metadata["robots"]> {
  if (shouldBlockAllCrawlers()) {
    return { index: false, follow: false };
  }
  if (noindex) {
    return { index: false, follow: true };
  }
  return { index: true, follow: true };
}

export function buildPageMetadata(options: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  image?: { src: string; alt?: string };
}): Metadata {
  const url = canonicalUrl(options.path);
  const title = resolveDocumentTitle(options.title);
  const noindex =
    options.noindex ??
    (shouldBlockAllCrawlers() || shouldNoindexStaticPath(options.path));
  const imageSrc = options.image?.src;
  const socialImage =
    imageSrc && !isPlaceholderProductImage(imageSrc)
      ? {
          url: canonicalUrl(imageSrc),
          alt: options.image?.alt,
        }
      : undefined;

  return {
    title: { absolute: title },
    description: options.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: options.description,
      url,
      siteName: siteConfig.name,
      type: "website",
      ...(socialImage ? { images: [socialImage] } : {}),
    },
    robots: buildRobots(noindex),
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
