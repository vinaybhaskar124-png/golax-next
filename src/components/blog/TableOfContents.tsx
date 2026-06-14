"use client";

import { useEffect, useMemo, useState } from "react";
import { ListTree } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export default function TableOfContents({ content }: { content: string }) {
  const items: TocItem[] = useMemo(() => {
    const out: TocItem[] = [];
    const lines = content.split("\n");
    for (const line of lines) {
      const h2 = line.match(/^##\s+(.+?)\s*$/);
      const h3 = line.match(/^###\s+(.+?)\s*$/);
      if (h2) out.push({ id: slugify(h2[1]), text: h2[1], level: 2 });
      else if (h3) out.push({ id: slugify(h3[1]), text: h3[1], level: 3 });
    }
    return out;
  }, [content]);

  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (items.length === 0) return;
    const handler = () => {
      const triggerLine = window.innerHeight * 0.25;
      let current = items[0].id;
      for (const it of items) {
        const el = document.getElementById(it.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - triggerLine <= 0) current = it.id;
        else break;
      }
      setActiveId(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [items]);

  if (items.length < 3) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top: y, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav
      aria-label="Table of contents"
      className="rounded-2xl border border-border/80 bg-card shadow-sm overflow-hidden"
    >
      <div className="px-5 py-4 border-b border-border/60 bg-gradient-to-r from-primary/5 to-accent/5">
        <h3 className="font-heading font-semibold text-foreground flex items-center gap-2 text-sm">
          <ListTree className="h-4 w-4 text-primary" />
          On this page
        </h3>
      </div>
      <ul className="p-3 max-h-[50vh] overflow-y-auto space-y-0.5 text-sm">
        {items.map((it) => {
          const isActive = it.id === activeId;
          return (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                onClick={(e) => handleClick(e, it.id)}
                className={[
                  "block rounded-lg py-2 px-3 transition-all duration-200 leading-snug",
                  it.level === 3 ? "ml-3 text-[13px]" : "font-medium",
                  isActive
                    ? "bg-primary/10 text-primary shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60",
                ].join(" ")}
              >
                {it.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
