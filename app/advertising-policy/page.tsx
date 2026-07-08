import { buildPageMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout, ProseSection } from "@/components/legal/LegalPageLayout";

export const metadata = buildPageMetadata({
  title: "Advertising Policy",
  description:
    "How SuppCheckr handles ad placeholders, future advertising, and editorial separation.",
  path: "/advertising-policy",
});

export default function AdvertisingPolicyPage() {
  return (
    <LegalPageLayout title="Advertising Policy" requiresLegalReview lastUpdated="2026-07-07">
      <ProseSection title="Current status">
        <p>
          <strong>Live ad scripts are currently disabled on SuppCheckr.</strong> Third-party
          ad networks such as Google AdSense are not loading tracking or serving scripts in
          the current site configuration.
        </p>
        <p className="mt-2">
          During prelaunch, you may still see labeled advertisement placeholders on some
          pages. These placeholders show where ads may appear in the future and do not
          collect ad personalization data or serve paid impressions.
        </p>
      </ProseSection>

      <ProseSection title="Future advertising and sponsorships">
        <p>
          SuppCheckr may display third-party ads, sponsorships, or paid placements in the
          future if advertising is enabled. When that happens, paid content should be
          visually distinguishable from editorial reviews, comparisons, scores, and
          navigation.
        </p>
        <p className="mt-2">
          Advertisers and sponsors should not control SuppCheckr editorial ratings, testing
          status notes, product caveats, ingredient analysis, or medical or safety
          conclusions.
        </p>
      </ProseSection>

      <ProseSection title="Placement principles">
        <p>If live ads are enabled in the future, SuppCheckr intends to:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>keep ads visually separated from editorial content where reasonably possible;</li>
          <li>
            avoid placing ads in ways that could be confused with product recommendations
            or comparison controls;
          </li>
          <li>
            exclude or limit ads on sensitive pages such as legal pages, the medical
            disclaimer, and contact pages;
          </li>
          <li>
            label sponsorships or paid placements clearly when they are not standard
            display advertising.
          </li>
        </ul>
      </ProseSection>

      <ProseSection title="Advertising standards">
        <p>
          SuppCheckr should not knowingly accept advertising that requires misleading
          supplement claims, disease-treatment claims, or statements that supplements are
          FDA-approved cures or safe for everyone without qualification.
        </p>
        <p className="mt-2">
          Inclusion of an ad does not mean SuppCheckr endorses the advertised product,
          service, or claim.
        </p>
      </ProseSection>

      <ProseSection title="Personalization and cookies">
        <p>
          If ad tools are enabled in the future, they may use cookies or similar
          technologies for measurement, frequency capping, or ad personalization. Any such
          use should be described in our{" "}
          <a href="/privacy-policy" className="text-link underline">
            Privacy Policy
          </a>{" "}
          and disclosed as required by applicable law.
        </p>
        <p className="mt-2">
          As of the date below, live ad scripts are disabled and ad placeholders do not
          perform ad personalization.
        </p>
      </ProseSection>

      <ProseSection title="Affiliate links are separate from display ads">
        <p>
          Amazon affiliate links and other affiliate purchase links are governed by our{" "}
          <a href="/affiliate-disclosure" className="text-link underline">
            Affiliate Disclosure
          </a>
          , not this Advertising Policy. Affiliate links may be active on some product pages
          even while live display ad scripts remain disabled.
        </p>
      </ProseSection>

      <ProseSection title="Changes">
        <p>
          We may update this Advertising Policy when ad programs launch or site placement
          rules change. Updates will be reflected in the &ldquo;Last updated&rdquo; date at
          the top of this page.
        </p>
      </ProseSection>
    </LegalPageLayout>
  );
}
