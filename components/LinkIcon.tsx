/* eslint-disable @next/next/no-img-element */

/* Brand / OS marks shown next to project links. The SVG marks inherit
 * currentColor; the service mark uses the project's own icon. */

function GithubMark() {
  return (
    <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.53.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.88.12 3.18.78.84 1.24 1.91 1.24 3.23 0 4.63-2.81 5.65-5.49 5.95.43.37.82 1.1.82 2.22 0 1.6-.02 2.9-.02 3.29 0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
    </svg>
  );
}

function AppleMark() {
  return (
    <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor" aria-hidden="true">
      <path d="M17.05 12.04c-.03-2.85 2.33-4.22 2.44-4.28-1.33-1.95-3.4-2.21-4.14-2.24-1.76-.18-3.44 1.04-4.33 1.04-.9 0-2.27-1.02-3.74-.99-1.92.03-3.7 1.12-4.69 2.84-2 3.47-.51 8.6 1.43 11.42.95 1.38 2.08 2.93 3.56 2.87 1.43-.06 1.97-.93 3.7-.93 1.72 0 2.21.93 3.72.9 1.54-.03 2.51-1.4 3.45-2.79 1.09-1.6 1.54-3.15 1.56-3.23-.03-.02-2.99-1.15-3.02-4.55M14.24 3.7c.79-.96 1.32-2.29 1.18-3.62-1.14.05-2.51.76-3.32 1.71-.73.85-1.37 2.2-1.2 3.5 1.27.1 2.56-.64 3.34-1.59" />
    </svg>
  );
}

function WindowsMark() {
  return (
    <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor" aria-hidden="true">
      <path d="M3 3h8v8H3V3Zm10 0h8v8h-8V3ZM3 13h8v8H3v-8Zm10 0h8v8h-8v-8Z" />
    </svg>
  );
}

function AppStoreMark() {
  return (
    <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M6.5 2H17.5A4.5 4.5 0 0 1 22 6.5V17.5A4.5 4.5 0 0 1 17.5 22H6.5A4.5 4.5 0 0 1 2 17.5V6.5A4.5 4.5 0 0 1 6.5 2ZM12 6.2L16.8 17.8H13.9L13.1 15.4H10.9L10.1 17.8H7.2L12 6.2Z"
      />
    </svg>
  );
}

/**
 * Renders the icon(s) for a project link, chosen by its label:
 * GitHub → GitHub mark · 다운로드/Download → Apple + Windows ·
 * 서비스/Service → the project's own icon. Other labels render nothing.
 */
export default function LinkIcon({
  label,
  projectIcon,
}: {
  label: string;
  projectIcon?: string;
}) {
  if (label === "GitHub") return <GithubMark />;

  if (label === "App Store") return <AppStoreMark />;

  if (label === "다운로드" || label === "Download") {
    return (
      <span className="flex items-center gap-0.5">
        <AppleMark />
        <WindowsMark />
      </span>
    );
  }

  if ((label === "서비스" || label === "Service") && projectIcon) {
    return (
      <img
        src={projectIcon}
        alt=""
        className="h-[11px] w-[11px] rounded-[2px] object-cover"
      />
    );
  }

  return null;
}
