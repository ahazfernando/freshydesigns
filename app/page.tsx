import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { site } from "@/data/site";
import HomePage from "./home-page";

export const metadata: Metadata = seo(
  "The Freshy Designs | Custom Signage & Branding Studio",
  `Illuminated signs, vehicle wraps, building signage and retail branding crafted in ${site.city}, Australia. Request a fast quote.`,
);

export default function Page() {
  return <HomePage />;
}
