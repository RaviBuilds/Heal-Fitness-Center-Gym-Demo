import type { Business } from "./types";

/**
 * Master business data. Public business information only — never put API
 * keys, tokens, or server credentials here.
 *
 * HEAL FITNESS CENTRE — populated from docs/Gym-Research.md.
 * VERIFIED_OFFICIAL fields: name, description, phone, address line, locality,
 * city (Google Business Profile primary anchor). PUBLICLY_REPORTED (owner
 * verification recommended before final-client production): hours, state,
 * postal code. CONFLICTING_SOURCES requiring owner confirmation: Sunday hours
 * (GBP shows 5:00 PM–9:00 PM; third-party aggregators report conflicting
 * morning hours or closed status — GBP evidence is used here).
 *
 * SINGLE-BRANCH: research confirms one location. No branch architecture
 * conflicts.
 *
 * WHATSAPP NUMBER: docs/Gym-Research.md CONTACT.whatsapp is `null` /
 * NOT_FOUND — no distinct WhatsApp number was identified. The
 * `business.whatsapp.number` field is architecturally required (every
 * WhatsApp CTA across the site reads it; there is no graceful-omission path
 * for a missing WhatsApp number). The VERIFIED_OFFICIAL phone number is
 * reused here as the WhatsApp contact point rather than inventing a
 * different number — OWNER VERIFICATION REQUIRED to confirm this number is
 * reachable on WhatsApp before final-client production.
 *
 * mapUrl: no verified Google Maps / Place URL was found in research
 * (LOCATION.map_url = NOT_FOUND). This uses a standard Google Maps
 * search-by-address URL built from the verified address text — no
 * latitude/longitude or Place ID has been invented.
 */
export const business: Business = {
  name: "Heal Fitness Centre",
  tagline: "A spacious, modern gym in Madhapur.",
  description:
    "Heal Fitness Centre is a spacious unisex gym in Madhapur, Hyderabad, offering advanced resistance equipment, cardio training, strength training and professional training support in a modern facility.",
  phone: "+919666463706",
  whatsapp: {
    number: "+919666463706",
    message: "Hi, I'd like to know more about membership and training at Heal Fitness Centre.",
  },
  email: undefined,
  address: {
    addressLine: "F92R+7Q4, Rd No. 19, SBH Officers Colony, Mega Hills",
    locality: "Madhapur",
    city: "Hyderabad",
    state: "Telangana",
    postalCode: "500081",
    landmark: "Near Ayyappa Society, 100 Feet Road",
  },
  hours: [
    { day: "Monday", open: "06:00 AM", close: "10:00 PM" },
    { day: "Tuesday", open: "06:00 AM", close: "10:00 PM" },
    { day: "Wednesday", open: "06:00 AM", close: "10:00 PM" },
    { day: "Thursday", open: "06:00 AM", close: "10:00 PM" },
    { day: "Friday", open: "06:00 AM", close: "10:00 PM" },
    { day: "Saturday", open: "06:00 AM", close: "10:00 PM" },
    { day: "Sunday", open: "05:00 PM", close: "09:00 PM" },
  ],
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Heal+Fitness+Centre+F92R%2B7Q4+Rd+No.+19+Madhapur+Hyderabad+500081",
  // Prompt A — Primary Brand Color (Bright Cyan / Aqua). High-confidence
  // authentic primary color from supplied brand color specification.
  accentColor: "#00FFFF",
  // Manual Secondary Color (Teal Green). Approved secondary brand color from
  // Prompt A manual input. Supporting / information signal (eyebrows,
  // metadata, technical marks, secondary hierarchy).
  secondaryColor: "#00E5A0",
};
