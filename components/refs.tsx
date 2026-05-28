import type { ReactNode } from "react";

const HINEST_REPO = "https://github.com/efface-studio/HiNest-Client";

/**
 * Renders a feature `refs` string with `#<number>` turned into HiNest-Client
 * PR links and commit hashes into commit links. Plain text (ranges, dots) is
 * left as-is, so "PR #93–#102" links #93 and #102 individually.
 */
export function linkifyRefs(refs: string): ReactNode[] {
  return refs.split(/(#\d+|\b[0-9a-f]{7,40}\b)/g).map((part, i) => {
    if (/^#\d+$/.test(part)) {
      return (
        <a
          key={i}
          href={`${HINEST_REPO}/pull/${part.slice(1)}`}
          target="_blank"
          rel="noreferrer"
          className="text-accent"
        >
          {part}
        </a>
      );
    }
    if (/^[0-9a-f]{7,40}$/.test(part)) {
      return (
        <a
          key={i}
          href={`${HINEST_REPO}/commit/${part}`}
          target="_blank"
          rel="noreferrer"
          className="text-accent"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

/**
 * Renders text with the given terms turned into links — used to link event
 * names (e.g. U/CON25) inside an activity description.
 */
export function linkifyDesc(
  text: string,
  links?: { term: string; url: string }[],
): ReactNode {
  if (!links || links.length === 0) return text;
  const re = new RegExp(
    `(${links
      .map((l) => l.term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|")})`,
    "g",
  );
  const urlOf = new Map(links.map((l) => [l.term, l.url]));
  return text.split(re).map((part, i) => {
    const url = urlOf.get(part);
    return url ? (
      <a
        key={i}
        href={url}
        target="_blank"
        rel="noreferrer"
        className="font-semibold text-accent"
      >
        {part}
      </a>
    ) : (
      part
    );
  });
}

/**
 * Highlights metric tokens inside a troubleshooting result so the performance
 * and cost numbers stand out: percentages and ranges ("−90%", "40~75%"),
 * arrow reductions ("0.5→0.25 vCPU") and counts with a unit ("3회", "300건").
 * PR/commit refs live in other fields, so this never touches them.
 */
const METRIC_RE =
  /([−+-]?\d[\d,]*(?:\.\d+)?(?:\s*[~–—-]\s*\d[\d,]*(?:\.\d+)?)?\s*%|\d[\d,]*(?:\.\d+)?\s*→\s*\d[\d,]*(?:\.\d+)?(?:\s*vCPU)?|\d[\d,]*(?:\.\d+)?\s*(?:건|회|명|개|배|분|ms|MB|GB|RPS|vCPU))/g;

export function highlightMetrics(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const m of text.matchAll(METRIC_RE)) {
    const idx = m.index ?? 0;
    if (idx > last) out.push(text.slice(last, idx));
    out.push(
      <strong key={key++} className="font-bold text-accent">
        {m[0]}
      </strong>,
    );
    last = idx + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}
