import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/schemas/product";
import type { CategoryDisplayLabels } from "@/lib/content/categoryDisplayLabels";
import { defaultCategoryDisplayLabels } from "@/lib/content/categoryDisplayLabels";
import { ScoreBadge } from "@/components/rating/ScoreDisplay";

export function ProductCard({
  product,
  categorySlug,
  brandName,
}: {
  product: Product;
  categorySlug: string;
  brandName: string;
}) {
  return (
    <Link
      href={`/supplements/${categorySlug}/products/${product.slug}`}
      className="block rounded-lg border border-border bg-surface p-4 transition-colors hover:border-primary/40 hover:bg-surface-elevated"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-medium text-heading">{product.name}</h3>
          <p className="text-sm text-muted">{brandName}</p>
        </div>
        <ScoreBadge score={product.rating.overallScore} isDemo={product.isPlaceholder} size="sm" />
      </div>
      {product.isPlaceholder && (
        <span className="mt-2 inline-block rounded bg-warning-bg px-2 py-0.5 text-xs text-warning-text">
          Demo product
        </span>
      )}
      {!product.isPlaceholder && product.status === "review_ready" && (
        <span className="mt-2 inline-block rounded bg-warning-bg px-2 py-0.5 text-xs text-warning-text">
          Draft review
        </span>
      )}
    </Link>
  );
}

function isPlaceholderImage(src: string): boolean {
  return src.includes("placeholder");
}

export function ProductImage({ product }: { product: Product }) {
  const pending = isPlaceholderImage(product.images.product.src);

  return (
    <figure className="rounded-lg border border-border bg-surface p-4">
      <div className="relative mx-auto flex aspect-square max-h-64 w-full max-w-xs items-center justify-center overflow-hidden rounded-md bg-surface-elevated">
        <Image
          src={product.images.product.src}
          alt={product.images.product.alt}
          width={320}
          height={320}
          className="h-auto max-h-full w-auto max-w-full object-contain opacity-80"
        />
      </div>
      {pending && (
        <figcaption className="mt-3 text-center text-xs font-medium text-muted">
          Product image pending
        </figcaption>
      )}
    </figure>
  );
}

export function SupplementFactsTable({
  product,
  displayLabels = defaultCategoryDisplayLabels,
}: {
  product: Product;
  displayLabels?: CategoryDisplayLabels;
}) {
  const { supplementFacts, pricing } = product;
  const activeIngredient = supplementFacts.ingredients[0];
  const pricePerActiveDose = pricing.pricePerActiveDose ?? pricing.pricePerServing;
  const showNormalizedNote =
    pricing.pricePerActiveDose != null &&
    Math.abs(pricing.pricePerActiveDose - pricing.pricePerServing) > 0.001;
  const allergenText =
    supplementFacts.allergens.length > 0
      ? supplementFacts.allergens.join(", ")
      : "Not stated on available label";

  return (
    <div className="rounded-lg border border-border bg-surface p-4">
      <h3 className="font-medium text-heading">Supplement facts & pricing context</h3>
      <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-muted">Serving size</dt>
          <dd className="font-medium text-foreground">{supplementFacts.servingSize}</dd>
        </div>
        <div>
          <dt className="text-muted">Servings per container</dt>
          <dd className="font-medium text-foreground">{supplementFacts.servingsPerContainer}</dd>
        </div>
        <div>
          <dt className="text-muted">{displayLabels.activeDoseLabel}</dt>
          <dd className="font-medium text-foreground">
            {activeIngredient ? `${activeIngredient.name}: ${activeIngredient.amount}` : "—"}
          </dd>
        </div>
        <div>
          <dt className="text-muted">Manual observed price</dt>
          <dd className="font-medium text-foreground">
            ${pricing.msrp.toFixed(2)} ({pricing.lastPriceCheckedAt})
          </dd>
        </div>
        <div>
          <dt className="text-muted">Manual price per serving</dt>
          <dd className="font-medium text-foreground">${pricing.pricePerServing.toFixed(2)}</dd>
        </div>
        <div>
          <dt className="text-muted">{displayLabels.priceNormalizationDescription}</dt>
          <dd className="font-medium text-foreground">
            ${pricePerActiveDose.toFixed(2)}
            {showNormalizedNote && (
              <span className="mt-1 block text-xs font-normal text-muted">
                {displayLabels.priceNormalizationNote}
              </span>
            )}
          </dd>
        </div>
      </dl>

      <div className="mt-4">
        <p className="text-xs font-medium uppercase tracking-wide text-muted">Active ingredient</p>
        <ul className="mt-1 space-y-1 text-sm text-foreground">
          {supplementFacts.ingredients.map((ing) => (
            <li key={ing.name}>
              {ing.name}: {ing.amount}
            </li>
          ))}
        </ul>
      </div>

      {supplementFacts.otherIngredients.length > 0 && (
        <div className="mt-4">
          <p className="text-xs font-medium uppercase tracking-wide text-muted">Other ingredients</p>
          <p className="mt-1 text-sm text-foreground">
            {supplementFacts.otherIngredients.join(", ")}
          </p>
        </div>
      )}

      <div className="mt-4">
        <p className="text-xs font-medium uppercase tracking-wide text-muted">Allergens</p>
        <p className="mt-1 text-sm text-foreground">{allergenText}</p>
      </div>

      <p className="mt-4 text-xs text-muted">
        Manual dated prices only — not live retailer prices. Check current price at the retailer
        before buying.
      </p>
    </div>
  );
}
