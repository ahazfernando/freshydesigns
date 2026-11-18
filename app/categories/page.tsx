import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { CategoryGrid } from "@/components/site/CategoryGrid";
import { CtaBanner } from "@/components/site/CtaBanner";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo("Signage Categories | The Freshy Designs", "Browse illuminated signs, metal plaques, billboards, reception signs, window graphics, vehicle wraps and cafe signage.");

export default function CategoriesPage() {
  return (
    <>
      <PageHero eyebrow="Catalogue" title="Every Sign Your Business Needs" sub="Filter by category and request a quote on anything that catches your eye." />
      <section className="py-20"><div className="mx-auto max-w-7xl px-4"><CategoryGrid cta="Request Quote" /></div></section>
      <CtaBanner />
    </>
  );
}
