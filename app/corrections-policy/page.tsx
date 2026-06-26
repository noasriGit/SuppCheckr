import { buildPageMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout, ProseSection } from "@/components/legal/LegalPageLayout";

export const metadata = buildPageMetadata({
  title: "Corrections Policy",
  description: "How to report errors on SuppCheckr.",
  path: "/corrections-policy",
});

export default function CorrectionsPolicyPage() {
  return (
    <LegalPageLayout title="Corrections Policy">
      <ProseSection title="Reporting errors">
        If you believe we published an error in label facts, pricing, or editorial content,
        contact us via the contact page with sources when possible.
      </ProseSection>
      <ProseSection title="Corrections process">
        Verified corrections are logged in content update history with a summary of changes.
      </ProseSection>
    </LegalPageLayout>
  );
}
