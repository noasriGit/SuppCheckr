import type { Product } from "@/lib/schemas/product";
import { InlineMarkdown } from "@/components/content/InlineMarkdown";

export function ProductEditorialReview({
  product,
  sections = "all",
}: {
  product: Product;
  sections?: "intro" | "analysis" | "all";
}) {
  const review = product.editorialReview;
  if (!review) return null;

  const hasAnalysis = Boolean(
    review.labelAndDose ||
      review.testing ||
      review.value ||
      review.format ||
      review.bottomLine ||
      review.faq.length > 0,
  );
  const showIntro = sections === "intro" || sections === "all";
  const showAnalysis = (sections === "analysis" || sections === "all") && hasAnalysis;

  if (!showIntro && !showAnalysis) return null;

  return (
    <div className={sections === "intro" ? "mt-8 space-y-6" : "mt-10 space-y-6"}>
      {showIntro && (
        <>
          <section className="rounded-lg border border-border bg-surface p-4">
            <h2 className="text-lg font-semibold text-heading">Editorial review summary</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground">
              <InlineMarkdown text={review.summary} />
            </p>
          </section>

          {(review.verified.length > 0 || review.brandOrRetailerClaims.length > 0) && (
            <section className="grid gap-4 md:grid-cols-2">
              {review.verified.length > 0 && (
                <div className="rounded-lg border border-border bg-surface p-4">
                  <h2 className="text-lg font-semibold text-heading">What SuppCheckr verified</h2>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground">
                    {review.verified.map((item) => (
                      <li key={item}>
                        <InlineMarkdown text={item} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {review.brandOrRetailerClaims.length > 0 && (
                <div className="rounded-lg border border-border bg-surface p-4">
                  <h2 className="text-lg font-semibold text-heading">Brand or retailer claims</h2>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground">
                    {review.brandOrRetailerClaims.map((item) => (
                      <li key={item}>
                        <InlineMarkdown text={item} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          )}
        </>
      )}

      {showAnalysis && (
        <>
          {review.labelAndDose && (
            <section className="rounded-lg border border-border bg-surface p-4">
              <h2 className="text-lg font-semibold text-heading">Label and dose analysis</h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                <InlineMarkdown text={review.labelAndDose} />
              </p>
            </section>
          )}

          {review.testing && (
            <section className="rounded-lg border border-border bg-surface p-4">
              <h2 className="text-lg font-semibold text-heading">Testing and certification</h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                <InlineMarkdown text={review.testing} />
              </p>
            </section>
          )}

          {review.value && (
            <section className="rounded-lg border border-border bg-surface p-4">
              <h2 className="text-lg font-semibold text-heading">Value and dated price</h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                <InlineMarkdown text={review.value} />
              </p>
            </section>
          )}

          {review.format && (
            <section className="rounded-lg border border-border bg-surface p-4">
              <h2 className="text-lg font-semibold text-heading">Product format notes</h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                <InlineMarkdown text={review.format} />
              </p>
            </section>
          )}

          {review.bottomLine && (
            <section className="rounded-lg border border-border bg-surface p-4">
              <h2 className="text-lg font-semibold text-heading">Bottom line</h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                <InlineMarkdown text={review.bottomLine} />
              </p>
            </section>
          )}

          {review.faq.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold text-heading">FAQ</h2>
              <dl className="mt-4 space-y-4">
                {review.faq.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-lg border border-border bg-surface p-4"
                  >
                    <dt className="font-medium text-heading">{item.question}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-foreground">
                      <InlineMarkdown text={item.answer} />
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
        </>
      )}
    </div>
  );
}
