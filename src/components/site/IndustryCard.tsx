"use client";

import Link from "next/link";
import { ArrowRight, Building2, Car, Coffee, Dumbbell, HeartPulse, Store } from "lucide-react";
import { cn } from "@/lib/utils";
import type { industries } from "@/data/site";

type Industry = (typeof industries)[number];

const iconMap = {
  store: Store,
  coffee: Coffee,
  health: HeartPulse,
  office: Building2,
  gym: Dumbbell,
  fleet: Car,
} as const;

export function IndustryCard({ item }: { item: Industry }) {
  const I = iconMap[item.icon] ?? Store;
  const featured = Boolean(item.featured);
  return (
    <article
      className={cn(
        "lift relative flex h-full min-h-[27rem] flex-col overflow-hidden rounded-[1.9rem] p-7",
        featured
          ? "bg-primary text-primary-foreground shadow-[0_30px_70px_-30px_color-mix(in_oklab,var(--primary)_75%,transparent)]"
          : "bg-panel text-panel-foreground",
      )}
    >
      <span
        aria-hidden
        className={cn("absolute -bottom-14 -right-14 h-40 w-40 rounded-full", featured ? "bg-light/15" : "bg-ink/[0.04]")}
      />
      <span
        aria-hidden
        className={cn("absolute -right-6 top-24 h-20 w-20 rounded-full", featured ? "bg-light/10" : "bg-ink/[0.03]")}
      />

      <span className={cn("grid h-12 w-12 shrink-0 place-items-center rounded-full", featured ? "bg-light text-ink" : "bg-ink text-ink-foreground")}>
        <I className="h-5 w-5" />
      </span>

      <div className="relative mt-9">
        <h3 className="text-[1.7rem] font-bold leading-[1.06] tracking-tight">{item.title}</h3>
        <p className={cn("mt-2 text-sm font-semibold", featured ? "text-primary-foreground/85" : "text-primary")}>{item.sub}</p>
      </div>

      <div className="flex-1" />

      <div className="relative">
        <p className={cn("max-w-[34ch] text-sm leading-relaxed", featured ? "text-primary-foreground/85" : "text-muted-foreground")}>{item.desc}</p>
        <Link
          href="/quote"
          className={cn(
            "mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.12em] transition-transform hover:-translate-y-0.5",
            featured ? "bg-light text-ink" : "bg-ink text-ink-foreground",
          )}
        >
          Get a quote
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
