import { cn } from "@/lib/utils";

export function SectionHeader({ eyebrow, title, sub, center, dark }: { eyebrow?: string; title: string; sub?: string; center?: boolean; dark?: boolean }) {
  return (
    <div className={cn("mb-12 max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>}
      <h2 className="text-3xl font-bold md:text-5xl">{title}</h2>
      {sub && <p className={cn("mt-4 text-lg", dark ? "text-ink-muted" : "text-muted-foreground")}>{sub}</p>}
    </div>
  );
}
