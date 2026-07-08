import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout, ProseSection } from "@/components/legal/LegalPageLayout";
import { siteConfig } from "@/config/site";

export const metadata = buildPageMetadata({
  title: "Corrections Policy",
  description: "How to report errors on SuppCheckr and what we review.",
  path: "/corrections-policy",
});

export default function CorrectionsPolicyPage() {
  return (
    <LegalPageLayout title="Corrections Policy" lastUpdated="2026-07-07">
      <ProseSection title="Reporting errors">
        If you believe SuppCheckr published an error in label facts, pricing, testing status,
        citations, claim language, or accessibility, email{" "}
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="text-link hover:text-link-hover hover:underline"
        >
          {siteConfig.contactEmail}
        </a>
        . We review good-faith reports with supporting sources when possible.
      </ProseSection>

      <ProseSection title="What to include in a correction request">
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>The page URL where you found the issue</li>
          <li>The product name or source in question</li>
          <li>A clear description of the proposed correction</li>
          <li>
            A supporting source link when available (official label page, certification
            listing, retailer listing with access date, or equivalent public documentation)
          </li>
        </ul>
      </ProseSection>

      <ProseSection title="What SuppCheckr reviews">
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>Label facts — ingredient names, forms, doses, serving sizes, and Supplement Facts details</li>
          <li>Pricing errors — incorrect amounts, outdated prices, or miscalculated value metrics</li>
          <li>Testing status — verified, claimed, or unknown classifications and supporting evidence</li>
          <li>Source and citation issues — broken links, wrong references, or missing attribution</li>
          <li>Claim language — overstated health claims or wording that exceeds our conservative standards</li>
          <li>Accessibility issues — barriers to using the site with assistive technology</li>
        </ul>
      </ProseSection>

      <ProseSection title="Corrections process">
        Verified corrections are applied to the relevant page and may be logged in content
        update history with a summary of what changed. We may follow up by email if clarification
        is needed. SuppCheckr may decline requests that rely on unsupported claims, marketing-only
        evidence, anecdotal testimonials, or sources we do not accept as primary evidence under
        our{" "}
        <Link href="/source-standards" className="text-link hover:text-link-hover hover:underline">
          source standards
        </Link>
        .
      </ProseSection>

      <ProseSection title="What we do not change through corrections alone">
        Editorial scores may be updated when underlying label or source facts change, but
        SuppCheckr does not accept paid requests to alter scores, rankings, or testing-status
        conclusions. Corrections are fact- and source-driven, not sponsorship-driven.
      </ProseSection>

      <ProseSection title="Related pages">
        General questions:{" "}
        <Link href="/contact" className="text-link hover:text-link-hover hover:underline">
          contact
        </Link>
        . Editorial standards:{" "}
        <Link href="/editorial-policy" className="text-link hover:text-link-hover hover:underline">
          editorial policy
        </Link>
        .
      </ProseSection>
    </LegalPageLayout>
  );
}
