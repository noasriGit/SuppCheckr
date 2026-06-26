import type { Category } from "@/lib/schemas/category";

export type CategoryDisplayLabels = {
  activeDoseLabel: string;
  priceNormalizationLabel: string;
  priceNormalizationDescription: string;
  priceNormalizationSortLabel: string;
  priceNormalizationNote: string;
  ingredientReferenceLabel: string;
  ingredientPageLinkLabel: string;
  comparisonCtaLabel: string;
  exploreCategoryHeading: string;
};

const DEFAULT_LABELS: CategoryDisplayLabels = {
  activeDoseLabel: "Active ingredient per serving",
  priceNormalizationLabel: "Price / active dose",
  priceNormalizationDescription: "Price per active dose",
  priceNormalizationSortLabel: "Price per active dose",
  priceNormalizationNote:
    "Normalized because this label serving is not exactly one standard active dose.",
  ingredientReferenceLabel: "Ingredient reference",
  ingredientPageLinkLabel: "Ingredient reference",
  comparisonCtaLabel: "Compare products",
  exploreCategoryHeading: "Explore content",
};

type CategoryLabelFields = Pick<
  Category,
  | "name"
  | "activeDoseLabel"
  | "priceNormalizationLabel"
  | "priceNormalizationDescription"
  | "priceNormalizationSortLabel"
  | "priceNormalizationNote"
  | "ingredientReferenceLabel"
  | "ingredientPageLinkLabel"
  | "comparisonCtaLabel"
  | "exploreCategoryHeading"
>;

export function resolveCategoryDisplayLabels(
  category?: CategoryLabelFields | null,
): CategoryDisplayLabels {
  if (!category) return DEFAULT_LABELS;

  return {
    activeDoseLabel: category.activeDoseLabel ?? DEFAULT_LABELS.activeDoseLabel,
    priceNormalizationLabel:
      category.priceNormalizationLabel ?? DEFAULT_LABELS.priceNormalizationLabel,
    priceNormalizationDescription:
      category.priceNormalizationDescription ?? DEFAULT_LABELS.priceNormalizationDescription,
    priceNormalizationSortLabel:
      category.priceNormalizationSortLabel ?? DEFAULT_LABELS.priceNormalizationSortLabel,
    priceNormalizationNote:
      category.priceNormalizationNote ?? DEFAULT_LABELS.priceNormalizationNote,
    ingredientReferenceLabel:
      category.ingredientReferenceLabel ?? DEFAULT_LABELS.ingredientReferenceLabel,
    ingredientPageLinkLabel:
      category.ingredientPageLinkLabel ?? DEFAULT_LABELS.ingredientPageLinkLabel,
    comparisonCtaLabel: category.comparisonCtaLabel ?? DEFAULT_LABELS.comparisonCtaLabel,
    exploreCategoryHeading:
      category.exploreCategoryHeading ??
      (category.name
        ? `Explore ${category.name.toLowerCase()} content`
        : DEFAULT_LABELS.exploreCategoryHeading),
  };
}

export { DEFAULT_LABELS as defaultCategoryDisplayLabels };
