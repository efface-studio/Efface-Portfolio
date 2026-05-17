"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const MM_TO_PX = 96 / 25.4;

/**
 * Scales fixed mm-sized page content down to fit its container width.
 *
 * Uses `transform: scale()` rather than the `zoom` property: `zoom` is laid
 * out inconsistently across browsers (iOS Safari reflows the content at the
 * scaled width, which mangles the fixed A4 layout). `transform` always lays
 * the page out at its true size, then scales the painted result.
 *
 * The wrapper height is set to the scaled height so the transform doesn't
 * leave empty space below it. Print resets both so PDF output stays exact A4.
 */
export default function PageScaler({
  widthMm,
  children,
}: {
  widthMm: number;
  children: ReactNode;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const target = widthMm * MM_TO_PX;

  // First paint (SSR + pre-hydration) can't measure the container, so seed
  // the scale from a CSS estimate — `px-8` on the page <main> (64px total)
  // approximates the container width. JS then sets the exact value.
  const [scale, setScale] = useState<number | string>(
    `clamp(0.3, calc((100vw - 64px) / ${target.toFixed(2)}), 1)`,
  );
  const [height, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const compute = () => {
      const avail = frameRef.current?.clientWidth ?? window.innerWidth;
      const s = Math.min(1, Math.max(0.3, avail / target));
      setScale(s);
      setHeight((pageRef.current?.offsetHeight ?? 0) * s);
    };
    compute();
    const ro = new ResizeObserver(compute);
    if (frameRef.current) ro.observe(frameRef.current);
    if (pageRef.current) ro.observe(pageRef.current);
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, [target]);

  return (
    <div
      ref={frameRef}
      className="scaler-frame flex w-full justify-center overflow-hidden"
      style={{ height }}
    >
      <div
        ref={pageRef}
        className="scaler-page shrink-0 self-start"
        style={{
          width: target,
          transform: `scale(${scale})`,
          transformOrigin: "top",
        }}
      >
        {children}
      </div>
    </div>
  );
}
