import { buildPageMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout, ProseSection } from "@/components/legal/LegalPageLayout";
import { siteConfig } from "@/config/site";

export const metadata = buildPageMetadata({
  title: "Contact",
  description: "Contact SuppCheckr.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <LegalPageLayout title="Contact">
      <ProseSection title="Get in touch">
        For corrections, partnerships, or general questions, email{" "}
        <a href={`mailto:${siteConfig.contactEmail}`} className="text-link hover:text-link-hover hover:underline">
          {siteConfig.contactEmail}
        </a>
        .
      </ProseSection>
      <form className="mt-6 max-w-md space-y-4" action="#">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground">
            Name
          </label>
          <input id="name" name="name" type="text" className="mt-1 w-full rounded border border-input-border bg-input-bg px-3 py-2 text-sm text-foreground" disabled />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground">
            Email
          </label>
          <input id="email" name="email" type="email" className="mt-1 w-full rounded border border-input-border bg-input-bg px-3 py-2 text-sm text-foreground" disabled />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground">
            Message
          </label>
          <textarea id="message" name="message" rows={4} className="mt-1 w-full rounded border border-input-border bg-input-bg px-3 py-2 text-sm text-foreground" disabled />
        </div>
        <button type="button" disabled className="rounded bg-surface-elevated px-4 py-2 text-sm text-muted opacity-60">
          Send (placeholder)
        </button>
      </form>
    </LegalPageLayout>
  );
}
