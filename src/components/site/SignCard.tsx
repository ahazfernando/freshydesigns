"use client";

import Link from "next/link";
import { Armchair, ArrowRight, Building2, Car, Store } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  desc: string;
  image: string;
  group: string;
  slug: string;
  cta?: string | undefined;
  variant?: "overlay" | "split" | "panel" | "story";
  index?: number;
  featured?: boolean;
  tags?: [string, string] | undefined;
};

const groupIcon: Record<string, typeof Store> = {
  "Building Signs": Building2,
  "Outdoor & Retail": Store,
  "Indoor & Reception": Armchair,
  "Vehicle Wraps": Car,
};

function Title({ title }: { title: string }) {
  const words = title.split(" ");
  const cut = Math.max(1, Math.ceil(words.length / 2));
  return (
    <h3 className="text-3xl font-medium leading-[1.05] tracking-tight">
      {words.slice(0, cut).join(" ")}{" "}
      <em className="font-serif font-normal">{words.slice(cut).join(" ")}</em>
    </h3>
  );
}

export function SignCard({ title, desc, image, group, slug, cta = "Enquire Now", variant = "overlay", featured = false, tags, index = 0 }: Props) {
  const chip = <span className="chip"><span className="h-1.5 w-1.5 rounded-full bg-ink" />{group}</span>;
  const button = <Link href={`/quote?type=${slug}`} className="btn-cream mt-6">{cta}</Link>;
  const alt = `${title} by The Freshy Designs`;

  if (variant === "story") {
    return (
      <Link href={`/quote?type=${slug}`} className="group relative block aspect-[3/5] overflow-hidden rounded-[1.75rem] text-white shadow-xl">
        <img src={image} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/85" />
        <div className="absolute right-6 top-6 text-right">
          <p className="text-sm font-medium">{tags?.[0] ?? group}</p>
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/60">{group}</p>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-6 pr-24">
          <h3 className="text-[1.75rem] font-semibold leading-[1.08] tracking-tight">{title}</h3>
          <p className="mt-3 line-clamp-3 text-[0.95rem] leading-relaxed text-white/75">{desc}</p>
        </div>
        <span className="absolute bottom-4 right-6 text-6xl font-bold leading-none text-white/15">{String(index + 1).padStart(2, "0")}</span>
      </Link>
    );
  }

  if (variant === "panel") {
    const I = groupIcon[group] ?? Store;
    return (
      <article className={cn("lift h-full panel-shell", featured && "panel-featured")}>
        <div className="flex items-start justify-between gap-3 px-1 pt-1">
          <div className="flex flex-wrap gap-1.5">
            {(tags ?? [group]).map((t) => <span key={t} className="tag-pill">{t}</span>)}
          </div>
          <span className={cn("grid h-9 w-9 shrink-0 place-items-center rounded-full", featured ? "bg-ink" : "bg-ink/10 text-ink/55")}>
            <I className={cn("h-4 w-4", featured && "text-pop")} />
          </span>
        </div>
        <div className="px-1 pt-5">
          <h3 className="text-[1.7rem] font-bold leading-[1.03] tracking-tight">{title}</h3>
          <p className="mt-2 max-w-[30ch] text-[0.8rem] leading-relaxed opacity-80">{desc}</p>
        </div>
        <div className="relative mt-5 min-h-[15rem] flex-1 overflow-hidden rounded-[1.45rem]">
          <img src={image} alt={alt} loading="lazy" width={1024} height={768} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-x-0 bottom-3 flex justify-center">
            <Link href={`/quote?type=${slug}`} className="glass-pill">
              {cta}
              <span className="grid h-7 w-7 place-items-center rounded-full bg-light text-ink"><ArrowRight className="h-3.5 w-3.5" /></span>
            </Link>
          </div>
        </div>
      </article>
    );
  }

  if (variant === "split") {
    return (
      <article className="card-shell lift h-full">
        <div className="flex h-full flex-col overflow-hidden rounded-[1.35rem] bg-primary text-primary-foreground">
          <div className="relative aspect-[16/10] overflow-hidden rounded-b-[1.35rem]">
            <img src={image} alt={alt} loading="lazy" width={1024} height={768} className="h-full w-full object-cover" />
            <div className="absolute left-4 top-4">{chip}</div>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <Title title={title} />
            <p className="mt-3 flex-1 text-sm opacity-80">{desc}</p>
            {button}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="card-shell lift h-full">
      <div className="relative flex h-full min-h-[30rem] flex-col overflow-hidden rounded-[1.35rem] text-ink-foreground">
        <img src={image} alt={alt} loading="lazy" width={1024} height={768} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/30 to-ink/60" />
        <div className="relative flex flex-1 flex-col p-6">
          <div>{chip}</div>
          <div className="mt-5"><Title title={title} /></div>
          <p className="mt-3 text-sm text-ink-foreground/85">{desc}</p>
          <div className="flex-1" />
          {button}
        </div>
      </div>
    </article>
  );
}
