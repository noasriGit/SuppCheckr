import { buildPageMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout, ProseSection } from "@/components/legal/LegalPageLayout";

export const metadata = buildPageMetadata({
  title: "Medical Disclaimer",
  description: "SuppCheckr medical disclaimer — informational content only.",
  path: "/medical-disclaimer",
});

export default function MedicalDisclaimerPage() {
  return (
    <LegalPageLayout title="Medical Disclaimer" requiresLegalReview>
      <ProseSection title="Informational content only">
        SuppCheckr provides general informational content about dietary supplements. We do
        not provide medical advice, diagnosis, or treatment.
      </ProseSection>
      <ProseSection title="Consult professionals">
        Consult a qualified healthcare professional before starting any supplement,
        especially if you are pregnant, nursing, under 18, taking medication, or managing
        a medical condition.
      </ProseSection>
      <ProseSection title="No guarantees">
        SuppCheckr scores and comparisons do not guarantee safety, efficacy, or suitability
        for any individual.
      </ProseSection>
    </LegalPageLayout>
  );
}
