import type { AboutConfiguration, BusinessHours } from "./types";

/**
 * Section 01 — facility / training-floor story content.
 *
 * Customizable per gym (labels, image, attributes, headline). The narrative
 * paragraph is deliberately NOT duplicated here: Section 01 renders
 * `business.description`, so the facility description has exactly one source
 * of truth.
 *
 * Source-First rules that apply to this file:
 * - A zone or attribute with `verified: false` does not render. Leave it in
 *   the file as documentation of what was checked and found absent.
 * - Never add a claim, statistic, equipment count, award or superlative here
 *   to make the section look fuller. The composition carries the density.
 *
 * HEAL FITNESS CENTRE — populated from docs/Gym-Research.md
 * (ABOUT.zones, ABOUT.attributes, PROGRAMS.*). Zones reflect the
 * VERIFIED_OFFICIAL spacious training floor and advanced resistance equipment
 * (Google Business Profile primary anchor + imagery). Attributes are limited
 * to what the research actually verified — spacious floor, advanced/modern
 * equipment, and professional training support are VERIFIED_OFFICIAL;
 * parking, lockers, showers, changing rooms, nutrition consultation, and BMI
 * assessment are all NOT_FOUND and therefore not claimed here.
 */
export const aboutConfiguration: AboutConfiguration = {
  index: "01",
  eyebrow: "About the gym",
  headlineLines: ["The floor behind", "the brand."],
  accentLastLine: true,
  image: {
    src: "/assets/about/heal-fitness-centre-madhapur-about-gym-interior.jpg",
    alt: "Spacious training floor at Heal Fitness Centre in Madhapur, Hyderabad featuring advanced equipment",
  },
  imageLabel: "Training floor",
  frameLabel: "Facility",
  zonesLabel: "Training environment",
  attributesLabel: "Floor & support",
  scheduleLabel: "Opening schedule",
  zones: [
    {
      id: "strength",
      label: "Strength & Resistance",
      detail: "Advanced resistance machines for strength and conditioning.",
      icon: "strength",
      verified: true,
    },
    {
      id: "cardio",
      label: "Cardio",
      detail: "Dedicated cardio training area with modern cardiovascular equipment.",
      icon: "cardio",
      verified: true,
    },
    {
      id: "functional",
      label: "Functional Training",
      detail: "Functional fitness space for movement-based training.",
      icon: "equipment",
      // PUBLICLY_REPORTED from low-confidence directory tags only; the
      // research says not to publish until management confirms.
      verified: false,
    },
  ],
  attributes: [
    { id: "spacious", label: "Spacious training floor", verified: true },
    { id: "advanced-equipment", label: "Advanced equipment", verified: true },
    { id: "modern-environment", label: "Modern training environment", verified: true },
    { id: "professional-training", label: "Professional training support", verified: true },
    // Checked and not found in docs/Gym-Research.md: parking, lockers,
    // showers, changing rooms, nutrition consultation, and BMI/body
    // composition assessment are all NOT_FOUND or only mentioned generically
    // in broader-area directory material. Left here unverified as the record
    // of what was checked rather than omitted silently.
    { id: "parking", label: "Parking", verified: false },
    { id: "lockers", label: "Lockers", verified: false },
    { id: "showers", label: "Showers", verified: false },
  ],
  showSchedule: true,
};

/** One grouped opening window, e.g. `Mon–Fri / 05:00 AM – 11:00 PM`. */
export interface ScheduleWindow {
  label: string;
  value: string;
}

/**
 * Beyond this many distinct windows the readout stops being a compact
 * technical module and starts being a timetable, so Section 01 renders
 * nothing and the full hours stay with the location section instead.
 */
const MAX_SCHEDULE_GROUPS = 3;

function shortDay(day: string): string {
  return day.trim().slice(0, 3);
}

/**
 * Collapse a week of opening hours into consecutive day ranges that share the
 * same open/close window. Derived, never authored: the caller passes
 * `business.hours`, so Section 01 can only ever show hours that already exist
 * in lib/business.ts (and therefore in the LocalBusiness structured data) —
 * it cannot invent a schedule. Hours are taken as an explicit argument rather
 * than imported here so this module stays pure and directly testable.
 */
export function scheduleWindows(hours: BusinessHours[]): ScheduleWindow[] {
  if (hours.length === 0) return [];

  const groups: { days: string[]; open: string; close: string }[] = [];

  for (const entry of hours) {
    if (!entry.day || !entry.open || !entry.close) return [];
    const current = groups[groups.length - 1];
    if (current && current.open === entry.open && current.close === entry.close) {
      current.days.push(entry.day);
    } else {
      groups.push({ days: [entry.day], open: entry.open, close: entry.close });
    }
  }

  if (groups.length > MAX_SCHEDULE_GROUPS) return [];

  return groups.map((group) => ({
    label:
      group.days.length === 1
        ? shortDay(group.days[0])
        : `${shortDay(group.days[0])}\u2013${shortDay(group.days[group.days.length - 1])}`,
    value: `${group.open} \u2013 ${group.close}`,
  }));
}
