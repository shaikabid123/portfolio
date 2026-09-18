import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { site } from "@/lib/site-config";
import { BlurText } from "@/components/ui/blur-text";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { Portrait } from "@/components/ui/portrait";

const nameClass =
  "font-display justify-center whitespace-nowrap text-6xl font-bold uppercase leading-[0.85] tracking-tighter text-accent sm:text-7xl md:text-8xl lg:text-[7.5rem]";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 py-40"
      aria-label="Introduction"
    >
      <AnimatedBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <h1 className="sr-only">
          {site.name.full} — {site.role}
        </h1>

        <div aria-hidden="true">
          <BlurText as="div" text={site.name.first} delay={100} animateBy="letters" className={nameClass} />
          <BlurText as="div" text={site.name.last} delay={100} animateBy="letters" className={nameClass} />
        </div>

        <div className="-mt-2">
          <Portrait />
        </div>

        {/* Live-status framing fits an automation engineer better than a
            generic label — a small pulsing dot, like a running process. */}
        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {site.role}
        </div>

        <p className="mt-6 max-w-[58ch] text-balance text-base leading-relaxed text-muted sm:text-lg">
          I design and build AI-powered systems — from LLM applications to automation
          platforms — using Python, React and FastAPI, with a focus on GenAI, RAG and
          machine learning.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform duration-300 hover:scale-[1.03]"
          >
            View Projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            Download Resume
            <Download className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-8 flex items-center gap-6">
          <a
            href={site.profiles.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors duration-300 hover:text-accent"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={site.profiles.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors duration-300 hover:text-accent"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted transition-colors duration-300 hover:text-foreground"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
