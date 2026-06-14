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
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h2: ({ children }) => {
          const id = slugifyHeading(headingText(children));
          return (
            <h2
              id={id}
              className="scroll-mt-32 font-heading text-2xl md:text-3xl font-bold mt-12 mb-5 first:mt-0 tracking-tight"
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
              className="scroll-mt-32 font-heading text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3 tracking-tight"
            >
              {children}
            </h3>
          );
        },
        p: ({ children }) => (
          <p className="text-muted-foreground leading-[1.85] text-base md:text-[17px] mb-5">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="my-6 space-y-2.5 list-none pl-0">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="my-6 space-y-2.5 list-decimal pl-5 marker:text-primary marker:font-semibold">
            {children}
          </ol>
        ),
        li: ({ children, node }) => {
          const parent = (node as { parent?: { tagName?: string } })?.parent;
          const isOrdered = parent?.tagName === "ol";
          if (isOrdered) {
            return (
              <li className="text-muted-foreground leading-[1.8] text-base md:text-[17px] pl-1">
                {children}
              </li>
            );
          }
          return (
            <li className="flex gap-3 items-start text-muted-foreground leading-[1.8] text-base md:text-[17px]">
              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <span>{children}</span>
            </li>
          );
        },
        strong: ({ children }) => (
          <strong className="text-foreground font-semibold">{children}</strong>
        ),
        a: ({ children, href }) => {
          const isInternal = href?.startsWith("/");
          const className =
            "text-primary font-medium underline decoration-primary/30 underline-offset-[3px] hover:decoration-primary transition-colors";
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
          <blockquote className="my-8 relative pl-5 md:pl-6 border-l-4 border-accent bg-accent/5 py-5 pr-5 rounded-r-xl">
            <div className="text-foreground/90 italic leading-relaxed">{children}</div>
          </blockquote>
        ),
        code: ({ children }) => (
          <code className="bg-muted text-primary px-1.5 py-0.5 rounded-md font-mono text-[0.9em]">
            {children}
          </code>
        ),
        hr: () => <hr className="my-10 border-border/80" />,
        table: ({ children }) => (
          <div className="my-8 overflow-x-auto rounded-xl border border-border bg-background shadow-sm">
            <table className="w-full min-w-[480px] text-sm">{children}</table>
          </div>
        ),
        thead: ({ children }) => (
          <thead className="bg-gradient-to-r from-primary/8 to-accent/8">{children}</thead>
        ),
        th: ({ children }) => (
          <th className="px-4 py-3.5 text-left font-heading font-semibold text-foreground border-b border-border whitespace-nowrap">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="px-4 py-3.5 text-muted-foreground border-b border-border/50 align-top">
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
  );
}
