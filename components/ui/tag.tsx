import { cn } from "@/lib/utils";

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border px-3 py-1 text-sm text-muted transition-colors duration-300",
        className,
      )}
    >
      {children}
    </span>
  );
}
