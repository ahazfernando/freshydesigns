"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PageHero } from "@/components/site/PageHero";
import { site } from "@/data/site";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const info = [
    { I: Phone, l: "Phone", v: site.phone }, { I: Mail, l: "Email", v: site.email },
    { I: MapPin, l: "Address", v: site.address }, { I: Clock, l: "Hours", v: site.hours },
  ];
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's Talk Signage" />
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2">
          <div className="rounded-xl border bg-card p-6 md:p-8">
            {sent ? (
              <div role="status" className="py-10 text-center"><CheckCircle2 className="mx-auto h-12 w-12 text-primary" /><p className="mt-4 text-xl font-bold">Message sent - we'll be in touch soon.</p></div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <div className="space-y-2"><Label htmlFor="cn">Name</Label><Input id="cn" required /></div>
                <div className="space-y-2"><Label htmlFor="ce">Email</Label><Input id="ce" type="email" required /></div>
                <div className="space-y-2"><Label htmlFor="cm">Message</Label><Textarea id="cm" rows={5} required /></div>
                <Button type="submit" variant="glow" size="xl" className="w-full">Send Message</Button>
              </form>
            )}
          </div>
          <div className="space-y-6">
            <ul className="grid gap-4 sm:grid-cols-2">
              {info.map(({ I, l, v }) => (
                <li key={l} className="rounded-xl border bg-card p-5"><I className="h-5 w-5 text-primary" /><p className="mt-3 text-sm text-muted-foreground">{l}</p><p className="font-semibold">{v}</p></li>
              ))}
            </ul>
            <div className="section-dark grid aspect-video place-items-center rounded-xl text-ink-muted">Map placeholder - embed Google Map here</div>
          </div>
        </div>
      </section>
    </>
  );
}
