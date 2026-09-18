import { site } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";

/**
 * Built as its own section rather than the shared SectionShell: the oversized
 * background numeral needs a relative + overflow-hidden wrapper of its own,
 * and shouldn't be forced onto every other section that uses SectionShell.
 */
export function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Oversized ghost numeral — same oversized-type language as the Hero's
          name treatment, applied here as a quiet background mark rather than
          the main content. Purely decorative. */}
      <span
        aria-hidden="true"
        className="font-display pointer-events-none absolute -right-6 -top-10 select-none text-[13rem] font-bold leading-none tracking-tighter text-foreground/[0.04] sm:text-[17rem] md:-top-16 md:text-[22rem]"
      >
        {site.education.year}
      </span>

      <div className="relative mx-auto grid max-w-screen-2xl gap-10 px-6 md:grid-cols-[auto_1fr] md:gap-16">
        <SectionHeading label="About" />

        <div className="max-w-[68ch]">
          <h3 className="font-display text-2xl font-bold leading-snug text-foreground sm:text-3xl">
            {site.name.full} completed a {site.education.degree} in{" "}
            <span className="text-accent">{site.education.year}</span>.
          </h3>

          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
            Interested in AI/ML, Generative AI, LLM/RAG, and software development.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {["AI/ML", "Generative AI", "LLM/RAG", "Software Development"].map((interest) => (
              <Tag key={interest} className="hover:border-accent hover:text-foreground">
                {interest}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
