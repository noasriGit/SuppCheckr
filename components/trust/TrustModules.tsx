import { shouldShowDemoBanners, shouldShowLegalReviewBanners } from "@/config/site";

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
        especially if pregnant, nursing, under 18, taking medication, or managing a
        medical condition.
      </p>
    </aside>
  );
}

export function AffiliateDisclosure({ compact = false }: { compact?: boolean }) {
  const message = compact
    ? "Affiliate links are disabled during prelaunch. Future affiliate links will be clearly disclosed."
    : "Affiliate links are currently disabled during prelaunch. Future affiliate links, if enabled, will be disclosed clearly.";

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
