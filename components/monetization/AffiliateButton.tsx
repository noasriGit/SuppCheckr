"use client";

import { buildAmazonLink } from "@/lib/affiliate/buildAmazonLink";
import { monetizationConfig, isAffiliateEnabledForPath } from "@/config/monetization";
import { AffiliateDisclosure } from "@/components/trust/TrustModules";

export const RETAILER_CTA_LABEL = "Check current price at retailer";

function isValidRetailerUrl(url: string): boolean {
  if (!url || url.startsWith("#")) return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

const buttonClass =
  "inline-flex items-center rounded-lg bg-primary-muted px-4 py-2 text-sm font-medium text-heading transition-colors hover:bg-primary-hover";

export function AffiliateButton({
  url,
  pathname = "/",
  label = RETAILER_CTA_LABEL,
}: {
  url: string;
  pathname?: string;
  label?: string;
}) {
  const affiliateEnabled = isAffiliateEnabledForPath(pathname);

  if (affiliateEnabled) {
    const link = buildAmazonLink({ url });
    return (
      <div className="space-y-2">
        <a
          href={!link.isPlaceholder ? link.href : "#amazon-placeholder"}
          rel={link.rel}
          target={link.target}
          aria-disabled={link.isPlaceholder}
          className={`${buttonClass} aria-disabled:cursor-not-allowed aria-disabled:opacity-60`}
          onClick={(e) => {
            if (link.isPlaceholder) e.preventDefault();
          }}
        >
          {monetizationConfig.affiliate.ctaLabel}
          {link.isPlaceholder ? " (placeholder)" : ""}
        </a>
        <AffiliateDisclosure compact />
      </div>
    );
  }

  if (isValidRetailerUrl(url)) {
    return (
      <div className="space-y-2">
        <a href={url} rel="noopener noreferrer" target="_blank" className={buttonClass}>
          {label}
        </a>
        <AffiliateDisclosure compact />
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <span
        role="link"
        aria-disabled="true"
        className={`${buttonClass} cursor-not-allowed opacity-60`}
      >
        {label}
      </span>
      <p className="text-xs text-muted">Retailer URL not available for this product yet.</p>
      <AffiliateDisclosure compact />
    </div>
  );
}
