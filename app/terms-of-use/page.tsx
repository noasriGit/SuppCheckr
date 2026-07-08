import { buildPageMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout, ProseSection } from "@/components/legal/LegalPageLayout";
import { siteConfig } from "@/config/site";

export const metadata = buildPageMetadata({
  title: "Terms of Use",
  description:
    "Terms governing your use of SuppCheckr supplement comparison and informational content.",
  path: "/terms-of-use",
});

export default function TermsOfUsePage() {
  return (
    <LegalPageLayout title="Terms of Use" requiresLegalReview lastUpdated="2026-07-07">
      <ProseSection title="Site operator (draft — legal review required)">
        <p>
          SuppCheckr is a website operated by NV Digital Consulting LLC. For questions,
          contact{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="text-link underline">
            {siteConfig.contactEmail}
          </a>
          . Attorney/human reviewer should confirm whether a business mailing address,
          state of formation, or registered agent should also be listed before publication.
        </p>
      </ProseSection>

      <ProseSection title="Acceptance of terms">
        <p>
          By accessing or using {siteConfig.url} (the &ldquo;Site&rdquo;), you agree to
          these Terms of Use. If you do not agree, please do not use the Site. This page is
          a draft prepared for later legal review and may change before final publication.
        </p>
      </ProseSection>

      <ProseSection title="Informational purpose only">
        <p>
          SuppCheckr provides supplement comparison, label analysis, educational content,
          and editorial review based on publicly available product information. The Site is
          for general informational and educational purposes only.
        </p>
        <p className="mt-2">
          SuppCheckr does not provide medical, legal, nutrition, pharmacy, diagnosis,
          treatment, or emergency advice. Using the Site does not create a doctor-patient,
          pharmacist-patient, dietitian-client, attorney-client, or other professional
          relationship between you and SuppCheckr.
        </p>
        <p className="mt-2">
          For health-related questions, see our{" "}
          <a href="/medical-disclaimer" className="text-link underline">
            Medical Disclaimer
          </a>
          .
        </p>
      </ProseSection>

      <ProseSection title="Your responsibility for supplement decisions">
        <p>
          You are responsible for your own supplement, purchasing, and health-related
          decisions. Before starting, stopping, or combining supplements, consult a
          qualified healthcare professional—especially if you are pregnant, nursing, under
          18, taking medication, managing kidney or liver disease, allergies, or other
          medical conditions, or preparing for surgery.
        </p>
        <p className="mt-2">
          Product labels, ingredients, dosages, warnings, testing status, prices,
          availability, and marketing claims can change. You should verify current product
          labels, brand pages, and retailer information before purchasing or using any
          supplement.
        </p>
      </ProseSection>

      <ProseSection title="Affiliate links and advertising">
        <p>
          SuppCheckr participates in the Amazon Associates Program. As an Amazon Associate I
          earn from qualifying purchases. Some product pages include Amazon affiliate links
          that may earn commissions from qualifying purchases. SuppCheckr may also earn
          commissions from qualifying purchases through other affiliate links. Not every
          reviewed product has an affiliate link. Affiliate disclosures appear near marked
          purchase buttons and in our{" "}
          <a href="/affiliate-disclosure" className="text-link underline">
            Affiliate Disclosure
          </a>
          .
        </p>
        <p className="mt-2">
          Live third-party ad scripts are currently disabled. You may still see labeled
          advertisement placeholders on some pages. Details appear in our{" "}
          <a href="/advertising-policy" className="text-link underline">
            Advertising Policy
          </a>
          .
        </p>
        <p className="mt-2">
          Affiliate compensation and advertising, if enabled, do not change the purchase price
          you pay at a retailer. Retailers control availability, pricing, shipping, returns,
          and final product information.
        </p>
      </ProseSection>

      <ProseSection title="Intellectual property">
        <p>
          SuppCheckr owns or licenses the Site&apos;s design, text, editorial materials,
          scoring frameworks, comparison layouts, graphics, logos, and other content except
          where third-party materials are identified. You may browse and print reasonable
          portions for personal, non-commercial use, but you may not copy, scrape, republish,
          or create competing databases from SuppCheckr content without written permission.
        </p>
      </ProseSection>

      <ProseSection title="Acceptable use">
        <p>You agree not to:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>use the Site for unlawful, harmful, or fraudulent purposes;</li>
          <li>
            scrape, crawl, or harvest data from the Site at an abusive scale or in a way
            that interferes with normal operation;
          </li>
          <li>
            attempt to interfere with the Site&apos;s security, servers, or networks;
          </li>
          <li>
            copy, mirror, or republish SuppCheckr content for a competing product database
            or review service without permission;
          </li>
          <li>misrepresent your affiliation with SuppCheckr or impersonate others.</li>
        </ul>
      </ProseSection>

      <ProseSection title="Third-party links and retailers">
        <p>
          The Site may reference or link to third-party retailers, manufacturers, studies,
          or other websites. SuppCheckr does not control third-party sites and is not
          responsible for their content, policies, pricing, availability, or product
          quality. Your use of third-party sites is at your own risk and subject to their
          terms.
        </p>
      </ProseSection>

      <ProseSection title="Disclaimers">
        <p>
          THE SITE AND ALL CONTENT ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
          AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED,
          INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
          ACCURACY, OR NON-INFRINGEMENT. SuppCheckr does not warrant that the Site will be
          uninterrupted, error-free, or complete, or that scores, comparisons, or summaries
          will meet your needs.
        </p>
      </ProseSection>

      <ProseSection title="Limitation of liability">
        <p>
          TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, SUPPCHECKR AND ITS OWNERS,
          OPERATORS, CONTRIBUTORS, AND AFFILIATES WILL NOT BE LIABLE FOR ANY INDIRECT,
          INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF
          PROFITS, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING FROM YOUR USE OF OR
          RELIANCE ON THE SITE OR ANY CONTENT, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
          DAMAGES.
        </p>
        <p className="mt-2">
          In jurisdictions that do not allow certain limitations, our liability will be
          limited to the maximum extent permitted by law.
        </p>
      </ProseSection>

      <ProseSection title="Changes to these terms">
        <p>
          We may update these Terms of Use from time to time. When we do, we will revise
          the &ldquo;Last updated&rdquo; date at the top of this page. Your continued use
          of the Site after changes become effective constitutes acceptance of the updated
          terms, subject to applicable law.
        </p>
      </ProseSection>

      <ProseSection title="Governing law and venue — attorney review required">
        <p>
          The governing law, venue, and dispute-resolution terms for these Terms are
          intentionally marked for legal review before publication. Before these Terms are
          finalized, SuppCheckr/NV Digital Consulting LLC should confirm the applicable
          governing law, jurisdiction, venue, and whether arbitration, class-action waiver, or
          other dispute-resolution terms are appropriate.
        </p>
        <p className="mt-2">
          This section is a placeholder and is <strong>not</strong> final legal language.
        </p>
      </ProseSection>

      <ProseSection title="Contact">
        <p>
          For questions about these Terms of Use, contact us at{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="text-link underline">
            {siteConfig.contactEmail}
          </a>
          .
        </p>
      </ProseSection>
    </LegalPageLayout>
  );
}
