"use client";

import { useState } from "react";
import { site } from "@/lib/site-config";
import { SectionShell } from "@/components/ui/section-shell";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

// Six nodes evenly spaced on a circle, starting at the top, going clockwise.
// Positions are percentages of the container so the layout stays responsive
// without any JS measuring or resize listeners.
const RADIUS = 40;
const POSITIONS = site.aiLab.map((_, i) => {
  const angle = (-90 + i * (360 / site.aiLab.length)) * (Math.PI / 180);
  return {
    x: 50 + RADIUS * Math.cos(angle),
    y: 50 + RADIUS * Math.sin(angle),
  };
});

export function AiLab() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = site.aiLab[activeIndex];

  return (
    <SectionShell
      id="ai-lab"
      label="AI / ML Lab"
      ariaLabel="AI and machine learning focus areas"
      contentClassName="max-w-none"
    >
      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,340px)_1fr] md:gap-16">
        {/* Orbit selector */}
        <div className="relative mx-auto aspect-square w-full max-w-[320px]">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            {POSITIONS.map((pos, i) => (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={pos.x}
                y2={pos.y}
                stroke="hsl(var(--border))"
                strokeWidth="0.5"
                className={cn(
                  "transition-colors duration-300",
                  i === activeIndex && "stroke-accent",
                )}
              />
            ))}
          </svg>

          {/* Center hub */}
          <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/40 bg-background">
            <span className="font-display text-center text-[10px] font-bold leading-tight text-accent">
              AI / ML
            </span>
          </div>

          {/* Domain nodes */}
          {site.aiLab.map((domain, i) => {
            const pos = POSITIONS[i];
            const isActive = i === activeIndex;
            return (
              <button
                key={domain.key}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-pressed={isActive}
                aria-label={domain.name}
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                className={cn(
                  "absolute flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border font-display text-xs font-bold transition-all duration-300",
                  isActive
                    ? "border-accent bg-accent text-accent-foreground scale-110"
                    : "border-border bg-background text-muted hover:border-accent/50 hover:text-foreground",
                )}
              >
                {domain.label}
              </button>
            );
          })}
        </div>

        {/* Detail panel */}
        <div key={active.key} className="min-h-[220px] max-w-[60ch] animate-[fade-in_0.3s_ease-out]">
          <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            {active.name}
          </h3>
          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
            {active.description}
          </p>

          {active.skill && (
            <div className="mt-6">
              <Tag className="border-accent/40 text-foreground">{active.skill}</Tag>
            </div>
          )}

          {active.appliedIn.length > 0 ? (
            <div className="mt-6">
              <p className="text-sm text-muted">Applied in:</p>
              <ul className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
                {active.appliedIn.map((project, i) => (
                  <li key={project} className="text-sm text-foreground">
                    <a
                      href="#projects"
                      className="border-b border-transparent transition-colors duration-300 hover:border-accent hover:text-accent"
                    >
                      {project}
                    </a>
                    {i < active.appliedIn.length - 1 && <span className="text-muted">,</span>}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="mt-6 text-sm text-muted">
              A focus area — not yet tied to a shipped project.
            </p>
          )}
        </div>
      </div>
    </SectionShell>
  );
}
