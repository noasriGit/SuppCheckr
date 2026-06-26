import { monetizationConfig, shouldShowAdPlaceholder } from "@/config/monetization";
import { cn } from "@/lib/utils/cn";

export function AdSlot({
  slotId,
  pathname = "/",
  className,
}: {
  slotId: keyof typeof monetizationConfig.ads.slots;
  pathname?: string;
  className?: string;
}) {
  if (!shouldShowAdPlaceholder(pathname)) return null;

  const slot = monetizationConfig.ads.slots[slotId];

  return (
    <div
      className={cn(
        "my-8 rounded-lg border border-dashed border-border bg-ad-placeholder-bg p-6 text-center",
        className,
      )}
      data-ad-slot={slot.id}
      data-ad-mode="placeholder"
      aria-label={slot.label}
    >
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {slot.label}
      </p>
      <p className="mt-2 text-sm text-muted">
        Ad placeholder — no live scripts or third-party requests
      </p>
    </div>
  );
}

export function MonetizationSafeZone({ children }: { children: React.ReactNode }) {
  return <div className="my-4 space-y-8">{children}</div>;
}
