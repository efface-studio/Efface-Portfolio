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
