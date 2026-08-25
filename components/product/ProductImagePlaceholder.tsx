import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import type { ProductImageContext } from "@/lib/product/productImageContext";

type ProductImagePlaceholderSize = "sm" | "lg";

function ContextBadge({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <span className="inline-flex items-center rounded border border-border bg-surface px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted">
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
        "relative flex h-full w-full flex-col justify-between overflow-hidden rounded-md border border-dashed border-border bg-surface-elevated",
        compact ? "p-2" : "p-3",
        className,
      )}
    >
      <div
        aria-hidden={ariaLabel ? "true" : undefined}
        className="flex h-full flex-col justify-between"
      >
        <div className="flex flex-wrap items-start gap-1">
          {context.categoryLabel ? (
            <ContextBadge>{context.categoryLabel}</ContextBadge>
          ) : (
            <ContextBadge>Supplement</ContextBadge>
          )}
          {context.formatLabel && <ContextBadge>{context.formatLabel}</ContextBadge>}
        </div>

        <div className={cn("text-center", compact ? "space-y-0.5" : "space-y-1")}>
          <p
            className={cn(
              "text-muted",
              compact ? "text-[11px] leading-tight" : "text-sm",
            )}
          >
            Product photo not shown
          </p>
          {!compact && context.primaryFormLabel && (
            <p className="text-xs text-muted-foreground">{context.primaryFormLabel}</p>
          )}
          {!compact && (
            <p className="text-[11px] text-muted-foreground">
              Review is based on cited label facts
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
