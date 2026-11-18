"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBanner } from "@/components/site/CtaBanner";
import { services } from "@/data/site";

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Signage is only half the job" sub="Design, the digital side, and the tech that keeps you trading - all from the same team that bolts your sign to the wall." />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 90}>
              <article className="lift flex h-full flex-col overflow-hidden rounded-[1.75rem] border bg-card">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" width={1280} height={832} className="h-full w-full object-cover" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-ink/80 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-ink-foreground backdrop-blur">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h2 className="text-2xl font-bold tracking-tight">{s.title}</h2>
                  <p className="mt-3 text-sm text-muted-foreground">{s.intro}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {s.includes.slice(0, 4).map((x) => (
                      <li key={x} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {x}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-1 items-end">
                    <Link
                      href={`/services/${s.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-ink-foreground transition-transform hover:-translate-y-0.5"
                    >
                      Explore service
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:items-center">
            <div>
              <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" />How we scope it
              </p>
              <h2 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">One brief, one bill, one team</h2>
              <p className="mt-5 max-w-md text-muted-foreground">
                Pick one service or bundle the lot. You get a single point of contact and a sign schedule that keeps every
                surface - physical and digital - saying the same thing.
              </p>
            </div>
            <ol className="grid gap-4 sm:grid-cols-2">
              {["Discovery call and site photos", "Scoped proposal with fixed pricing", "Design, produce and install", "Review, measure and maintain"].map((t, i) => (
                <li key={t} className="rounded-2xl border bg-card p-6">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">{i + 1}</span>
                  <p className="mt-4 font-semibold">{t}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
