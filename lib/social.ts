import type { SocialConfiguration } from "./types";

/**
 * Master social/Instagram data. Curated content only — no live authenticated
 * Instagram API dependency in Factory v1. An empty posts array is valid and
 * renders a "Follow us on Instagram" fallback CTA, never a broken widget.
 *
 * NOTE: `social` below is not currently imported by any component — the live
 * Instagram section (components/sections/Instagram.tsx) reads from
 * lib/instagram.ts. See docs/gym-customization-manifest.md §9.1
 * ("lib/social.ts is orphaned"). Left in sync with lib/instagram.ts for data
 * consistency (Phase 18) in case a future section consumes this module; not a
 * live rendering path. `socialLinks` further down IS live (footer icons).
 *
 * HEAL FITNESS CENTRE — docs/Gym-Research.md INSTAGRAM.profile_url and
 * INSTAGRAM.handle are both NOT_FOUND — no verified official Instagram
 * profile was found. `instagramHandle` and `instagramUrl` remain undefined
 * here; `posts` stays empty as this module is orphaned (not a live rendering
 * path). The live Instagram Reels section renders via lib/instagram.ts.
 */
export const social: SocialConfiguration = {
  instagramHandle: undefined,
  instagramUrl: undefined,
  posts: [],
};

/**
 * Footer social icons (Facebook, Justdial, X) shown next to Instagram.
 *
 * SOURCE-FIRST: no account-specific profile URL has been supplied for these
 * networks yet, so each `href` defaults to the network's own homepage and NO
 * handle or username is invented. When the gym's real profile URL is
 * available, replace the `href` below — the icon keeps working with no
 * component change.
 *
 * Instagram is configured separately in lib/instagram.ts (it also drives the
 * Reel embeds) and is not repeated here.
 */
export interface SocialLink {
  id: "facebook" | "justdial" | "x";
  /** Accessible name for the icon, e.g. "Facebook". */
  label: string;
  /** Profile URL. Defaults to the network homepage until the gym's own is set. */
  href: string;
}

export const socialLinks: SocialLink[] = [
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com" },
  { id: "justdial", label: "Justdial", href: "https://www.justdial.com" },
  { id: "x", label: "X", href: "https://x.com" },
];
