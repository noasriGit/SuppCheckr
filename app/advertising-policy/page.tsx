import { buildPageMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout, ProseSection } from "@/components/legal/LegalPageLayout";

export const metadata = buildPageMetadata({
  title: "Advertising Policy",
  description: "SuppCheckr advertising placement principles.",
  path: "/advertising-policy",
});

export default function AdvertisingPolicyPage() {
  return (
    <LegalPageLayout title="Advertising Policy" requiresLegalReview>
      <ProseSection title="Separation from editorial">
        Advertisements are visually separated from editorial content and navigation.
      </ProseSection>
      <ProseSection title="Placement rules">
        Ads are not placed adjacent to affiliate CTAs, forms, filters, or comparison controls
        in ways that may cause accidental clicks.
      </ProseSection>
      <ProseSection title="Sensitive pages">
        Ads may be excluded from legal, medical disclaimer, and contact pages.
      </ProseSection>
    </LegalPageLayout>
  );
}
