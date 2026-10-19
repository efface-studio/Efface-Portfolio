/* eslint-disable @next/next/no-img-element */
import type { FeatureGroup, Project, TroubleCase } from "@/lib/portfolio";
import { getContent, type Content, type Lang } from "@/lib/content";
import { ChipRow, Meta } from "@/components/primitives";
import { CodeBlock } from "@/components/CodeBlock";
import ImageZoom from "@/components/ImageZoom";
import { Slide, ColLabel, MetaRow } from "@/components/deck-parts";
import { linkifyRefs, highlightMetrics } from "@/components/refs";

/**
 * Portfolio deck — a project-by-project deep dive. Where the résumé deck
 * condenses each project into one or two slides, this gives every key feature
 * and every troubleshooting case its own slide. Renders from the same content
 * bundle as the doc and the résumé deck.
 */

const letter = (i: number) => String.fromCharCode(65 + i);

/** Project icon + name + tagline · org. */
function ProjectTitle({ p }: { p: Project }) {
  return (
    <div className="flex items-center gap-3.5">
      {p.icon && (
        <img
          src={p.icon}
          alt={p.name}
          className="h-[14mm] w-[14mm] rounded-[22%] border border-line"
        />
      )}
      <div className="min-w-0">
        <h3 className="text-[26px] font-extrabold leading-none tracking-[-0.03em]">
          {p.name}
        </h3>
        <p className="mt-1.5 text-[11px] text-muted">
          {p.tagline}
          <span className="text-dim"> · {p.org}</span>
        </p>
      </div>
    </div>
  );
}

function ProjectLinks({ p }: { p: Project }) {
  if (p.links.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1">
      {p.links.map((l) => (
        <a
          key={l.url}
          href={l.url}
          target="_blank"
          rel="noreferrer"
          className="text-[10px] font-bold text-accent"
        >
          {l.label} ↗
        </a>
      ))}
    </div>
  );
}

/** Accent dash bullet list. */
function DashList({ items, size }: { items: string[]; size: string }) {
  return (
    <ul className="space-y-1">
      {items.map((it) => (
        <li key={it} className="flex gap-2">
          <span className="mt-[6px] h-px w-2 shrink-0 bg-accent" />
          <span className={`${size} leading-[1.55] text-muted`}>{it}</span>
        </li>
      ))}
    </ul>
  );
}

/* ----------------------------- slides ----------------------------- */

type SlideProps = { n: number; total: number; c: Content };

