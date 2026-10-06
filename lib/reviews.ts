import type { GoogleReviews } from "./types";

/**
 * Master Google Reviews data. Manually curated, never scraped at runtime.
 * Do not invent review content, reviewer names, ratings, or counts.
 *
 * HEAL FITNESS CENTRE — rating/reviewCount are VERIFIED_OFFICIAL (Google
 * Business Profile primary anchor: 4.9 / 286 reviews, checked October 4,
 * 2026, per docs/Gym-Research.md REVIEWS.google).
 *
 * REVIEWS.selected_reviews in docs/Gym-Research.md contains one quoted
 * negative review fragment ("mera mood nahi hai" from a customer-service
 * interaction). This is unsuitable for the featured reviews display. No clean
 * set of consented, attributable 5-star testimonials was reliably extracted
 * from the source material. The `reviews` array below remains empty until the
 * operator supplies verbatim consented testimonials with proper attribution.
 *
 * REVIEWS.google_profile_url is NOT_FOUND in the research package — no direct
 * Google Business Profile URL exists. Per Phase 5/6 rules, never invent a
 * profile URL and never substitute a Justdial URL for the Google review CTA.
 * googleBusinessProfileUrl instead uses a Google Maps search-by-name query
 * (same safe-fallback pattern as lib/business.ts's mapUrl) so the CTA still
 * reaches the real Google listing without a fabricated Place ID or profile
 * slug.
 */
export const googleReviews: GoogleReviews = {
  rating: 4.9,
  reviewCount: 286,
  tagline: "Rated 4.9 on Google across 286 reviews.",
  googleBusinessProfileUrl:
    "https://www.google.com/maps/search/?api=1&query=Heal+Fitness+Centre+Madhapur+Hyderabad",
  // Fill these two once the owner supplies the Google "write a review" link
  // (Google Business Profile -> Get more reviews -> share link). The footer
  // trust card then adds a "Write a review" link and, if reviewQrSrc points at
  // a QR image of that link, the scan-to-review QR. Left unset = not rendered.
  reviewUrl: undefined,
  reviewQrSrc: undefined,
  reviews: [
    {
      name: "Satyanarayana Chebolu",
      text: "The gym provides an excellent environment for fitness enthusiasts. It is well-maintained and equipped with high-quality, modern equipment that caters to a wide range of workouts. The trainers are highly knowledgeable, professional, and always willing to guide and motivate members, ensuring proper technique and helping them achieve their fitness goals. Overall, it is a great place for anyone looking to improve their health and fitness.",
    },
    {
      name: "Karthik Cs",
      text: "I began my journey at this gym in November '25 and chose personal training. At first, I felt quite sluggish, but then everything took a turn for the better. I started noticing visible changes, and now I've completed six months here. I've dropped from 102kg to 84kg. My trainer Sandeep provided excellent support, and in his absence, Saif and Waseem were also there to guide me. I want to express my gratitude to Heal Fitness and its trainers for their assistance. They have highly knowledgeable trainers and top-notch equipment for effective training. If you're looking to maintain good health and physique, I highly recommend Heal Fitness.😊",
    },
    {
      name: "Anjan Kumar",
      text: "The gym is spacious and has multiple equipments. The staff are always friendly and professional, the equipments are well-maintained, and the overall environment is excellent for a great workout.",
    },
    {
      name: "Mayank Arora",
      text: "The gym is very nice, the members are friendly. The trainers know thier stuff, all equipment is well maintained and feels new. Have all kinds of equipment, North Indian Friendly, is Open on Sundays as well🤌",
    },
  ],
};
