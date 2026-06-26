import { buildPageMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout, ProseSection } from "@/components/legal/LegalPageLayout";

export const metadata = buildPageMetadata({
  title: "Source Standards",
  description: "SuppCheckr citation and source standards.",
  path: "/source-standards",
});

export default function SourceStandardsPage() {
  return (
    <LegalPageLayout title="Source Standards">
      <ProseSection title="Preferred sources">
        NIH, FDA, FTC, PubMed, National Academies, brand labels, retailer listings,
        third-party testing reports, and certification bodies — when applicable and cited.
      </ProseSection>
      <ProseSection title="Claim risk levels">
        Medium- and high-risk claims require citations. Phase 1 includes infrastructure;
        strict enforcement begins in Phase 2.
      </ProseSection>
      <ProseSection title="No fabricated citations">
        Published content must not use fake or misleading source references.
      </ProseSection>
    </LegalPageLayout>
  );
}
