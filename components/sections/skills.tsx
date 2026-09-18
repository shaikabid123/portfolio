import { site } from "@/lib/site-config";
import { SectionShell } from "@/components/ui/section-shell";
import { Tag } from "@/components/ui/tag";

export function Skills() {
  const groups = Object.entries(site.skills);

  return (
    <SectionShell id="skills" label="Skills" ariaLabel="Skills">
      <div className="grid gap-8 sm:grid-cols-2">
        {groups.map(([group, items]) => (
          <div key={group}>
            <h3 className="font-display text-sm font-bold text-foreground">{group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((skill) => (
                <Tag key={skill} className="hover:border-accent hover:text-foreground">
                  {skill}
                </Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
