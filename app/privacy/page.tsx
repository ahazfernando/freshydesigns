import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { site } from "@/data/site";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo("Privacy Policy | The Freshy Designs", "How The Freshy Designs collects, uses and protects your personal information.");

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" sub="Placeholder policy - have this reviewed before going live." />
      <section className="py-16">
        <div className="mx-auto max-w-3xl space-y-8 px-4 text-muted-foreground">
          {[
            ["Information we collect", "When you request a quote or contact us, we collect details you provide such as your name, email, phone number, business name and project information, including any artwork you upload."],
            ["How we use it", "We use your information only to respond to your enquiry, prepare quotes and deliver our services. We do not sell your personal information."],
            ["Storage & security", "We take reasonable steps to protect your information from misuse, loss and unauthorised access."],
            ["Your rights", "You may request access to, or correction of, the personal information we hold about you under the Australian Privacy Principles."],
            ["Contact", `Questions about this policy can be sent to ${site.email}.`],
          ].map(([h, p]) => (
            <div key={h}><h2 className="mb-2 text-xl font-bold text-foreground">{h}</h2><p>{p}</p></div>
          ))}
        </div>
      </section>
    </>
  );
}
