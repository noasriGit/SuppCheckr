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
    <LegalPageLayout title="About SuppCheckr">
      <ProseSection title="Our mission">
        {siteConfig.description} We aim to help consumers understand supplement labels
        without hype, exaggerated claims, or medical overreach.
      </ProseSection>
      <ProseSection title="What we are not">
        SuppCheckr is not a medical authority, doctor, pharmacy, or FDA-approved database.
        We do not provide medical advice.
      </ProseSection>
      <ProseSection title="Current status">
        SuppCheckr publishes evidence-aware supplement comparison content. Creatine
        monohydrate and Magnesium clusters — product reviews, guides, ingredient
        references, and comparison tables — are live. More supplement categories are
        planned. Product pages use label-first placeholders where brand product photos are
        not shown. Affiliate links and live ad scripts remain disabled until intentional
        activation after program approval.
      </ProseSection>
      <ProseSection title="Contact">
        Questions or corrections:{" "}
        <a href={`mailto:${siteConfig.contactEmail}`} className="text-link hover:text-link-hover hover:underline">
          {siteConfig.contactEmail}
        </a>
        .
      </ProseSection>
    </LegalPageLayout>
  );
}
