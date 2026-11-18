"use client";

import { useSearchParams } from "next/navigation";
import { PageHero } from "@/components/site/PageHero";
import { QuoteForm } from "@/components/site/QuoteForm";

export default function QuotePage() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") ?? undefined;

  return (
    <>
      <PageHero eyebrow="Free Quote" title="Request a Quote" sub="Share a few details and we'll respond with pricing and next steps." />
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <QuoteForm defaultType={type} />
        </div>
      </section>
    </>
  );
}
