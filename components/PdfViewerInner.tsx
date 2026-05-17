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

const T: Record<Lang, { loading: string; failed: string; open: string; hint: string }> = {
  ko: {
    loading: "불러오는 중…",
    failed: "PDF를 불러오지 못했습니다.",
    open: "원본 열기 ↗",
    hint: "← → 또는 화면 클릭으로 넘기기",
  },
  en: {
    loading: "Loading…",
    failed: "Couldn’t load the PDF.",
    open: "Open original ↗",
    hint: "Flip with ← → or by clicking",
  },
};

/** Slideshow PDF viewer — one page at a time, flipped with arrows / keys / click. */
export default function PdfViewerInner({
  url,
  lang,
}: {
  url: string;
  lang: Lang;
}) {
  const t = T[lang];
  const [numPages, setNumPages] = useState(0);
  const [page, setPage] = useState(1);
  const [baseWidth, setBaseWidth] = useState(880);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const measure = () => {
      const w = wrapRef.current?.clientWidth ?? 880;
      setBaseWidth(Math.max(320, Math.min(w, 1000)));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // ← / → flip through pages.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setPage((p) => Math.max(1, p - 1));
      if (e.key === "ArrowRight")
        setPage((p) => (numPages ? Math.min(numPages, p + 1) : p));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [numPages]);

  const prev = () => setPage((p) => Math.max(1, p - 1));
  const next = () => setPage((p) => (numPages ? Math.min(numPages, p + 1) : p));
  const atStart = page <= 1;
  const atEnd = numPages > 0 && page >= numPages;
  const pixelRatio = Math.max(2, window.devicePixelRatio || 1);

  const navBtn =
    "absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line-2 bg-bg/92 text-[20px] font-bold leading-none text-fg shadow-[0_8px_24px_-10px_rgba(16,16,24,0.4)] backdrop-blur-md transition-colors hover:bg-surface-2 disabled:cursor-default disabled:opacity-20 disabled:hover:bg-bg/92";

  return (
    <div ref={wrapRef}>
      <div className="mb-4 flex items-center justify-center gap-3">
        <span className="font-mono text-[12px] tabular-nums text-dim">
          {numPages ? `${page} / ${numPages}` : "—"}
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
        <div className="relative flex justify-center">
          <button
            type="button"
            onClick={prev}
            disabled={atStart}
            aria-label="Previous page"
            className={`left-2 ${navBtn}`}
          >
            ‹
          </button>

          <div
            onClick={next}
            className={`overflow-hidden rounded-lg border border-line bg-white shadow-[0_14px_36px_-20px_rgba(16,16,24,0.45)] ${
              atEnd ? "" : "cursor-pointer"
            }`}
          >
            <Page
              key={page}
              pageNumber={page}
              width={Math.round(baseWidth)}
              devicePixelRatio={pixelRatio}
            />
          </div>

          <button
            type="button"
            onClick={next}
            disabled={atEnd}
            aria-label="Next page"
            className={`right-2 ${navBtn}`}
          >
            ›
          </button>
        </div>
      </Document>
    </div>
  );
}
