/**
 * Portfolio access gate — SERVER ONLY.
 *
 * Never import this module from a Client Component — that would ship the
 * password into the browser bundle. It is imported only by the root layout
 * (Server Component) and the /api/gate route handler.
 *
 * Passwords are read from environment variables (SITE_PASSWORD for the whole
 * site, PLAN_PASSWORD for the separate /business-plan gate) and are
 * intentionally NOT written in this file, so they are never committed to
 * source control. For local development they live in .env.local (git-ignored);
 * when deploying, set them in the host's environment variables.
 */
import { createHash, timingSafeEqual } from "crypto";

/** Constant-time string compare — prevents timing-attack password guessing. */
function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  // timingSafeEqual requires same-length buffers. Compare a dummy against
  // itself when lengths differ so the rejection path doesn't return faster.
  if (ab.length !== bb.length) {
    timingSafeEqual(ab, ab);
    return false;
  }
  return timingSafeEqual(ab, bb);
}

const password = (process.env.SITE_PASSWORD ?? "").trim();

/** True only when an access password is configured. Gate fails closed if not. */
export const GATE_ENABLED = password.length > 0;

/** Name of the http-only auth cookie. */
export const GATE_COOKIE = "pf_gate";

/** Opaque cookie token — a hash of the password, never the plaintext. */
export const GATE_TOKEN = GATE_ENABLED
  ? createHash("sha256").update(password).digest("hex")
  : "";

/** Returns true when the supplied input matches the configured password. */
export function verifyPassword(input: string): boolean {
  return GATE_ENABLED && safeEqual(input.trim(), password);
}

/* --- Business-plan gate — a second, independent password for /business-plan.
 * Dormant unless PLAN_PASSWORD is set, so the rest of the site is unaffected. */

const planPassword = (process.env.PLAN_PASSWORD ?? "").trim();

/** True only when a separate business-plan password is configured. */
export const PLAN_GATE_ENABLED = planPassword.length > 0;

/** Name of the http-only business-plan auth cookie. */
export const PLAN_GATE_COOKIE = "pf_plan_gate";

/** Opaque cookie token for the business-plan gate — a hash, never plaintext. */
export const PLAN_GATE_TOKEN = PLAN_GATE_ENABLED
  ? createHash("sha256").update(planPassword).digest("hex")
  : "";

/** Returns true when the input matches the business-plan password. */
export function verifyPlanPassword(input: string): boolean {
  return PLAN_GATE_ENABLED && safeEqual(input.trim(), planPassword);
}
