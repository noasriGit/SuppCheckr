import { shouldShowDemoBanners, shouldShowLegalReviewBanners } from "@/config/site";
import { isAffiliateFrameworkActive } from "@/config/monetization";

export function PlaceholderBanner() {
  if (!shouldShowDemoBanners()) return null;
  return (
    <div
      role="status"
      className="mb-6 rounded-lg border border-warning-border bg-warning-bg px-4 py-3 text-sm text-warning-text"
    >
      <strong>Demo content:</strong> This page uses placeholder data for infrastructure
      testing. It is not a real supplement review, ranking, or recommendation.
    </div>
  );
}

export function LegalReviewBanner() {
  if (!shouldShowLegalReviewBanners()) return null;
  return (
    <div
      role="status"
      className="mb-6 rounded-lg border border-danger-border bg-danger-bg px-4 py-3 text-sm text-danger-text"
    >
      <strong>Draft placeholder:</strong> This page has not been reviewed by legal
      counsel and should not be treated as final legal documentation.
    </div>
  );
}

export function MedicalDisclaimer() {
  return (
    <aside className="my-6 rounded-lg border border-border bg-surface p-4 text-sm text-foreground">
      <p className="font-medium text-heading">Medical disclaimer</p>
      <p className="mt-2">
        SuppCheckr provides informational content only and does not provide medical
        advice. Consult a qualified healthcare professional before starting supplements,
        especially if pregnant, nursing, under 18, taking medication, managing kidney or
        liver disease, allergies, or other medical conditions.
      </p>
    </aside>
  );
}

export function AffiliateLinkDisclosure() {
  return (
    <p className="text-xs text-foreground">
      <strong className="text-heading">Affiliate link</strong> — SuppCheckr may earn a commission
      if you buy through this link.
    </p>
  );
}

export function AffiliateDisclosure({ compact = false }: { compact?: boolean }) {
  const frameworkActive = isAffiliateFrameworkActive();

  const message = frameworkActive
    ? compact
      ? "SuppCheckr participates in the Amazon Associates Program. Marked affiliate links may earn commissions. Affiliate relationships do not affect scores or rankings."
      : "SuppCheckr participates in the Amazon Associates Program and may earn commissions from qualifying purchases made through affiliate links on this site. Not every outbound retailer link is an affiliate link. Affiliate relationships do not affect SuppCheckr scores, rankings, testing-status notes, or editorial conclusions."
    : compact
      ? "Affiliate links are disabled. Future affiliate links will be clearly disclosed."
      : "Affiliate links are currently disabled. If enabled in the future, affiliate relationships will be disclosed clearly and will not affect editorial scores or rankings.";

  return (
    <p className={`text-foreground ${compact ? "text-xs" : "text-sm"}`}>
      <strong className="text-heading">Affiliate disclosure:</strong> {message}{" "}
      <a href="/affiliate-disclosure" className="text-link underline hover:text-link-hover">
        Learn more
      </a>
    </p>
  );
}

export function EditorialDates({
  lastUpdated,
  lastReviewed,
}: {
  lastUpdated: string;
  lastReviewed: string;
}) {
  return (
    <p className="text-xs text-muted">
      Last updated: {lastUpdated} · Last reviewed: {lastReviewed}
    </p>
  );
}
