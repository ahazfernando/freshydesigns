import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import ProjectsPage from "./projects-page";

export const metadata: Metadata = seo(
  "Projects | The Freshy Designs",
  "A look at recent signage work - illuminated signs, plaques, wraps, lobby logos and window graphics delivered in-house.",
);

export default function Page() {
  return <ProjectsPage />;
}
