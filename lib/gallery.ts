import type { GalleryItem } from "./types";

/**
 * Master gallery data. This array is authoritative for display order —
 * filename order is not a data dependency. Every item requires alt text
 * describing the actual image.
 *
 * HEAL FITNESS CENTRE — real facility photography supplied by the client,
 * renamed to the asset-contract pattern
 * `heal-fitness-centre-madhapur-gallery-[subject].jpg`. Alt text describes
 * only what is visible in each photo.
 *
 * ORDER is editorial: high-resolution photos first (wide training floor,
 * strength equipment, cardio, exterior), followed by the lower-resolution
 * supplementary photos (382×510) which should be replaced with originals
 * when available.
 *
 * Supplied but intentionally NOT displayed (kept in public/assets/gallery/
 * for reference / future replacement):
 *  - ...-barbell-plates-dumbbell-area-small.jpg  (133×223, too small)
 *  - ...-building-exterior-night-signage-02/03.jpg (low-res duplicates of
 *    the high-res exterior photo)
 *  - ...-treadmills-stair-climbers.jpg (low-res duplicate of the high-res
 *    treadmill-row photo)
 */
export const galleryItems: GalleryItem[] = [
  {
    src: "/assets/gallery/heal-fitness-centre-madhapur-gallery-wide-training-floor-turf-strip.jpg",
    alt: "Wide view of the Heal Fitness Centre training floor in Madhapur with strength equipment and a green turf strip",
  },
  {
    src: "/assets/gallery/heal-fitness-centre-madhapur-gallery-power-rack-cable-station.jpg",
    alt: "Power rack, cable station and adjustable bench on the rubber-floored strength area at Heal Fitness Centre",
  },
  {
    src: "/assets/gallery/heal-fitness-centre-madhapur-gallery-free-weight-area-mirror-wall.jpg",
    alt: "Free-weight area with benches, weight plates and a mirror wall at Heal Fitness Centre",
  },
  {
    src: "/assets/gallery/heal-fitness-centre-madhapur-gallery-plate-loaded-machines-battle-ropes.jpg",
    alt: "Plate-loaded strength machines and battle ropes on turf at Heal Fitness Centre",
  },
  {
    src: "/assets/gallery/heal-fitness-centre-madhapur-gallery-olympic-bench-press-lounge-view.jpg",
    alt: "Olympic bench press station with the member lounge visible behind glass at Heal Fitness Centre",
  },
  {
    src: "/assets/gallery/heal-fitness-centre-madhapur-gallery-abductor-adductor-machines.jpg",
    alt: "Abductor and adductor selectorised machines on the Heal Fitness Centre training floor",
  },
  {
    src: "/assets/gallery/heal-fitness-centre-madhapur-gallery-treadmill-row-cardio-area.jpg",
    alt: "Row of treadmills and stair climbers in the cardio area at Heal Fitness Centre",
  },
  {
    src: "/assets/gallery/heal-fitness-centre-madhapur-gallery-building-exterior-night-signage.jpg",
    alt: "Heal Fitness Centre Unisex Gym signage on the building exterior at night in Madhapur",
  },
  {
    src: "/assets/gallery/heal-fitness-centre-madhapur-gallery-training-floor-hexagon-lighting.jpg",
    alt: "Members walking through the Heal Fitness Centre training floor under hexagon ceiling lighting",
  },
  {
    src: "/assets/gallery/heal-fitness-centre-madhapur-gallery-bench-press-strength-zone.jpg",
    alt: "Bench press and strength machines beside a green turf strip at Heal Fitness Centre",
  },
  {
    src: "/assets/gallery/heal-fitness-centre-madhapur-gallery-cardio-machines-turf-strip.jpg",
    alt: "Cross trainers and cardio machines next to the turf strip at Heal Fitness Centre",
  },
  {
    src: "/assets/gallery/heal-fitness-centre-madhapur-gallery-dumbbell-rack-mirror-wall.jpg",
    alt: "Dumbbell racks reflected in the mirror wall with resistance machines in the foreground at Heal Fitness Centre",
  },
  {
    src: "/assets/gallery/heal-fitness-centre-madhapur-gallery-reception-lounge-seating.jpg",
    alt: "Reception lounge with yellow sofas and wood flooring at Heal Fitness Centre",
  },
];
