export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="section-dark -mt-24 p-3"><section className="relative overflow-hidden rounded-[2rem] border border-ink-border">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-36 md:pb-28">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        <h1 className="max-w-3xl text-4xl font-bold md:text-6xl">{title}</h1>
        {sub && <p className="mt-5 max-w-2xl text-lg text-ink-muted">{sub}</p>}
      </div>
    </section></div>
  );
}
