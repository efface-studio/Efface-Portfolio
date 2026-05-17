"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

const MM_TO_PX = 96 / 25.4;

/**
 * Scales fixed mm-sized page content down to fit its container width on screen.
 * Sets the `--zoom` custom property consumed by `.scaler` in globals.css.
 * Print resets `--zoom` to 1 so PDF output keeps exact A4 dimensions.
 */
export default function PageScaler({
  widthMm,
  children,
}: {
  widthMm: number;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const target = widthMm * MM_TO_PX;

  // First paint (SSR + pre-hydration) can't measure the container, so start
  // from a CSS estimate instead of 1 — otherwise mobile briefly flashes a
  // full-width A4 page. `px-8` on the page <main> (64px total) is subtracted
  // to approximate the container width; JS replaces this with the exact value.
  const [zoom, setZoom] = useState<number | string>(
    `clamp(0.3, calc((100vw - 64px) / ${target.toFixed(2)}), 1)`,
  );

  useEffect(() => {
    const compute = () => {
      const avail = ref.current?.clientWidth ?? window.innerWidth;
      setZoom(Math.min(1, Math.max(0.3, avail / target)));
    };
    compute();
    const ro = new ResizeObserver(compute);
    if (ref.current) ro.observe(ref.current);
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, [target]);

  return (
    <div ref={ref} className="flex w-full justify-center">
      <div className="scaler" style={{ "--zoom": zoom } as CSSProperties}>
        {children}
      </div>
    </div>
  );
}
