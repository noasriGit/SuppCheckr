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
        affiliate relationships. Sponsors and advertisers do not direct product scores,
        rankings, testing-status notes, or editorial conclusions.
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
