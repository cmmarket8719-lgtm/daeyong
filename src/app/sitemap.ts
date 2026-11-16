import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    ...["/about", "/mall", "/products", "/price", "/cases", "/contact"].map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${site.url}/privacy`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
