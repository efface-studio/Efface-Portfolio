"use client";

import { useEffect, useState, type ReactNode } from "react";

const MM_TO_PX = 3.7795;

/**
 * Wraps the doc/deck. Clicking a page opens an enlarged copy of it in a
 * lightbox with ←/→ navigation; clicks on links inside a page pass through.
 */
export default function PageLightbox({
  children,
  pageSelector,
  pageWidthMm,
  pageHeightMm,
}: {
  children: ReactNode;
  pageSelector: string;
  pageWidthMm: number;
  pageHeightMm: number;
}) {
  const [pages, setPages] = useState<string[]>([]);
  const [idx, setIdx] = useState<number | null>(null);
  const [vp, setVp] = useState({ w: 1280, h: 800 });

  useEffect(() => {
    const measure = () =>
      setVp({ w: window.innerWidth, h: window.innerHeight });
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (idx == null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowLeft") setIdx((p) => (p && p > 0 ? p - 1 : p));
      if (e.key === "ArrowRight")
        setIdx((p) => (p != null && p < pages.length - 1 ? p + 1 : p));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    document.documentElement.classList.add("lightbox-open");
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.documentElement.classList.remove("lightbox-open");
    };
  }, [idx, pages.length]);

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest("a")) return; // let links work normally
    const page = target.closest(pageSelector) as HTMLElement | null;
    if (!page) return;
    const all = [
      ...e.currentTarget.querySelectorAll(pageSelector),
    ] as HTMLElement[];
    const i = all.indexOf(page);
    if (i < 0) return;
    setPages(all.map((el) => el.outerHTML));
    setIdx(i);
  };

  const zoom = Math.min(
    (vp.w * 0.94) / (pageWidthMm * MM_TO_PX),
    (vp.h * 0.92) / (pageHeightMm * MM_TO_PX),
  );
  const atStart = idx != null && idx <= 0;
  const atEnd = idx != null && idx >= pages.length - 1;

  const nav =
    "absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-[24px] font-bold leading-none text-white backdrop-blur-md transition-colors hover:bg-white/25 disabled:cursor-default disabled:opacity-20 disabled:hover:bg-white/12";

  return (
    <div onClick={onClick} className="cursor-zoom-in">
      {children}

      {idx != null && pages[idx] != null && (
        <div
          onClick={() => setIdx(null)}
          className="fixed inset-0 z-[60] flex cursor-default items-center justify-center bg-black/85 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIdx((p) => (p && p > 0 ? p - 1 : p));
            }}
            disabled={atStart}
            aria-label="Previous page"
            className={`left-4 ${nav}`}
          >
            ‹
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{ zoom }}
            dangerouslySetInnerHTML={{ __html: pages[idx] }}
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIdx((p) => (p != null && p < pages.length - 1 ? p + 1 : p));
            }}
            disabled={atEnd}
            aria-label="Next page"
            className={`right-4 ${nav}`}
          >
            ›
          </button>

          <div className="absolute left-1/2 top-5 -translate-x-1/2 font-mono text-[12px] tabular-nums text-white/70">
            {idx + 1} / {pages.length}
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIdx(null);
            }}
            aria-label="Close"
            className="absolute right-5 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/12 text-[16px] text-white backdrop-blur-md transition-colors hover:bg-white/25"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
