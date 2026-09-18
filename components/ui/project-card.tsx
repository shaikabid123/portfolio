import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/brand-icons";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  blurb: string;
  stack: readonly string[];
  repo?: string;
  demo?: string;
  className?: string;
}

export function ProjectCard({ title, blurb, stack, repo, demo, className }: ProjectCardProps) {
  const hasLinks = Boolean(repo || demo);

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface p-6 transition-all duration-300",
        "hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_0_1px_hsl(var(--accent)/0.3),0_20px_40px_-20px_hsl(var(--accent)/0.25)]",
        className,
      )}
    >
      {/* Corner glow — appears on hover only, purely decorative. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/0 blur-3xl transition-colors duration-300 group-hover:bg-accent/10"
      />

      <div className="relative flex items-start justify-between gap-4">
        <h3 className="font-display text-lg font-bold leading-snug text-foreground sm:text-xl">
          {title}
        </h3>
        <ArrowUpRight
          aria-hidden="true"
          className="h-5 w-5 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        />
      </div>

      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">
        {blurb}
      </p>

      {stack.length > 0 && (
        <div className="relative mt-5 flex flex-wrap gap-2">
          {stack.map((item) => (
            <Tag
              key={item}
              className="text-xs transition-colors duration-300 group-hover:border-accent/30"
            >
              {item}
            </Tag>
          ))}
        </div>
      )}

      {hasLinks && (
        <div className="relative mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-4 text-sm text-muted">
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors duration-300 hover:text-accent"
            >
              <GithubIcon className="h-4 w-4" aria-hidden="true" />
              Code
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors duration-300 hover:text-accent"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Live
            </a>
          )}
        </div>
      )}
    </article>
  );
}
