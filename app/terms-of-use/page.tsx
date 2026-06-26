import { buildPageMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout, ProseSection } from "@/components/legal/LegalPageLayout";

export const metadata = buildPageMetadata({
  title: "Terms of Use",
  description: "SuppCheckr terms of use placeholder.",
  path: "/terms-of-use",
});

export default function TermsOfUsePage() {
  return (
    <LegalPageLayout title="Terms of Use" requiresLegalReview>
      <ProseSection title="Draft placeholder">
        These terms are a structural placeholder and have not been reviewed by legal counsel.
      </ProseSection>
      <ProseSection title="Acceptable use (placeholder)">
        Users may browse informational content for personal, non-commercial use subject to
        final terms.
      </ProseSection>
    </LegalPageLayout>
  );
}
