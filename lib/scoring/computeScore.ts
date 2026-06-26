import type { CriteriaScores } from "@/lib/schemas/common";
import type { ScoringProfile } from "@/lib/schemas/scoring";

export function computeWeightedScore(
  scores: CriteriaScores,
  profile: ScoringProfile,
): number {
  const weights = profile.criteriaWeights;
  const total =
    scores.ingredientTransparency * weights.ingredientTransparency +
    scores.doseTransparency * weights.doseTransparency +
    scores.evidenceAlignment * weights.evidenceAlignment +
    scores.formulaQuality * weights.formulaQuality +
    scores.thirdPartyTesting * weights.thirdPartyTesting +
    scores.priceValue * weights.priceValue +
    scores.additives * weights.additives +
    scores.labelClarity * weights.labelClarity +
    scores.brandTransparency * weights.brandTransparency;

  return Math.round(total / 100);
}

export function validateProfileWeights(profile: ScoringProfile): boolean {
  const sum = Object.values(profile.criteriaWeights).reduce((a, b) => a + b, 0);
  return sum === 100;
}
