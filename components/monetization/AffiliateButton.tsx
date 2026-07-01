"use client";

import { AffiliateLinkDisclosure } from "@/components/trust/TrustModules";
import {
  RETAILER_CTA_LABEL,
  type ProductAffiliateCta,
} from "@/lib/affiliate/productAffiliateCta";

export { RETAILER_CTA_LABEL };

const buttonClass =
  "inline-flex items-center rounded-lg bg-primary-muted px-4 py-2 text-sm font-medium text-heading transition-colors hover:bg-primary-hover";

export function AffiliateButton({ cta }: { cta: ProductAffiliateCta }) {
  if (cta.variant === "amazon") {
    return (
      <div className="space-y-2">
        {cta.showAffiliateDisclosure && <AffiliateLinkDisclosure />}
        <a
          href={cta.href}
          rel={cta.rel}
          target={cta.target}
          aria-disabled={cta.isPlaceholder}
          className={`${buttonClass} aria-disabled:cursor-not-allowed aria-disabled:opacity-60`}
          onClick={(e) => {
            if (cta.isPlaceholder) e.preventDefault();
          }}
        >
          {cta.label}
          {cta.isPlaceholder ? " (unavailable)" : ""}
        </a>
        {cta.isPlaceholder && cta.unavailableMessage && (
          <p className="text-xs text-muted">{cta.unavailableMessage}</p>
        )}
      </div>
    );
  }

  if (cta.variant === "retailer") {
    return (
      <div className="space-y-2">
        <a
          href={cta.href}
          rel="noopener noreferrer"
          target="_blank"
          className={buttonClass}
        >
          {cta.label}
        </a>
        {cta.showDirectRetailerNote && (
          <p className="text-xs text-muted">Direct retailer link — not an affiliate link.</p>
        )}
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
        {cta.label}
      </span>
      <p className="text-xs text-muted">Retailer URL not available for this product yet.</p>
    </div>
  );
}
