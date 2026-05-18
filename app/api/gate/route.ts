import { cookies } from "next/headers";
import {
  verifyPassword,
  verifyPlanPassword,
  GATE_COOKIE,
  GATE_TOKEN,
  PLAN_GATE_COOKIE,
  PLAN_GATE_TOKEN,
} from "@/lib/gate";

/**
 * Validates an access password and, on success, sets the matching gate cookie.
 * `gate: "plan"` in the body checks the separate business-plan password;
 * anything else checks the site-wide password.
 */
export async function POST(request: Request) {
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
