import fs from "node:fs";
import path from "node:path";
import { load as loadYaml } from "js-yaml";
import { ScoringRubricSchema, type ScoringRubric } from "@/lib/schemas/scoring";

const RUBRICS_DIR = path.join(process.cwd(), "content", "scoring", "rubrics");

export function getScoringRubrics(): ScoringRubric[] {
  if (!fs.existsSync(RUBRICS_DIR)) return [];

  return fs
    .readdirSync(RUBRICS_DIR)
    .filter((f) => f.endsWith(".yaml") || f.endsWith(".yml"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(RUBRICS_DIR, file), "utf8");
      return ScoringRubricSchema.parse(loadYaml(raw));
    });
}

export function getScoringRubric(profileId: string): ScoringRubric | undefined {
  return getScoringRubrics().find((r) => r.profileId === profileId);
}

export function validateRubricMatchesProfile(
  rubric: ScoringRubric,
  profileCriteriaKeys: string[],
): string[] {
  const errors: string[] = [];
  const rubricKeys = new Set(Object.keys(rubric.criteria));

  for (const key of profileCriteriaKeys) {
    if (!rubricKeys.has(key)) {
      errors.push(`Rubric ${rubric.profileId}: missing criterion "${key}"`);
    }
  }

  for (const key of rubricKeys) {
    if (!profileCriteriaKeys.includes(key)) {
      errors.push(`Rubric ${rubric.profileId}: unknown criterion "${key}"`);
    }
  }

  return errors;
}
