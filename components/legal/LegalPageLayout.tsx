import { LegalReviewBanner } from "@/components/trust/TrustModules";
import { PageContainer } from "@/components/layout/SiteChrome";
import { EditorialDates } from "@/components/trust/TrustModules";

export function LegalPageLayout({
  title,
  requiresLegalReview = false,
  lastUpdated = "2026-06-26",
  children,
}: {
  title: string;
  requiresLegalReview?: boolean;
  lastUpdated?: string;
  children: React.ReactNode;
}) {
  return (
    <PageContainer>
      <article className="prose max-w-3xl">
        <h1>{title}</h1>
        {requiresLegalReview && <LegalReviewBanner />}
        <EditorialDates lastUpdated={lastUpdated} lastReviewed={lastUpdated} />
        <div className="not-prose mt-6 space-y-4 text-foreground">{children}</div>
      </article>
    </PageContainer>
  );
}

export function ProseSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-heading">{title}</h2>
      <div className="mt-2 text-sm leading-relaxed text-foreground">{children}</div>
    </section>
  );
}
