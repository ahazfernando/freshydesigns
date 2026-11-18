"use client";

import Link from "next/link";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import { Logo } from "./Header";
import { site } from "@/data/site";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/categories", label: "Our Categories" },
  { href: "/insights", label: "Blogs" },
  { href: "/#faq", label: "FAQ" },
];

const secondaryLinks = [
  { href: "/quote", label: "Request A Quote" },
  { href: "/contact", label: "Contact Us" },
  { href: "/sitemap.xml", label: "Sitemap" },
  { href: "/privacy", label: "Privacy Policy" },
];

export function Footer() {
  return (
    <footer className="section-dark border-t border-ink-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo onDark />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">{site.blurb}</p>
          <div className="mt-6 flex gap-3">
            {(
              [
                { h: site.socials.instagram, I: Instagram, l: "Instagram" },
                { h: site.socials.facebook, I: Facebook, l: "Facebook" },
                { h: site.socials.linkedin, I: Linkedin, l: "LinkedIn" },
              ] as const
            ).map(({ h, I, l }) => (
              <a
                key={l}
                href={h}
                aria-label={l}
                className="grid h-10 w-10 place-items-center rounded-full border border-ink-border transition hover:border-primary hover:text-primary"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <ul className="space-y-3 text-sm text-ink-muted">
            {primaryLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul className="space-y-3 text-sm text-ink-muted">
            {secondaryLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-semibold">Contact Info</h3>
          <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="block text-2xl font-bold tracking-tight transition hover:text-primary">
            {site.phone}
          </a>
          <p className="mt-3 text-sm text-ink-muted">{site.hours}</p>
          <a href={`mailto:${site.email}`} className="mt-8 block text-lg font-bold transition hover:text-primary">
            {site.email}
          </a>
          <p className="mt-2 text-sm text-ink-muted">{site.emailNote}</p>
        </div>
      </div>
      <div className="border-t border-ink-border py-6 text-center text-xs text-ink-muted">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
