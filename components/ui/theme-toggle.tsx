"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  // Read the class the inline script in layout.tsx already applied,
  // so the button never disagrees with what's on screen. This depends on
  // `document`, so it can't be a lazy useState initializer — that runs
  // during SSR too, where `document` doesn't exist.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Private mode or blocked storage — the toggle still works for this visit.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      className="relative h-8 w-16 shrink-0 rounded-full bg-border transition-opacity duration-300 hover:opacity-80"
    >
      <span
        className="absolute left-1 top-1 h-6 w-6 rounded-full bg-foreground transition-transform duration-300"
        style={{ transform: isDark ? "translateX(2rem)" : "translateX(0)" }}
      />
    </button>
  );
}
