"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBanner } from "@/components/site/CtaBanner";
import { filters, projects, type Filter } from "@/data/site";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const [active, setActive] = useState<"All" | Filter>("All");
  const list = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHero eyebrow="Projects" title="Work we've made and installed" sub="Every piece below was designed, built and fitted by our own team. Filter by category to see the kind of job you're planning." />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={cn(
                  "rounded-full border px-5 py-2 text-sm font-semibold transition",
                  active === f ? "border-ink bg-ink text-ink-foreground" : "hover:bg-secondary",
                )}
              >
                {f}
                <span className="ml-2 opacity-60">{f === "All" ? projects.length : projects.filter((p) => p.category === f).length}</span>
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal key={`${p.title}-${i}`} delay={(i % 3) * 90}>
                <article className="lift group h-full overflow-hidden rounded-[1.5rem] border bg-card">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={p.image} alt={`${p.title} for ${p.client}`} loading="lazy" width={1280} height={832} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-light/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-ink backdrop-blur">
                      {p.category}
                    </span>
                    <span className="absolute right-4 top-4 rounded-full bg-ink/75 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-ink-foreground backdrop-blur">
                      {p.year}
                    </span>
                  </div>
                  <div className="flex flex-col p-6">
                    <h2 className="text-xl font-bold leading-tight tracking-tight">{p.title}</h2>
                    <p className="mt-1.5 text-sm font-semibold text-primary">{p.client}</p>
                    <p className="mt-3 flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      {p.location}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {list.length === 0 && (
            <p className="rounded-2xl border border-dashed p-12 text-center text-muted-foreground">
              Nothing in this category yet -{" "}
              <Link href="/quote" className="font-semibold text-primary underline-offset-4 hover:underline">
                ask us about it
              </Link>
              .
            </p>
          )}

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] bg-secondary p-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Your project could be next</h2>
              <p className="mt-1 text-muted-foreground">Send us a photo of your site and we'll show you what's possible.</p>
            </div>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-ink-foreground transition-transform hover:-translate-y-0.5"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
