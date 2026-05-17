"use client";

import dynamic from "next/dynamic";
import type { Lang } from "@/lib/ui";

/**
 * Client-only wrapper — react-pdf touches browser APIs, so the actual viewer
 * is loaded with ssr disabled.
 */
const Inner = dynamic(() => import("./PdfViewerInner"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[60vh] items-center justify-center rounded-xl border border-line bg-surface-2 text-[12px] text-dim">
      …
    </div>
  ),
});

export default function PdfViewer({ url, lang }: { url: string; lang: Lang }) {
  return <Inner url={url} lang={lang} />;
}
