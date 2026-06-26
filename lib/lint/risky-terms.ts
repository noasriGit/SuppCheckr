import fs from "node:fs";
import path from "node:path";
import { RISKY_TERMS } from "@/config/risky-terms";

export interface RiskyTermMatch {
  file: string;
  line: number;
  term: string;
  excerpt: string;
}

export function scanTextForRiskyTerms(
  text: string,
  file: string,
): RiskyTermMatch[] {
  const matches: RiskyTermMatch[] = [];
  const lines = text.split("\n");

  lines.forEach((line, index) => {
    const lower = line.toLowerCase();
    for (const term of RISKY_TERMS) {
      if (lower.includes(term.toLowerCase())) {
        matches.push({
          file,
          line: index + 1,
          term,
          excerpt: line.trim().slice(0, 120),
        });
      }
    }
  });

  return matches;
}

export function scanDirectory(dir: string, extensions: string[]): RiskyTermMatch[] {
  const matches: RiskyTermMatch[] = [];
  if (!fs.existsSync(dir)) return matches;

  function walk(current: string) {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (extensions.some((ext) => entry.name.endsWith(ext))) {
        const text = fs.readFileSync(full, "utf8");
        matches.push(...scanTextForRiskyTerms(text, full));
      }
    }
  }

  walk(dir);
  return matches;
}
