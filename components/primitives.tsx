import type { ReactNode } from "react";

/** Small meta text — labels, dates, kickers. Styled by the caller. */
export function Meta({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={className}>{children}</span>;
}

/** Small tag — tech stack, keywords. Accent-soft pill, matches the doc. */
export function Chip({
  children,
  size = "sm",
}: {
  children: ReactNode;
  size?: "sm" | "md";
}) {
  const sizing =
    size === "md"
      ? "px-2.5 py-[3.5px] text-[10.5px]"
      : "px-2 py-[3px] text-[9.5px]";
  return (
    <span
      className={`inline-flex items-center rounded-full bg-accent-soft font-medium leading-none text-accent ${sizing}`}
    >
      {children}
    </span>
  );
}

/** Row of stack chips. */
export function ChipRow({
  items,
  size = "sm",
}: {
  items: string[];
  size?: "sm" | "md";
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((it) => (
        <Chip key={it} size={size}>
          {it}
        </Chip>
      ))}
    </div>
  );
}
