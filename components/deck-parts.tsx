/* Shared building blocks for the horizontal (A4 landscape) decks —
 * used by both the résumé deck and the portfolio deck. */
import type { Content } from "@/lib/content";
import { Meta } from "@/components/primitives";
import type { ReactNode } from "react";

const pad = (n: number) => String(n).padStart(2, "0");

/** Standard slide frame — header (label · title · page count) and footer. */
export function Slide({
  n,
  total,
  label,
  title,
  c,
  children,
}: {
  n: number;
  total: number;
  label: string;
  title: string;
  c: Content;
  children: ReactNode;
}) {
  return (
    <div className="slide page-deck flex flex-col text-fg">
      <header className="flex items-end justify-between border-b border-fg/20 pb-3">
        <div>
          <Meta className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
            {label}
          </Meta>
          <h2 className="mt-1.5 text-[25px] font-bold leading-none tracking-[-0.02em]">
            {title}
          </h2>
        </div>
        <Meta className="text-[10px] tracking-wide text-dim">
          {pad(n)} / {pad(total)}
        </Meta>
      </header>
      <div className="flex min-h-0 flex-1 flex-col py-6">{children}</div>
      <footer className="flex items-center justify-between border-t border-line pt-2.5">
        <Meta className="text-[8.5px] tracking-[0.1em] text-dim">
          {c.profile.footer}
        </Meta>
        <Meta className="text-[8.5px] text-dim">{c.profile.contact.github}</Meta>
      </footer>
    </div>
  );
}

/** Small accent section label. */
export function ColLabel({ children }: { children: ReactNode }) {
  return (
    <Meta className="block text-[9px] font-bold uppercase tracking-[0.2em] text-accent">
      {children}
    </Meta>
  );
}

/** Hairline-divided key/value row. */
export function MetaRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex gap-3 border-b border-line py-2 last:border-0">
      <Meta className="w-[20mm] shrink-0 text-[8.5px] font-bold uppercase tracking-wider text-dim">
        {k}
      </Meta>
      <span className="text-[11px] text-fg">{v}</span>
    </div>
  );
}
