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
    "How SuppCheckr scores supplements using transparent, category-aware criteria including label clarity, testing, and value.",
  path: "/methodology",
});

const CRITERIA_DESCRIPTIONS: Record<keyof typeof CRITERIA_LABELS, string> = {
  ingredientTransparency:
    "How clearly the label identifies active ingredients and forms (for example, creatine monohydrate, magnesium glycinate, or vitamin C as ascorbic acid).",
  doseTransparency:
    "How clearly the label states the active dose per serving — grams of creatine, milligrams of elemental magnesium, milligrams of vitamin C, or equivalent.",
  evidenceAlignment:
    "How conservatively product and category claims align with publicly available evidence and source standards. We reward cautious, cited language over hype.",
  formulaQuality:
    "Formula simplicity, clarity of ingredient list structure, and absence of unnecessary complexity or proprietary blends that hide amounts.",
  thirdPartyTesting:
    "Whether third-party testing or certification is verified, claimed only, or unknown based on public sources.",
  priceValue:
    "Dated manual price checks compared on a category-normalized basis (for example, price per 5 g creatine, per 100 mg elemental magnesium, or per 500 mg vitamin C).",
  additives:
    "Presence and disclosure of fillers, sweeteners, artificial colors, and other non-active ingredients.",
  labelClarity:
    "Overall readability and completeness of Supplement Facts, serving size, servings per container, and related label details.",
  brandTransparency:
    "Brand contact information, manufacturing context, and willingness to document testing or quality practices when available.",
};

