import { CRITERIA_LABELS } from "@/lib/schemas/scoring";
import type { CriteriaScores } from "@/lib/schemas/common";
import { cn } from "@/lib/utils/cn";

function scoreAccentClass(score: number): string {
  if (score >= 80) return "text-success border-success/30";
  if (score >= 60) return "text-primary border-primary/30";
  return "text-warning border-warning/30";
}

function scoreBarClass(score: number): string {
  if (score >= 80) return "bg-success";
  if (score >= 60) return "bg-primary";
  return "bg-warning";
}

export function ScoreBadge({
  score,
  isDemo = false,
  size = "md",
}: {
  score: number;
  isDemo?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <div
      className={cn(
        "inline-flex flex-col items-center rounded-lg border bg-surface-elevated px-3 py-2",
        scoreAccentClass(score),
        size === "lg" && "px-4 py-3",
      )}
    >
      <span className="text-xs font-medium uppercase tracking-wide text-muted">
        SuppCheckr Score
      </span>
      <span
        className={cn(
          "font-bold tabular-nums text-heading",
          size === "lg" ? "text-3xl" : "text-xl",
        )}
      >
        {score}/100
      </span>
      {isDemo && (
        <span className="mt-1 text-xs text-warning-text">Demo score — not a real review</span>
      )}
    </div>
  );
}

export const DEFAULT_SCORE_DISCLAIMER =
  "The SuppCheckr score reflects label transparency, formula clarity, testing evidence, and price/value based on publicly available information. It does not prove effectiveness, safety for any individual, medical suitability, or guaranteed results.";

export function ScoreDisclaimer({ text }: { text?: string | null }) {
  const disclaimer = text?.trim() || DEFAULT_SCORE_DISCLAIMER;
  return (
    <p className="mt-3 max-w-xl text-xs leading-relaxed text-muted">{disclaimer}</p>
  );
}

export function ScoreBreakdown({
  scores,
  isDemo = false,
}: {
  scores: CriteriaScores;
  isDemo?: boolean;
}) {
  const entries = Object.entries(scores) as [keyof CriteriaScores, number][];

  return (
    <div className="space-y-3">
      {isDemo && (
        <p className="text-sm text-warning-text">Demo scores for template testing only.</p>
      )}
      {entries.map(([key, value]) => (
        <div key={key}>
          <div className="mb-1 flex justify-between text-sm">
            <span className="text-foreground">{CRITERIA_LABELS[key]}</span>
            <span className="font-medium tabular-nums text-heading">{value}</span>
          </div>
          <div className="h-2 rounded-full bg-border-subtle">
            <div
              className={cn("h-2 rounded-full", scoreBarClass(value))}
              style={{ width: `${value}%` }}
              role="presentation"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
