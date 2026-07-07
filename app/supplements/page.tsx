import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { seoTemplates } from "@/config/seo";
import { PageContainer } from "@/components/layout/SiteChrome";
import { CategoryCard } from "@/components/category/CategoryBlocks";
import { getIndexableCategories } from "@/lib/content/loader";

export const metadata = buildPageMetadata({
  title: seoTemplates.supplementsIndex.title,
  description: seoTemplates.supplementsIndex.description,
  path: "/supplements",
});

const categoryIncludes = [
  "An ingredient reference for the primary active ingredient",
  "Educational guides on forms, label reading, dosage context, and safety notes",
  "Individual product reviews scored on label transparency, testing, additives, and dated value",
  "A category comparison table using category-specific methodology",
] as const;

export default function SupplementsIndexPage() {
  const categories = getIndexableCategories();

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold text-heading">Supplement categories</h1>
      <p className="mt-3 max-w-2xl text-foreground">
        Each published SuppCheckr category combines ingredient context, guides, product reviews,
        and a comparison table. Creatine monohydrate, Magnesium, and Vitamin C are available now.
      </p>

      <section className="mt-8 rounded-lg border border-border bg-surface p-5">
        <h2 className="text-lg font-semibold text-heading">What each category includes</h2>
        <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-foreground">
          {categoryIncludes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted">
          Scores are label, source, and value tools — not medical recommendations. Category
          weights and normalization rules are described on the{" "}
          <Link href="/methodology" className="text-link hover:text-link-hover hover:underline">
            methodology
          </Link>{" "}
          page.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-heading">Published categories</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      <p className="mt-8 text-sm text-muted">
        Side-by-side tables:{" "}
        <Link href="/compare" className="text-link hover:text-link-hover hover:underline">
          Compare supplements
        </Link>
        . Ingredient references:{" "}
        <Link href="/ingredients" className="text-link hover:text-link-hover hover:underline">
          Ingredients
        </Link>
        .
      </p>
    </PageContainer>
  );
}
