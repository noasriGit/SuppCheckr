#!/usr/bin/env tsx
/**
 * MAGNESIUM CLUSTER PUBLICATION SCRIPT
 *
 * ⚠️  DO NOT RUN WITHOUT EXPLICIT USER APPROVAL
 *
 * Sets status: published and noindex: false on Magnesium cluster YAML only.
 *
 * This script does NOT change:
 * - SITE_MODE (remains prelaunch unless env/config changed separately)
 * - Affiliate settings (enabled remains false)
 * - Ad scripts (loadScripts remains false)
 * - Legal pages
 * - Creatine or other published cluster content
 * - Product images (placeholders remain)
 *
 * Usage (only when explicitly approved):
 *   CONFIRM_MAGNESIUM_PUBLISH=yes npx tsx scripts/publish-magnesium-cluster.ts
 */
import fs from "node:fs";
import path from "node:path";
import { load as loadYaml, dump as dumpYaml } from "js-yaml";

if (process.env.CONFIRM_MAGNESIUM_PUBLISH !== "yes") {
  console.error(
    "Refusing to run: Magnesium publication requires explicit approval.\n" +
      "Set CONFIRM_MAGNESIUM_PUBLISH=yes to execute this script.",
  );
  process.exit(1);
}

const DATE = process.env.MAGNESIUM_PUBLISH_DATE ?? "2026-06-29";

const files = [
  "content/ingredients/magnesium.yaml",
  "content/guides/what-is-magnesium.yaml",
  "content/guides/types-of-magnesium.yaml",
  "content/guides/how-to-choose-a-magnesium-supplement.yaml",
  "content/guides/magnesium-dosage-guide.yaml",
  "content/guides/magnesium-side-effects-and-safety.yaml",
  "content/guides/magnesium-glycinate-vs-citrate.yaml",
  "content/products/magnesium/klean-athlete-klean-magnesium.yaml",
  "content/products/magnesium/nutricost-magnesium-citrate-120.yaml",
  "content/products/magnesium/now-foods-magnesium-malate-1000mg-180-tablets.yaml",
  "content/products/magnesium/pure-encapsulations-magnesium-citrate-malate-180.yaml",
  "content/products/magnesium/nature-made-magnesium-oxide-250mg-100-tablets.yaml",
  "content/brands/pure-encapsulations.yaml",
  "content/brands/nature-made.yaml",
  "content/categories/magnesium.yaml",
  "content/comparisons/magnesium-supplements-compared.yaml",
];

for (const rel of files) {
  const fp = path.join(process.cwd(), rel);
  if (!fs.existsSync(fp)) {
    console.error("Missing file:", rel);
    process.exit(1);
  }
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
    summary: "Magnesium cluster publication (explicit approval required before running this script)",
  });
  editorial.updateLog = updateLog;
  fs.writeFileSync(fp, dumpYaml(doc, { lineWidth: 120, noRefs: true }));
  console.log("published", rel);
}

console.log(
  "\nMagnesium cluster YAML updated. Verify SITE_MODE, affiliate, ads, and legal pages were not changed.",
);
