import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { seoTemplates } from "@/config/seo";
import { PageContainer } from "@/components/layout/SiteChrome";
import { CategoryCard } from "@/components/category/CategoryBlocks";
import { getCategories } from "@/lib/content/loader";

export const metadata = buildPageMetadata({
  title: seoTemplates.supplementsIndex.title,
  description: seoTemplates.supplementsIndex.description,
  path: "/supplements",
});

export default function SupplementsIndexPage() {
  const categories = getCategories();

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold text-heading">Supplement categories</h1>
      <p className="mt-3 max-w-2xl text-foreground">
        Creatine monohydrate and Magnesium are published with product reviews, guides, and
        comparison tables. Additional category shells are not indexed until real content is
        published.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
      <p className="mt-8 text-sm text-muted">
        Looking for comparisons? Visit{" "}
        <Link href="/compare" className="text-link hover:text-link-hover hover:underline">
          Compare
        </Link>
        .
      </p>
    </PageContainer>
  );
}
