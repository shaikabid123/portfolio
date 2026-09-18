import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  className?: string;
}

/**
 * The left-hand marker used at the top of every section. Reuses the same
 * script glyph treatment as the navbar signature so it reads as one system,
 * not a numbered step (the sections aren't a sequence).
 */
export function SectionHeading({ label, className }: SectionHeadingProps) {
  return (
    <div
      className={cn("text-3xl text-accent md:sticky md:top-32 md:h-fit", className)}
      style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive" }}
    >
      {label}
    </div>
  );
}
