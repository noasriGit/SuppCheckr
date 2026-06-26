import fs from "node:fs";
import path from "node:path";
import { load as loadYaml } from "js-yaml";

export interface ContentGovernance {
  status?: string;
  isPlaceholder?: boolean;
}

export function readContentGovernance(filePath: string): ContentGovernance {
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    const parsed = loadYaml(raw) as ContentGovernance | null;
    return parsed ?? {};
  } catch {
    return {};
  }
}

export function isPublishedContentFile(governance: ContentGovernance): boolean {
  return governance.status === "published" && governance.isPlaceholder !== true;
}

export function walkContentFiles(
  dir: string,
  extensions: string[],
  onFile: (filePath: string) => void,
) {
  if (!fs.existsSync(dir)) return;

  function walk(current: string) {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (extensions.some((ext) => entry.name.endsWith(ext))) {
        onFile(full);
      }
    }
  }

  walk(dir);
}
