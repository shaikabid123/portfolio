import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";

interface SectionShellProps {
  id: string;
  label: string;
  ariaLabel: string;
  children: React.ReactNode;
  className?: string;
  /** Override the default 72ch reading-width cap — for grids/cards, not prose. */
  contentClassName?: string;
}

/**
 * Shared layout: sticky signature marker on the left, content on the right,
 * consistent vertical rhythm. Every content section below is built on this
 * so the page reads as one system rather than bespoke sections stitched
 * together.
 */
export function SectionShell({
  id,
  label,
  ariaLabel,
  children,
  className,
  contentClassName,
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className="mx-auto max-w-screen-2xl px-6 py-24 md:py-32"
    >
      <div className={cn("grid gap-10 md:grid-cols-[auto_1fr] md:gap-16", className)}>
        <SectionHeading label={label} />
        <div className={contentClassName ?? "max-w-[72ch]"}>{children}</div>
      </div>
    </section>
  );
}
