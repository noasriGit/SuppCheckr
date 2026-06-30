import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import type { ProductImageContext } from "@/lib/product/productImageContext";

type ProductImagePlaceholderSize = "sm" | "lg";

function GenericContainerIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 80"
      aria-hidden="true"
      className={cn("text-primary/70", className)}
      fill="none"
    >
      <rect
        x="8"
        y="12"
        width="48"
        height="56"
        rx="6"
        className="stroke-current"
        strokeWidth="1.5"
        opacity="0.55"
      />
      <rect
        x="14"
        y="8"
        width="36"
        height="10"
        rx="3"
        className="fill-surface-elevated stroke-current"
        strokeWidth="1.25"
        opacity="0.8"
      />
      <path
        d="M18 28h28M18 36h22M18 44h26M18 52h18"
        className="stroke-current"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}

function LabelFactsRows({ compact }: { compact?: boolean }) {
  const rows = compact
    ? ["Serving size", "Active ingredient"]
    : ["Serving size", "Active ingredient", "Other ingredients"];

  return (
    <div aria-hidden="true" className="w-full space-y-1.5">
      {rows.map((row) => (
        <div key={row} className="flex items-center gap-2">
          <span className="h-px flex-1 bg-border/80" />
          <span className="shrink-0 text-[10px] uppercase tracking-wide text-muted-foreground/80">
            {row}
          </span>
        </div>
      ))}
    </div>
  );
}

function ContextBadge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-primary",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function ProductImagePlaceholder({
  context,
  size = "lg",
  className,
  ariaLabel,
}: {
  context: ProductImageContext;
  size?: ProductImagePlaceholderSize;
  className?: string;
  ariaLabel?: string;
}) {
  const compact = size === "sm";

  return (
    <div
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      className={cn(
        "relative flex h-full w-full flex-col overflow-hidden rounded-md border border-border/80 bg-gradient-to-br from-surface-elevated via-surface to-[#101827]",
        compact ? "p-2.5" : "p-4",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.12),transparent_55%)]"
      />

      <div aria-hidden={ariaLabel ? "true" : undefined} className="relative flex h-full flex-col">
        <div className="relative flex flex-wrap items-start justify-between gap-1.5">
        {context.categoryLabel ? (
          <ContextBadge>{context.categoryLabel}</ContextBadge>
        ) : (
          <ContextBadge>Supplement</ContextBadge>
        )}
        {context.formatLabel && <ContextBadge>{context.formatLabel}</ContextBadge>}
      </div>

      <div
        className={cn(
          "relative flex flex-1 flex-col items-center justify-center",
          compact ? "my-2 gap-1" : "my-4 gap-3",
        )}
      >
        <GenericContainerIcon className={compact ? "h-12 w-10" : "h-20 w-16"} />
        {!compact && context.primaryFormLabel && (
          <p className="max-w-[14rem] text-center text-xs text-muted">{context.primaryFormLabel}</p>
        )}
      </div>

      {!compact && (
        <div className="relative mb-4">
          <LabelFactsRows />
        </div>
      )}

      <div className={cn("relative text-center", compact ? "space-y-0.5" : "space-y-1")}>
        <p
          className={cn(
            "font-medium text-heading",
            compact ? "text-[11px] leading-tight" : "text-sm",
          )}
        >
          Label-first review
        </p>
        {!compact && (
          <p className="text-xs text-muted">Supplement Facts reviewed</p>
        )}
        <p className={cn("text-muted-foreground", compact ? "text-[10px]" : "text-[11px]")}>
          Image unavailable
        </p>
        <p
          className={cn(
            "font-medium uppercase tracking-[0.18em] text-primary/80",
            compact ? "text-[9px]" : "text-[10px]",
          )}
        >
          SuppCheckr
        </p>
      </div>
      </div>
    </div>
  );
}
