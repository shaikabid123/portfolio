"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site-config";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close on outside click and on Escape; return focus to the trigger.
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        !menuRef.current?.contains(target) &&
        !buttonRef.current?.contains(target)
      ) {
        setOpen(false);
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Highlight whichever section is currently on screen. Sections that don't
  // exist yet are simply skipped, so this keeps working as they're added.
  useEffect(() => {
    const targets = site.nav
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => Boolean(el));

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.5, 1] },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 py-6">
      <nav className="mx-auto flex max-w-screen-2xl items-center justify-between">
        <div className="relative">
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="primary-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="p-2 text-muted transition-colors duration-300 hover:text-foreground"
          >
            {open ? (
              <X className="h-8 w-8" strokeWidth={2} />
            ) : (
              <Menu className="h-8 w-8" strokeWidth={2} />
            )}
          </button>

          {open && (
            <div
              ref={menuRef}
              id="primary-menu"
              className="absolute left-0 top-full z-[100] ml-4 mt-2 w-[200px] animate-[fade-in_0.2s_ease-out] rounded-lg bg-surface p-4 shadow-2xl ring-1 ring-border md:w-[240px]"
            >
              {site.nav.map((item) => {
                const isActive = active === item.href;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "block px-2 py-1.5 text-lg font-bold tracking-tight transition-colors duration-300 hover:text-accent md:text-xl",
                      isActive ? "text-accent" : "text-foreground",
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>

        <a
          href="#home"
          aria-label={`${site.name.full} — back to top`}
          className="text-4xl leading-none text-foreground"
          style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive" }}
        >
          {site.name.initial}
        </a>

        <ThemeToggle />
      </nav>
    </header>
  );
}
