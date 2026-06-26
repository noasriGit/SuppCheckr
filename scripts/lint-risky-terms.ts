#!/usr/bin/env tsx
import fs from "node:fs";
import path from "node:path";
import { scanTextForRiskyTerms } from "@/lib/lint/risky-terms";
import {
  isPublishedContentFile,
  readContentGovernance,
  walkContentFiles,
} from "@/lib/lint/contentGovernance";

const contentDir = path.join(process.cwd(), "content");

let errors = 0;
let warnings = 0;

walkContentFiles(contentDir, [".yaml", ".yml", ".md", ".mdx"], (filePath) => {
  const text = fs.readFileSync(filePath, "utf8");
  const governance = readContentGovernance(filePath);
  const published = isPublishedContentFile(governance);
  const matches = scanTextForRiskyTerms(text, filePath);

  for (const match of matches) {
    const msg = `${match.file}:${match.line} — "${match.term}" — ${match.excerpt}`;
    if (published) {
      console.error(`ERROR: ${msg}`);
      errors++;
    } else {
      console.warn(`WARN: ${msg}`);
      warnings++;
    }
  }
});

if (errors === 0 && warnings === 0) {
  console.log("No risky terms found.");
} else {
  console.log(`\nRisky-term lint: ${errors} error(s), ${warnings} warning(s)`);
}

if (errors > 0) {
  console.error("\nPublished content contains risky terms — fix before indexing.");
  process.exit(1);
}

console.log(
  warnings > 0
    ? "Risky-term lint complete (warnings only for non-published content)."
    : "Risky-term lint complete.",
);
