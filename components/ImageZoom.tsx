/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

/**
 * An image that opens a full-screen enlarged copy of itself on click.
 * stopPropagation keeps the click from also triggering PageLightbox.
 */
export default function ImageZoom({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <img
        src={src}
        alt=""
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
        className={`cursor-zoom-in ${className ?? ""}`}
      />
      {open && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setOpen(false);
          }}
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/85 p-10 backdrop-blur-sm"
        >
          <img
            src={src}
            alt=""
            className="max-h-full max-w-full rounded-lg shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
