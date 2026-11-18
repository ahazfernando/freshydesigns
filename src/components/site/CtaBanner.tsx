"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="bg-primary">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-16 text-primary-foreground md:flex-row">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">Ready to Start Your Project?</h2>
          <p className="mt-2 opacity-80">Tell us what you need and we'll come back with a fast, detailed quote.</p>
        </div>
        <Button asChild size="xl" className="bg-ink text-ink-foreground hover:bg-ink/90"><Link href="/quote">Request a Quote</Link></Button>
      </div>
    </section>
  );
}
