import type { NextConfig } from "next";
import path from "node:path";
import { canonicalHostRedirects } from "./lib/seo/hostRedirects";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return canonicalHostRedirects();
  },
};

export default nextConfig;
