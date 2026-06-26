import { buildPageMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout, ProseSection } from "@/components/legal/LegalPageLayout";

export const metadata = buildPageMetadata({
  title: "Affiliate Disclosure",
  description:
    "How SuppCheckr may use affiliate links in the future and how editorial independence is maintained.",
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosurePage() {
  return (
    <LegalPageLayout title="Affiliate Disclosure" requiresLegalReview>
      <ProseSection title="Current status">
        <p>
          <strong>Affiliate links are currently disabled on SuppCheckr.</strong> Product
          links and purchase buttons do not earn commissions at this time, and no affiliate
          tracking tags are applied to outbound retailer links in the live site
          configuration.
        </p>
      </ProseSection>

      <ProseSection title="Future affiliate programs">
        <p>
          If SuppCheckr is accepted into affiliate programs in the future, some product
          links may become affiliate links. When enabled, SuppCheckr may earn a commission
          from qualifying purchases made through those links.
        </p>
        <p className="mt-2">
          Commissions, if enabled, generally do not change the price you pay at the
          retailer. Pricing, shipping, taxes, availability, and return policies are set by
          the retailer, not SuppCheckr.
        </p>
        <p className="mt-2">
          SuppCheckr has not been approved for Amazon Associates as of the date below. We
          do not use Amazon Associate tracking tags unless and until that program is
          approved and intentionally enabled in site configuration.
        </p>
      </ProseSection>

      <ProseSection title="Editorial independence">
        <p>
          Affiliate relationships, if active in the future, should not determine SuppCheckr
          scores, rankings, testing-status notes, product caveats, or editorial
          conclusions. Our analysis is intended to remain independent and based on label
          transparency, dosage clarity, testing status, additives, value, evidence
          alignment, and other publicly available product information described in our{" "}
          <a href="/methodology" className="text-link underline">
            Methodology
          </a>{" "}
          and{" "}
          <a href="/editorial-policy" className="text-link underline">
            Editorial Policy
          </a>
          .
        </p>
      </ProseSection>

      <ProseSection title="How disclosures will appear">
        <p>
          When affiliate links are enabled, SuppCheckr intends to disclose affiliate
          relationships near relevant links or pages, including through short on-page
          notices and this disclosure page. We may update this page when affiliate programs
          go live.
        </p>
      </ProseSection>

      <ProseSection title="Product information and pricing">
        <p>
          Retail prices, promotions, and stock status can change quickly. SuppCheckr may
          show manually checked prices with a last-checked date, or live pricing only if
          an approved retailer API is in use. Always confirm the current price and product
          details on the retailer&apos;s site before purchasing.
        </p>
      </ProseSection>
    </LegalPageLayout>
  );
}
