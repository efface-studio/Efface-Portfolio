"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ui, type Lang } from "@/lib/ui";

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
  sub?: string;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1.5 text-[12px] font-semibold transition-colors sm:px-3 ${
        active ? "bg-accent text-white" : "text-muted hover:text-fg"
      }`}
    >
      {label}
      {sub ? (
        <span
          className={`hidden font-mono text-[9.5px] font-medium sm:inline ${
            active ? "text-white/70" : "text-dim"
          }`}
        >
          {sub}
        </span>
      ) : null}
    </Link>
  );
}

/** Floating control bar — view toggle + language toggle + PDF action. */
export default function Controls({ lang }: { lang: Lang }) {
  const pathname = usePathname() ?? "/";
  const isDeck = pathname.startsWith("/deck");
  const isPlan = pathname.startsWith("/business-plan");
  const t = ui[lang];

  // The view toggle preserves the current language; the language toggle
  // preserves the current view.
  const langQuery = lang === "en" ? "?lang=en" : "";
  const view = isPlan ? "/business-plan" : isDeck ? "/deck" : "/";

  const actionClass =
    "flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1.5 text-[12px] font-semibold text-fg transition-colors hover:bg-surface-2 sm:px-3.5";

  return (
    <div className="no-print fixed inset-x-0 bottom-5 z-50 flex justify-center px-4">
      <div className="flex items-center gap-1 rounded-full border border-line-2 bg-bg/90 p-1.5 shadow-[0_10px_30px_-10px_rgba(16,16,24,0.32)] backdrop-blur-md">
        <div className="flex items-center rounded-full bg-surface-2 p-0.5">
          <SegLink
            href={"/" + langQuery}
            active={!isDeck && !isPlan}
            label={t.docLabel}
            sub={t.docSub}
          />
          <SegLink
            href={"/deck" + langQuery}
            active={isDeck}
            label={t.deckLabel}
            sub={t.deckSub}
          />
          <SegLink
            href={"/business-plan" + langQuery}
            active={isPlan}
            label={t.planLabel}
            sub="efface"
          />
        </div>
        <div className="mx-0.5 h-6 w-px bg-line-2" />
        <div className="flex items-center rounded-full bg-surface-2 p-0.5">
          <SegLink href={view} active={lang === "ko"} label="KR" />
          <SegLink href={view + "?lang=en"} active={lang === "en"} label="EN" />
        </div>
        <div className="mx-0.5 h-6 w-px bg-line-2" />
        {isPlan ? (
          <a
            href={`/docs/efface-business-plan-${lang}.pdf`}
            download
            aria-label={t.pdf}
            className={actionClass}
          >
            <DownloadIcon />
            <span className="hidden sm:inline">{t.pdf}</span>
          </a>
        ) : (
          <button
            type="button"
            onClick={() => window.print()}
            title={t.printHint}
            aria-label={t.pdf}
            className={actionClass}
          >
            <DownloadIcon />
            <span className="hidden sm:inline">{t.pdf}</span>
          </button>
        )}
      </div>
    </div>
  );
}
