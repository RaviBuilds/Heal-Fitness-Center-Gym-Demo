/**
 * Instagram configuration — official embed mode.
 *
 * PURE FRONTEND TEMPLATE: no Instagram API, no OAuth, no Meta tokens.
 * This is the default manual embed mode using public Instagram Reel URLs
 * and the official Instagram embed script.
 *
 * FUTURE CLIENT WORKFLOW:
 * - Clone template
 * - Edit this file only
 * - Replace profileUrl, handle, and Reel URLs with client's content
 * - Website updated
 *
 * No component modification required for standard customization.
 */

export interface InstagramReel {
  /** Stable identifier for React keys */
  id: string;
  /** Full Instagram Reel URL for official embed */
  url: string;
  /** Content type - future-proofed for potential post support */
  type: "reel";
}

export interface InstagramConfiguration {
  /** Full Instagram profile URL */
  profileUrl: string | undefined;
  /** Display handle with @ prefix */
  handle: string | undefined;
  /** Reel embeds - render all supplied items, no artificial limit */
  items: InstagramReel[];
}

/**
 * HEAL FITNESS CENTRE Instagram configuration.
 *
 * docs/Gym-Research.md INSTAGRAM.profile_url and INSTAGRAM.handle are both
 * NOT_FOUND — no verified official Instagram profile was found during
 * research. INSTAGRAM.items lists 3 entries, but entries 1 and 3 carry the
 * identical URL (DSz7lnhj3lg), so only the 2 distinct URLs are wired (a
 * duplicate embed would just repeat the same Reel). Profile URL and handle
 * stay undefined; Instagram.tsx and Footer.tsx omit the handle heading and
 * profile links when they are absent.
 */
export const instagramConfig: InstagramConfiguration = {
  profileUrl: undefined,
  handle: undefined,
  items: [
    {
      id: "reel-01",
      type: "reel",
      url: "https://www.instagram.com/p/DSz7lnhj3lg/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
    },
    {
      id: "reel-02",
      type: "reel",
      url: "https://www.instagram.com/reel/DYVyFyXP88v/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
    },
  ],
};
