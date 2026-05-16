import { cookies } from "next/headers";
import { verifyPassword, GATE_COOKIE, GATE_TOKEN } from "@/lib/gate";

/** Validates the access password and, on success, sets the gate cookie. */
export async function POST(request: Request) {
  let password = "";
  try {
    const body = await request.json();
    if (body && typeof body.password === "string") password = body.password;
  } catch {
    // malformed body — treated as an empty password below
  }

  if (!verifyPassword(password)) {
    return Response.json({ ok: false }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set(GATE_COOKIE, GATE_TOKEN, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    secure: process.env.NODE_ENV === "production",
  });

  return Response.json({ ok: true });
}
