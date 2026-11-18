import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, PhoneCall } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBanner } from "@/components/site/CtaBanner";
import { SignCard } from "@/components/site/SignCard";
import { services, products } from "@/data/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return { title: "Service not found", robots: { index: false } };
  const { seo } = await import("@/lib/seo");
  return seo(`${s.title} | The Freshy Designs`, s.desc);
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const related = products.slice(0, 3);

  return (
    <>
      <PageHero eyebrow="Service" title={s.title} sub={s.desc} />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:gap-14">
          <Reveal>
            <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              What it involves
            </p>
            <h2 className="text-3xl font-bold leading-[1.06] tracking-tight md:text-4xl">{s.intro}</h2>
            <ul className="mt-8 space-y-3">
              {s.includes.map((x) => (
                <li key={x} className="flex items-start gap-3 border-b pb-3 text-sm text-muted-foreground">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/12 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {x}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-[1.75rem] border bg-card p-2">
              <img src={s.image} alt={s.title} loading="lazy" width={1280} height={832} className="aspect-[4/3] w-full rounded-[1.4rem] object-cover" />
              <div className="absolute inset-x-4 bottom-6 flex items-center justify-between gap-4 rounded-2xl bg-ink/85 p-5 text-ink-foreground backdrop-blur">
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary">Next step</p>
                  <p className="mt-1 font-semibold">Get a scoped quote</p>
                </div>
                <Link href="/quote" className="inline-flex items-center gap-2 rounded-full bg-light px-5 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-ink transition-transform hover:-translate-y-0.5">
                  Request it
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-dark py-24">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-ink-muted">
            <span className="h-2 w-2 rounded-full bg-primary" />
            How it runs
          </p>
          <h2 className="max-w-2xl text-4xl font-bold leading-[1.03] tracking-tight md:text-5xl">
            Four stages, <span className="text-primary">no surprises</span>
          </h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
            {s.steps.map((t, k) => (
              <li key={t} className="relative">
                {k < s.steps.length - 1 && <span aria-hidden className="absolute left-0 top-6 hidden h-px w-[calc(100%_+_1.5rem)] bg-primary/25 md:block" />}
                <Reveal delay={k * 110}>
                  <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-primary font-display text-base font-bold text-primary-foreground glow">
                    {k + 1}
                  </span>
                  <h3 className="mt-6 text-lg font-bold">{t}</h3>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Pairs well with
              </p>
              <h2 className="text-4xl font-bold leading-[1.03] tracking-tight md:text-5xl">Signage we can produce for this</h2>
            </div>
            <Link href="/categories" className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-[0.72rem] font-bold uppercase tracking-[0.12em] transition-colors hover:bg-secondary">
              Browse categories
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((p, k) => (
              <Reveal key={p.slug} delay={k * 90}>
                <SignCard {...p} variant={k === 1 ? "split" : "overlay"} tags={p.tags} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Ready to talk {s.title.toLowerCase()}?</h2>
            <p className="mt-2 max-w-lg text-muted-foreground">
              Tell us what you're trying to fix or launch and we'll come back with a scoped, fixed-price proposal.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/quote" className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-semibold text-ink-foreground transition-transform hover:-translate-y-0.5">
              <PhoneCall className="h-4 w-4" />
              Request a Quote
            </Link>
            <Link href="/services" className="rounded-full border px-7 py-3.5 font-semibold transition-colors hover:bg-card">
              All services
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
