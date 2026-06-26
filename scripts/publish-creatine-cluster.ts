#!/usr/bin/env tsx
import fs from "node:fs";
import path from "node:path";
import { load as loadYaml, dump as dumpYaml } from "js-yaml";

const DATE = "2026-06-26";
const files = [
  "content/ingredients/creatine-monohydrate.yaml",
  "content/guides/what-is-creatine.yaml",
  "content/guides/how-to-choose-a-creatine-supplement.yaml",
  "content/guides/creatine-dosage-guide.yaml",
  "content/guides/creatine-safety-and-side-effects.yaml",
  "content/guides/creatine-monohydrate-vs-hcl.yaml",
  "content/products/creatine/nutricost-creatine-monohydrate-500g.yaml",
  "content/products/creatine/optimum-nutrition-micronized-creatine-600g.yaml",
  "content/products/creatine/klean-athlete-klean-creatine.yaml",
  "content/products/creatine/now-sports-creatine-monohydrate-capsules-120.yaml",
  "content/products/creatine/bulksupplements-creatine-monohydrate-1kg.yaml",
  "content/brands/nutricost.yaml",
  "content/brands/optimum-nutrition.yaml",
  "content/brands/klean-athlete.yaml",
  "content/brands/now-foods.yaml",
  "content/brands/bulksupplements.yaml",
  "content/categories/creatine.yaml",
  "content/comparisons/creatine-monohydrate-compared.yaml",
];

for (const rel of files) {
  const fp = path.join(process.cwd(), rel);
  const doc = loadYaml(fs.readFileSync(fp, "utf8")) as Record<string, unknown>;
  doc.status = "published";
  doc.isPlaceholder = false;
  doc.noindex = false;
  const editorial = doc.editorial as Record<string, unknown>;
  editorial.lastUpdated = DATE;
  editorial.lastReviewed = DATE;
  editorial.reviewedBy = "suppcheckr-editorial";
  const updateLog = (editorial.updateLog as unknown[]) ?? [];
  updateLog.push({
    date: DATE,
    authorId: "suppcheckr-editorial",
    changeType: "published",
    summary: "Phase 2F-2B creatine cluster publication",
  });
  editorial.updateLog = updateLog;
  fs.writeFileSync(fp, dumpYaml(doc, { lineWidth: 120, noRefs: true }));
  console.log("published", rel);
}
