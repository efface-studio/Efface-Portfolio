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
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const target = widthMm * MM_TO_PX;
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
  }, [widthMm]);

  return (
    <div ref={ref} className="flex w-full justify-center">
      <div className="scaler" style={{ "--zoom": zoom } as CSSProperties}>
        {children}
      </div>
    </div>
  );
}
