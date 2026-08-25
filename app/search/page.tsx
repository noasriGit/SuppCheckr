import { buildPageMetadata } from "@/lib/seo/metadata";
import { SearchClient } from "@/components/search/SearchClient";
import { getSearchIndexEntries } from "@/lib/seo/searchIndex";

export const metadata = buildPageMetadata({
  title: "Search",
  description: "Search indexable SuppCheckr site pages.",
  path: "/search",
});

export default function SearchPage() {
  return <SearchClient index={getSearchIndexEntries()} />;
}
