import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
import { GATE_ENABLED, GATE_COOKIE, GATE_TOKEN } from "@/lib/gate";
import PasswordGate from "@/components/PasswordGate";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "서지완 · iOS Developer & PM",
  description:
    "불편함을 발견하면 서비스로 만드는 iOS 개발자 & PM, 서지완의 포트폴리오. 세로(문서)·가로(덱) 두 버전과 PDF 다운로드를 지원합니다.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const authed =
    GATE_ENABLED && (await cookies()).get(GATE_COOKIE)?.value === GATE_TOKEN;

  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@1.3.9/dist/web/variable/pretendardvariable.css"
        />
      </head>
      <body>{authed ? children : <PasswordGate />}</body>
    </html>
  );
}
