import { buildPageMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout, ProseSection } from "@/components/legal/LegalPageLayout";
import { siteConfig } from "@/config/site";

export const metadata = buildPageMetadata({
  title: "About SuppCheckr",
  description: "About SuppCheckr — an evidence-aware supplement comparison platform in development.",
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
        The site is in {siteConfig.siteMode} mode. The first Creatine monohydrate content
        cluster — product reviews, guides, ingredient reference, and a comparison table — is
        published. More supplement categories are planned. Product images may still show
        &ldquo;Product image pending.&rdquo;
      </ProseSection>
    </LegalPageLayout>
  );
}
