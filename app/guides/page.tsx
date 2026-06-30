import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { seoTemplates } from "@/config/seo";
import { PageContainer } from "@/components/layout/SiteChrome";
import {
  getIndexableCategories,
  getIndexableGuides,
} from "@/lib/content/loader";

export const metadata = buildPageMetadata({
  title: seoTemplates.guidesIndex.title,
  description: seoTemplates.guidesIndex.description,
  path: "/guides",
});

export default function GuidesIndexPage() {
  const guides = getIndexableGuides();

  const guidesByCategory = getIndexableCategories()
    .map((category) => ({
      category,
      guides: guides
        .filter((g) => g.categoryId === category.id)
        .sort((a, b) => a.title.localeCompare(b.title)),
    }))
    .filter(({ guides: categoryGuides }) => categoryGuides.length > 0);

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold text-heading">Guides</h1>
      <p className="mt-3 max-w-2xl text-foreground">
        Educational guides explain ingredient forms, label reading, dosage context, and safety
        notes for published SuppCheckr categories. Guides are informational — not medical advice
        or product recommendations.
      </p>

      {guidesByCategory.map(({ category, guides: categoryGuides }) => (
        <section key={category.id} className="mt-10">
          <h2 className="text-lg font-semibold text-heading">{category.name} guides</h2>
          <p className="mt-1 text-sm text-muted">
            Related category hub:{" "}
            <Link
              href={`/supplements/${category.slug}`}
              className="text-link hover:text-link-hover hover:underline"
            >
              {category.pluralName}
            </Link>
          </p>
          <ul className="mt-4 space-y-3">
            {categoryGuides.map((guide) => (
              <li key={guide.slug} className="rounded-lg border border-border bg-surface p-4">
                <Link
                  href={`/guides/${guide.slug}`}
                  className="font-medium text-link hover:text-link-hover hover:underline"
                >
                  {guide.title}
                </Link>
                {guide.excerpt && (
                  <p className="mt-2 text-sm text-foreground">{guide.excerpt}</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}

      <p className="mt-10 text-sm text-muted">
        Ingredient references:{" "}
        <Link href="/ingredients" className="text-link hover:text-link-hover hover:underline">
          Ingredients
        </Link>
        . Product comparisons:{" "}
        <Link href="/compare" className="text-link hover:text-link-hover hover:underline">
          Compare
        </Link>
        .
      </p>
    </PageContainer>
  );
}
