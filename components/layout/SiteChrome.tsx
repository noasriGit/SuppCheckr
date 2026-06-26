import Link from "next/link";
import { siteConfig, mainNav, footerNav } from "@/config/site";
import { cn } from "@/lib/utils/cn";

export function Header() {
  return (
    <header className="border-b border-border bg-surface/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="flex flex-col">
          <span className="text-lg font-semibold text-heading">{siteConfig.name}</span>
          <span className="text-xs text-muted">{siteConfig.tagline}</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-link"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/search"
            className="text-sm font-medium text-foreground transition-colors hover:text-link"
          >
            Search
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2">
        <div>
          <p className="font-semibold text-heading">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-foreground">{siteConfig.description}</p>
          <p className="mt-4 text-xs text-muted">
            Informational content only. Not medical advice.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="mb-2 font-medium text-heading">Explore</p>
            <ul className="space-y-1 text-foreground">
              {footerNav.explore.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 font-medium text-heading">Trust</p>
            <ul className="space-y-1 text-foreground">
              {footerNav.trust.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}

export function PageContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-6xl px-4 py-8", className)}>{children}</div>
  );
}

export function SidebarLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}) {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 xl:grid-cols-[1fr_300px]">
      <main>{children}</main>
      {sidebar ? <aside className="hidden xl:block">{sidebar}</aside> : null}
    </div>
  );
}
