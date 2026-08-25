import { describe, expect, it } from "vitest";
import { seoTemplates } from "@/config/seo";
import {
  resolveDocumentTitle,
  siteNameOccurrenceCount,
  stripSiteNameSuffix,
} from "@/lib/seo/titles";
import { buildPageMetadata, buildRobots } from "@/lib/seo/metadata";
import {
  getIndexableBrands,
  getIndexableCategories,
  getIndexableGuides,
  getIndexableIngredients,
  getIndexableProducts,
  getBrands,
} from "@/lib/content/loader";

describe("document titles", () => {
  it("strips duplicated site-name suffixes without removing custom keywords", () => {
    expect(stripSiteNameSuffix("Nutricost Creatine Monohydrate 500 g Review | SuppCheckr")).toBe(
      "Nutricost Creatine Monohydrate 500 g Review",
    );
    expect(
      stripSiteNameSuffix("Nutricost Creatine Monohydrate Review | SuppCheckr | SuppCheckr"),
    ).toBe("Nutricost Creatine Monohydrate Review");
  });

  it("appends SuppCheckr once when the title does not already include the site name", () => {
    expect(resolveDocumentTitle("BulkSupplements Creatine Monohydrate 1 kg Review | SuppCheckr")).toBe(
      "BulkSupplements Creatine Monohydrate 1 kg Review | SuppCheckr",
    );
    expect(resolveDocumentTitle("Review Methodology")).toBe("Review Methodology | SuppCheckr");
  });

  it("does not duplicate SuppCheckr when the title already uses the site name", () => {
    expect(resolveDocumentTitle("SuppCheckr | Check the Supplement Before You Buy")).toBe(
      "SuppCheckr | Check the Supplement Before You Buy",
    );
    expect(resolveDocumentTitle("About SuppCheckr")).toBe("About SuppCheckr");
  });

  it("keeps a single SuppCheckr occurrence for representative indexable titles", () => {
    const titles = [
      resolveDocumentTitle(seoTemplates.home.title),
      resolveDocumentTitle(seoTemplates.supplementsIndex.title),
      resolveDocumentTitle(seoTemplates.guidesIndex.title),
      resolveDocumentTitle(seoTemplates.category("Creatine").title),
      resolveDocumentTitle(seoTemplates.product("Creatine Powder", "Nutricost").title),
      resolveDocumentTitle(seoTemplates.ingredient("Creatine Monohydrate").title),
      resolveDocumentTitle(seoTemplates.brand("NOW Foods").title),
    ];

    for (const product of getIndexableProducts()) {
      const brand = getBrands().find((b) => b.id === product.brandId);
      titles.push(
        resolveDocumentTitle(
          product.seo.title ?? seoTemplates.product(product.name, brand?.name ?? "Brand").title,
        ),
      );
    }
    for (const category of getIndexableCategories()) {
      titles.push(resolveDocumentTitle(category.seo.title ?? seoTemplates.category(category.name).title));
    }
    for (const guide of getIndexableGuides()) {
      titles.push(resolveDocumentTitle(guide.title));
    }
    for (const ingredient of getIndexableIngredients()) {
      titles.push(resolveDocumentTitle(seoTemplates.ingredient(ingredient.name).title));
    }
    for (const brand of getIndexableBrands()) {
      titles.push(resolveDocumentTitle(seoTemplates.brand(brand.name).title));
    }

    for (const title of titles) {
      expect(siteNameOccurrenceCount(title)).toBe(1);
      expect(title).not.toMatch(/SuppCheckr\s*\|\s*SuppCheckr/i);
    }
  });

  it("emits absolute metadata titles so the layout template cannot double the suffix", () => {
    const metadata = buildPageMetadata({
      title: "Nutricost Creatine Monohydrate 500 g Review | SuppCheckr",
      description: "Test",
      path: "/supplements/creatine/products/nutricost-creatine-monohydrate-500g",
    });
    expect(metadata.title).toEqual({
      absolute: "Nutricost Creatine Monohydrate 500 g Review | SuppCheckr",
    });
    expect(metadata.openGraph?.title).toBe(
      "Nutricost Creatine Monohydrate 500 g Review | SuppCheckr",
    );
  });

  it("uses noindex, follow for utility pages unless crawlers are fully blocked", () => {
    expect(buildRobots(true)).toEqual({ index: false, follow: true });
    expect(buildRobots(false)).toEqual({ index: true, follow: true });
  });

  it("does not put placeholder product images in social metadata", () => {
    const metadata = buildPageMetadata({
      title: "NOW Sports Creatine Monohydrate 750 mg Veg Capsules Review",
      description: "Test",
      path: "/supplements/creatine/products/now-sports-creatine-monohydrate-capsules-120",
      image: { src: "/images/products/placeholder.svg", alt: "placeholder" },
    });
    expect(metadata.openGraph?.images).toBeUndefined();
  });
});
