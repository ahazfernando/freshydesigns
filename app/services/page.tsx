import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import ServicesPage from "./services-page";

export const metadata: Metadata = seo(
  "Services | The Freshy Designs",
  "Design and branding, web development, digital marketing and IT support - the services behind a sign that actually works.",
);

export default function Page() {
  return <ServicesPage />;
}
