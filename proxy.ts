import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { GATE_ENABLED, GATE_COOKIE, GATE_TOKEN } from "@/lib/gate";

/**
 * Gates the private business-plan PDFs under /docs with the same cookie as the
 * rest of the site. Static files in public/ are otherwise served without the
 * password gate, so this proxy closes that hole for the sensitive PDFs.
 */
export function proxy(request: NextRequest) {
  if (
    GATE_ENABLED &&
    request.cookies.get(GATE_COOKIE)?.value !== GATE_TOKEN
  ) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/docs/:path*",
};
