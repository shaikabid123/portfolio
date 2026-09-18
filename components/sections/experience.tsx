import { site } from "@/lib/site-config";
import { SectionShell } from "@/components/ui/section-shell";

export function Experience() {
  return (
    <SectionShell id="experience" label="Experience" ariaLabel="Experience">
      <ol className="relative border-l border-border pl-8">
        {site.experience.map((job, i) => {
          const isCurrent = job.end.toLowerCase() === "present";
          return (
            <li key={`${job.company}-${job.start}`} className={i === 0 ? "" : "mt-10"}>
              {/* Timeline marker: filled + ringed for the current role,
                  a plain dot for past ones — no extra claim, just position. */}
              <span
                className={
                  isCurrent
                    ? "absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-accent/20"
                    : "absolute -left-1.5 mt-2 h-2 w-2 rounded-full bg-border"
                }
                aria-hidden="true"
              />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                  {job.title}
                </h3>
                <span className="text-sm text-muted">
                  {job.start} – {job.end}
                </span>
              </div>

              <p className="mt-1 text-muted">
                {job.company} · {job.location}
              </p>

              {isCurrent && (
                <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-accent/40 px-3 py-1 text-xs text-accent">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  Current
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </SectionShell>
  );
}
