import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { site } from "@/lib/site-config";
import { SectionShell } from "@/components/ui/section-shell";

export function Contact() {
  const links = [
    { label: site.profiles.email, href: `mailto:${site.profiles.email}`, icon: Mail },
    { label: site.profiles.phone, href: `tel:${site.profiles.phone}`, icon: Phone },
    { label: "GitHub", href: site.profiles.github, icon: GithubIcon },
    { label: "LinkedIn", href: site.profiles.linkedin, icon: LinkedinIcon },
  ];

  return (
    <SectionShell id="contact" label="Contact" ariaLabel="Contact">
      <p className="max-w-[50ch] text-lg leading-relaxed text-muted sm:text-xl">
        Reach {site.name.full} through any of the channels below.
      </p>

      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
        {links.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
            className="inline-flex items-center gap-2 text-base text-foreground transition-colors duration-300 hover:text-accent sm:text-lg"
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
            {label}
          </a>
        ))}
      </div>
    </SectionShell>
  );
}
