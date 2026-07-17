import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageContainer } from "@/components/layout/SiteChrome";
import {
  SitemapCompactList,
  SitemapEntryList,
} from "@/components/sitemap/SitemapSections";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getSitemapSections } from "@/lib/seo/htmlSitemap";

export const metadata = buildPageMetadata({
  title: "Site Map | SuppCheckr",
  description:
    "Browse all indexable SuppCheckr pages — supplement categories, product reviews, guides, ingredients, brands, and trust pages.",
  path: "/sitemap",
});

function StructuredData({ sections }: { sections: ReturnType<typeof getSitemapSections> }) {
  const pageUrl = `${siteConfig.url}/sitemap`;
  const itemList = sections.all.map((record, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: record.title,
    url: `${siteConfig.url}${record.url}`,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Site Map | SuppCheckr",
        description:
          "Browse all indexable SuppCheckr pages — supplement categories, product reviews, guides, ingredients, brands, and trust pages.",
        isPartOf: {
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.url,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Site Map",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Indexable SuppCheckr pages",
        numberOfItems: sections.all.length,
        itemListElement: itemList,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function HtmlSitemapPage() {
  const sections = getSitemapSections();

  return (
    <PageContainer>
      <StructuredData sections={sections} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Site Map" },
        ]}
      />

      <h1 className="text-3xl font-bold text-heading">Site map</h1>
      <p className="mt-3 max-w-2xl text-foreground">
        Browse every indexable page on SuppCheckr. This map updates automatically when
        categories, products, guides, ingredients, or brands are published or removed.
      </p>

      <nav aria-label="Sitemap sections" className="mt-6">
        <h2 className="text-sm font-semibold text-heading">Jump to section</h2>
        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <li>
            <a href="#featured" className="text-link hover:text-link-hover hover:underline">
              Featured pages
            </a>
          </li>
          <li>
            <a href="#categories" className="text-link hover:text-link-hover hover:underline">
              Supplement categories
            </a>
          </li>
          <li>
            <a href="#ingredients" className="text-link hover:text-link-hover hover:underline">
              Ingredients
            </a>
          </li>
          <li>
            <a href="#brands" className="text-link hover:text-link-hover hover:underline">
              Brands
            </a>
          </li>
          <li>
            <a href="#trust" className="text-link hover:text-link-hover hover:underline">
              Trust &amp; contact
            </a>
          </li>
          <li>
            <a href="#recent" className="text-link hover:text-link-hover hover:underline">
              Recently updated
            </a>
          </li>
        </ul>
      </nav>

      {sections.featured.length > 0 && (
        <section id="featured" className="mt-10" aria-labelledby="featured-heading">
          <h2 id="featured-heading" className="text-xl font-semibold text-heading">
            Featured pages
          </h2>
          <p className="mt-2 text-sm text-muted">
            Key entry points for exploring supplement categories, guides, and methodology.
          </p>
          <SitemapCompactList records={sections.featured} />
        </section>
      )}

      <section id="categories" className="mt-10" aria-labelledby="categories-heading">
        <h2 id="categories-heading" className="text-xl font-semibold text-heading">
          Supplement categories
        </h2>
        <p className="mt-2 text-sm text-muted">
          Each published category includes a hub, comparison table, ingredient reference, product
          reviews, and educational guides.
        </p>

        {sections.categoryGroups.map((group) => (
          <section
            key={group.categorySlug}
            id={`category-${group.categorySlug}`}
            className="mt-8 rounded-lg border border-border bg-surface/50 p-5"
            aria-labelledby={`category-${group.categorySlug}-heading`}
          >
            <h3
              id={`category-${group.categorySlug}-heading`}
              className="text-lg font-semibold text-heading"
            >
              <Link
                href={group.hub.url}
                className="text-link hover:text-link-hover hover:underline"
              >
                {group.pluralName}
              </Link>
            </h3>

            <div className="mt-4 grid gap-6 lg:grid-cols-2">
              <div>
                <h4 className="text-sm font-medium text-heading">Category pages</h4>
                <SitemapCompactList
                  records={[group.hub, group.compare, group.ingredient].filter(
                    (record): record is NonNullable<typeof record> => Boolean(record),
                  )}
                />
              </div>

              {group.products.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-heading">Product reviews</h4>
                  <SitemapCompactList records={group.products} />
                </div>
              )}

              {group.guides.length > 0 && (
                <div className="lg:col-span-2">
                  <h4 className="text-sm font-medium text-heading">Guides</h4>
                  <SitemapCompactList records={group.guides} />
                </div>
              )}
            </div>
          </section>
        ))}
      </section>

      {sections.ingredients.length > 0 && (
        <section id="ingredients" className="mt-10" aria-labelledby="ingredients-heading">
          <h2 id="ingredients-heading" className="text-xl font-semibold text-heading">
            Ingredients
          </h2>
          <p className="mt-2 text-sm text-muted">
            Published ingredient references for active supplement categories.
          </p>
          <SitemapEntryList records={sections.ingredients} />
        </section>
      )}

      {sections.brands.length > 0 && (
        <section id="brands" className="mt-10" aria-labelledby="brands-heading">
          <h2 id="brands-heading" className="text-xl font-semibold text-heading">
            Brands
          </h2>
          <p className="mt-2 text-sm text-muted">
            Brand profiles for manufacturers with published product reviews.
          </p>
          <SitemapEntryList records={sections.brands} />
        </section>
      )}

      {sections.trustPages.length > 0 && (
        <section id="trust" className="mt-10" aria-labelledby="trust-heading">
          <h2 id="trust-heading" className="text-xl font-semibold text-heading">
            Trust &amp; contact
          </h2>
          <p className="mt-2 text-sm text-muted">
            Editorial standards, corrections, accessibility, and contact information.
          </p>
          <SitemapCompactList records={sections.trustPages} />
        </section>
      )}

      {sections.recentlyUpdated.length > 0 && (
        <section id="recent" className="mt-10" aria-labelledby="recent-heading">
          <h2 id="recent-heading" className="text-xl font-semibold text-heading">
            Recently updated
          </h2>
          <p className="mt-2 text-sm text-muted">
            Pages with the most recent editorial updates, based on stored last-updated dates.
          </p>
          <SitemapEntryList records={sections.recentlyUpdated} />
        </section>
      )}

      <p className="mt-10 text-sm text-muted">
        Machine-readable sitemap:{" "}
        <a
          href="/sitemap.xml"
          className="text-link hover:text-link-hover hover:underline"
        >
          sitemap.xml
        </a>
        . Search indexable pages:{" "}
        <Link href="/search" className="text-link hover:text-link-hover hover:underline">
          Search
        </Link>
        .
      </p>
    </PageContainer>
  );
}
