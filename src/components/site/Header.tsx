"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown, Mail, Menu, X } from "lucide-react";
import { nav, services } from "@/data/site";
import { cn } from "@/lib/utils";

export function Logo({ onDark = false }: { onDark?: boolean } = {}) {
  if (onDark) {
    return (
      <Link href="/" className="flex items-center gap-2.5 text-lg font-bold text-ink-foreground">
        <img src="/monogram.png" alt="" width={36} height={36} className="h-9 w-9 object-contain" />
        <span className="leading-none">
          THE FRESHY DESIGNS
          <span className="block text-[0.6rem] font-medium tracking-[0.08em] opacity-60">Design Solutions For Any Media.</span>
        </span>
      </Link>
    );
  }

  return (
    <Link href="/" className="flex items-center">
      <img
        src="/logo.png"
        alt="The Freshy Designs"
        width={217}
        height={72}
        className="h-9 w-auto object-contain md:h-10"
      />
    </Link>
  );
}

const pill = "rounded-[24px] px-4 py-2 text-[0.82rem] font-medium transition";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const currentService = services[activeService]!;

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setServicesOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(`${to}/`));

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-3 z-50 px-2 sm:px-3 md:top-4 md:px-4" onMouseLeave={() => setServicesOpen(false)}>
      <div className="relative w-full">
        <div className="nav-pill relative z-20 flex items-center justify-between rounded-full py-2 pl-5 pr-2 shadow-lg">
          <Logo />

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center rounded-full bg-muted/80 p-1 xl:flex">
            <nav aria-label="Main" className="flex items-center gap-0.5">
              {nav.map((item) =>
                item.to === "/services" ? (
                  <button
                    key={item.to}
                    type="button"
                    aria-expanded={servicesOpen}
                    aria-controls="services-menu"
                    onClick={() => setServicesOpen(true)}
                    onMouseEnter={() => setServicesOpen(true)}
                    className={`${pill} flex items-center gap-1.5 hover:bg-card ${servicesOpen ? "bg-primary text-primary-foreground hover:bg-primary" : ""}`}
                  >
                    {item.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    key={item.to}
                    href={item.to}
                    onClick={() => setServicesOpen(false)}
                    className={cn(pill, "whitespace-nowrap hover:bg-card", isActive(item.to) && "bg-primary text-primary-foreground hover:bg-primary")}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>
          </div>

          <div className="hidden items-center gap-2 xl:flex">
            <Link href="/contact" aria-label="Contact us" className="grid h-10 w-10 place-items-center rounded-full transition hover:bg-muted">
              <Mail className="h-4.5 w-4.5" />
            </Link>
            <Link
              href="/quote"
              className="flex items-center gap-2 rounded-[24px] bg-primary px-5 py-3 text-[0.82rem] font-semibold text-primary-foreground transition hover:bg-ink hover:text-ink-foreground"
            >
              Request a Quote
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <button aria-label="Toggle menu" aria-expanded={open} className="p-3 xl:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {servicesOpen && (
          // pt-3 bridges the visual gap so the cursor never leaves the header hit area
          <div
            id="services-menu"
            className="absolute inset-x-0 top-full z-10 hidden pt-3 xl:block"
            onMouseEnter={() => setServicesOpen(true)}
          >
            <div className="section-dark overflow-hidden rounded-[2rem] border border-ink-border shadow-2xl xl:grid xl:grid-cols-[19rem_1fr]">
              <div className="border-r border-ink-border p-5">
                <p className="px-3 pb-3 pt-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-ink-muted">What we do</p>
                <nav aria-label="Services" className="space-y-1">
                  {services.map((service, index) => (
                    <button
                      key={service.slug}
                      type="button"
                      onMouseEnter={() => setActiveService(index)}
                      onFocus={() => setActiveService(index)}
                      onClick={() => setActiveService(index)}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-[0.9rem] font-medium transition ${index === activeService ? "bg-primary text-primary-foreground" : "text-ink-muted hover:bg-light/5 hover:text-ink-foreground"}`}
                    >
                      {service.title}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ))}
                </nav>
                <Link
                  href="/services"
                  onClick={() => setServicesOpen(false)}
                  className="mt-4 flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted transition hover:text-primary"
                >
                  View all services
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="relative grid min-h-[25rem] grid-cols-[1fr_0.85fr] gap-8 overflow-hidden bg-gradient-to-br from-primary/15 via-ink to-ink p-9">
                <div className="relative z-10 flex flex-col items-start justify-center">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-primary">Services</p>
                  <h2 className="mt-4 max-w-sm text-4xl font-semibold leading-[1.04] tracking-tight">{currentService.title}</h2>
                  <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-muted">{currentService.intro}</p>
                  <Link
                    href={`/services/${currentService.slug}`}
                    onClick={() => setServicesOpen(false)}
                    className="mt-7 inline-flex items-center gap-3 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-ink transition hover:bg-primary hover:text-primary-foreground"
                  >
                    View service
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="relative min-h-64 overflow-hidden rounded-[1.5rem] border border-light/10">
                  <img key={currentService.slug} src={currentService.image} alt={currentService.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                </div>
                <button
                  type="button"
                  aria-label="Close services menu"
                  onClick={() => setServicesOpen(false)}
                  className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-light/10 text-ink-foreground transition hover:bg-primary hover:text-primary-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {open && (
        <nav aria-label="Mobile" className="nav-pill mt-2 max-h-[calc(100svh-7rem)] w-full overflow-y-auto rounded-[1.5rem] p-3 xl:hidden">
          {nav.map((item) =>
            item.to === "/services" ? (
              <div key={item.to}>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((value) => !value)}
                  aria-expanded={mobileServicesOpen}
                  className={`${pill} flex w-full items-center justify-between`}
                >
                  {item.label}
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="mb-2 ml-3 border-l pl-3">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                      >
                        {service.title}
                      </Link>
                    ))}
                    <Link href="/services" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-primary">
                      View all services
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.to}
                href={item.to}
                onClick={() => setOpen(false)}
                className={cn(pill, "block", isActive(item.to) && "bg-primary text-primary-foreground")}
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href="/quote"
            onClick={() => setOpen(false)}
            className={`${pill} mt-2 flex items-center justify-center gap-2 bg-ink text-center text-ink-foreground`}
          >
            Request a Quote
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </nav>
      )}
    </header>
  );
}
