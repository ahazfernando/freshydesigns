import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { StatCounter } from "@/components/site/StatCounter";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Reveal } from "@/components/site/Reveal";
import { images } from "@/data/site";
import type { Metadata } from "next";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo("About Us | The Freshy Designs", "Established in 2011, The Freshy Designs grew from a boutique print workshop into a full-service signage and branding studio.");

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Crafting Signs That Make Brands Shine Since 2011" />
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2">
          <Reveal>
            <SectionHeader eyebrow="Our Story" title="It Started in a Boutique Print Workshop" />
            <div className="space-y-4 text-muted-foreground">
              <p>The Freshy Designs was established in 2011 as a small print workshop. As local businesses asked for more - shopfronts, lightboxes, vehicle graphics - we invested in our own production equipment and an installation team.</p>
              <p>Today we design, manufacture and install every project in-house, so quality and timelines stay in our hands from first sketch to final bolt.</p>
            </div>
          </Reveal>
          <Reveal><img src={images.workshop} alt="Inside our signage production workshop" loading="lazy" width={1280} height={832} className="rounded-xl" /></Reveal>
        </div>
      </section>
      <section className="section-dark py-20">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 text-center md:grid-cols-3">
          <StatCounter value={15} suffix="+" label="Years in business" />
          <StatCounter value={5000} suffix="+" label="Projects completed" />
          <StatCounter value={100} suffix="%" label="In-house production" />
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <SectionHeader center eyebrow="Mission" title="Make Every Business Impossible to Miss" sub="We combine design thinking with precision manufacturing to create signage that's beautiful, durable and compliant." />
        </div>
      </section>
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader eyebrow="Team" title="Meet the Team" sub="Placeholder - add real team photos and names here." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-xl border bg-card p-4">
                <div className="aspect-square rounded-lg border border-dashed bg-muted" />
                <p className="mt-4 font-semibold">[Team Member Name]</p>
                <p className="text-sm text-muted-foreground">[Role]</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}

