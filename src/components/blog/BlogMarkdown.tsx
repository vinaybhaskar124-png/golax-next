"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const slugifyHeading = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const headingText = (children: React.ReactNode): string => {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(headingText).join("");
  const maybeEl = children as { props?: { children?: React.ReactNode } } | null;
  if (maybeEl && typeof maybeEl === "object" && "props" in maybeEl) {
    return headingText(maybeEl.props?.children);
  }
  return "";
};

export default function BlogMarkdown({ content }: { content: string }) {
  return (
    <div className="blog-prose min-w-0 max-w-full">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => {
            const id = slugifyHeading(headingText(children));
            return (
              <h2
                id={id}
                className="scroll-mt-28 sm:scroll-mt-32 font-heading text-xl sm:text-2xl md:text-3xl font-bold mt-8 sm:mt-12 mb-4 sm:mb-5 first:mt-0 tracking-tight break-words"
              >
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {children}
                </span>
              </h2>
            );
          },
          h3: ({ children }) => {
            const id = slugifyHeading(headingText(children));
            return (
              <h3
                id={id}
                className="scroll-mt-28 sm:scroll-mt-32 font-heading text-lg sm:text-xl md:text-2xl font-semibold text-foreground mt-6 sm:mt-8 mb-2 sm:mb-3 tracking-tight break-words"
              >
                {children}
              </h3>
            );
          },
          p: ({ children }) => (
            <p className="text-muted-foreground leading-[1.75] sm:leading-[1.85] text-[15px] sm:text-base md:text-[17px] mb-4 sm:mb-5 break-words">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="my-4 sm:my-6 space-y-2 sm:space-y-2.5 list-none pl-0">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="my-4 sm:my-6 space-y-2 sm:space-y-2.5 list-decimal pl-4 sm:pl-5 marker:text-primary marker:font-semibold">
              {children}
            </ol>
          ),
          li: ({ children, node }) => {
            const parent = (node as { parent?: { tagName?: string } })?.parent;
            const isOrdered = parent?.tagName === "ol";
            if (isOrdered) {
              return (
                <li className="text-muted-foreground leading-[1.75] sm:leading-[1.8] text-[15px] sm:text-base md:text-[17px] pl-0.5 break-words">
                  {children}
                </li>
              );
            }
            return (
              <li className="flex gap-2.5 sm:gap-3 items-start text-muted-foreground leading-[1.75] sm:leading-[1.8] text-[15px] sm:text-base md:text-[17px] min-w-0">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0 mt-1" />
                <span className="min-w-0 break-words">{children}</span>
              </li>
            );
          },
          strong: ({ children }) => (
            <strong className="text-foreground font-semibold break-words">{children}</strong>
          ),
          a: ({ children, href }) => {
            const isInternal = href?.startsWith("/");
            const className =
              "text-primary font-medium underline decoration-primary/30 underline-offset-[3px] hover:decoration-primary transition-colors break-words";
            if (isInternal && href) {
              return (
                <Link href={href} className={className}>
                  {children}
                </Link>
              );
            }
            return (
              <a href={href} className={className} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            );
          },
          blockquote: ({ children }) => (
            <blockquote className="my-6 sm:my-8 relative pl-4 sm:pl-5 md:pl-6 border-l-4 border-accent bg-accent/5 py-4 sm:py-5 pr-3 sm:pr-5 rounded-r-xl break-words">
              <div className="text-foreground/90 italic leading-relaxed text-[15px] sm:text-base">{children}</div>
            </blockquote>
          ),
          pre: ({ children }) => (
            <pre className="my-5 sm:my-6 max-w-full overflow-x-auto rounded-xl border border-border bg-muted/60 p-3 sm:p-4 text-xs sm:text-sm leading-relaxed">
              {children}
            </pre>
          ),
          code: ({ children, className }) => {
            const isBlock = className?.includes("language-");
            if (isBlock) {
              return (
                <code className="block font-mono text-inherit whitespace-pre-wrap break-words">
                  {children}
                </code>
              );
            }
            return (
              <code className="bg-muted text-primary px-1.5 py-0.5 rounded-md font-mono text-[0.85em] sm:text-[0.9em] break-words">
                {children}
              </code>
            );
          },
          img: ({ src, alt }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={src} alt={alt ?? ""} className="my-6 max-w-full h-auto rounded-xl border border-border" loading="lazy" />
          ),
          hr: () => <hr className="my-8 sm:my-10 border-border/80" />,
          table: ({ children }) => (
            <div className="my-6 sm:my-8 w-full max-w-full overflow-x-auto overscroll-x-contain rounded-xl border border-border bg-background shadow-sm [-webkit-overflow-scrolling:touch]">
              <table className="w-full min-w-[520px] text-xs sm:text-sm">{children}</table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-gradient-to-r from-primary/8 to-accent/8">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="px-2.5 py-2.5 sm:px-4 sm:py-3.5 text-left font-heading font-semibold text-foreground border-b border-border align-top whitespace-normal sm:whitespace-nowrap">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-2.5 py-2.5 sm:px-4 sm:py-3.5 text-muted-foreground border-b border-border/50 align-top whitespace-normal break-words">
              {children}
            </td>
          ),
          tr: ({ children }) => (
            <tr className="hover:bg-muted/30 transition-colors">{children}</tr>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
