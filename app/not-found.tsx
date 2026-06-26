import Link from "next/link";
import { PageContainer } from "@/components/layout/SiteChrome";

export default function NotFound() {
  return (
    <PageContainer className="py-16 text-center">
      <h1 className="text-4xl font-bold text-heading">404</h1>
      <p className="mt-4 text-foreground">This page could not be found.</p>
      <Link href="/" className="mt-6 inline-block text-link hover:text-link-hover hover:underline">
        Return home
      </Link>
    </PageContainer>
  );
}
