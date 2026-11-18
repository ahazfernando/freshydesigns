import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, Clock3 } from "lucide-react";
import { CtaBanner } from "@/components/site/CtaBanner";
import { insights } from "@/data/site";

export function generateStaticParams() {
  return insights.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = insights.find((item) => item.slug === slug);
  const { seo } = await import("@/lib/seo");
  return seo(
    article ? `${article.title} | The Freshy Designs` : "Insight | The Freshy Designs",
    article?.excerpt ?? "Practical signage and branding guidance from The Freshy Designs.",
  );
}

export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = insights.find((item) => item.slug === slug);
  if (!article) notFound();
  const related = insights.filter((item) => item.slug !== article.slug && item.category === article.category).slice(0, 2);
  const more = related.length > 0 ? related : insights.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <>
      <article>
        <header className="-mt-24 bg-secondary/55 pb-14 pt-36 md:pb-20 md:pt-44">
          <div className="mx-auto max-w-5xl px-5">
            <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-primary"><ArrowLeft className="h-4 w-4" />Back to Insights</Link>
            <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-primary">{article.category}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.06] tracking-[-0.04em] md:text-6xl">{article.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">{article.excerpt}</p>
            <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-muted-foreground"><span>{article.date}</span><span className="flex items-center gap-1.5"><Clock3 className="h-4 w-4" />{article.readTime}</span><span>By The Freshy Designs team</span></div>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
          <img src={article.image} alt={article.title} className="aspect-[16/8] w-full rounded-[1.75rem] object-cover" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-10 md:grid-cols-[1fr_15rem]">
            <div className="space-y-6 text-[1.06rem] leading-8 text-foreground/85">
              {article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <aside className="h-fit rounded-[1.25rem] bg-secondary p-6 md:sticky md:top-28">
              <h2 className="text-sm font-bold uppercase tracking-[0.14em]">Key takeaways</h2>
              <ul className="mt-5 space-y-4">
                {article.takeaways.map((point) => <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="h-3 w-3" /></span>{point}</li>)}
              </ul>
            </aside>
          </div>
          <div className="mx-auto mt-12 flex max-w-4xl flex-col items-start justify-between gap-5 rounded-[1.5rem] section-dark p-7 md:flex-row md:items-center">
            <div><h2 className="text-2xl font-bold">Planning a signage project?</h2><p className="mt-2 text-sm text-ink-muted">Bring us your site photos and ideas. We'll help with the practical details.</p></div>
            <Link href="/quote" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground">Request a quote<ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </article>

      <section className="border-t bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Keep reading</p>
          <h2 className="mt-2 text-3xl font-bold">Related insights</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {more.map((item) => (
              <Link key={item.slug} href={`/insights/${item.slug}`} className="group grid overflow-hidden rounded-[1.25rem] border bg-card sm:grid-cols-[10rem_1fr]">
                <img src={item.image} alt="" loading="lazy" className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-full" />
                <div className="p-6"><p className="text-[0.62rem] font-bold uppercase tracking-[0.15em] text-primary">{item.category}</p><h3 className="mt-2 text-xl font-bold leading-snug">{item.title}</h3><p className="mt-3 text-sm text-muted-foreground">{item.readTime}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
