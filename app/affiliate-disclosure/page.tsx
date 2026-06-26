import { buildPageMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout, ProseSection } from "@/components/legal/LegalPageLayout";

export const metadata = buildPageMetadata({
  title: "Affiliate Disclosure",
  description: "How SuppCheckr uses affiliate links.",
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosurePage() {
  return (
    <LegalPageLayout title="Affiliate Disclosure" requiresLegalReview>
      <ProseSection title="Commissions">
        SuppCheckr may earn commissions when you purchase through affiliate links, including
        Amazon Associates links, at no extra cost to you. Draft placeholder.
      </ProseSection>
      <ProseSection title="Editorial independence">
        Affiliate relationships do not determine SuppCheckr scores, rankings, or editorial
        conclusions.
      </ProseSection>
      <ProseSection title="Pricing">
        We do not display live Amazon prices unless using an approved API. Manual prices
        include last checked dates.
      </ProseSection>
    </LegalPageLayout>
  );
}
