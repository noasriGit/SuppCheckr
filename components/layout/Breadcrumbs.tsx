import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbJsonLd, type BreadcrumbItem } from "@/lib/seo/jsonld";

export type BreadcrumbNavItem = { label: string; href?: string };

export function Breadcrumbs({
  items,
  currentPath,
}: {
  items: BreadcrumbNavItem[];
  currentPath?: string;
}) {
  const jsonLdItems: BreadcrumbItem[] = items.flatMap((item, index) => {
    const path =
      item.href ?? (index === items.length - 1 && currentPath ? currentPath : undefined);
    if (!path) return [];
    return [{ label: item.label, path }];
  });

  return (
    <>
      <JsonLd data={currentPath ? buildBreadcrumbJsonLd(jsonLdItems) : null} />
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted">
        <ol className="flex flex-wrap items-center gap-1">
          {items.map((item, i) => (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1">
              {i > 0 && <span aria-hidden="true" className="text-muted-foreground">/</span>}
              {item.href ? (
                <Link href={item.href} className="transition-colors hover:text-link">
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
