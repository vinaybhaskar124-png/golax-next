import HeroLeadForm from "@/components/forms/HeroLeadForm";

interface Props {
  context?: string;
  defaultService?: string;
  title?: string;
  subtitle?: string;
}

/**
 * A full-width section that hosts the HeroLeadForm.
 * Designed to be placed immediately after a page's hero section — it overlaps
 * the hero on large screens (negative top margin) so the form visually sits to
 * the right of the hero, while on mobile it stacks naturally below.
 */
export default function HeroFormSection({
  context = "Website",
  defaultService = "",
  title,
  subtitle,
}: Props) {
  return (
    <section className="relative bg-gradient-subtle py-12 lg:py-0">
      <div className="container mx-auto px-4 lg:-mt-32 relative z-20">
        <div className="lg:flex lg:justify-end">
          <div className="w-full lg:w-[420px]">
            <HeroLeadForm
              context={context}
              defaultService={defaultService}
              title={title}
              subtitle={subtitle}
              variant="light"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
