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

const ZOOMS = [0.5, 0.65, 0.8, 1, 1.25, 1.5];
const DEFAULT_ZOOM = 3;

const T: Record<Lang, { loading: string; failed: string; open: string }> = {
  ko: {
    loading: "불러오는 중…",
    failed: "PDF를 불러오지 못했습니다.",
    open: "원본 열기 ↗",
  },
  en: {
    loading: "Loading…",
    failed: "Couldn’t load the PDF.",
    open: "Open original ↗",
  },
};

export default function PdfViewerInner({
  url,
  lang,
}: {
  url: string;
  lang: Lang;
}) {
  const t = T[lang];
  const [numPages, setNumPages] = useState(0);
  const [current, setCurrent] = useState(1);
  const [baseWidth, setBaseWidth] = useState(820);
  const [zoomIdx, setZoomIdx] = useState(DEFAULT_ZOOM);
  const wrapRef = useRef<HTMLDivElement>(null);
  const pageEls = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const measure = () => {
      const w = wrapRef.current?.clientWidth ?? 820;
      setBaseWidth(Math.max(320, Math.min(w, 960)));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight / 2;
      let best = 1;
      let bestDist = Infinity;
      pageEls.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - mid);
        if (d < bestDist) {
          bestDist = d;
          best = i + 1;
        }
      });
      setCurrent(best);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [numPages]);

  const zoom = ZOOMS[zoomIdx];
  const pageWidth = Math.round(baseWidth * zoom);

  const zoomBtn =
    "flex h-6 w-6 items-center justify-center rounded-full text-[15px] font-bold leading-none text-fg transition-colors hover:bg-surface-2 disabled:opacity-30 disabled:hover:bg-transparent";

  return (
    <div ref={wrapRef}>
      <div className="sticky top-3 z-20 mx-auto mb-5 flex w-fit items-center gap-2.5 rounded-full border border-line-2 bg-bg/90 px-3.5 py-1.5 shadow-[0_8px_24px_-12px_rgba(16,16,24,0.3)] backdrop-blur-md">
        <span className="px-0.5 font-mono text-[11px] tabular-nums text-dim">
          {numPages ? `${current} / ${numPages}` : "—"}
        </span>
        <span className="h-4 w-px bg-line-2" />
        <button
          type="button"
          onClick={() => setZoomIdx((i) => Math.max(0, i - 1))}
          disabled={zoomIdx === 0}
          className={zoomBtn}
          aria-label="Zoom out"
        >
          −
        </button>
        <span className="w-[38px] text-center font-mono text-[11px] font-semibold tabular-nums text-fg">
          {Math.round(zoom * 100)}%
        </span>
        <button
          type="button"
          onClick={() => setZoomIdx((i) => Math.min(ZOOMS.length - 1, i + 1))}
          disabled={zoomIdx === ZOOMS.length - 1}
          className={zoomBtn}
          aria-label="Zoom in"
        >
          +
        </button>
        <span className="h-4 w-px bg-line-2" />
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="px-0.5 text-[11px] font-semibold text-accent"
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
        <div className="overflow-x-auto pb-1">
          <div className="flex flex-col items-center gap-5">
            {Array.from({ length: numPages }, (_, i) => (
              <div
                key={i}
                ref={(el) => {
                  pageEls.current[i] = el;
                }}
                className="overflow-hidden rounded-lg border border-line bg-white shadow-[0_14px_36px_-20px_rgba(16,16,24,0.45)]"
              >
                <Page pageNumber={i + 1} width={pageWidth} />
              </div>
            ))}
          </div>
        </div>
      </Document>
    </div>
  );
}
