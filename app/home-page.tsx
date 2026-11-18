"use client";

import Link from "next/link";
import { Award, Factory, ShieldCheck, Code2, Megaphone, Cpu, Palette, ArrowRight, ArrowUpRight, Star, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SignCard } from "@/components/site/SignCard";
import { StatCounter } from "@/components/site/StatCounter";
import { CategoryGrid } from "@/components/site/CategoryGrid";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Reveal } from "@/components/site/Reveal";
import { IndustryCard } from "@/components/site/IndustryCard";
import { images, products, services, faqs, process, site, industries, projects, trustedBrands } from "@/data/site";

const why = [
  { I: Award, t: "15+ Years Excellence", d: "Over a decade and a half crafting signage for businesses of every size." },
  { I: Factory, t: "In-House Production", d: "CNC routers, laser cutters and UV flatbed printers, all under one roof." },
  { I: ShieldCheck, t: "Full Warranty & Permits", d: "Insured installers and council permit support from start to finish." },
];
const story = [
  { I: Palette, t: "Design-led from day one", d: "Concepts, mock-ups and artwork proofs before anything is cut." },
  { I: Factory, t: "Everything made in-house", d: "CNC routing, laser cutting, UV printing and assembly under one roof." },
  { I: ShieldCheck, t: "Installed, warranted, maintained", d: "Insured fitters, council permit help and a written warranty." },
];
const svcIcons = [Code2, Megaphone, Cpu, Palette];
const stepIcons = [Palette, Factory, Wrench];

