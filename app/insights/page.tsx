import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import InsightsPage from "./insights-page";

export const metadata: Metadata = seo(
  "Insights | The Freshy Designs",
  "Practical signage, branding and retail guides from The Freshy Designs - materials, permits, vehicle wraps and better storefronts.",
);

export default function Page() {
  return <InsightsPage />;
}
