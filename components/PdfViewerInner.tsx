"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import type { Lang } from "@/lib/ui";

// Self-hosted worker (public/pdf.worker.min.mjs) — re-copy it from
// node_modules/pdfjs-dist/build/ whenever react-pdf is upgraded so the
// worker version stays in sync with the bundled pdfjs-dist.
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

const T: Record<
  Lang,
  { loading: string; failed: string; open: string; hint: string; pages: string }
> = {
  ko: {
    loading: "불러오는 중…",
    failed: "PDF를 불러오지 못했습니다.",
    open: "원본 열기 ↗",
    hint: "페이지를 클릭하면 크게 볼 수 있어요",
    pages: "페이지",
  },
  en: {
    loading: "Loading…",
    failed: "Couldn’t load the PDF.",
    open: "Open original ↗",
    hint: "Click a page to view it larger",
    pages: "pages",
  },
};

/** Business-plan PDF — scrollable page list; click a page to focus it in a lightbox. */
export default function PdfViewerInner({
  url,
  lang,
}: {
  url: string;
  lang: Lang;
}) {
  const t = T[lang];
  const [numPages, setNumPages] = useState(0);
  const [baseWidth, setBaseWidth] = useState(880);
  const [vw, setVw] = useState(1200);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const measure = () => {
      const w = wrapRef.current?.clientWidth ?? 880;
      setBaseWidth(Math.max(320, Math.min(w, 1000)));
      setVw(window.innerWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // While the lightbox is open: ← / → flip, Esc closes, body scroll locked.
  useEffect(() => {
    if (lightbox == null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") setLightbox((p) => (p && p > 1 ? p - 1 : p));
      if (e.key === "ArrowRight")
        setLightbox((p) => (p && p < numPages ? p + 1 : p));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    document.documentElement.classList.add("lightbox-open");
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.documentElement.classList.remove("lightbox-open");
    };
  }, [lightbox, numPages]);

  const pixelRatio = Math.max(2, window.devicePixelRatio || 1);
  const lightboxWidth = Math.min(Math.round(vw * 0.9), 1400);
  const lbAtStart = lightbox != null && lightbox <= 1;
  const lbAtEnd = lightbox != null && lightbox >= numPages;

  const lbNav =
    "absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-[24px] font-bold leading-none text-white backdrop-blur-md transition-colors hover:bg-white/25 disabled:cursor-default disabled:opacity-20 disabled:hover:bg-white/12";

  return (
    <div ref={wrapRef}>
      <div className="mb-4 flex items-center justify-center gap-3">
        <span className="font-mono text-[12px] tabular-nums text-dim">
          {numPages ? `${numPages} ${t.pages}` : "—"}
        </span>
        <span className="h-3.5 w-px bg-line-2" />
        <span className="text-[11px] text-dim">{t.hint}</span>
        <span className="h-3.5 w-px bg-line-2" />
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="text-[11px] font-semibold text-accent"
        >
          {t.open}
        </a>
      </div>

      <Document
        file={url}
        onLoadSuccess={({ numPages: n }) => setNumPages(n)}
        loading={
          <div className="flex h-[55vh] items-center justify-center text-[12px] text-dim">
            {t.loading}
          </div>
        }
        error={
          <div className="flex h-[40vh] flex-col items-center justify-center gap-2 text-[12px] text-dim">
            {t.failed}
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-accent"
            >
              {t.open}
            </a>
          </div>
        }
      >
        {/* scroll view — every page, click to focus */}
        <div className="flex flex-col items-center gap-5">
          {Array.from({ length: numPages }, (_, i) => (
            <div
              key={i}
              onClick={() => setLightbox(i + 1)}
              className="cursor-zoom-in overflow-hidden rounded-lg border border-line bg-white shadow-[0_14px_36px_-20px_rgba(16,16,24,0.45)] transition-shadow hover:shadow-[0_18px_44px_-16px_rgba(36,64,255,0.32)]"
            >
              <Page
                pageNumber={i + 1}
                width={baseWidth}
                devicePixelRatio={pixelRatio}
              />
            </div>
          ))}
        </div>

        {/* lightbox — one focused page, flip with arrows / keys */}
        {lightbox != null && (
          <div
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-6 backdrop-blur-sm"
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((p) => (p && p > 1 ? p - 1 : p));
              }}
              disabled={lbAtStart}
              aria-label="Previous page"
              className={`left-4 ${lbNav}`}
            >
              ‹
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="overflow-hidden rounded-lg bg-white shadow-2xl"
            >
              <Page
                pageNumber={lightbox}
                width={lightboxWidth}
                devicePixelRatio={pixelRatio}
              />
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((p) => (p && p < numPages ? p + 1 : p));
              }}
              disabled={lbAtEnd}
              aria-label="Next page"
              className={`right-4 ${lbNav}`}
            >
              ›
            </button>

            <div className="absolute left-1/2 top-5 -translate-x-1/2 font-mono text-[12px] tabular-nums text-white/70">
              {lightbox} / {numPages}
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(null);
              }}
              aria-label="Close"
              className="absolute right-5 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/12 text-[16px] text-white backdrop-blur-md transition-colors hover:bg-white/25"
            >
              ✕
            </button>
          </div>
        )}
      </Document>
    </div>
  );
}
