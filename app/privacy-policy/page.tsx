import { buildPageMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout, ProseSection } from "@/components/legal/LegalPageLayout";
import { siteConfig } from "@/config/site";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "How SuppCheckr may collect, use, and protect information when you use the site.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" requiresLegalReview lastUpdated="2026-07-07">
      <ProseSection title="Site operator (draft — legal review required)">
        <p>
          SuppCheckr is operated by NV Digital Consulting LLC, a Virginia limited liability
          company based in Prince William County, Virginia. For questions, contact{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="text-link underline">
            {siteConfig.contactEmail}
          </a>
          .
        </p>
        <p className="mt-2">
          <strong>Attorney/human review note:</strong> Confirm whether a separate public
          mailing address, registered agent address, or state filing detail should be
          included before publication. No residential street address is listed on this page.
        </p>
      </ProseSection>

      <ProseSection title="Overview">
        <p>
          SuppCheckr (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates{" "}
          {siteConfig.url} as an informational supplement comparison and review site. This
          Privacy Policy explains what information we may collect, how we may use it, and
          choices that may be available to you.
        </p>
        <p className="mt-2">
          This page is a draft prepared for later legal review. It is not a guarantee of
          compliance with any specific privacy law.
        </p>
        <p className="mt-2">
          SuppCheckr is operated from the United States and is primarily intended for users in
          the United States. If you access the Site from outside the United States, you are
          responsible for understanding any local laws that may apply.
        </p>
      </ProseSection>

      <ProseSection title="Current data practices">
        <p className="mb-3">
          The table below summarizes SuppCheckr&apos;s current data-related features. This is
          not a complete list of every technical process on the site.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-table-header text-left">
              <tr>
                <th className="px-4 py-3 font-medium text-heading">Practice</th>
                <th className="px-4 py-3 font-medium text-heading">Current status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-table-row-border">
                <td className="px-4 py-3 text-foreground">User accounts</td>
                <td className="px-4 py-3 text-foreground">Not currently offered.</td>
              </tr>
              <tr className="border-t border-table-row-border">
                <td className="px-4 py-3 text-foreground">Checkout / direct supplement sales</td>
                <td className="px-4 py-3 text-foreground">Not currently offered.</td>
              </tr>
              <tr className="border-t border-table-row-border">
                <td className="px-4 py-3 text-foreground">Contact form</td>
                <td className="px-4 py-3 text-foreground">
                  Not currently offered. Users contact SuppCheckr by email.
                </td>
              </tr>
              <tr className="border-t border-table-row-border">
                <td className="px-4 py-3 text-foreground">Email contact</td>
                <td className="px-4 py-3 text-foreground">
                  Users may email{" "}
                  <a href={`mailto:${siteConfig.contactEmail}`} className="text-link underline">
                    {siteConfig.contactEmail}
                  </a>
                  .
                </td>
              </tr>
              <tr className="border-t border-table-row-border">
                <td className="px-4 py-3 text-foreground">Analytics</td>
                <td className="px-4 py-3 text-foreground">
                  Vercel Web Analytics, hosting logs, and basic server logs may be used to
                  understand traffic and operate the site.
                </td>
              </tr>
              <tr className="border-t border-table-row-border">
                <td className="px-4 py-3 text-foreground">Affiliate links</td>
                <td className="px-4 py-3 text-foreground">
                  Amazon and other outbound retailer links may be used on some product pages.
                </td>
              </tr>
              <tr className="border-t border-table-row-border">
                <td className="px-4 py-3 text-foreground">Display ads</td>
                <td className="px-4 py-3 text-foreground">Currently disabled.</td>
              </tr>
              <tr className="border-t border-table-row-border">
                <td className="px-4 py-3 text-foreground">Sensitive health information</td>
                <td className="px-4 py-3 text-foreground">Not intentionally collected.</td>
              </tr>
              <tr className="border-t border-table-row-border">
                <td className="px-4 py-3 text-foreground">Comments, reviews, or quizzes</td>
                <td className="px-4 py-3 text-foreground">Not currently offered.</td>
              </tr>
              <tr className="border-t border-table-row-border">
                <td className="px-4 py-3 text-foreground">Product purchases</td>
                <td className="px-4 py-3 text-foreground">
                  Completed on third-party retailer sites, not on SuppCheckr.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </ProseSection>

      <ProseSection title="What SuppCheckr does not collect by default">
        <p>
          SuppCheckr does not currently provide user accounts, checkout, or direct supplement
          sales. We do not intentionally collect sensitive health information, payment card
          data, or prescription details through the site. You may contact SuppCheckr by email
          at{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="text-link underline">
            {siteConfig.contactEmail}
          </a>
          . There is no backend contact form.
        </p>
      </ProseSection>

      <ProseSection title="Information we may collect">
        <p>Depending on how you use SuppCheckr, we may collect or receive:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <strong>Information you provide voluntarily</strong>, such as your name and email
            address if you email us for corrections, feedback, or general questions. A
            newsletter or other signup features may be added in the future.
          </li>
          <li>
            <strong>Basic technical information</strong>, such as browser type, device type,
            operating system, pages viewed, referring URLs, approximate location derived
            from IP address, timestamps, and server log data needed to operate and secure
            the site.
          </li>
          <li>
            <strong>Analytics data</strong>, such as pages viewed and referral information,
            through privacy-oriented analytics tools (for example, Vercel Web Analytics) to
            understand traffic patterns and improve content. Additional analytics or
            advertising measurement tools may be enabled in the future. We intend to avoid
            collecting unnecessary personal identifiers through analytics when reasonably
            possible.
          </li>
          <li>
            <strong>Affiliate link activity</strong> — some product pages include Amazon
            affiliate links. When you click those links, you leave SuppCheckr and Amazon or
            other retailers may collect information under their own privacy policies.
            SuppCheckr does not receive your purchase details from retailers. Affiliate
            outbound links may route users to third-party retailers such as Amazon.
          </li>
          <li>
            <strong>Advertising or ad-personalization data</strong> — live third-party ad
            scripts are currently disabled. If display ads are enabled in the future, related
            cookies or measurement tools may be described here and in our{" "}
            <a href="/advertising-policy" className="text-link underline">
              Advertising Policy
            </a>
            .
          </li>
        </ul>
      </ProseSection>

      <ProseSection title="Cookies and local storage">
        <p>
          Like many websites, SuppCheckr may use cookies, local storage, or similar
          technologies in your browser. These small files or stored values help the site
          remember preferences, maintain basic functionality, measure performance, and—if
          enabled in the future—support analytics or advertising tools.
        </p>
        <p className="mt-2">
          You can usually control cookies through your browser settings. Blocking cookies
          may affect some site features.
        </p>
        <p className="mt-2">
          <strong>Attorney/human review note:</strong> Confirm whether cookie banner or
          consent tooling is needed before future ads launch or based on current analytics
          and affiliate click behavior.
        </p>
      </ProseSection>

      <ProseSection title="How we may use information">
        <p>We may use collected information to:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>operate, maintain, and secure the website;</li>
          <li>improve content, navigation, and user experience;</li>
          <li>measure site performance and understand how pages are used;</li>
          <li>detect, prevent, or respond to abuse, fraud, or security issues;</li>
          <li>
            respond if you contact us, request corrections, or subscribe to communications;
          </li>
          <li>comply with applicable legal obligations or enforce our terms.</li>
        </ul>
      </ProseSection>

      <ProseSection title="Sharing and selling">
        <p>
          SuppCheckr does not sell personal information in the ordinary sense of exchanging
          your contact details for money. We may use service providers that help us host,
          analyze, or operate the site, and we may disclose information when required by law
          or to protect rights, safety, and security.
        </p>
        <p className="mt-2">
          If affiliate programs, ad networks, or similar monetization tools are enabled in
          the future, certain data practices required by those tools may be treated as
          &ldquo;sharing&rdquo; or &ldquo;selling&rdquo; under some U.S. state privacy
          laws. If that happens, we intend to update this policy and provide any notices or
          opt-out choices required by applicable law.
        </p>
      </ProseSection>

      <ProseSection title="Your privacy choices and state rights">
        <p>
          Depending on where you live and what laws apply, you may have rights to access,
          delete, correct, or opt out of certain processing of personal information. Some
          U.S. state laws also provide rights related to targeted advertising or profiling.
        </p>
        <p className="mt-2">
          SuppCheckr has not implemented a full compliance program for laws such as the
          California Consumer Privacy Act (CCPA/CPRA), Virginia CDPA, Colorado CPA, or the
          EU General Data Protection Regulation (GDPR). If you believe a law applies to
          you and wish to make a request, contact us using the information below and we
          will respond as reasonably possible.
        </p>
      </ProseSection>

      <ProseSection title="Children">
        <p>
          SuppCheckr is intended for a general adult audience and is not directed to children
          under 13. We do not knowingly collect personal information from children under 13.
          If you believe we have received such information, please contact us so we can review
          and delete it where appropriate.
        </p>
      </ProseSection>

      <ProseSection title="Data retention">
        <p>
          We retain emails, correction requests, support messages, analytics records, and
          related operational records only as long as reasonably necessary to respond, maintain
          records, prevent abuse, resolve disputes, improve the Site, or comply with legal
          obligations.
        </p>
        <p className="mt-2">
          Because SuppCheckr does not currently operate a backend contact form, email
          correspondence sent to{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="text-link underline">
            {siteConfig.contactEmail}
          </a>{" "}
          may be retained as part of ordinary business records. We do not publish fixed
          retention periods unless required by applicable law.
        </p>
      </ProseSection>

      <ProseSection title="Security">
        <p>
          We use reasonable administrative, technical, and organizational safeguards for the
          limited information we process. No website or transmission method is completely secure.
          If a security incident triggers a legal notification obligation, we will provide
          notices as required by applicable law.
        </p>
      </ProseSection>

      <ProseSection title="Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. When we do, we will revise
          the &ldquo;Last updated&rdquo; date at the top of this page. Continued use of the
          site after changes become effective means you accept the updated policy, subject
          to applicable law.
        </p>
      </ProseSection>

      <ProseSection title="Contact">
        <p>
          For privacy-related questions or requests, contact us at{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="text-link underline">
            {siteConfig.contactEmail}
          </a>
          .
        </p>
      </ProseSection>
    </LegalPageLayout>
  );
}
