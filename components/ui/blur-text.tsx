"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  className?: string;
  as?: "p" | "h1" | "h2" | "span" | "div";
}

export function BlurText({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  className = "",
  as: Tag = "p",
}: BlurTextProps) {
  const [inView, setInView] = useState(false);
  const [settled, setSettled] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Honour reduced-motion by showing the final state immediately. This
    // reads a browser-only API (matchMedia), so it can't be computed as a
    // lazy useState initializer — that would run during SSR, where
    // `window` doesn't exist yet.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setInView(true);
      setSettled(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // reveal once, never replay
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const segments = useMemo(
    () => (animateBy === "words" ? text.split(" ") : text.split("")),
    [text, animateBy],
  );

  // `filter` is more expensive to animate than transform/opacity, so the
  // browser is only told to optimize for it during the actual transition
  // window — not left promoted as a layer indefinitely after the one-time
  // reveal completes.
  useEffect(() => {
    if (!inView || settled) return;
    const totalDuration = segments.length * delay + 500;
    const timer = setTimeout(() => setSettled(true), totalDuration);
    return () => clearTimeout(timer);
  }, [inView, settled, segments.length, delay]);

  const offset = direction === "top" ? "-20px" : "20px";

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={cn("inline-flex flex-wrap", className)}
      aria-label={text}
    >
      {segments.map((segment, i) => (
        <span
          key={`${segment}-${i}`}
          aria-hidden="true"
          style={{
            display: "inline-block",
            willChange: inView && !settled ? "filter, opacity, transform" : undefined,
            filter: inView ? "blur(0px)" : "blur(10px)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : `translateY(${offset})`,
            transition: `filter 0.5s ease-out ${i * delay}ms, opacity 0.5s ease-out ${i * delay}ms, transform 0.5s ease-out ${i * delay}ms`,
          }}
        >
          {segment}
          {animateBy === "words" && i < segments.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}
