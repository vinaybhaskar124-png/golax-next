import SectionHeader from "@/components/shared/SectionHeader";
import type { FaqItem } from "@/lib/seo/schema";

interface Props {
  title?: string;
  description?: string;
  items: FaqItem[];
}

/**
 * Visible Q&A blocks optimized for featured snippets & AI answer extraction (AEO/GEO).
 */
export default function DirectAnswersSection({
  title = "Quick Answers",
  description = "Direct answers to the most searched questions about our IT services",
  items,
}: Props) {
  return (
    <section className="section-padding-sm relative bg-gradient-subtle overflow-hidden">
      <div className="absolute inset-0 bg-mesh pointer-events-none opacity-40" aria-hidden />
      <div className="container relative mx-auto px-4 sm:px-6">
        <SectionHeader title={title} description={description} />
        <div className="mx-auto grid max-w-4xl gap-4 sm:gap-5">
          {items.slice(0, 4).map((item) => (
            <article
              key={item.question}
              className="premium-card p-5 sm:p-6"
              itemScope
              itemType="https://schema.org/Question"
            >
              <h3
                className="font-heading text-base sm:text-lg font-semibold text-foreground mb-2"
                itemProp="name"
              >
                {item.question}
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed" itemProp="text">
                  {item.answer}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
