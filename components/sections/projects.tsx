import { site } from "@/lib/site-config";
import { SectionShell } from "@/components/ui/section-shell";
import { ProjectCard } from "@/components/ui/project-card";

export function Projects() {
  return (
    <SectionShell id="projects" label="Projects" ariaLabel="Projects" contentClassName="max-w-none">
      <div className="grid gap-6 sm:grid-cols-2">
        {site.projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </SectionShell>
  );
}
