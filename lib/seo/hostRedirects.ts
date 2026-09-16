/** Permanent apex → www redirects that should match the live Vercel host policy. */
export function canonicalHostRedirects() {
  return [
    {
      source: "/:path*",
      has: [{ type: "host" as const, value: "suppcheckr.com" }],
      destination: "https://www.suppcheckr.com/:path*",
      permanent: true,
    },
  ];
}
