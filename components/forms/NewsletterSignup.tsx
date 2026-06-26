export function NewsletterSignup() {
  return (
    <form className="mt-4 flex max-w-md gap-2" action="#">
      <input
        type="email"
        placeholder="you@example.com"
        className="flex-1 rounded border border-input-border bg-input-bg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground"
        aria-label="Email address"
        disabled
      />
      <button
        type="button"
        disabled
        className="rounded bg-surface-elevated px-4 py-2 text-sm font-medium text-muted opacity-60"
      >
        Notify me (soon)
      </button>
    </form>
  );
}
