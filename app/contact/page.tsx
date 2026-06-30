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
        For corrections, editorial feedback, partnerships, or general questions, email{" "}
        <a href={`mailto:${siteConfig.contactEmail}`} className="text-link hover:text-link-hover hover:underline">
          {siteConfig.contactEmail}
        </a>
        .
      </ProseSection>
      <ProseSection title="What to expect">
        SuppCheckr provides informational supplement comparison content only — not medical
        advice. Affiliate links are disabled during prelaunch. For legal, privacy, affiliate,
        and advertising policies, see the Trust links in the site footer.
      </ProseSection>
    </LegalPageLayout>
  );
}
