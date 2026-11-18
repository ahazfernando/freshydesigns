import type { Metadata } from "next";
import { Suspense } from "react";
import { seo } from "@/lib/seo";
import QuotePage from "./quote-page";

export const metadata: Metadata = seo(
  "Request a Quote | The Freshy Designs",
  "Tell us about your signage project and get a fast, detailed quote from our team.",
);

export default function Page() {
  return (
    <Suspense fallback={<div className="py-24 text-center text-muted-foreground">Loading…</div>}>
      <QuotePage />
    </Suspense>
  );
}
