import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/constants";

const BASE_URL = "https://bengalconsulting.com";
const LOCALES = ["en", "bn"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/contact", "/services"];

  const staticEntries = LOCALES.flatMap((locale) =>
    staticPages.map((path) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1.0 : 0.8,
    }))
  );

  const serviceEntries = LOCALES.flatMap((locale) =>
    SERVICES.map((service) => ({
      url: `${BASE_URL}/${locale}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    }))
  );

  return [...staticEntries, ...serviceEntries];
}
