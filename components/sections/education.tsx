import { site } from "@/lib/site-config";
import { SectionShell } from "@/components/ui/section-shell";

export function Education() {
  return (
    <SectionShell id="education" label="Education" ariaLabel="Education">
      <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
        {site.education.degree}
      </h3>
      <p className="mt-1 text-muted">Graduating {site.education.year}</p>
    </SectionShell>
  );
}
