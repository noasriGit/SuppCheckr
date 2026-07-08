import { buildPageMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout, ProseSection } from "@/components/legal/LegalPageLayout";
import { siteConfig } from "@/config/site";

export const metadata = buildPageMetadata({
  title: "Accessibility Statement",
  description: "SuppCheckr accessibility commitment and feedback.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <LegalPageLayout title="Accessibility Statement" lastUpdated="2026-07-07">
      <ProseSection title="Commitment">
        SuppCheckr aims to make the site accessible and uses WCAG 2.1 AA as a reference
        point where practical. We work toward semantic HTML, keyboard navigation, sufficient
        color contrast, and descriptive text for non-text content where applicable.
      </ProseSection>

      <ProseSection title="Feedback">
        Report accessibility barriers by emailing{" "}
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="text-link hover:text-link-hover hover:underline"
        >
          {siteConfig.contactEmail}
        </a>{" "}
        with the page URL and a description of the issue. SuppCheckr will review
        accessibility feedback and work on reasonable improvements.
      </ProseSection>

      <ProseSection title="Attorney/human review note">
        <p>
          Confirm whether jurisdiction-specific accessibility language, a target standard, or
          a response timeframe should be added before publication.
        </p>
      </ProseSection>
    </LegalPageLayout>
  );
}
