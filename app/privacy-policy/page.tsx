import { buildPageMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout, ProseSection } from "@/components/legal/LegalPageLayout";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: "SuppCheckr privacy policy placeholder.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" requiresLegalReview>
      <ProseSection title="Draft placeholder">
        This privacy policy is a structural placeholder and has not been reviewed by legal
        counsel. Do not rely on it until finalized.
      </ProseSection>
      <ProseSection title="Data collection (placeholder)">
        SuppCheckr may use privacy-friendly analytics and optional newsletter signup data.
        Details will be finalized before public launch.
      </ProseSection>
    </LegalPageLayout>
  );
}
