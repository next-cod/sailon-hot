import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/links";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/support",
    "/contacts",
    "/legal/offer",
    "/legal/terms",
    "/legal/privacy",
    "/legal/consent",
    "/legal/cookies",
  ];

  return pages.map((path, index) => ({
    url: `${siteConfig.canonicalUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: index === 0 ? 1 : 0.5,
  }));
}
