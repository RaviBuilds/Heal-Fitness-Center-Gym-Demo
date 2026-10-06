import type { SEOConfiguration } from "./types";

/**
 * Master SEO configuration. Consumed once, centrally, by app/layout.tsx's
 * Metadata API. Never duplicate these values inside page/section
 * components.
 *
 * HEAL FITNESS CENTRE SEO configuration, from docs/Gym-Research.md
 * (SEO.title_candidate — INFERRED from verified business data). canonical
 * is a placeholder domain pending the client's real production URL/domain
 * (research confirms WEBSITE.discovery_status = "WEBSITE_NOT_FOUND").
 */
export const seo: SEOConfiguration = {
  title: "Heal Fitness Centre | Unisex Gym in Madhapur, Hyderabad",
  description:
    "Spacious unisex gym in Madhapur, Hyderabad featuring advanced equipment and professional training support.",
  canonical: "https://example.com",
  ogImage: undefined,
  robots: "index, follow",
};
