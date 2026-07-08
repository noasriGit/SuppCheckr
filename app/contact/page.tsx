import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout, ProseSection } from "@/components/legal/LegalPageLayout";
import { siteConfig } from "@/config/site";

export const metadata = buildPageMetadata({
  title: "Contact",
  description: "Contact SuppCheckr for corrections, feedback, and general questions.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <LegalPageLayout title="Contact" lastUpdated="2026-07-07">
      <ProseSection title="Site operator (draft — legal review required)">
        <p>
          SuppCheckr is operated by NV Digital Consulting LLC, a Virginia limited liability
          company based in Prince William County, Virginia. For questions, contact{" "}
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="text-link hover:text-link-hover hover:underline"
          >
            {siteConfig.contactEmail}
          </a>
          .
        </p>
        <p className="mt-2">
          <strong>Attorney/human review note:</strong> Confirm whether a separate public
          mailing address, registered agent address, or state filing detail should be
          included before publication. No residential street address is listed on this page.
        </p>
      </ProseSection>

      <ProseSection title="Email">
        For corrections, editorial feedback, accessibility issues, partnerships, or general
        questions, email{" "}
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="text-link hover:text-link-hover hover:underline"
        >
          {siteConfig.contactEmail}
        </a>
        . SuppCheckr does not use a backend contact form.
      </ProseSection>

      <ProseSection title="Corrections">
        To report a label, pricing, testing, citation, or claim-language error, include the page
        URL, product or source in question, your proposed correction, and a supporting source
        link when available. See the{" "}
        <Link href="/corrections-policy" className="text-link hover:text-link-hover hover:underline">
          corrections policy
        </Link>{" "}
        for details.
      </ProseSection>

      <ProseSection title="What to expect">
        SuppCheckr provides informational supplement comparison content only — not medical or
        legal advice. Some product pages include Amazon affiliate links; live display ad scripts
        remain disabled during prelaunch. For methodology, editorial standards, and legal/disclosure
        pages, see the Trust links in the site footer.
      </ProseSection>
    </LegalPageLayout>
  );
}
