import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout, ProseSection } from "@/components/legal/LegalPageLayout";

export const metadata = buildPageMetadata({
  title: "Source Standards",
  description: "How SuppCheckr evaluates and tiers sources for supplement reviews.",
  path: "/source-standards",
});

export default function SourceStandardsPage() {
  return (
    <LegalPageLayout title="Source Standards" lastUpdated="2026-07-07">
      <ProseSection title="Overview">
        SuppCheckr builds reviews from publicly available label facts and credible sources.
        When a source gap exists, we document it rather than hiding it. Amazon customer
        reviews, retailer Q&amp;A, influencer posts, forums, and unsourced claims are not
        used as primary editorial evidence.
      </ProseSection>

      <ProseSection title="Source quality tiers">
        <ol className="mt-2 list-decimal space-y-3 pl-5">
          <li>
            <strong className="text-heading">Official regulatory, government, and clinical reference sources</strong>{" "}
            — for example NIH Office of Dietary Supplements, FDA, FTC guidance, NSF, USP,
            Informed Sport/Choice, and official certification or database listings when
            applicable and citable.
          </li>
          <li>
            <strong className="text-heading">Official brand label and product pages</strong>{" "}
            — Supplement Facts images, ingredient statements, testing pages, and
            certificate-of-analysis references published by the brand.
          </li>
          <li>
            <strong className="text-heading">Retailer product pages</strong> — used when an
            official brand label page is unavailable, primarily for label images, SKU details,
            and dated price checks. Retailer marketing copy is treated cautiously.
          </li>
          <li>
            <strong className="text-heading">Brand marketing claims</strong> — noted when
            relevant but not treated as verified testing or label proof on their own.
          </li>
          <li>
            <strong className="text-heading">Sources not accepted as primary evidence</strong>{" "}
            — Amazon reviews, retailer customer reviews, influencer or social posts, forum
            comments, unsourced claims, and anecdotal testimonials.
          </li>
        </ol>
      </ProseSection>

      <ProseSection title="Third-party testing evidence">
        <p className="mb-3">
          Product pages show a testing status based on what public sources support at review
          time:
        </p>
        <dl className="space-y-3">
          <div>
            <dt className="font-medium text-heading">Verified</dt>
            <dd className="mt-1">
              A credible third-party database, certificate, official program listing, or
              equivalent public source confirms the testing or certification for the relevant
              product, SKU, or documented scope. Verified does not mean FDA approval and does
              not guarantee suitability for everyone.
            </dd>
          </div>
          <div>
            <dt className="font-medium text-heading">Claimed</dt>
            <dd className="mt-1">
              The brand or seller says testing or certification exists, but SuppCheckr did not
              find a public verification source at review time.
            </dd>
          </div>
          <div>
            <dt className="font-medium text-heading">Unknown / not claimed</dt>
            <dd className="mt-1">
              No reliable public testing information was found, or the brand does not claim
              third-party testing.
            </dd>
          </div>
        </dl>
        <p className="mt-3">
          Brand claims alone do not equal verified testing. Testing scope matters: SKU, batch,
          lot, product family, and certification program may differ. If verification is
          incomplete, SuppCheckr records the gap in the review rather than upgrading status
          without evidence.
        </p>
      </ProseSection>

      <ProseSection title="Pricing sources">
        Prices are manually checked from public retailer or brand listings and recorded with
        access dates. SuppCheckr does not use live price feeds. A dated price supports
        value comparisons within a category (for example, price per 5 g creatine, per 100 mg
        elemental magnesium, or per 500 mg vitamin C) but may change after publication.
      </ProseSection>

      <ProseSection title="Recalls, formulation changes, and availability">
        SuppCheckr does not guarantee real-time monitoring of recalls, warnings, formulation
        changes, label changes, retailer availability, or pricing changes. Users should check
        the current product label and consult the manufacturer, retailer, or a qualified
        healthcare professional before purchasing or using a supplement.
      </ProseSection>

      <ProseSection title="Citations and fabricated references">
        Published content must not use fake, misleading, or unattributed source references.
        Medium- and high-risk factual or health-related claims require support from acceptable
        source tiers. When citations are unavailable, we use conservative language or document
        the uncertainty.
      </ProseSection>

      <ProseSection title="Conflicting or incomplete information">
        When label images, brand pages, and retailer listings disagree, SuppCheckr prioritizes
        the most direct label evidence available and notes conflicts in the review. When key
        facts cannot be confirmed, we say so explicitly rather than guessing.
      </ProseSection>

      <ProseSection title="Related pages">
        For how scores use these sources, see{" "}
        <Link href="/methodology" className="text-link hover:text-link-hover hover:underline">
          review methodology
        </Link>
        . To report a source or citation error, see{" "}
        <Link href="/corrections-policy" className="text-link hover:text-link-hover hover:underline">
          corrections policy
        </Link>
        .
      </ProseSection>
    </LegalPageLayout>
  );
}
