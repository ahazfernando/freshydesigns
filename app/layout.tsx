import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import "@/styles.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-face",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif-face",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Freshy Designs",
    template: "%s | The Freshy Designs",
  },
  description: "Premium custom signage and branding studio in Australia.",
  icons: {
    icon: "/monogram.png",
    apple: "/monogram.png",
  },
  openGraph: {
    title: "The Freshy Designs",
    description: "Premium custom signage and branding studio in Australia.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${instrumentSerif.variable}`}>
      <body className={instrumentSans.className}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-primary focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
