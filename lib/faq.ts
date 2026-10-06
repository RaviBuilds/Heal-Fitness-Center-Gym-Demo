import type { FaqItem } from "./types";

/**
 * Master FAQ data. Generated only from real, known business information.
 * If the answer to a potential question isn't actually known, don't create
 * that FAQ entry.
 *
 * HEAL FITNESS CENTRE — from docs/Gym-Research.md (FAQ.*). Location, gym
 * type and phone are VERIFIED_OFFICIAL. Monday–Saturday hours are
 * PUBLICLY_REPORTED; Sunday 5:00 PM–9:00 PM is the Google Business Profile
 * value and has a documented third-party conflict (owner sign-off still
 * required — see lib/business.ts). Programs mix VERIFIED_OFFICIAL and
 * PUBLICLY_REPORTED entries.
 *
 * NOT added, because the research has no supported answer (all NOT_FOUND):
 * parking, lockers/showers/changing rooms, nutrition consultation,
 * body-composition assessment, cancellation/freeze/trial/joining-fee/guest
 * policy, class schedules, email, WhatsApp. Visitor-facing answers must read
 * as website copy — research caveats belong in these comments, not in text.
 */
export const faq: FaqItem[] = [
  {
    id: "01",
    question: "Where is Heal Fitness Centre located?",
    answer:
      "F92R+7Q4, Rd No. 19, SBH Officers Colony, Mega Hills, Madhapur, Hyderabad, Telangana 500081 — near Ayyappa Society.",
  },
  {
    id: "02",
    question: "What are the opening hours?",
    answer:
      "Monday to Saturday, 6:00 AM to 10:00 PM. Sunday, 5:00 PM to 9:00 PM. Call ahead if you are planning around a holiday.",
  },
  {
    id: "03",
    question: "What type of gym is Heal Fitness Centre?",
    answer:
      "A spacious, modern unisex fitness centre with advanced equipment and professional training support.",
  },
  {
    id: "04",
    question: "What can I train here?",
    answer:
      "Strength training on advanced resistance equipment, general gym access, and professional training support on the floor. Personal training is also available — ask the team how it works.",
  },
  {
    id: "05",
    question: "How can I contact the gym?",
    answer: "Call 096664 63706, or use the enquiry form on this page.",
  },
  {
    id: "06",
    question: "What are the membership fees?",
    answer:
      "Call the gym on 096664 63706 for the current membership rates and plan options.",
  },
];