export default function HomePage() {
  return (
    <>
      <div className="section-dark -mt-24 p-3 pb-0"><section className="section-dark relative isolate min-h-[92svh] overflow-hidden rounded-[2rem]">
        <img src={images.hero} alt="Illuminated LED channel letter sign on a storefront at night" width={1920} height={1088} className="absolute inset-0 -z-30 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-ink/95 via-ink/80 to-ink/40" />
        <div aria-hidden className="hero-grid absolute inset-0 -z-10" />
        <div aria-hidden className="absolute inset-0 -z-10 grid grid-cols-6">
          {["opacity-30", "opacity-45", "opacity-70", "opacity-100", "opacity-75", "opacity-40"].map((opacity, i) => (
            <div key={i} className={`hero-column border-l border-ink-border/50 last:border-r ${opacity}`} />
          ))}
        </div>
        <div aria-hidden className="hero-aurora absolute -inset-x-10 bottom-0 -z-10 h-3/5" />
        <div className="relative mx-auto flex min-h-[92svh] max-w-6xl flex-col items-center justify-center px-4 pb-40 pt-32 text-center md:pb-36">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-border bg-ink/50 p-1 pr-3 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ink-muted backdrop-blur md:text-[0.7rem]">
            <span className="rounded-full bg-primary px-3 py-1 tracking-[0.08em] text-primary-foreground">Made in-house</span>
            Design to installation
          </span>
          <h1 className="mt-7 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-7xl">Transform Your Brand<br />With <span className="text-primary">Stunning Signage</span></h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">Architectural building signs, vehicle wraps, illuminated lightboxes and retail branding, designed, manufactured and installed in {site.city}.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button asChild variant="glow" size="xl"><Link href="/quote">Request Fast Quote</Link></Button>
            <Button asChild variant="ghostDark" size="xl"><Link href="/categories">Explore Categories</Link></Button>
          </div>
          <div aria-hidden className="hero-seal mt-14 grid h-24 w-24 place-items-center rounded-full md:h-28 md:w-28">
            <span className="font-serif text-6xl italic leading-none text-primary md:text-7xl">F</span>
          </div>
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-8 hidden items-end justify-between px-[8%] text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ink-muted md:flex">
          <span className="hero-label">01 · Design</span>
          <span className="hero-label mb-16">02 · Manufacture</span>
          <span className="hero-label">03 · Install</span>
        </div>
      </section></div>

      <section aria-label="Trusted by" className="bg-transparent py-10">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-8 text-center text-sm uppercase tracking-widest text-muted-foreground">Trusted by local businesses</p>
        </div>
        <div className="brand-marquee" role="presentation">
          <div className="brand-marquee__track">
            {[...trustedBrands, ...trustedBrands].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                aria-hidden={i >= trustedBrands.length}
                className="flex h-12 shrink-0 items-center justify-center md:h-14"
              >
                <img
                  src={brand.logo}
                  alt={i >= trustedBrands.length ? "" : brand.name}
                  title={brand.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-auto max-w-[9.5rem] object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 md:max-w-[11rem]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader eyebrow="Featured Products" title="Signage Built to Be Noticed" sub="From glowing channel letters to full fleet wraps, every piece is made in-house." />
          <Carousel opts={{ align: "start", dragFree: true }} className="relative">
            <CarouselContent className="-ml-5">
              {products.map((p, i) => (
                <CarouselItem key={p.slug} className="basis-[82%] pl-5 sm:basis-1/2 lg:basis-1/3">
                  <SignCard {...p} index={i} variant="story" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-end gap-3">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground"><span className="h-2 w-2 rounded-full bg-primary" />Industries</p>
              <h2 className="max-w-xl text-4xl font-bold leading-[1.03] tracking-tight md:text-5xl">Signs we make for <span className="text-primary">every kind of business</span></h2>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-[0.72rem] font-bold uppercase tracking-[0.12em] transition-colors hover:bg-card">
              See recent projects
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <Carousel opts={{ align: "start", dragFree: true }} className="relative">
            <CarouselContent className="-ml-6 md:pt-6">
              {industries.map((it) => (
                <CarouselItem key={it.slug} className="basis-[84%] pl-6 sm:basis-1/2 lg:basis-1/3">
                  <div className={it.featured ? "md:-translate-y-6" : undefined}>
                    <IndustryCard item={it} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-end gap-3">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </section>

      <section className="section-dark py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader dark center eyebrow="Why Us" title="Why Choose Our Studio" />
          <div className="grid gap-6 md:grid-cols-3">
            {why.map(({ I, t, d }, i) => (
              <Reveal key={t} delay={i * 100}>
                <div className="lift h-full rounded-xl border border-ink-border p-8">
                  <div className="grid h-14 w-14 place-items-center rounded-lg bg-primary text-primary-foreground glow"><I /></div>
                  <h3 className="mt-6 text-xl font-bold">{t}</h3>
                  <p className="mt-2 text-ink-muted">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <Reveal className="px-4 md:px-0">
            <div className="relative h-[22rem] overflow-hidden rounded-2xl md:h-[36rem] md:rounded-l-none md:rounded-r-[2.25rem]">
              <img src={images.workshop} alt="The Freshy Designs workshop with CNC router and laser cutter" loading="lazy" width={1280} height={832} className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
              <div className="absolute bottom-6 left-6 max-w-[16rem] rounded-2xl bg-ink p-6 text-ink-foreground shadow-[0_24px_60px_-24px_color-mix(in_oklab,var(--ink)_80%,transparent)]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary">Since 2011</p>
                <p className="mt-2 text-xl font-bold leading-tight">Built in-house, installed by us.</p>
                <Link href="/about" className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-light py-2 pl-5 pr-2 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-ink transition-transform hover:-translate-y-0.5">
                  Read More
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground"><ArrowRight className="h-3.5 w-3.5" /></span>
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal className="px-4 md:pl-0 md:pr-[max(1rem,calc((100vw-80rem)/2+1rem))]" delay={120}>
            <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground"><span className="h-2 w-2 rounded-full bg-primary" />About Us</p>
            <h2 className="text-4xl font-bold leading-[1.03] tracking-tight md:text-5xl">From Boutique Print Shop to Full-Service Sign Studio</h2>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">Since 2011 we've grown into a studio that designs, builds and installs signage for businesses across the region.</p>
            <ol className="relative mt-9 space-y-7">
              <span aria-hidden className="absolute bottom-6 left-6 top-6 w-px bg-foreground/15" />
              {story.map(({ I, t, d }) => (
                <li key={t} className="relative flex gap-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-foreground text-background"><I className="h-5 w-5" /></span>
                  <div>
                    <h3 className="text-lg font-bold">{t}</h3>
                    <p className="mt-1 max-w-md text-sm text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8">
              <StatCounter value={15} suffix="+" label="Years" />
              <StatCounter value={5000} suffix="+" label="Projects" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader eyebrow="Categories" title="Browse by Category" />
          <CategoryGrid />
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground"><span className="h-2 w-2 rounded-full bg-primary" />Recent Projects</p>
              <h2 className="max-w-xl text-4xl font-bold leading-[1.03] tracking-tight md:text-5xl">Work that's already out on the street</h2>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-ink-foreground transition-transform hover:-translate-y-0.5">
              View all projects
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <article className="lift group h-full overflow-hidden rounded-[1.5rem] border bg-card">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={p.image} alt={`${p.title} for ${p.client}`} loading="lazy" width={1280} height={832} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-light/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-ink backdrop-blur">{p.category}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold leading-tight tracking-tight">{p.title}</h3>
                    <p className="mt-1.5 text-sm font-semibold text-primary">{p.client}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-ink-muted"><span className="h-2 w-2 rounded-full bg-primary" />Our Process</p>
              <h2 className="text-4xl font-bold leading-[1.03] tracking-tight md:text-5xl">From Idea to Installed in <span className="text-primary">3 Steps</span></h2>
            </div>
            <div className="md:pb-3">
              <p className="max-w-md text-ink-muted">One team from first sketch to finished sign: we design it, build it in-house, then install it and handle the permits.</p>
              <Link href="/quote" className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] text-primary-foreground transition-transform hover:-translate-y-0.5">
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
            {process.map((s, i) => {
              const I = stepIcons[i] ?? Palette;
              return (
                <li key={s.title} className="relative">
                  {i < process.length - 1 && <span aria-hidden className="absolute left-0 top-6 hidden h-px w-[calc(100%_+_2rem)] bg-primary/25 md:block" />}
                  <Reveal delay={i * 120}>
                    <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground glow"><I className="h-5 w-5" /></span>
                    <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                    <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                      {s.points.map((p) => <li key={p} className="flex gap-2.5"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />{p}</li>)}
                    </ul>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader eyebrow="More From Us" title="Additional Services" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => {
              const I = svcIcons[i] ?? Code2;
              return (
                <Link key={s.slug} href={`/services/${s.slug}`} className="lift group rounded-xl border bg-card p-6">
                  <I className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em]">
              <span className="h-2 w-2 rounded-full bg-primary" />Common Questions
            </span>
            <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Everything you{" "}
              <span className="inline-grid h-12 w-12 -rotate-12 place-items-center rounded-2xl bg-primary align-middle text-primary-foreground glow md:h-16 md:w-16"><ArrowUpRight className="h-6 w-6 md:h-8 md:w-8" /></span>{" "}
              need before getting started
            </h2>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">Straight answers on pricing, timelines, materials, permits and installation, so you know how we work before your sign goes into production.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/quote" className="rounded-full bg-foreground px-7 py-3.5 font-semibold text-background transition-transform hover:-translate-y-0.5">Request a Free Quote</Link>
              <Link href="/categories" className="rounded-full border px-7 py-3.5 font-semibold transition-colors hover:bg-secondary">Explore Our Signs</Link>
            </div>
            <div className="mt-10 flex items-center gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Happy Clients</p>
                <div className="mt-3 flex -space-x-2">
                  {["SC", "MP", "ER", "JW"].map((x, i) => (
                    <span key={x} className={`grid h-10 w-10 place-items-center rounded-full border-2 border-background text-xs font-bold ${i % 2 ? "bg-foreground text-background" : "bg-primary text-primary-foreground"}`}>{x}</span>
                  ))}
                </div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Rated Excellent: 4.9/5</p>
                <div className="mt-3 flex gap-1 text-primary">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-5 w-5 fill-current" />)}</div>
              </div>
            </div>
          </Reveal>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`f${i}`} className="rounded-2xl border bg-card px-6 shadow-[0_6px_24px_-12px_color-mix(in_oklab,var(--foreground)_25%,transparent)]">
                <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
