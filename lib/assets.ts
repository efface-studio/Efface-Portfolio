import { existsSync } from "node:fs";
import { join } from "node:path";

const PHOTO_CANDIDATES = [
  "profile.jpg",
  "profile.jpeg",
  "profile.png",
  "profile.webp",
];

/**
 * Returns the public path of the profile photo once the user drops one into
 * `public/` (e.g. public/profile.jpg). Until then components fall back to the
 * monogram. Resolved at render time on the server.
 */
export function profilePhoto(): string | null {
  for (const name of PHOTO_CANDIDATES) {
    if (existsSync(join(process.cwd(), "public", name))) return "/" + name;
  }
  return null;
}
