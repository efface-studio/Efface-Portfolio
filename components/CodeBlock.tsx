/* Shared dark code block with a lightweight syntax highlighter.
 * Used by both the vertical doc and the horizontal deck. */
import type { CodeSnippet } from "@/lib/portfolio";

const TS_KW = new Set([
  "const", "let", "var", "function", "return", "if", "else", "await", "async",
  "new", "throw", "typeof", "as", "for", "of", "while", "in", "try", "catch",
  "import", "export", "from", "class", "extends", "interface", "type", "void",
]);
const SWIFT_KW = new Set([
  "let", "var", "func", "lazy", "weak", "self", "async", "await", "throws",
  "throw", "try", "return", "if", "else", "guard", "for", "in", "while",
  "class", "struct", "enum", "extension", "init", "import", "case", "switch",
  "defer", "do", "catch", "static", "private", "public", "override",
]);
const SQL_KW = new Set([
  "UPDATE", "SET", "WHERE", "IS", "NOT", "NULL", "OR", "AND", "SELECT", "FROM",
  "INSERT", "INTO", "VALUES", "DELETE", "CREATE", "TABLE", "ALTER", "ADD", "ON",
]);
const CODE_LIT = new Set(["true", "false", "null", "undefined", "nil"]);
const CODE_COLOR: Record<string, string> = {
  com: "#565f89",
  kw: "#bb9af7",
  str: "#9ece6a",
  num: "#ff9e64",
  lit: "#ff9e64",
  fn: "#7aa2f7",
  prop: "#7dcfff",
  punct: "#9099b8",
  plain: "#c4caf0",
};

type CodeTok = { c: string; t: string };

function tokenizeCode(line: string, lang: string): CodeTok[] {
  const head = line.trimStart();
  if (head.startsWith("//") || head.startsWith("--")) {
    return [{ c: "com", t: line }];
  }
  const kw =
    lang === "sql" ? SQL_KW : lang === "swift" ? SWIFT_KW : TS_KW;
  const out: CodeTok[] = [];
  const n = line.length;
  let i = 0;
  while (i < n) {
    const ch = line[i];
    if (
      (ch === "/" && line[i + 1] === "/") ||
      (lang === "sql" && ch === "-" && line[i + 1] === "-")
    ) {
      out.push({ c: "com", t: line.slice(i) });
      break;
    }
    if (ch === '"' || ch === "'" || ch === "`") {
      let j = i + 1;
      while (j < n && line[j] !== ch) j++;
      out.push({ c: "str", t: line.slice(i, Math.min(j + 1, n)) });
      i = j + 1;
      continue;
    }
    if (/\s/.test(ch)) {
      let j = i;
      while (j < n && /\s/.test(line[j])) j++;
      out.push({ c: "plain", t: line.slice(i, j) });
      i = j;
      continue;
    }
    if (/[A-Za-z_$]/.test(ch)) {
      let j = i;
      while (j < n && /[\w$]/.test(line[j])) j++;
      const w = line.slice(i, j);
      let c = "plain";
      if (kw.has(w)) c = "kw";
      else if (CODE_LIT.has(w)) c = "lit";
      else if (line[j] === "(") c = "fn";
      else if (line[i - 1] === ".") c = "prop";
      out.push({ c, t: w });
      i = j;
      continue;
    }
    if (/[0-9]/.test(ch)) {
      let j = i;
      while (j < n && /[0-9.]/.test(line[j])) j++;
      out.push({ c: "num", t: line.slice(i, j) });
      i = j;
      continue;
    }
    out.push({ c: "punct", t: ch });
    i++;
  }
  return out;
}

export function CodeBlock({
  snippet,
  fit,
}: {
  snippet: CodeSnippet;
  /** Shrink the block to its content width (instead of filling the parent). */
  fit?: boolean;
}) {
  const lines = snippet.lines.split("\n");
  return (
    <figure
      className={`overflow-hidden rounded-lg border border-[#272a3d] shadow-[0_8px_22px_-14px_rgba(16,16,24,0.45)]${
        fit ? " w-fit max-w-full" : ""
      }`}
    >
      <figcaption className="flex items-center gap-2 bg-[#15161f] px-3 py-[5.5px]">
        <span className="rounded-[3px] bg-accent px-1.5 py-px text-[6.5px] font-bold uppercase tracking-[0.12em] text-white">
          {snippet.lang}
        </span>
        <span className="text-[8.5px] font-medium text-[#8b91ab]">
          {snippet.caption}
        </span>
      </figcaption>
      <div
        className={`bg-[#1a1b26] px-3 font-mono text-[8px] ${
          fit ? "py-1.5 leading-[1.55]" : "py-2 leading-[1.72]"
        }`}
      >
        {lines.map((line, i) => {
          const toks = tokenizeCode(line, snippet.lang);
          return (
            <div key={i} className="flex">
              <span className="mr-3 w-[11px] shrink-0 select-none text-right text-[#3b4261]">
                {i + 1}
              </span>
              <code className="block flex-1 whitespace-pre">
                {toks.length === 0
                  ? " "
                  : toks.map((tk, j) => (
                      <span key={j} style={{ color: CODE_COLOR[tk.c] }}>
                        {tk.t}
                      </span>
                    ))}
              </code>
            </div>
          );
        })}
      </div>
    </figure>
  );
}