export default function MethodologyPage() {
  const defaultProfile = getDefaultScoringProfile();
  const profiles = getScoringProfiles();

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold text-heading">Review methodology</h1>
      <p className="mt-4 max-w-3xl text-foreground">
        SuppCheckr assigns a score out of 100 using weighted editorial criteria. Scores
        summarize label transparency, dose clarity, formula quality, testing evidence,
        source quality, price/value, additives, claim conservatism, and brand transparency
        — not medical efficacy or personal suitability.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-heading">What SuppCheckr scores</h2>
        <p className="mt-3 max-w-3xl text-sm text-foreground">
          Each product review evaluates nine criteria. The labels below match what you see
          on product score breakdowns.
        </p>
        <ul className="mt-4 max-w-3xl space-y-3 text-sm text-foreground">
          {(
            Object.entries(CRITERIA_LABELS) as [
              keyof typeof CRITERIA_LABELS,
              string,
            ][]
          ).map(([key, label]) => (
            <li key={key}>
              <strong className="text-heading">{label}:</strong>{" "}
              {CRITERIA_DESCRIPTIONS[key]}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-heading">How scoring works</h2>
        <ul className="mt-3 max-w-3xl list-disc space-y-2 pl-5 text-sm text-foreground">
          <li>
            Category-specific scoring profiles exist. Creatine, Magnesium, and Vitamin C can use
            different criterion weights because label priorities differ by supplement type.
          </li>
          <li>
            Scores are editorial comparison tools based on public product labels, official
            regulatory and reference sources, credible certification databases, and
            documented retailer or brand pages where appropriate.
          </li>
          <li>
            Prices are manually checked and dated — not live retailer feeds. See{" "}
            <Link
              href="/source-standards"
              className="text-link hover:text-link-hover hover:underline"
            >
              source standards
            </Link>{" "}
            for how sources are tiered.
          </li>
          <li>
            Scores help compare transparency, documentation, and value within a category.
            They are not medical recommendations.
          </li>
          <li>
            A higher score does not mean a product is best for every person, every goal,
            or every health context.
          </li>
          <li>
            Affiliate relationships do not determine scores. Affiliate links are disabled
            during prelaunch; if enabled in the future, they still would not affect
            editorial scoring.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-heading">What scores do not mean</h2>
        <ul className="mt-3 max-w-3xl list-disc space-y-2 pl-5 text-sm text-foreground">
          <li>Scores are not medical advice or a substitute for a clinician.</li>
          <li>Scores are not a safety guarantee for any individual.</li>
          <li>Scores do not prove a product works for everyone or for a specific outcome.</li>
          <li>
            Scores do not recommend treating, preventing, or curing disease.
          </li>
          <li>Scores are not based on paid placement, sponsorship, or affiliate availability.</li>
          <li>
            Verified third-party testing noted in a review does not mean FDA approval or
            suitability for everyone. Testing scope (SKU, batch, lot, product line, or
            certification program) may differ — see testing statuses below.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-heading">Product ranking boundaries</h2>
        <p className="mt-3 max-w-3xl text-sm text-foreground">
          SuppCheckr compares supplements on documented label and source facts. We avoid
          broad winner language that implies universal suitability.
        </p>
        <ul className="mt-3 max-w-3xl list-disc space-y-2 pl-5 text-sm text-foreground">
          <li>No &ldquo;Best Overall&rdquo; or &ldquo;Best for Everyone&rdquo; rankings.</li>
          <li>
            We avoid condition-based rankings (for example, &ldquo;best for sleep&rdquo; or
            &ldquo;best for anxiety&rdquo;) that imply medical outcomes.
          </li>
          <li>
            Comparison pages are label, source, testing, and value comparisons — not
            prescriptions or treatment guides.
          </li>
          <li>
            Products may appear in reviews even when affiliate purchase links are unavailable
            or disabled.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-heading">Third-party testing statuses</h2>
        <p className="mt-3 max-w-3xl text-sm text-foreground">
          Product pages and comparison tables show a testing status based on what public
          sources support. Status definitions:
        </p>
        <dl className="mt-4 max-w-3xl space-y-4 text-sm text-foreground">
          <div>
            <dt className="font-medium text-heading">Verified</dt>
            <dd className="mt-1">
              A credible third-party database, certificate, official program listing, or
              equivalent public source confirms the testing or certification for the relevant
              product, SKU, or documented scope.
            </dd>
          </div>
          <div>
            <dt className="font-medium text-heading">Claimed</dt>
            <dd className="mt-1">
              The brand or seller states that testing or certification exists, but SuppCheckr
              did not find a public verification source at review time.
            </dd>
          </div>
          <div>
            <dt className="font-medium text-heading">Unknown / not claimed</dt>
            <dd className="mt-1">
              No reliable public testing information was found, or the brand does not claim
              third-party testing. These are grouped in filters as &ldquo;not claimed /
              unknown.&rdquo;
            </dd>
          </div>
        </dl>
        <p className="mt-4 max-w-3xl text-sm text-foreground">
          Brand marketing claims alone do not equal verified testing. When a source gap
          exists, we document it rather than assuming verification. See{" "}
          <Link
            href="/source-standards"
            className="text-link hover:text-link-hover hover:underline"
          >
            source standards
          </Link>{" "}
          for how testing evidence is evaluated.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-heading">Default criteria weights</h2>
        <p className="mt-3 max-w-3xl text-sm text-foreground">
          When no category-specific profile applies, SuppCheckr uses these default weights:
        </p>
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
        <h2 className="text-xl font-semibold text-heading">Category-specific scoring</h2>
        <p className="mt-3 max-w-3xl text-sm text-foreground">
          Weights can vary by supplement category because label priorities differ. Published
          profiles currently include Creatine, Magnesium, and Vitamin C:
        </p>
        {profiles.map((profile) => (
          <div key={profile.id} className="mt-6 rounded-lg border border-border bg-surface p-4">
            <h3 className="font-medium text-heading">{profile.label}</h3>
            <p className="mt-1 text-xs text-muted">{profile.notes}</p>
            {profile.id === "creatine" && (
              <p className="mt-3 text-sm text-foreground">
                Creatine scoring rewards straightforward creatine monohydrate dosing, verified
                third-party testing when available, clean and simple formulas, clear Supplement
                Facts, conservative claims, and competitive price per 5 g creatine equivalent
                from dated manual price checks.
              </p>
            )}
            {profile.id === "magnesium" && (
              <p className="mt-3 text-sm text-foreground">
                Magnesium scoring rewards clear elemental magnesium disclosure (milligrams per
                serving), explicit magnesium form identification, practical serving sizes,
                testing transparency, conservative outcome claims, and competitive price per
                100 mg elemental magnesium from dated manual price checks — not compound or
                chelate weight alone.
              </p>
            )}
            {profile.id === "vitamin-c" && (
              <p className="mt-3 text-sm text-foreground">
                Vitamin C scoring rewards clear vitamin C amount per serving (milligrams on
                Supplement Facts), explicit form identification (ascorbic acid, mineral ascorbates,
                liposomal, etc.), testing transparency, conservative outcome claims, additive and
                serving-practicality context, and competitive price per 500 mg vitamin C from dated
                manual price checks — not proprietary blend weight or absorption marketing alone.
              </p>
            )}
            <div className="mt-4 overflow-x-auto">
              <table className="w-full max-w-xl text-sm">
                <thead className="bg-table-header text-left">
                  <tr>
                    <th className="px-3 py-2 font-medium text-heading">Criterion</th>
                    <th className="px-3 py-2 font-medium text-heading">Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(profile.criteriaWeights).map(([key, weight]) => (
                    <tr key={key} className="border-t border-table-row-border">
                      <td className="px-3 py-2 text-foreground">
                        {CRITERIA_LABELS[key as keyof typeof CRITERIA_LABELS]}
                      </td>
                      <td className="px-3 py-2 tabular-nums text-foreground">{weight}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-heading">Product images</h2>
        <p className="mt-3 max-w-3xl text-sm text-foreground">
          Some reviews use generic SuppCheckr placeholders instead of brand product photos.
          Reviews are based on label facts and cited sources, not the presence of a product
          image. See{" "}
          <Link
            href="/editorial-policy"
            className="text-link hover:text-link-hover hover:underline"
          >
            editorial policy
          </Link>{" "}
          for why placeholders are used.
        </p>
      </section>

      <section className="mt-10 text-sm text-foreground">
        <p>
          Updates and corrections: see{" "}
          <Link
            href="/corrections-policy"
            className="text-link hover:text-link-hover hover:underline"
          >
            corrections policy
          </Link>{" "}
          and{" "}
          <Link
            href="/editorial-policy"
            className="text-link hover:text-link-hover hover:underline"
          >
            editorial policy
          </Link>
          .
        </p>
      </section>

      <MedicalDisclaimer />
    </PageContainer>
  );
}
