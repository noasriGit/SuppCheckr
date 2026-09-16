import { describe, expect, it } from "vitest";
import {
  getIndexableBrands,
  getIndexableIngredients,
} from "@/lib/content/loader";
import {
  DESCRIPTION_MAX_LENGTH,
  DESCRIPTION_MIN_LENGTH,
  PRIORITY_SEO_PATHS,
  TITLE_MAX_LENGTH,
  brandMetaDescription,
  collectIndexablePageMetadata,
  ingredientMetaDescription,
} from "@/lib/seo/entityMetadata";
import { siteNameOccurrenceCount } from "@/lib/seo/titles";

describe("indexable page metadata", () => {
  it("gives every indexable page a nonempty title and description", () => {
    const pages = collectIndexablePageMetadata();
    expect(pages.length).toBeGreaterThan(20);
    for (const page of pages) {
      expect(page.title.trim(), page.path).not.toBe("");
      expect(page.description.trim(), page.path).not.toBe("");
    }
  });

  it("does not accidentally repeat SuppCheckr in generated titles", () => {
    for (const page of collectIndexablePageMetadata()) {
      expect(siteNameOccurrenceCount(page.title), page.path).toBe(1);
      expect(page.title, page.path).not.toMatch(/SuppCheckr\s*\|\s*SuppCheckr/i);
    }
  });

  it("keeps priority-page titles and descriptions within search-snippet length", () => {
    const pages = collectIndexablePageMetadata();
    for (const path of PRIORITY_SEO_PATHS) {
      const page = pages.find((entry) => entry.path === path);
      expect(page, path).toBeDefined();
      expect(page!.title.length, `${path} title: ${page!.title}`).toBeLessThanOrEqual(
        TITLE_MAX_LENGTH,
      );
      expect(page!.description.length, `${path} description`).toBeGreaterThanOrEqual(
        DESCRIPTION_MIN_LENGTH,
      );
      expect(page!.description.length, `${path} description`).toBeLessThanOrEqual(
        DESCRIPTION_MAX_LENGTH,
      );
    }
  });

  it("keeps titles unique and content descriptions unique", () => {
    const pages = collectIndexablePageMetadata();
    const titles = pages.map((page) => page.title);
    expect(new Set(titles).size).toBe(titles.length);

    const contentDescriptions = pages
      .filter((page) => page.kind !== "static")
      .map((page) => page.description);
    expect(new Set(contentDescriptions).size).toBe(contentDescriptions.length);
  });

  it("programmatically lengthens ingredient and brand descriptions", () => {
    for (const ingredient of getIndexableIngredients()) {
      const description = ingredientMetaDescription(ingredient);
      expect(description.length, ingredient.slug).toBeGreaterThanOrEqual(DESCRIPTION_MIN_LENGTH);
      expect(description.length, ingredient.slug).toBeLessThanOrEqual(DESCRIPTION_MAX_LENGTH);
      expect(description).toContain(ingredient.name);
      expect(description).not.toMatch(/^Ingredient reference for .+ on SuppCheckr\.?$/);
    }

    for (const brand of getIndexableBrands()) {
      const description = brandMetaDescription(brand);
      expect(description.length, brand.slug).toBeGreaterThanOrEqual(110);
      expect(description.length, brand.slug).toBeLessThanOrEqual(DESCRIPTION_MAX_LENGTH);
      expect(description).toContain(brand.name);
      expect(description.toLowerCase()).toContain("not a manufacturer website");
    }
  });
});
