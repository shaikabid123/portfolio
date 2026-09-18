import { site } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-4 text-sm text-muted sm:flex-row sm:justify-between">
        <span>
          © {year} {site.name.full}
        </span>
        <div className="flex gap-6">
          <a
            href={site.profiles.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-300 hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={site.profiles.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-300 hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
