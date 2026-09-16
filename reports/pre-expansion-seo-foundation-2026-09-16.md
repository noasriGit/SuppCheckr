# Pre-expansion SEO foundation — 2026-09-16

Repair and verification notes for the pre-CoQ10 expansion pass. This report does **not** publish or build the CoQ10 cluster.

## External source-link validation

Ahrefs flagged four external URLs as 4xx/403. Checked 2026-09-16. Citations were **not** removed solely because an automated crawler received 403.

| Flagged URL | Browser / fetch result | Decision |
| --- | --- | --- |
| USP/Nature Made search: `https://www.quality-supplements.org/usp_verified_products?search_api_fulltext=Nature+Made+Extra+Strength+Vitamin+C&term%5B0%5D=brand%3ANature+Made` | Live USP Verified Products search results loaded. Listed Nature Made Extra Strength items (gummies, B12, D3, etc.) still **do not** include Extra Strength Vitamin C 1000 mg tablets. Hub `https://www.quality-supplements.org/verified-products` also works. | **Keep.** The query URL documents the negative database search that supports the “retailer USP badge, not independently verified” claim. Replacing it with the hub would weaken that support. Ahrefs 4xx is consistent with bot/query-param blocking, not a dead citation. |
| Thorne homepage: `https://www.thorne.com` | Homepage loaded with current Thorne catalog/marketing content. | **Keep.** User-accessible. Ahrefs 403 is consistent with bot protection. |
| Thorne Catalyte product: `https://www.thorne.com/products/dp/catalyte-lemon-lime` | URL still resolves on Thorne’s domain. Automated and browser-tool fetches showed a product-shell / supplements listing without a usable Supplement Facts panel — the same official-PDP gap already documented in the Catalyte review. Alternate path `/products/sports-performance/dp/catalyte-lemon-lime` also failed to expose a complete label panel. NSF listing `https://www.nsfsport.com/certified-products/listing-detail.php?id=1286726` remains the independent certification source. | **Keep.** Do not replace with a marketing/explore URL or a retailer page that would change the claim. Official brand PDP remains sparse/bot-gated; label lock stays on the cited Vitacost/iHerb retailer panel. |
| Informed Choice ON creatine: `https://choice.wetestyoutrust.com/supplement-search/optimum-nutrition/micronized-creatine-powder` | Cloudflare bot challenge (“Performing security verification”). | **Keep.** Product-specific Informed Choice URL; 403/challenge is bot protection, not proof the listing is gone. ON support article remains a second cited source. |

## Creatine product-fact refresh

Official label sources and reviewed SKUs were re-checked. **Dated retailer prices were not updated** because the exact current SKU price could not be verified without relying on Amazon listings or ambiguous variant pages.

| Product | Official / cited label source | SKU still matches review? | Price | Images |
| --- | --- | --- | --- | --- |
| NOW Sports Creatine Monohydrate 750 mg Veg Capsules (120) | Brand page `https://www.nowfoods.com/products/sports-nutrition/creatine-monohydrate-750-mg-veg-capsules` | Cited SKU unchanged in content. Brand page is Cloudflare-protected for automated fetch; label facts were **not** re-locked from a new live panel. | Keep **$11.62 / 2026-06-26**. Could not verify a current official price for this exact SKU. | Placeholder remains. |
| Nutricost Creatine Monohydrate Powder (500 g, unflavored) | Brand page `https://nutricost.com/products/nutricost-creatine-monohydrate-powder-500-grams`; label lock remains the cited iHerb listing. | Page is a variant product URL mentioning both 500 g and 1 kg. Could not isolate the unflavored 500 g SKU from the live page alone. | Keep **$23.97 / 2026-06-26**. A visible **$18.97** figure appeared, but it was not confirmed as the exact unflavored 500 g SKU. | Placeholder remains. |
| BulkSupplements Creatine Monohydrate (Micronized) Powder (1 kg) | Brand page `https://www.bulksupplements.com/products/creatine-monohydrate` | Serving size still **2 tsp (about 5 g)**; other ingredients still **none**; suggested use still includes a **7 g** maintenance option. 1 kg remains a listed size in reviews, but the page is a size-variant PDP. | Keep **$31.97 / 2026-06-26**. A **$24.97** sale figure appeared without a confirmed selected 1 kg variant. | Placeholder remains. |

Review dates were **not** bumped. Amazon reviews, ratings, Q&A, and listing images were not used.

## Product image-sourcing checklist

Licensed or brand-approved pack shots could not be confirmed. Leave `/images/products/placeholder.svg` in place until rights are clear.

For each of the three creatine reviews (and other product pages still on placeholders):

1. Confirm whether the brand, retailer, or a licensed pack-shot vendor grants website reuse (written permission, brand asset license, or public-domain/CC terms that allow commercial editorial use).
2. Do **not** copy Amazon, iHerb, Vitacost, or Target listing photos without an explicit reuse right.
3. Prefer brand-provided press/product assets that match the **exact reviewed SKU** (count, flavor, capsule vs powder, 500 g vs 1 kg).
4. Store the local file under `public/images/products/`, set `images.product.src` and descriptive `alt`, and record attribution plus the permission source in YAML.
5. Re-run JSON-LD tests: placeholder images must stay out of Product structured data; only confirmed non-placeholder images may appear.
6. Keep label images null unless the label scan itself is rights-cleared.

## Manual Search Console follow-up

**Not completed in this pass** (no Search Console write access from this workspace):

1. If the **non-www** property `https://suppcheckr.com` still has a sitemap submitted, remove that sitemap from the apex property. The live canonical host is `https://www.suppcheckr.com`.
2. Confirm the www property sitemap is `https://www.suppcheckr.com/sitemap.xml` only.
3. Do **not** treat Search Console’s sitemap “indexed: 0” counter as proof of sitewide deindexing; ranking queries and impressions are already present on 50+ pages.
4. After deploy, inspect live title/description for the five priority URLs and request indexing only if snippets are stale.

## Canonical / sitemap verification (code)

- Canonical origin remains `https://www.suppcheckr.com` (`config/site.ts`, `lib/seo/canonical.ts`).
- `next.config.ts` now includes a permanent apex-host redirect to www (in addition to the existing Vercel domain redirect).
- XML sitemap builder emits only www URLs and omits draft, placeholder, archived, and noindex entities.
- `robots.txt` references `${CANONICAL_ORIGIN}/sitemap.xml` only.

## CoQ10 readiness

The repository is **not** ready to publish the CoQ10 cluster. This pass only repairs Markdown rendering, snippets, CI, Speed Insights, and citation/canonical verification. CoQ10 category/ingredient shells remain draft/noindex; local CoQ10 research files were left uncommitted and unpublished.
