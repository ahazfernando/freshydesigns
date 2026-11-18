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
import { images, products, services, faqs, process, site, industries, industriesSection, visionSection, studioSection, trustedBrands } from "@/data/site";

const why = [
  { I: Award, n: "01", t: "15+ Years Excellence", d: "Over a decade and a half crafting signage for businesses of every size." },
  { I: Factory, n: "02", t: "In-House Production", d: "CNC routers, laser cutters and UV flatbed printers, all under one roof." },
  { I: ShieldCheck, n: "03", t: "Full Warranty & Permits", d: "Insured installers and council permit support from start to finish." },
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
                  className="h-full w-auto max-w-[9.5rem] object-contain opacity-90 transition duration-300 hover:opacity-100 md:max-w-[11rem]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-[100rem] px-4 sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(15rem,0.78fr)_minmax(0,2.35fr)] lg:gap-12 xl:gap-16">
            <div className="flex min-h-0 flex-col lg:min-h-[34rem] xl:min-h-[38rem]">
              <div className="flex items-center gap-3 text-[0.7rem] font-medium tracking-[0.08em] text-muted-foreground">
                <span>02</span>
                <span aria-hidden className="h-px flex-1 bg-border" />
                <span className="shrink-0">01 - 03</span>
              </div>
              <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
                From glowing channel letters to full fleet wraps, every piece is designed, built and installed in-house.
              </p>
              <div className="mt-10 lg:mt-auto lg:pt-24">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">/ Featured Products</p>
                <h2 className="mt-4 max-w-[12ch] text-4xl font-bold leading-[1.02] tracking-tight text-foreground md:text-5xl xl:text-[3.35rem]">
                  Signage Built to Be Noticed
                </h2>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-3 sm:gap-7 md:gap-8 lg:gap-10">
              {products.slice(0, 3).map((p, i) => (
                <Reveal key={p.slug} delay={i * 90} className="h-full min-w-0">
                  <SignCard {...p} index={i} variant="story" />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto w-full max-w-[100rem] px-4 sm:px-6 lg:px-8">
          <Carousel opts={{ align: "start", dragFree: true }} className="relative">
            <div className="mb-12 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end lg:gap-16">
              <div>
                <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {industriesSection.eyebrow}
                </p>
                <h2 className="max-w-3xl text-4xl font-bold leading-[1.03] tracking-tight md:text-5xl">
                  <span className="block text-balance">Signs we make for</span>
                  <span className="block text-balance text-primary">{industriesSection.titleAccent}</span>
                </h2>
              </div>
              <div className="flex max-w-md flex-col items-start gap-6 lg:justify-self-end lg:pb-1">
                <p className="text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">{industriesSection.desc}</p>
                <div className="flex items-center gap-3">
                  <CarouselPrevious className="static h-12 w-12 translate-y-0 rounded-full border-foreground/15 bg-card shadow-sm hover:border-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-40" />
                  <CarouselNext className="static h-12 w-12 translate-y-0 rounded-full border-transparent bg-primary text-primary-foreground shadow-sm hover:bg-ink hover:text-ink-foreground disabled:opacity-40" />
                </div>
              </div>
            </div>
            <CarouselContent className="-ml-5 md:pt-6">
              {industries.map((it) => (
                <CarouselItem key={it.slug} className="basis-[78%] pl-5 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className={it.featured ? "md:-translate-y-6" : undefined}>
                    <IndustryCard item={it} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      <div className="relative">
        <section id="workspaces" className="sticky top-0 z-0 isolate min-h-[min(92svh,52rem)] overflow-hidden bg-ink">
          <img
            src={images.workspace}
            alt="Team working in a branded commercial workspace"
            width={2048}
            height={1152}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_28%]"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/40 via-ink/45 to-ink/85" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/65 via-transparent to-ink/25" />
          <div className="mx-auto flex min-h-[min(92svh,52rem)] w-full max-w-[100rem] items-center justify-end px-4 py-24 sm:px-6 lg:px-8">
            <div className="w-full max-w-2xl text-ink-foreground lg:mr-[min(5vw,4rem)]">
              <p className="flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-primary">
                <span aria-hidden className="h-px w-10 shrink-0 bg-primary" />
                Workspaces
              </p>
              <h2 className="mt-6 text-4xl font-bold leading-[1.02] tracking-[-0.03em] md:text-5xl lg:text-[3.65rem]">
                <span className="block text-balance">Built for rooms</span>
                <span className="block text-balance">
                  that mean <span className="text-primary">business.</span>
                </span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/80 md:text-[1.05rem]">
                Lobby walls, reception logos and wayfinding designed so your office feels finished the moment clients walk in.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="xl" variant="glow" className="uppercase tracking-[0.08em]">
                  <Link href="/categories">
                    Explore the range
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="xl" variant="ghostDark" className="border-white/35 uppercase tracking-[0.08em] hover:border-primary">
                  <Link href="/quote">Request a quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="studio" className="sticky top-0 z-10 isolate min-h-[min(92svh,52rem)] overflow-hidden bg-ink">
          <img
            src={images.studio}
            alt="Designer working at a tablet in the Freshy Designs studio"
            width={2048}
            height={1152}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_40%]"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/55 to-ink/15" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/80 via-ink/35 to-transparent" />
          <div className="mx-auto flex min-h-[min(92svh,52rem)] w-full max-w-[100rem] items-end justify-start px-4 pb-16 pt-24 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
            <div className="w-full max-w-2xl text-ink-foreground lg:ml-[min(2vw,1.5rem)]">
              <p className="flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-primary">
                <span aria-hidden className="h-px w-10 shrink-0 bg-primary" />
                {studioSection.eyebrow}
              </p>
              <h2 className="mt-6 text-4xl font-bold leading-[1.02] tracking-[-0.03em] md:text-5xl lg:text-[3.65rem]">
                <span className="block text-balance">{studioSection.titleLine1}</span>
                <span className="block text-primary">{studioSection.titleAccent}</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/80 md:text-[1.05rem]">{studioSection.desc}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="xl" variant="glow" className="uppercase tracking-[0.08em]">
                  <Link href={studioSection.primaryCta.href}>
                    {studioSection.primaryCta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="xl" variant="ghostDark" className="border-white/35 uppercase tracking-[0.08em] hover:border-primary">
                  <Link href={studioSection.secondaryCta.href}>{studioSection.secondaryCta.label}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-20 bg-background py-14 md:py-20">
          <div className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
            <span className="inline-flex rounded-full border border-border px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-foreground">
              {visionSection.eyebrow}
            </span>

            <div className="mt-6 flex items-center justify-center -space-x-3">
              {visionSection.people.map((person) => (
                <img
                  key={person.src}
                  src={person.src}
                  alt={person.alt}
                  width={72}
                  height={72}
                  loading="lazy"
                  decoding="async"
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-background md:h-14 md:w-14"
                />
              ))}
            </div>

            <h2 className="mt-7 max-w-4xl text-3xl font-bold leading-[1.12] tracking-tight text-foreground md:text-5xl md:leading-[1.08]">
              <span className="block text-balance">{visionSection.titleLine1}</span>
              <span className="mt-1 block text-balance">
                <span className="font-serif text-[0.92em] font-medium italic text-primary">{visionSection.titleAccent}</span>{" "}
                {visionSection.titleEnd}
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{visionSection.desc}</p>

            <Button asChild size="xl" variant="glow" className="mt-7 uppercase tracking-[0.08em]">
              <Link href={visionSection.cta.href}>{visionSection.cta.label}</Link>
            </Button>
          </div>
        </section>
      </div>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader center eyebrow="Why Us" title="Why Choose Our Studio" />
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {why.map(({ I, n, t, d }, i) => (
              <Reveal key={t} delay={i * 100}>
                <article className="group relative flex h-full min-h-[22rem] flex-col overflow-hidden rounded-[1.9rem] bg-panel p-8 transition duration-300 hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_30px_70px_-30px_color-mix(in_oklab,var(--primary)_75%,transparent)]">
                  <span aria-hidden className="absolute -bottom-16 -right-12 h-44 w-44 rounded-full bg-ink/[0.04] transition group-hover:bg-light/15" />
                  <span aria-hidden className="absolute -right-4 top-20 h-24 w-24 rounded-full bg-ink/[0.03] transition group-hover:bg-light/10" />
                  <div className="relative flex items-start justify-between gap-4">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-ink text-ink-foreground transition group-hover:bg-light group-hover:text-ink">
                      <I className="h-6 w-6" />
                    </span>
                    <span className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-muted-foreground transition group-hover:text-primary-foreground/70">{n}</span>
                  </div>
                  <div className="relative mt-auto pt-16">
                    <h3 className="text-[1.55rem] font-bold leading-[1.08] tracking-tight">{t}</h3>
                    <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-muted-foreground transition group-hover:text-primary-foreground/85">{d}</p>
                  </div>
                </article>
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

      <section className="overflow-x-clip py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader eyebrow="Categories" title="Browse by Category" />
          <CategoryGrid />
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
