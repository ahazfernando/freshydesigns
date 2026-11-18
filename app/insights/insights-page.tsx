"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, Clock3, Search, X } from "lucide-react";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Reveal } from "@/components/site/Reveal";
import { insights, type Insight } from "@/data/site";
import { cn } from "@/lib/utils";

const categories = ["All", "Signage", "Branding", "Retail", "Vehicle Wraps", "Guides"];

function StoryCard({ article }: { article: Insight }) {
  return (
    <article className="lift group h-full overflow-hidden rounded-[1.5rem] border bg-card">
      <Link href={`/insights/${article.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img src={article.image} alt={article.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-primary-foreground">{article.category}</span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-3 text-xs text-muted-foreground"><span>{article.date}</span><span className="flex items-center gap-1"><Clock3 className="h-3.5 w-3.5" />{article.readTime}</span></div>
          <h2 className="mt-3 text-xl font-bold leading-tight">{article.title}</h2>
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-primary">Read article<ArrowUpRight className="h-4 w-4" /></span>
        </div>
      </Link>
    </article>
  );
}

export default function InsightsPage() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const featured = insights[0]!;
  const fresh = insights.slice(1, 4);
  const popular = insights.slice(2, 5);
  const breaking = insights.slice(4, 8);
  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return insights.filter((article) => {
      const inCategory = active === "All" || article.category === active;
      const inSearch = !term || `${article.title} ${article.excerpt} ${article.category}`.toLowerCase().includes(term);
      return inCategory && inSearch;
    });
  }, [active, query]);
  const isFiltering = active !== "All" || query.trim().length > 0;

  return (
    <>
      <section className="-mt-24 border-b bg-secondary/55 pt-36 md:pt-40">
        <div className="mx-auto max-w-[90rem] px-5 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-foreground">Ideas for better branding</p>
          <h1 className="mt-5 text-6xl font-semibold tracking-[-0.055em] md:text-8xl">Insights</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">Practical perspectives on signage, branding and the details that help a business get noticed.</p>
          <div className="mt-12 flex flex-col gap-5 border-t py-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-1.5" aria-label="Filter articles by category">
              {categories.map((category) => (
                <button key={category} type="button" onClick={() => setActive(category)} className={cn("rounded-full px-4 py-2.5 text-sm font-semibold transition", active === category ? "bg-primary text-primary-foreground" : "hover:bg-card")}>{category}</button>
              ))}
            </div>
            <label className="flex min-w-64 items-center gap-3 rounded-full border bg-card px-5 py-3 focus-within:ring-2 focus-within:ring-ring">
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
              <span className="sr-only">Search insights</span>
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search articles" className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
              {query && <button type="button" aria-label="Clear search" onClick={() => setQuery("")}><X className="h-4 w-4 text-muted-foreground" /></button>}
            </label>
          </div>
        </div>
        <Link href={`/insights/${featured.slug}`} className="group mx-auto flex max-w-[90rem] items-center gap-4 border-t px-5 py-4 text-sm md:px-8">
          <span className="shrink-0 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-primary">Featured</span>
          <span className="truncate font-medium">{featured.title}</span>
          <span className="ml-auto hidden shrink-0 text-muted-foreground sm:inline">{featured.date}</span>
          <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
        </Link>
      </section>

      <div className="py-14 md:py-20">
        <div className="mx-auto max-w-[90rem] px-5 md:px-8">
          {isFiltering ? (
            <section aria-live="polite">
              <div className="mb-8 flex items-end justify-between gap-4">
                <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Browse insights</p><h2 className="mt-2 text-3xl font-bold">{filtered.length} {filtered.length === 1 ? "article" : "articles"} found</h2></div>
                <button type="button" onClick={() => { setActive("All"); setQuery(""); }} className="rounded-full border px-4 py-2 text-sm font-semibold hover:bg-secondary">Reset filters</button>
              </div>
              {filtered.length > 0 ? <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((article, index) => <Reveal key={article.slug} delay={(index % 3) * 80}><StoryCard article={article} /></Reveal>)}</div> : <div className="rounded-[1.5rem] border border-dashed p-16 text-center"><h3 className="text-2xl font-bold">No articles match that search</h3><p className="mt-2 text-muted-foreground">Try another keyword or browse all categories.</p></div>}
            </section>
          ) : (
            <>
              <section className="grid gap-10 lg:grid-cols-[0.72fr_1.65fr_0.82fr]">
                <aside>
                  <h2 className="border-b pb-5 text-2xl font-bold">Fresh stories</h2>
                  <div className="divide-y">
                    {fresh.map((article) => (
                      <Link key={article.slug} href={`/insights/${article.slug}`} className="group block py-6">
                        <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-primary">{article.category}</p>
                        <h3 className="mt-2 text-lg font-bold leading-snug group-hover:text-primary">{article.title}</h3>
                        <p className="mt-3 text-sm text-muted-foreground">{article.date}</p>
                      </Link>
                    ))}
                  </div>
                </aside>

                <article className="min-w-0">
                  <Link href={`/insights/${featured.slug}`} className="group block">
                    <div className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem] bg-secondary">
                      <img src={featured.image} alt={featured.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <span className="absolute left-5 top-5 rounded-full bg-primary px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-primary-foreground">Editor's pick</span>
                    </div>
                    <p className="mt-6 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-primary">{featured.category}</p>
                    <h2 className="mt-2 max-w-2xl text-3xl font-bold leading-[1.08] tracking-tight md:text-4xl">{featured.title}</h2>
                    <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{featured.excerpt}</p>
                    <div className="mt-5 flex items-center gap-4 text-sm text-muted-foreground"><span>{featured.date}</span><span className="flex items-center gap-1.5"><Clock3 className="h-4 w-4" />{featured.readTime}</span></div>
                  </Link>
                </article>

                <aside>
                  <h2 className="border-b pb-5 text-2xl font-bold">Popular</h2>
                  <div className="divide-y">
                    {popular.map((article, index) => (
                      <Link key={article.slug} href={`/insights/${article.slug}`} className="group flex gap-4 py-6">
                        <span className="font-serif text-3xl italic text-primary">0{index + 1}</span>
                        <div><p className="text-[0.62rem] font-bold uppercase tracking-[0.15em] text-primary">{article.category}</p><h3 className="mt-2 font-bold leading-snug group-hover:text-primary">{article.title}</h3><p className="mt-3 text-sm text-muted-foreground">{article.date}</p></div>
                      </Link>
                    ))}
                  </div>
                </aside>
              </section>

              <section className="mt-16 border-t pt-10">
                <div className="mb-6 flex items-center gap-4"><span className="bg-primary px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-primary-foreground">Explore</span><h2 className="text-2xl font-bold">More practical guides</h2></div>
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                  {breaking.map((article) => (
                    <Link key={article.slug} href={`/insights/${article.slug}`} className="group relative aspect-[4/5] overflow-hidden rounded-[1.25rem]">
                      <img src={article.image} alt={article.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
                      <span className="absolute left-4 top-4 bg-primary px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.13em] text-primary-foreground">{article.category}</span>
                      <div className="absolute inset-x-0 bottom-0 p-5 text-ink-foreground"><h3 className="text-xl font-bold leading-tight">{article.title}</h3><span className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]">Read story<ArrowUpRight className="h-4 w-4" /></span></div>
                    </Link>
                  ))}
                </div>
              </section>
            </>
          )}
        </div>
      </div>
      <CtaBanner />
    </>
  );
}
