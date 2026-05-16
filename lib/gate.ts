/**
 * Portfolio access gate — SERVER ONLY.
 *
 * Never import this module from a Client Component — that would ship the
 * password into the browser bundle. It is imported only by the root layout
 * (Server Component) and the /api/gate route handler.
 *
 * The access password is read from the SITE_PASSWORD environment variable and
 * is intentionally NOT written in this file, so it is never committed to
 * source control. For local development it lives in .env.local (git-ignored);
 * when deploying, set SITE_PASSWORD in the host's environment variables.
 */
import { createHash } from "crypto";

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
  return GATE_ENABLED && input.trim() === password;
}
