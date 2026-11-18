import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { site } from "@/data/site";
import ContactPage from "./contact-page";

export const metadata: Metadata = seo(
  "Contact Us | The Freshy Designs",
  `Get in touch with our signage studio in ${site.city}. Call, email or send us a message.`,
);

export default function Page() {
  return <ContactPage />;
}
