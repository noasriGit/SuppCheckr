import { buildPageMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout, ProseSection } from "@/components/legal/LegalPageLayout";

export const metadata = buildPageMetadata({
  title: "Editorial Policy",
  description: "SuppCheckr editorial standards and independence.",
  path: "/editorial-policy",
});

export default function EditorialPolicyPage() {
  return (
    <LegalPageLayout title="Editorial Policy">
      <ProseSection title="Independence">
        SuppCheckr editorial scores and comparisons are independent of advertising and
        affiliate relationships. Draft placeholder — expand in Phase 2.
      </ProseSection>
      <ProseSection title="Updates">
        Content includes last updated and last reviewed dates. Material changes are logged.
      </ProseSection>
      <ProseSection title="Conservative claims">
        Health-related statements should be evidence-aware, cited, and conservative.
      </ProseSection>
    </LegalPageLayout>
  );
}
