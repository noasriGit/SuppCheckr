import { buildPageMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout, ProseSection } from "@/components/legal/LegalPageLayout";

export const metadata = buildPageMetadata({
  title: "Affiliate Disclosure",
  description:
    "How SuppCheckr uses Amazon affiliate links, how commissions work, and how editorial independence is maintained.",
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosurePage() {
  return (
    <LegalPageLayout title="Affiliate Disclosure" requiresLegalReview>
      <ProseSection title="Current status">
        <p>
          <strong>SuppCheckr participates in the Amazon Associates Program.</strong> Some
          product pages may include Amazon affiliate links that can earn commissions from
          qualifying purchases. Affiliate links are applied only to specific Amazon product
          URLs that we have intentionally mapped — not to every outbound link on the site.
        </p>
        <p className="mt-2">
          As an Amazon Associate I earn from qualifying purchases.
        </p>
        <p className="mt-2">
          Commissions generally do not change the price you pay at the retailer. Pricing,
          shipping, taxes, availability, and return policies are set by the retailer, not
          SuppCheckr. We do not guarantee that any purchase will be eligible for a commission.
        </p>
      </ProseSection>

      <ProseSection title="How affiliate links appear">
        <p>
          When a product page uses an Amazon affiliate link, a short disclosure appears near
          the purchase button (for example: &ldquo;Affiliate link: SuppCheckr may earn a
          commission if you buy through this link.&rdquo;). Many published products still
          link directly to brand or retailer websites — those are{" "}
          <strong>not</strong> affiliate links unless clearly labeled.
        </p>
        <p className="mt-2">
          SuppCheckr does not use Amazon product images, Amazon customer reviews, Amazon
          Q&amp;A, or live Amazon pricing as editorial evidence. Manual prices shown on
          SuppCheckr include a last-checked date; always confirm the current price on the
          retailer&apos;s site before purchasing.
        </p>
      </ProseSection>

      <ProseSection title="Editorial independence">
        <p>
          Affiliate relationships do not determine SuppCheckr scores, rankings,
          testing-status notes, product caveats, or editorial conclusions. Our analysis
          remains independent and based on label transparency, dosage clarity, testing
          status, additives, value, evidence alignment, and other publicly available product
          information described in our{" "}
          <a href="/methodology" className="text-link underline">
            Methodology
          </a>{" "}
          and{" "}
          <a href="/editorial-policy" className="text-link underline">
            Editorial Policy
          </a>
          .
        </p>
        <p className="mt-2">
          Amazon does not endorse SuppCheckr, and SuppCheckr does not represent that Amazon
          approves or verifies our reviews.
        </p>
      </ProseSection>

      <ProseSection title="Other retailers and future programs">
        <p>
          Direct links to brand websites, Vitacost, Target, and other non-Amazon retailers
          are ordinary outbound links unless explicitly labeled as affiliate links. SuppCheckr
          may participate in additional affiliate or advertising programs in the future; this
          page will be updated if that changes.
        </p>
      </ProseSection>

      <ProseSection title="Product information and pricing">
        <p>
          Retail prices, promotions, and stock status can change quickly. SuppCheckr may show
          manually checked prices with a last-checked date. Always confirm the current price
          and product details on the retailer&apos;s site before purchasing.
        </p>
      </ProseSection>
    </LegalPageLayout>
  );
}