function CoverSlide({
  c,
  projects,
}: {
  c: Content;
  projects: { p: Project; first: number }[];
}) {
  const { profile, ui } = c;
  return (
    <div className="slide page-deck flex flex-col text-fg">
      <div className="flex items-start justify-between text-[11px] font-bold uppercase tracking-[0.22em]">
        <Meta className="text-accent">Portfolio</Meta>
        <Meta className="text-dim">2026</Meta>
      </div>

      <div className="grid flex-1 grid-cols-[1fr_118mm] items-center gap-12">
        <div className="min-w-0">
          <h1 className="text-[60px] font-extrabold leading-[0.95] tracking-[-0.045em]">
            {profile.name}
          </h1>
          <p className="mt-3 text-[14px] font-bold uppercase tracking-[0.3em] text-dim">
            {profile.nameEn}
          </p>
          <p className="mt-3 text-[19px] font-bold text-muted">
            {profile.role}
          </p>
          <div className="mt-7 h-[3px] w-16 bg-accent" />
          <p className="mt-6 text-[22px] font-bold tracking-tight">
            {profile.headline}
          </p>
          <p className="mt-3 text-[11.5px] leading-[1.75] text-muted">
            {ui.pfCoverNote}
          </p>
        </div>

        <nav aria-label={ui.pfIndexTitle} className="border-l border-line pl-10">
          <ColLabel>{ui.pfIndexTitle}</ColLabel>
          <ol className="mt-3">
            {projects.map(({ p, first }, i) => (
              <li
                key={p.name}
                className={`py-4 ${i > 0 ? "border-t border-line" : ""}`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <Meta className="font-mono text-[10px] font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </Meta>
                  <Meta className="font-mono text-[9px] text-dim">
                    p.{String(first).padStart(2, "0")}
                  </Meta>
                </div>
                <h3 className="mt-1.5 text-[20px] font-extrabold tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-0.5 text-[11px] text-muted">{p.tagline}</p>
                <p className="mt-1.5 text-[9.5px] text-dim">
                  {p.role} · {p.period}
                </p>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <div className="flex items-baseline justify-between border-t border-fg/20 pt-4 text-[11px] text-muted">
        <div className="flex gap-5">
          <a
            href={`mailto:${profile.contact.email}`}
            className="font-semibold text-fg"
          >
            {profile.contact.email}
          </a>
          <a href={profile.contact.githubUrl} target="_blank" rel="noreferrer">
            github.com/{profile.contact.github}
          </a>
        </div>
        <Meta className="text-[9px] text-dim">{profile.footer}</Meta>
      </div>
    </div>
  );
}

function OverviewSlide({
  n,
  total,
  c,
  p,
  no,
  title,
}: SlideProps & { p: Project; no: string; title: string }) {
  const { ui } = c;
  return (
    <Slide
      n={n}
      total={total}
      label={`Project ${no} · ${ui.pfOverview}`}
      title={title}
      c={c}
    >
      <div className="grid min-h-0 flex-1 grid-cols-[1fr_1.15fr] gap-10">
        <div className="flex flex-col">
          <ProjectTitle p={p} />
          <p className="mt-5 text-[11px] leading-[1.75] text-muted">
            {p.summary}
          </p>
          <div className="mt-4">
            <MetaRow k={ui.role} v={p.role} />
            <MetaRow k={ui.team} v={p.team} />
            <MetaRow k={ui.period} v={p.period} />
          </div>
          {p.metrics && (
            <div className="mt-4 flex gap-10 border-y border-line py-3">
              {p.metrics.map((m) => (
                <div key={m.label}>
                  <div className="text-[20px] font-extrabold leading-none tracking-tight text-accent">
                    {m.value}
                  </div>
                  <Meta className="mt-1.5 block text-[9px] text-dim">
                    {m.label}
                  </Meta>
                </div>
              ))}
            </div>
          )}
          <div className="mt-auto space-y-3 pt-4">
            <ChipRow items={p.stack} />
            <ProjectLinks p={p} />
          </div>
        </div>
        <div className="flex min-h-0 flex-col justify-center">
          {p.banner && (
            <ImageZoom
              src={p.banner}
              className="max-h-[118mm] w-auto self-center rounded-lg border border-line object-contain"
            />
          )}
        </div>
      </div>
    </Slide>
  );
}

function FeatureSlide({
  n,
  total,
  c,
  f,
  i,
  count,
}: SlideProps & { f: FeatureGroup; i: number; count: number }) {
  const shots = f.shots ?? [];
  // Portrait phone captures sit side by side; wide desktop captures fill.
  const multi = shots.length > 1;
  return (
    <Slide
      n={n}
      total={total}
      label={`Project 01 · HiNest · ${c.ui.pfFeature} ${letter(i)} / ${letter(count - 1)}`}
      title={f.title}
      c={c}
    >
      <div className="grid min-h-0 flex-1 grid-cols-[70mm_1fr] gap-10">
        <div className="flex flex-col">
          <span className="text-[44px] font-extrabold leading-none tracking-tight text-accent">
            {letter(i)}
          </span>
          <p className="mt-5 text-[11.5px] leading-[1.8] text-muted">
            {f.desc}
          </p>
          <p className="mt-auto border-t border-line pt-3 font-mono text-[9px] text-dim">
            {linkifyRefs(f.refs)}
          </p>
        </div>
        <div className="flex min-h-0 items-center justify-center gap-5">
          {shots.map((src) => (
            <ImageZoom
              key={src}
              src={src}
              className={
                multi
                  ? "h-[128mm] w-auto rounded-lg border border-line"
                  : "max-h-[134mm] w-full rounded-lg border border-line object-contain"
              }
            />
          ))}
        </div>
      </div>
    </Slide>
  );
}

function TroubleSlide({
  n,
  total,
  c,
  tc,
  project,
  count,
}: SlideProps & { tc: TroubleCase; project: string; count: number }) {
  const { ui } = c;
  const blocks = [
    { k: ui.problem, v: tc.problem, accent: false },
    { k: ui.solution, v: tc.solution, accent: false },
    { k: ui.result, v: tc.result, accent: true },
  ];
  return (
    <Slide
      n={n}
      total={total}
      label={`${project} · ${ui.troubleshooting} ${tc.no} / ${String(count).padStart(2, "0")}`}
      title={tc.title}
      c={c}
    >
      <div className="grid min-h-0 flex-1 grid-cols-[1fr_1fr] gap-9">
        <div className="flex min-h-0 flex-col">
          <div className="flex items-baseline justify-between gap-3">
            <div className="flex items-baseline gap-2.5">
              <span className="text-[20px] font-extrabold leading-none tracking-tight text-accent">
                {tc.no}
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-dim">
                {tc.category}
              </span>
            </div>
            {tc.ref && (
              <a
                href={tc.ref.url}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 font-mono text-[9px] font-bold text-accent"
              >
                {tc.ref.label} ↗
              </a>
            )}
          </div>
          {tc.file && (
            <p className="mt-1.5 font-mono text-[8.5px] text-dim">{tc.file}</p>
          )}
          <div className="mt-4 flex flex-col gap-3.5">
            {blocks.map((b) => (
              <div
                key={b.k}
                className={b.accent ? "border-l-2 border-accent pl-3" : ""}
              >
                <Meta
                  className={`block text-[9px] font-bold uppercase tracking-[0.14em] ${
                    b.accent ? "text-accent" : "text-dim"
                  }`}
                >
                  {b.k}
                </Meta>
                <p
                  className={`mt-1 text-[10px] leading-[1.65] ${
                    b.accent ? "text-fg" : "text-muted"
                  }`}
                >
                  {b.accent ? highlightMetrics(b.v) : b.v}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex min-h-0 flex-col justify-center gap-4">
          {tc.code.map((snippet) => (
            <CodeBlock key={snippet.caption} snippet={snippet} size="md" />
          ))}
        </div>
      </div>
    </Slide>
  );
}

function ScreensSlide({
  n,
  total,
  c,
  p,
  no,
}: SlideProps & { p: Project; no: string }) {
  const { ui } = c;
  return (
    <Slide
      n={n}
      total={total}
      label={`Project ${no} · ${p.name} · ${ui.pfScreens}`}
      title={ui.pfScreensTitle}
      c={c}
    >
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex items-center justify-center gap-4">
          {p.screenshots?.map((src) => (
            <ImageZoom
              key={src}
              src={src}
              className="h-[104mm] w-auto rounded-xl border border-line"
            />
          ))}
        </div>
        <div className="mt-auto border-t border-line pt-3">
          <ColLabel>{ui.keyContributions}</ColLabel>
          <div className="mt-2 grid grid-cols-2 gap-x-8">
            <DashList
              items={p.contributions.slice(0, Math.ceil(p.contributions.length / 2))}
              size="text-[9px]"
            />
            <DashList
              items={p.contributions.slice(Math.ceil(p.contributions.length / 2))}
              size="text-[9px]"
            />
          </div>
        </div>
      </div>
    </Slide>
  );
}

function ClosingSlide({ n, total, c }: SlideProps) {
  const { profile, ui } = c;
  const contacts = [
    {
      k: "Email",
      v: profile.contact.email,
      href: `mailto:${profile.contact.email}`,
    },
    {
      k: "Tel",
      v: profile.contact.phone,
      href: `tel:${profile.contact.phone.replace(/[^\d+]/g, "")}`,
    },
    { k: "GitHub", v: profile.contact.github, href: profile.contact.githubUrl },
    {
      k: "LinkedIn",
      v: profile.contact.linkedin,
      href: profile.contact.linkedinUrl,
    },
  ];
  return (
    <Slide n={n} total={total} label="Contact" title={ui.deckContactTitle} c={c}>
      <div className="flex flex-1 flex-col justify-center">
        <p className="max-w-[212mm] text-[24px] font-extrabold leading-[1.45] tracking-tight">
          {ui.closingLine}
        </p>
        <p className="mt-3 text-[12.5px] leading-[1.65] text-muted">
          {ui.contactLead}
        </p>
        <div className="mt-10 flex gap-14 border-t border-fg/20 pt-6">
          {contacts.map((ct) => (
            <div key={ct.k}>
              <Meta className="text-[8.5px] font-bold uppercase tracking-[0.18em] text-dim">
                {ct.k}
              </Meta>
              <div className="mt-1.5 text-[14px] font-bold tracking-tight text-fg">
                <a href={ct.href}>{ct.v}</a>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[11px] font-bold text-accent">{profile.note}</p>
      </div>
    </Slide>
  );
}

/* -------------------------------------------------------------- */

export default function PortfolioDeck({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const [goms, hinest] = c.featuredProjects;
  const { hinestFeatures, hinestCases, gomsCases, ui } = c;

  // Page numbers: cover · HiNest (overview, features, cases) ·
  // GOMS (overview, screens, cases) · closing.
  const hinestStart = 2;
  const featStart = hinestStart + 1;
  const hinestCaseStart = featStart + hinestFeatures.length;
  const gomsStart = hinestCaseStart + hinestCases.length;
  const gomsCaseStart = gomsStart + 2;
  const total = gomsCaseStart + gomsCases.length;

  return (
    <div className="print-stack flex flex-col items-center gap-10">
      <CoverSlide
        c={c}
        projects={[
          { p: hinest, first: hinestStart },
          { p: goms, first: gomsStart },
        ]}
      />

      <OverviewSlide
        n={hinestStart}
        total={total}
        c={c}
        p={hinest}
        no="01"
        title={ui.deckHinestTitle}
      />
      {hinestFeatures.map((f, i) => (
        <FeatureSlide
          key={f.title}
          n={featStart + i}
          total={total}
          c={c}
          f={f}
          i={i}
          count={hinestFeatures.length}
        />
      ))}
      {hinestCases.map((tc, i) => (
        <TroubleSlide
          key={tc.no}
          n={hinestCaseStart + i}
          total={total}
          c={c}
          tc={tc}
          project="Project 01 · HiNest"
          count={hinestCases.length}
        />
      ))}

      <OverviewSlide
        n={gomsStart}
        total={total}
        c={c}
        p={goms}
        no="02"
        title={ui.deckGomsTitle}
      />
      <ScreensSlide n={gomsStart + 1} total={total} c={c} p={goms} no="02" />
      {gomsCases.map((tc, i) => (
        <TroubleSlide
          key={tc.no}
          n={gomsCaseStart + i}
          total={total}
          c={c}
          tc={tc}
          project="Project 02 · GOMS"
          count={gomsCases.length}
        />
      ))}

      <ClosingSlide n={total} total={total} c={c} />
    </div>
  );
}
