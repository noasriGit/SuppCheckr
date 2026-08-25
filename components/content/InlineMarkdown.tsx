import Link from "next/link";

export function InlineMarkdown({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);

  return (
    <>
      {parts.map((part, index) => {
        const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!linkMatch) {
          return <span key={index}>{part}</span>;
        }

        const [, label, href] = linkMatch;
        const external = /^https?:\/\//i.test(href);
        if (external) {
          return (
            <a
              key={index}
              href={href}
              className="text-link underline hover:text-link-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          );
        }

        return (
          <Link
            key={index}
            href={href}
            className="text-link underline hover:text-link-hover"
          >
            {label}
          </Link>
        );
      })}
    </>
  );
}
