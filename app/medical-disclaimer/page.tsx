import { buildPageMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout, ProseSection } from "@/components/legal/LegalPageLayout";

export const metadata = buildPageMetadata({
  title: "Medical Disclaimer",
  description:
    "SuppCheckr provides educational supplement information only—not medical advice.",
  path: "/medical-disclaimer",
});

export default function MedicalDisclaimerPage() {
  return (
    <LegalPageLayout title="Medical Disclaimer" requiresLegalReview lastUpdated="2026-07-07">
      <ProseSection title="Educational and informational only">
        <p>
          SuppCheckr provides supplement comparison, label analysis, educational content,
          and editorial review based on publicly available product information. Everything
          on this site is intended for general educational and informational purposes only.
        </p>
        <p className="mt-2 font-medium text-heading">
          SuppCheckr is not a doctor, dietitian, pharmacist, nurse, or other healthcare
          provider. The Site does not provide medical advice and is not a substitute for
          professional healthcare.
        </p>
      </ProseSection>

      <ProseSection title="Not medical, pharmacy, or nutrition advice">
        <p>
          SuppCheckr content is not medical advice, diagnosis, treatment, cure, prevention
          advice, pharmacy advice, or individualized nutrition counseling. Nothing on this
          Site should be used to diagnose, treat, cure, or prevent any disease or health
          condition, or to replace advice from a qualified healthcare professional.
        </p>
        <p className="mt-2">
          SuppCheckr does not claim that any supplement is FDA-approved, safe for everyone,
          or appropriate for your individual circumstances.
        </p>
      </ProseSection>

      <ProseSection title="Supplements carry risks">
        <p>
          Dietary supplements can carry risks. Ingredients may interact with medications,
          medical conditions, pregnancy, breastfeeding, surgery, or other supplements.
          Individual responses vary, and a product that appears suitable on a label may not
          be appropriate for you.
        </p>
        <p className="mt-2">
          SuppCheckr scores, comparisons, summaries, and editorial notes describe publicly
          available product information. They are not guarantees of safety, efficacy,
          quality, or suitability for any person.
        </p>
      </ProseSection>

      <ProseSection title="Consult a qualified healthcare professional">
        <p>
          Always consult a qualified healthcare professional before starting, stopping, or
          combining supplements—especially if you are:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>pregnant or nursing;</li>
          <li>under 18 years of age;</li>
          <li>taking prescription or over-the-counter medication;</li>
          <li>managing a medical condition, including kidney disease, liver disease, kidney stones, allergies, or iron overload / hemochromatosis (relevant for some supplements such as Vitamin C);</li>
          <li>preparing for surgery; or</li>
          <li>unsure whether a supplement is appropriate for you.</li>
        </ul>
        <p className="mt-2">
          Do not delay or disregard professional medical advice because of something you
          read on SuppCheckr.
        </p>
        <p className="mt-2">
          Supplement decisions for anyone under 18 should be made with a parent or guardian
          and a qualified healthcare professional.
        </p>
      </ProseSection>

      <ProseSection title="Read the actual product label">
        <p>
          Product labels, dosages, ingredients, allergen statements, warnings, testing
          status, lot information, and manufacturer claims can change without notice.
          SuppCheckr may not reflect the most current label or batch.
        </p>
        <p className="mt-2">
          Before purchasing or using any supplement, read and follow the actual product
          label and official information from the manufacturer and retailer. If label
          information conflicts with content on SuppCheckr, rely on the product label and
          qualified professional guidance.
        </p>
      </ProseSection>

      <ProseSection title="Emergencies">
        <p>
          SuppCheckr is not equipped to handle medical emergencies. If you think you may
          have a medical emergency, adverse reaction, overdose, or poisoning, contact
          emergency services or seek immediate in-person medical care. Do not use this Site
          for urgent health decisions.
        </p>
      </ProseSection>

      <ProseSection title="No professional relationship">
        <p>
          Your use of SuppCheckr does not create a doctor-patient, pharmacist-patient,
          dietitian-client, or other professional relationship. If you need personalized
          guidance, speak directly with a licensed or otherwise qualified healthcare
          professional who can evaluate your full medical history.
        </p>
      </ProseSection>
    </LegalPageLayout>
  );
}
