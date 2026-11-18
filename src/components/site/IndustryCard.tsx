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
          : "bg-card text-card-foreground",
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

      {item.art && (
        <img
          src={item.art}
          alt=""
          aria-hidden
          width={280}
          height={280}
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute -bottom-10 -right-10 z-[1] h-[11.5rem] w-[11.5rem] object-contain drop-shadow-lg md:h-[12.5rem] md:w-[12.5rem]"
        />
      )}

      <span className={cn("relative z-[2] grid h-12 w-12 shrink-0 place-items-center rounded-full", featured ? "bg-light text-ink" : "bg-ink text-ink-foreground")}>
        <I className="h-5 w-5" />
      </span>

      <div className="relative z-[2] mt-9">
        <h3 className="text-[1.55rem] font-bold leading-[1.06] tracking-tight md:text-[1.65rem]">{item.title}</h3>
        <p className={cn("mt-2 text-sm font-semibold", featured ? "text-primary-foreground/85" : "text-primary")}>{item.sub}</p>
      </div>

      <div className="flex-1" />

      <div className="relative z-[2] max-w-[70%]">
        <p className={cn("text-sm leading-relaxed", featured ? "text-primary-foreground/85" : "text-muted-foreground")}>{item.desc}</p>
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
