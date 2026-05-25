import { cookies } from "next/headers";
import {
  verifyPassword,
  verifyPlanPassword,
  GATE_COOKIE,
  GATE_TOKEN,
  PLAN_GATE_COOKIE,
  PLAN_GATE_TOKEN,
} from "@/lib/gate";

/* ---------------------------------------------------------------- *
 * Per-IP rate limit — best-effort brute-force throttle.            *
 *                                                                  *
 * The state lives in-process, so serverless instances each have    *
 * their own counter; an attacker spread across instances would     *
 * still see fresh buckets. That's fine for a small private         *
 * portfolio — combined with a strong password it pushes the search *
 * cost well past anything worth attempting.                        *
 * ---------------------------------------------------------------- */
const WINDOW_MS = 60_000;
const MAX_ATTEMPTS = 5;
const buckets = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string): { ok: boolean; retryAfter: number } {
  const now = Date.now();
  const bucket = buckets.get(ip);
  if (!bucket || bucket.resetAt <= now) {
    buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true, retryAfter: 0 };
  }
  if (bucket.count >= MAX_ATTEMPTS) {
    return { ok: false, retryAfter: Math.ceil((bucket.resetAt - now) / 1000) };
  }
  bucket.count += 1;
  return { ok: true, retryAfter: 0 };
}

function clientIp(request: Request): string {
  // Vercel sets `x-forwarded-for`; the first value is the real client.
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

/**
 * Validates an access password and, on success, sets the matching gate cookie.
 * `gate: "plan"` in the body checks the separate business-plan password;
 * anything else checks the site-wide password.
 */
export async function POST(request: Request) {
  const ip = clientIp(request);
  const rl = rateLimit(ip);
  if (!rl.ok) {
    return Response.json(
      { ok: false, rateLimited: true },
      {
        status: 429,
        headers: { "Retry-After": String(rl.retryAfter) },
      },
    );
  }

  let password = "";
  let plan = false;
  try {
    const body = await request.json();
    if (body && typeof body.password === "string") password = body.password;
    if (body && body.gate === "plan") plan = true;
  } catch {
    // malformed body — treated as an empty password below
  }

  const ok = plan ? verifyPlanPassword(password) : verifyPassword(password);
  if (!ok) {
    return Response.json({ ok: false }, { status: 401 });
  }

  // On success, reset the bucket so a real user doesn't get locked out by
  // a few earlier typos.
  buckets.delete(ip);

  const cookieStore = await cookies();
  cookieStore.set(
    plan ? PLAN_GATE_COOKIE : GATE_COOKIE,
    plan ? PLAN_GATE_TOKEN : GATE_TOKEN,
    {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
      secure: process.env.NODE_ENV === "production",
    },
  );

  return Response.json({ ok: true });
}
