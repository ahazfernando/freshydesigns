import type { MetadataRoute } from "next";
import { insights, services } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env["NEXT_PUBLIC_SITE_URL"] ?? "https://thefreshydesign.example";
  const paths = [
    "/",
    "/about",
    "/services",
    "/categories",
    "/projects",
    "/insights",
    "/quote",
    "/contact",
    "/privacy",
    ...services.map((service) => `/services/${service.slug}`),
    ...insights.map((article) => `/insights/${article.slug}`),
  ];

  return paths.map((path) => ({
    url: `${base}${path}`,
  }));
}
