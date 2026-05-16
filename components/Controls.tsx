"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function DownloadIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function SegLink({
  href,
  active,
  label,
  sub,
}: {
  href: string;
  active: boolean;
  label: string;
  sub: string;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-semibold transition-colors ${
        active ? "bg-accent text-white" : "text-muted hover:text-fg"
      }`}
    >
      {label}
      <span
        className={`font-mono text-[9.5px] font-medium ${
          active ? "text-white/70" : "text-dim"
        }`}
      >
        {sub}
      </span>
    </Link>
  );
}

/** Floating control bar — 세로/가로 toggle + PDF download. Hidden on print. */
export default function Controls() {
  const pathname = usePathname() ?? "/";
  const isDeck = pathname.startsWith("/deck");

  return (
    <div className="no-print fixed inset-x-0 bottom-5 z-50 flex justify-center px-4">
      <div className="flex items-center gap-1 rounded-full border border-line-2 bg-bg/90 p-1.5 shadow-[0_10px_30px_-10px_rgba(16,16,24,0.32)] backdrop-blur-md">
        <div className="flex items-center rounded-full bg-surface-2 p-0.5">
          <SegLink href="/" active={!isDeck} label="세로" sub="문서" />
          <SegLink href="/deck" active={isDeck} label="가로" sub="덱" />
        </div>
        <div className="mx-0.5 h-6 w-px bg-line-2" />
        <button
          type="button"
          onClick={() => window.print()}
          title="인쇄 대화상자에서 ‘PDF로 저장’(대상: PDF로 저장)을 선택하세요"
          className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-semibold text-fg transition-colors hover:bg-surface-2"
        >
          <DownloadIcon />
          PDF 다운로드
        </button>
      </div>
    </div>
  );
}
