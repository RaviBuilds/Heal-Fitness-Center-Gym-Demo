import type { WhyChooseUsConfiguration, WhyChooseUsItem } from "./types";

/**
 * Why Choose Us differentiators. Mandatory section — always present.
 *
 * HEAL FITNESS CENTRE — from docs/Gym-Research.md (WHY_CHOOSE_US.*,
 * ABOUT.attributes, REVIEWS.google_rating). Spacious training environment,
 * advanced equipment, professional training support, and Sunday evening access
 * are VERIFIED_OFFICIAL (Google Business Profile primary anchor). Strong
 * Google rating (4.9 across 286 reviews as of October 4, 2026) is
 * VERIFIED_OFFICIAL. No unsupported superlatives beyond researched facts.
 */
export const whyChooseUs: WhyChooseUsItem[] = [
  {
    title: "Spacious training floor",
    description: "Room to move between stations, with the floor laid out as a spacious, modern facility.",
  },
  {
    title: "Advanced equipment",
    description: "Advanced resistance machines for strength and conditioning work.",
  },
  {
    title: "Professional training support",
    description: "Professional training support is available on the floor.",
  },
  {
    title: "Sunday evening access",
    description: "Open Sundays from 5:00 PM to 9:00 PM.",
  },
  {
    title: "Rated 4.9 on Google",
    description: "4.9 stars across 286 Google reviews.",
  },
  {
    title: "Modern training environment",
    description: "A modern facility built around the training floor.",
  },
];

/**
 * Section 03 composition data — the Performance Blueprint.
 *
 * The principles above are the content; this object is the sheet around them:
 * the manifesto heading, the mono deck, the group label and the single anchor
 * photograph the annotations are attached to. A clone edits this object and
 * the array, never the composition.
 *
 * `anchor.alt` describes the photograph itself (a real description of the
 * frame), not the differentiators — the principles are already readable text,
 * so restating them in alt text would be duplication, and describing the
 * photo as "illustrating" a claim would attach an unverifiable meaning to it.
 */
export const whyChooseUsConfiguration: WhyChooseUsConfiguration = {
  index: "03",
  eyebrow: "Why Choose Us",
  headlineLines: ["What actually", "makes the", "difference."],
  accentLastLine: true,
  deck: "Training principles, annotated",
  principlesLabel: "Training principles",
  anchor: {
    src: "/assets/why-choose-us/heal-fitness-centre-madhapur-why-choose-anchor.jpg",
    alt: "Training floor at Heal Fitness Centre in Madhapur, Hyderabad.",
    objectPosition: "50% 22%",
  },
};
