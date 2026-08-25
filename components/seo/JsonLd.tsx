import { serializeJsonLd, type JsonLdObject } from "@/lib/seo/jsonld";

export function JsonLd({ data }: { data: JsonLdObject | null | undefined }) {
  if (!data) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
