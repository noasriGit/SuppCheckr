import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout, ProseSection } from "@/components/legal/LegalPageLayout";
import { siteConfig } from "@/config/site";

export const metadata = buildPageMetadata({
  title: "About SuppCheckr",
  description: "About SuppCheckr — an evidence-aware supplement comparison platform.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <LegalPageLayout title="About SuppCheckr" lastUpdated="2026-06-30">
      <ProseSection title="Our mission">
        {siteConfig.description} We help consumers compare supplements on documented label
        facts, testing transparency, formula clarity, and value — without hype, exaggerated
        claims, disease-treatment language, or &ldquo;best for everyone&rdquo; rankings.
      </ProseSection>

      <ProseSection title="What we publish">
        SuppCheckr publishes evidence-aware supplement comparison content. Creatine monohydrate
        and Magnesium clusters — product reviews, guides, ingredient references, and comparison
        tables — are live. More supplement categories are planned. Each review explains how a
        product scores on transparency, testing, additives, and value using our{" "}
        <Link href="/methodology" className="text-link hover:text-link-hover hover:underline">
          review methodology
        </Link>
        .
      </ProseSection>

      <ProseSection title="What we are not">
        SuppCheckr is not a medical authority, doctor, dietitian, pharmacy, or FDA-approved
        database. We do not provide medical advice, diagnose conditions, or recommend
        treatments. Scores and comparisons are editorial tools — not guarantees of safety,
        efficacy, or personal suitability.
      </ProseSection>

      <ProseSection title="Editorial independence">
        Editorial scores and comparisons are independent of advertising and affiliate
        relationships. Affiliate links and live ad scripts remain disabled during prelaunch.
        Products are reviewed based on label and source evidence, not affiliate availability.
        See{" "}
        <Link href="/editorial-policy" className="text-link hover:text-link-hover hover:underline">
          editorial policy
        </Link>{" "}
        and{" "}
        <Link href="/source-standards" className="text-link hover:text-link-hover hover:underline">
          source standards
        </Link>
        .
      </ProseSection>

      <ProseSection title="Product images">
        Product pages may use label-first SuppCheckr placeholders where brand product photos are
        not shown. Reviews are based on cited label facts and sources, not product photography.
      </ProseSection>

      <ProseSection title="Contact">
        Questions, corrections, or accessibility feedback:{" "}
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="text-link hover:text-link-hover hover:underline"
        >
          {siteConfig.contactEmail}
        </a>
        . See{" "}
        <Link href="/corrections-policy" className="text-link hover:text-link-hover hover:underline">
          corrections policy
        </Link>{" "}
        for how to report errors.
      </ProseSection>
    </LegalPageLayout>
  );
}
