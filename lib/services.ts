import type { Service } from "./types";

/**
 * Master services data. Only services with verified:true render on the live
 * site. A service can exist here and remain disabled — this is the direct
 * mechanism that prevents an unverified/discontinued program from silently
 * appearing on a gym website.
 *
 * HEAL FITNESS CENTRE — programs from docs/Gym-Research.md (PROGRAMS.*).
 * General Gym Access and Strength Training are VERIFIED_OFFICIAL (Google
 * Business Profile primary anchor + imagery). Personal Training is
 * PUBLICLY_REPORTED (user reviews / service material) and Professional
 * Training Support is VERIFIED_OFFICIAL (GBP description). Functional / Group
 * Classes is low-confidence directory noise, so it is kept below with
 * verified:false (does not render) until management confirms it. Zumba,
 * Pilates, Grappling and Martial Arts are excluded entirely.
 *
 * STABLE IDs: `strength-training`, `conditioning` and `personal-training`
 * are cross-referenced by id from the frozen educational module
 * lib/training-intelligence.ts (`programId`, see
 * components/sections/trainingLoadout.ts). These three ids must not be
 * renamed even though the gym-facing program name differs.
 */
export const services: Service[] = [
  {
    id: "strength-training",
    name: "Strength Training",
    description: "Advanced resistance equipment for strength and conditioning.",
    icon: "strength",
    image: "/assets/programs/heal-fitness-centre-madhapur-program-strength-training.jpg",
    verified: true,
    ctaLabel: "Ask about strength training",
    ctaHref: undefined,
  },
  {
    id: "conditioning",
    name: "General Gym Access",
    description: "Standard access to the spacious training floor, free weights, and machine training.",
    icon: "equipment",
    image: "/assets/programs/heal-fitness-centre-madhapur-program-general-gym-access.jpg",
    verified: true,
    ctaLabel: "Ask about membership",
    ctaHref: undefined,
  },
  {
    id: "personal-training",
    name: "Personal Training",
    description: "One-on-one coaching support.",
    icon: "coaching",
    image: "/assets/programs/heal-fitness-centre-madhapur-program-personal-training.jpg",
    verified: true,
    ctaLabel: "Ask about personal training",
    ctaHref: undefined,
  },
  {
    id: "professional-training-support",
    name: "Professional Training Support",
    description: "Guidance from professional training staff on the floor.",
    icon: "coaching",
    image: "/assets/programs/heal-fitness-centre-madhapur-program-professional-training-support.jpg",
    verified: true,
    ctaLabel: "Ask about training support",
    ctaHref: undefined,
  },
  {
    id: "functional-group-classes",
    name: "Functional Training",
    description: "Functional fitness training in dedicated space.",
    icon: "equipment",
    image: "/assets/programs/heal-fitness-centre-madhapur-program-functional-training.jpg",
    // Low-confidence directory tag only (research: do not publish until
    // management confirms). Kept as documentation; does not render.
    verified: false,
    ctaLabel: "Ask about functional training",
    ctaHref: undefined,
  },
];
