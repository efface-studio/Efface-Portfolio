import type { NextConfig } from "next";

/**
 * Security headers applied to every response. The portfolio is a static page
 * (no user-generated content, no auth-protected APIs other than the gate) so a
 * permissive policy is fine — these stop the easy attacks (clickjacking, MIME
 * sniffing, mixed content) without breaking the embedded Vercel Analytics
 * beacon or the jsDelivr-hosted Pretendard stylesheet.
 */
const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
