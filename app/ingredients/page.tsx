import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { PageContainer } from "@/components/layout/SiteChrome";
import {
  getIndexableIngredients,
  getIngredients,
  isIndexable,
} from "@/lib/content/loader";

export const metadata = buildPageMetadata({
  title: "Ingredient Library | SuppCheckr",
  description:
    "Ingredient reference pages on SuppCheckr, including published Creatine monohydrate coverage.",
  path: "/ingredients",
  noindex: true,
});

export default function IngredientsIndexPage() {
  const published = getIndexableIngredients();
  const allIngredients = getIngredients();

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold text-heading">Ingredients</h1>
      <p className="mt-3 max-w-2xl text-foreground">
        Published ingredient references are linked from category and guide pages. Creatine
        monohydrate is the first published ingredient page. Placeholder ingredient shells
        remain for future categories and are not indexed.
      </p>
      {published.length > 0 && (
        <section className="mt-8">
          <h2 className="text-lg font-semibold text-heading">Published</h2>
          <ul className="mt-4 space-y-3">
            {published.map((ing) => (
              <li key={ing.id} className="rounded-lg border border-border bg-surface p-3">
                <Link
                  href={`/ingredients/${ing.slug}`}
                  className="text-link hover:text-link-hover hover:underline"
                >
                  {ing.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      {allIngredients.some((ing) => !isIndexable(ing)) && (
        <section className="mt-8">
          <h2 className="text-lg font-semibold text-heading">In development</h2>
          <ul className="mt-4 space-y-3">
            {allIngredients
              .filter((ing) => !isIndexable(ing))
              .map((ing) => (
                <li key={ing.id} className="rounded-lg border border-border bg-surface p-3">
                  <Link
                    href={`/ingredients/${ing.slug}`}
                    className="text-link hover:text-link-hover hover:underline"
                  >
                    {ing.name}
                  </Link>
                  <span className="ml-2 text-xs text-muted">Not indexed</span>
                </li>
              ))}
          </ul>
        </section>
      )}
    </PageContainer>
  );
}
