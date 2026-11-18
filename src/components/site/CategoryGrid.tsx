"use client";

import { useState } from "react";
import { filters, products, type Filter } from "@/data/site";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { SignCard } from "./SignCard";
import { cn } from "@/lib/utils";

export function CategoryGrid({ cta }: { cta?: string | undefined }) {
  const [f, setF] = useState<"All" | Filter>("All");
  const list = f === "All" ? products : products.filter((p) => p.group === f);
  return (
    <div>
      <div role="tablist" className="mb-10 flex flex-wrap gap-2">
        {filters.map((x) => (
          <button key={x} role="tab" aria-selected={f === x} onClick={() => setF(x)}
            className={cn("rounded-full border px-5 py-2 text-sm font-medium transition", f === x ? "border-primary bg-primary text-primary-foreground glow" : "hover:border-primary hover:text-primary")}>
            {x}
          </button>
        ))}
      </div>
      {/* Bleed carousel to the right viewport edge so peeks aren't clipped mid-container */}
      <div className="relative right-0 mr-[calc(50%-50vw)]">
        <Carousel key={f} opts={{ align: "start", dragFree: true }} className="relative">
          <CarouselContent className="-ml-5 pb-4 pt-3">
            {list.map((p, i) => (
              <CarouselItem key={p.slug} className="basis-[82%] pl-5 sm:basis-[48%] lg:basis-[30%]">
                <SignCard {...p} cta={cta} index={i} variant="stack" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex justify-end gap-3 pr-[max(1rem,calc(50vw-50%))]">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
