import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout, ProseSection } from "@/components/legal/LegalPageLayout";
import { siteConfig } from "@/config/site";

export const metadata = buildPageMetadata({
  title: "Editorial Policy",
  description: "SuppCheckr editorial standards, independence, and review process.",
  path: "/editorial-policy",
});

export default function EditorialPolicyPage() {
  return (
    <LegalPageLayout title="Editorial Policy" lastUpdated="2026-06-30">
      <ProseSection title="Purpose">
        SuppCheckr publishes evidence-aware supplement comparisons focused on label
        transparency, dose clarity, testing documentation, formula quality, and value. We
        explain how products compare on documented facts — not on hype, disease-treatment
        claims, or universal &ldquo;best&rdquo; rankings.
      </ProseSection>

      <ProseSection title="Editorial independence">
        Editorial scores, testing-status notes, comparisons, and written conclusions are
        independent of advertising, sponsorship, and affiliate relationships. No advertiser
        or affiliate partner directs product scores, rankings, or editorial conclusions.
        Products can be included in reviews even when affiliate purchase links are unavailable
        or disabled.
      </ProseSection>

      <ProseSection title="Affiliate links">
        SuppCheckr participates in the Amazon Associates Program. Some product pages may
        include Amazon affiliate links that can earn commissions from qualifying purchases;
        those links are clearly disclosed near the purchase button. Not every outbound
        retailer link is an affiliate link — many products link directly to brand or
        retailer websites. Affiliate relationships do not change editorial scoring or
        product inclusion decisions. See{" "}
        <Link href="/affiliate-disclosure" className="text-link hover:text-link-hover hover:underline">
          affiliate disclosure
        </Link>{" "}
        for details.
      </ProseSection>

      <ProseSection title="Source-first review process">
        Reviews start with primary label facts and credible sources — official regulatory
        references, certification databases, brand label pages, and documented retailer listings
        when needed. Marketing copy is treated cautiously and is not substituted for verified
        testing or label evidence. See{" "}
        <Link href="/source-standards" className="text-link hover:text-link-hover hover:underline">
          source standards
        </Link>{" "}
        for source tiers and testing evidence rules.
      </ProseSection>

      <ProseSection title="Conservative claims and testing language">
        Health-related statements should be evidence-aware, cited where appropriate, and
        conservative. SuppCheckr does not publish disease-treatment claims or exaggerated
        outcome promises. Third-party testing is labeled verified, claimed, or unknown based
        on public sources — brand claims alone do not equal verified testing. When
        information is incomplete or conflicting, we document the gap rather than filling
        it with assumptions.
      </ProseSection>

      <ProseSection title="Pricing and source access dates">
        Prices are manually checked from public retailer or brand listings and recorded with
        access dates. Prices are not live feeds and may change after publication. Material
        price updates are corrected when verified.
      </ProseSection>

      <ProseSection title="Updates and corrections">
        Published content includes last updated and last reviewed dates where applicable.
        Material corrections — label facts, pricing, testing status, citations, or claim
        language — are logged in content update history when appropriate. Users can report
        errors via{" "}
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="text-link hover:text-link-hover hover:underline"
        >
          {siteConfig.contactEmail}
        </a>{" "}
        or the{" "}
        <Link href="/corrections-policy" className="text-link hover:text-link-hover hover:underline">
          corrections policy
        </Link>
        .
      </ProseSection>

      <ProseSection title="Product image placeholders">
        Some product reviews display generic SuppCheckr placeholders instead of brand product
        photos. Placeholders are used to avoid misleading image use or unauthorized
        copyrighted product images. The review is based on Supplement Facts, cited sources,
        and documented label information — not the presence of a product photo. Real product
        images may be added later only with appropriate rights, permissions, or an
        API-compliant source.
      </ProseSection>

      <ProseSection title="What SuppCheckr is not">
        SuppCheckr is not a medical authority, doctor, dietitian, pharmacy, or FDA-approved
        database. We do not provide medical advice, individualized supplement prescriptions,
        or legal advice. For scoring methodology details, see{" "}
        <Link href="/methodology" className="text-link hover:text-link-hover hover:underline">
          review methodology
        </Link>
        .
      </ProseSection>
    </LegalPageLayout>
  );
}
