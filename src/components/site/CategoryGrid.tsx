"use client";

import { useState } from "react";
import { filters, products, type Filter } from "@/data/site";
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
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => <SignCard key={p.slug} {...p} cta={cta} featured={i % 6 === 0} variant={i % 3 === 0 ? "panel" : i % 3 === 1 ? "overlay" : "split"} />)}
      </div>
    </div>
  );
}
