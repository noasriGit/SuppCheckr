import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { PageContainer } from "@/components/layout/SiteChrome";
import { getIndexableCategories, getIndexableIngredients } from "@/lib/content/loader";

export const metadata = buildPageMetadata({
  title: "Ingredient Library | SuppCheckr",
  description:
    "Ingredient reference pages for Creatine monohydrate, Magnesium, Vitamin C, and Electrolytes — forms, label reading, dosage context, and safety notes.",
  path: "/ingredients",
  noindex: true,
});

const ingredientPageTopics = [
  "What the ingredient is and how supplement labels describe it",
  "Common forms and naming on product labels",
  "Dose and serving-size considerations for comparison",
  "Safety and caution notes with conservative, source-linked context",
  "Links to published product reviews and category comparisons where available",
] as const;

export default function IngredientsIndexPage() {
  const published = getIndexableIngredients();
  const categoryById = new Map(getIndexableCategories().map((c) => [c.id, c]));

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold text-heading">Ingredients</h1>
      <p className="mt-3 max-w-2xl text-foreground">
        SuppCheckr ingredient references explain how common supplement ingredients appear on
        labels and how we compare products that contain them. Published references currently
        cover Creatine monohydrate, Magnesium, Vitamin C, and Electrolytes.
      </p>

      <section className="mt-8 rounded-lg border border-border bg-surface p-5">
        <h2 className="text-lg font-semibold text-heading">What an ingredient page covers</h2>
        <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-foreground">
          {ingredientPageTopics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted">
          Ingredient pages are educational references — not medical advice, dosing prescriptions,
          or product recommendations.
        </p>
      </section>

      {published.length > 0 && (
        <section className="mt-8">
          <h2 className="text-lg font-semibold text-heading">Published ingredient references</h2>
          <ul className="mt-4 space-y-3">
            {published.map((ing) => {
              const category = ing.categories
                .map((id) => categoryById.get(id))
                .find(Boolean);
              return (
                <li key={ing.id} className="rounded-lg border border-border bg-surface p-4">
                  <Link
                    href={`/ingredients/${ing.slug}`}
                    className="font-medium text-link hover:text-link-hover hover:underline"
                  >
                    {ing.name}
                  </Link>
                  <p className="mt-2 text-sm text-foreground">
                    {ing.evidenceSummary.slice(0, 220)}
                    {ing.evidenceSummary.length > 220 ? "…" : ""}
                  </p>
                  {category && (
                    <p className="mt-3 text-sm text-muted">
                      Related category:{" "}
                      <Link
                        href={`/supplements/${category.slug}`}
                        className="text-link hover:text-link-hover hover:underline"
                      >
                        {category.name}
                      </Link>
                      {category.slug && (
                        <>
                          {" · "}
                          <Link
                            href={`/supplements/${category.slug}/compare`}
                            className="text-link hover:text-link-hover hover:underline"
                          >
                            Comparison table
                          </Link>
                        </>
                      )}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      )}

      <section className="mt-8 rounded-lg border border-border bg-surface p-5">
        <h2 className="text-lg font-semibold text-heading">Additional ingredients</h2>
        <p className="mt-2 text-sm text-foreground">
          SuppCheckr adds ingredient references when a supplement category is ready for
          publication. Each reference is reviewed for label accuracy, source linking, and
          conservative language before it appears on the site.
        </p>
      </section>
    </PageContainer>
  );
}
