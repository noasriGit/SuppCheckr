import { buildPageMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout, ProseSection } from "@/components/legal/LegalPageLayout";

export const metadata = buildPageMetadata({
  title: "Accessibility Statement",
  description: "SuppCheckr accessibility commitment.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <LegalPageLayout title="Accessibility Statement">
      <ProseSection title="Commitment">
        SuppCheckr aims to meet WCAG 2.1 AA accessibility standards, including semantic
        HTML, keyboard navigation, and sufficient color contrast.
      </ProseSection>
      <ProseSection title="Feedback">
        Report accessibility barriers via the contact page.
      </ProseSection>
    </LegalPageLayout>
  );
}
