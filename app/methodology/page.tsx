import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { PageContainer } from "@/components/layout/SiteChrome";
import { MedicalDisclaimer } from "@/components/trust/TrustModules";
import { CRITERIA_LABELS } from "@/lib/schemas/scoring";
import {
  getDefaultScoringProfile,
  getScoringProfiles,
} from "@/lib/content/loader";

export const metadata = buildPageMetadata({
  title: "Review Methodology | SuppCheckr",
  description:
    "How SuppCheckr scores supplements using transparent, category-aware criteria including evidence alignment.",
  path: "/methodology",
});

export default function MethodologyPage() {
  const defaultProfile = getDefaultScoringProfile();
  const profiles = getScoringProfiles();

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold text-heading">Review methodology</h1>
      <p className="mt-4 max-w-3xl text-foreground">
        SuppCheckr assigns a score out of 100 using weighted criteria. Scores reflect
        label transparency, dose clarity, evidence alignment, testing, formula quality,
        price/value, additives, and brand transparency — not medical efficacy.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-heading">What the score means</h2>
        <p className="mt-3 max-w-3xl text-sm text-foreground">
          The SuppCheckr Score summarizes how clearly a supplement discloses ingredients
          and doses, how its formula aligns with publicly available evidence and source
          standards, and how it compares on testing, additives, and value.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-heading">What the score does not mean</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-foreground">
          <li>It is not medical advice or a guarantee of results.</li>
          <li>Higher scores do not mean a product is right for every person.</li>
          <li>SuppCheckr does not prove a supplement treats or prevents disease.</li>
          <li>Affiliate relationships do not determine scores.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-heading">Default criteria weights</h2>
        <div className="mt-4 overflow-x-auto rounded-lg border border-border">
          <table className="w-full max-w-xl text-sm">
            <thead className="bg-table-header text-left">
              <tr>
                <th className="px-4 py-3 font-medium text-heading">Criterion</th>
                <th className="px-4 py-3 font-medium text-heading">Weight</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(defaultProfile.criteriaWeights).map(([key, weight]) => (
                <tr key={key} className="border-t border-table-row-border">
                  <td className="px-4 py-3 text-foreground">
                    {CRITERIA_LABELS[key as keyof typeof CRITERIA_LABELS]}
                  </td>
                  <td className="px-4 py-3 tabular-nums text-foreground">{weight}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-heading">Category-specific overrides</h2>
        <p className="mt-3 text-sm text-foreground">
          Weights can vary by supplement category. Example: creatine emphasizes dose
          transparency and third-party testing.
        </p>
        {profiles.map((profile) => (
          <div key={profile.id} className="mt-4 rounded-lg border border-border bg-surface p-4">
            <h3 className="font-medium text-heading">{profile.label}</h3>
            <p className="mt-1 text-xs text-muted">{profile.notes}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 text-sm text-foreground">
        <p>
          Updates and corrections: see{" "}
          <Link href="/corrections-policy" className="text-link hover:text-link-hover hover:underline">
            corrections policy
          </Link>{" "}
          and{" "}
          <Link href="/editorial-policy" className="text-link hover:text-link-hover hover:underline">
            editorial policy
          </Link>
          .
        </p>
      </section>

      <MedicalDisclaimer />
    </PageContainer>
  );
}
