/* eslint-disable @next/next/no-img-element */
import type { TroubleCase, FeatureGroup } from "@/lib/portfolio";
import { getContent, type Content, type Lang } from "@/lib/content";
import { profilePhoto } from "@/lib/assets";
import { ChipRow, Meta } from "@/components/primitives";
import { CodeBlock } from "@/components/CodeBlock";
import { linkifyDesc, linkifyRefs } from "@/components/refs";
import type { ReactNode } from "react";

const TOTAL = 10;
const pad = (n: number) => String(n).padStart(2, "0");

/* -------------------------------------------------------------- */

function Slide({
  n,
  label,
  title,
  c,
  children,
}: {
  n: number;
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
          {pad(n)} / {pad(TOTAL)}
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
function ColLabel({ children }: { children: ReactNode }) {
  return (
    <Meta className="block text-[9px] font-bold uppercase tracking-[0.2em] text-accent">
      {children}
    </Meta>
  );
}

/** Hairline-divided key/value row. */
function MetaRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex gap-3 border-b border-line py-2 last:border-0">
      <Meta className="w-[20mm] shrink-0 text-[8.5px] font-bold uppercase tracking-wider text-dim">
        {k}
      </Meta>
      <span className="text-[11px] text-fg">{v}</span>
    </div>
  );
}

/** HiNest key-feature row — letter index + title + description. */
function DeckFeature({ f }: { f: FeatureGroup }) {
  return (
    <div className="min-w-0">
      <div className="flex items-baseline justify-between gap-2">
        <h4 className="text-[12px] font-bold tracking-tight">{f.title}</h4>
        <span className="shrink-0 font-mono text-[8px] text-dim">
          {linkifyRefs(f.refs)}
        </span>
      </div>
      <p className="mt-1 text-[9.5px] leading-[1.55] text-muted">{f.desc}</p>
    </div>
  );
}

/** Wide troubleshooting row — narrative left, code right. */
function TroubleRow({ tc, c }: { tc: TroubleCase; c: Content }) {
  return (
    <div className="grid grid-cols-[1fr_1.5fr] items-center gap-6">
      <div>
        <div className="flex items-baseline justify-between gap-2">
          <div className="flex items-baseline gap-2">
            <span className="text-[14px] font-extrabold tracking-tight text-accent">
              {tc.no}
            </span>
            <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-dim">
              {tc.category}
            </span>
          </div>
          {tc.ref && (
            <a
              href={tc.ref.url}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 font-mono text-[8px] font-bold text-accent"
            >
              {tc.ref.label} ↗
            </a>
          )}
        </div>
        <h3 className="mt-1 text-[14px] font-bold leading-snug tracking-tight">
          {tc.title}
        </h3>
        <p className="mt-1.5 text-[8.7px] leading-[1.48] text-muted">
          <Meta className="font-bold text-dim">{c.ui.problem}{" "}</Meta>
          {tc.problem}
        </p>
        <p className="mt-1 text-[8.7px] leading-[1.48] text-muted">
          <Meta className="font-bold text-dim">{c.ui.solution}{" "}</Meta>
          {tc.solution}
        </p>
        <p className="mt-1 text-[8.7px] leading-[1.48] text-fg">
          <Meta className="font-bold text-accent">{c.ui.result}{" "}</Meta>
          {tc.result}
        </p>
      </div>
      {tc.code[0] && <CodeBlock snippet={tc.code[0]} />}
    </div>
  );
}

/* ----------------------------- slides ----------------------------- */

function CoverSlide({ c }: { c: Content }) {
  const { profile, ui } = c;
  const photo = profilePhoto();
  return (
    <div className="slide page-deck flex flex-col text-fg">
      <div className="flex items-start justify-between text-[11px] font-bold uppercase tracking-[0.22em]">
        <Meta className="text-accent">Portfolio</Meta>
        <Meta className="text-dim">2026</Meta>
      </div>

      <div className="flex flex-1 items-center gap-12">
        <div className="min-w-0 flex-1">
          <h1 className="text-[68px] font-extrabold leading-[0.95] tracking-[-0.045em]">
            {profile.name}
          </h1>
          <p className="mt-3 text-[15px] font-bold uppercase tracking-[0.3em] text-dim">
            {profile.nameEn}
          </p>
          <p className="mt-3.5 text-[21px] font-bold text-muted">
            {profile.role}
          </p>
          <div className="mt-7 h-[3px] w-16 bg-accent" />
          <p className="mt-6 text-[24px] font-bold tracking-tight">
            {profile.headline}
          </p>
          <p className="mt-3 max-w-[188mm] text-[12.5px] leading-[1.75] text-muted">
            {profile.summary}
          </p>
        </div>
        {photo ? (
          <img
            src={photo}
            alt={profile.name}
            className="h-[62mm] w-[49mm] shrink-0 rounded-lg object-cover"
          />
        ) : (
          <div className="flex h-[62mm] w-[49mm] shrink-0 items-center justify-center rounded-lg bg-fg">
            <span className="text-[68px] font-extrabold text-bg">
              {profile.name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      <div className="flex items-baseline justify-between border-t border-fg/20 pt-4">
        <div className="flex items-baseline gap-4 text-[11px] text-muted">
          <a
            href={`mailto:${profile.contact.email}`}
            className="font-semibold text-fg"
          >
            {profile.contact.email}
          </a>
          <span className="text-line-2">·</span>
          <a href={`tel:${profile.contact.phone.replace(/[^\d+]/g, "")}`}>
            {profile.contact.phone}
          </a>
          <span className="text-line-2">·</span>
          <a href={profile.contact.githubUrl} target="_blank" rel="noreferrer">
            {profile.contact.github}
          </a>
          <span className="text-line-2">·</span>
          <a href={profile.contact.linkedinUrl} target="_blank" rel="noreferrer">
            {profile.contact.linkedin}
          </a>
        </div>
        <Meta className="text-[9px] text-dim">{ui.deckCoverNote}</Meta>
      </div>
    </div>
  );
}

function AboutCareerSlide({ c }: { c: Content }) {
  const { career, skillGroups, aboutHighlights, ui } = c;
  return (
    <Slide n={2} label="About · Career" title={ui.deckAboutTitle} c={c}>
      <div className="flex min-h-0 flex-1 flex-col">
        {/* identity highlights */}
        <div className="grid grid-cols-3 gap-7 border-b border-line pb-6">
          {aboutHighlights.map((h, i) => (
            <div key={h.k} className={i > 0 ? "border-l border-line pl-7" : ""}>
              <Meta className="font-mono text-[10px] font-bold tracking-wide text-accent">
                0{i + 1}
              </Meta>
              <h3 className="mt-2 text-[14px] font-bold tracking-tight">
                {h.k}
              </h3>
              <p className="mt-1.5 text-[10px] leading-[1.65] text-muted">
                {h.v}
              </p>
            </div>
          ))}
        </div>

        {/* career + stack */}
        <div className="grid flex-1 grid-cols-[1fr_1fr] gap-10 pt-6">
          <div className="flex flex-col">
            <div>
              <ColLabel>{ui.careerTitle}</ColLabel>
              <div className="mt-3.5">
                {career.map((ci, i) => (
                  <div
                    key={ci.company}
                    className={`flex items-baseline justify-between gap-4 py-2.5 ${
                      i > 0 ? "border-t border-line" : ""
                    }`}
                  >
                    <div>
                      <h4 className="text-[13px] font-bold">
                        {ci.company}
                        {ci.badge ? (
                          <span className="ml-2 text-[9px] font-bold text-accent">
                            {ci.badge}
                          </span>
                        ) : null}
                      </h4>
                      <p className="mt-0.5 text-[10px] text-muted">{ci.role}</p>
                    </div>
                    <Meta className="shrink-0 text-[9px] text-dim">
                      {ci.period}
                    </Meta>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col border-l border-line pl-10">
            <ColLabel>{ui.stackTitle}</ColLabel>
            <div className="mt-4 flex flex-1 flex-col gap-7">
              {skillGroups.map((g) => (
                <div key={g.label}>
                  <Meta className="mb-2 block text-[9px] font-bold uppercase tracking-wide text-dim">
                    {g.label}
                  </Meta>
                  <ChipRow items={g.items} size="md" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

function GomsOverviewSlide({ c }: { c: Content }) {
  const { ui } = c;
  const goms = c.featuredProjects[0];
  return (
    <Slide n={6} label="Project 02 · iOS App" title={ui.deckGomsTitle} c={c}>
      <div className="flex flex-1 flex-col">
        <div className="grid grid-cols-[1fr_1.08fr] gap-9">
          <div className="flex flex-col">
            {goms.links[0] && (
              <a
                href={goms.links[0].url}
                target="_blank"
                rel="noreferrer"
                className="flex w-fit items-center gap-3.5"
              >
                {goms.icon && (
                  <img
                    src={goms.icon}
                    alt={goms.name}
                    className="h-[14mm] w-[14mm] rounded-[22%] border border-line"
                  />
                )}
                <div>
                  <Meta className="text-[8.5px] font-bold uppercase tracking-[0.16em] text-dim">
                    {goms.links[0].label}
                  </Meta>
                  <div className="mt-1 text-[13px] font-bold tracking-tight text-accent">
                    {ui.viewDeployedApp}
                  </div>
                </div>
              </a>
            )}
            <p className="mt-4 text-[11px] leading-[1.7] text-muted">
              {goms.summary}
            </p>
            <div className="mt-3">
              <MetaRow k="Role" v={goms.role} />
              <MetaRow k="Team" v={goms.team} />
              <MetaRow k="Period" v={goms.period} />
            </div>
            {goms.metrics && (
              <div className="mt-4 flex gap-10 border-y border-line py-3">
                {goms.metrics.map((m) => (
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
            <div className="mt-3">
              <ChipRow items={goms.stack} />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-3">
            {goms.banner && (
              <img
                src={goms.banner}
                alt={goms.name}
                className="h-[30mm] w-full rounded-lg border border-line object-cover"
              />
            )}
            {goms.screenshots && (
              <div className="flex items-center justify-center gap-3">
                {goms.screenshots.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt={goms.name}
                    className="h-[32mm] w-auto rounded-xl border border-line"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="mt-4 border-t border-line pt-3">
          <ColLabel>{ui.keyContributions}</ColLabel>
          <div className="mt-2 grid grid-cols-2 gap-x-8 gap-y-0.5">
            {goms.contributions.map((co) => (
              <div key={co} className="flex gap-2">
                <span className="mt-[6px] h-px w-2 shrink-0 bg-accent" />
                <span className="text-[8.5px] leading-[1.5] text-muted">
                  {co}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}

function GomsTroubleSlide({ c }: { c: Content }) {
  return (
    <Slide
      n={7}
      label="Project 02 · GOMS"
      title={c.ui.deckTroubleTitle}
      c={c}
    >
      <div className="flex flex-1 flex-col justify-around">
        {c.gomsCases.map((tc) => (
          <TroubleRow key={tc.no} tc={tc} c={c} />
        ))}
      </div>
    </Slide>
  );
}

function HiNestOverviewSlide({ c }: { c: Content }) {
  const { hinestFeatures, ui } = c;
  const hinest = c.featuredProjects[1];
  return (
    <Slide
      n={3}
      label="Project 01 · Flagship"
      title={ui.deckHinestTitle}
      c={c}
    >
      <div className="grid flex-1 grid-cols-[1.04fr_1fr] gap-10">
        <div className="flex flex-col">
          {hinest.banner && (
            <img
              src={hinest.banner}
              alt={hinest.name}
              className="h-[58mm] w-full rounded-lg border border-line object-cover"
            />
          )}
          <p className="mt-4 text-[11px] leading-[1.7] text-muted">
            {hinest.summary}
          </p>
          <div className="mt-3">
            <MetaRow k="Role" v={hinest.role} />
            <MetaRow k="Team" v={hinest.team} />
            <MetaRow k="Period" v={hinest.period} />
          </div>
          <div className="mt-4">
            <ChipRow items={hinest.stack} />
          </div>
          {hinest.links.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
              {hinest.links.map((l) => (
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
          )}
        </div>
        <div className="flex flex-col border-l border-line pl-10">
          <ColLabel>{ui.keyFeatures}</ColLabel>
          <div className="mt-3 flex flex-1 flex-col">
            {hinestFeatures.map((f, i) => (
              <div
                key={f.title}
                className={`flex flex-1 flex-col justify-center ${
                  i > 0 ? "border-t border-line" : ""
                }`}
              >
                <DeckFeature f={f} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}

function HiNestTroubleSlide({
  n,
  cases,
  range,
  c,
}: {
  n: number;
  cases: TroubleCase[];
  range: string;
  c: Content;
}) {
  return (
    <Slide
      n={n}
      label={`Project 01 · HiNest · ${range}`}
      title={c.ui.deckTroubleTitle}
      c={c}
    >
      <div className="flex flex-1 flex-col justify-around">
        {cases.map((tc) => (
          <TroubleRow key={tc.no} tc={tc} c={c} />
        ))}
      </div>
    </Slide>
  );
}

function AwardsSlide({ c }: { c: Content }) {
  return (
    <Slide n={8} label="Awards" title={c.ui.deckAwardsTitle} c={c}>
      <div className="flex flex-1 flex-col">
        {c.awards.map((a, i) => (
          <div
            key={a.title}
            className={`grid flex-1 grid-cols-[32mm_1fr] items-center gap-7 ${
              i > 0 ? "border-t border-line" : ""
            }`}
          >
            <div>
              <p className="text-[13px] font-bold">{a.date}</p>
              <p className="mt-1 text-[9px] font-bold text-accent">{a.rank}</p>
            </div>
            <div>
              <h3 className="text-[15px] font-bold tracking-tight">
                {a.title}
              </h3>
              <p className="mt-1 text-[10.5px] leading-[1.6] text-muted">
                {a.project ? (
                  <span className="font-bold text-fg">{a.project} — </span>
                ) : null}
                {a.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
}

function ActivitySlide({ c }: { c: Content }) {
  const { activities, showcases, studio, ui } = c;
  return (
    <Slide n={9} label="Activity" title={ui.deckActivityTitle} c={c}>
      <div className="flex flex-1 flex-col gap-6">
        <div className="flex flex-1 flex-col">
          <div className="flex flex-1 flex-col justify-center">
            <div className="grid grid-cols-[36mm_1fr] gap-7">
              <div className="pt-0.5">
                <Meta className="text-[8.5px] font-bold uppercase tracking-[0.14em] text-accent">
                  {ui.studioMeta}
                </Meta>
              </div>
              <div>
                <h3 className="text-[13.5px] font-bold">
                  {studio.name}
                  <span className="ml-2 rounded-full bg-accent-soft px-2 py-[2px] text-[8.5px] font-bold text-accent">
                    {ui.studioBadge}
                  </span>
                  <a
                    href={studio.fullUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-2 text-[9px] font-bold text-accent"
                  >
                    {studio.url} ↗
                  </a>
                </h3>
                <p className="mt-1 text-[10px] leading-[1.6] text-muted">
                  {studio.desc}
                </p>
              </div>
            </div>
          </div>
          {activities.map((act) => (
            <div
              key={act.name}
              className="flex flex-1 flex-col justify-center border-t border-line"
            >
              <div className="grid grid-cols-[36mm_1fr] gap-7">
                <div className="pt-0.5">
                  <Meta className="text-[8.5px] font-bold uppercase tracking-[0.14em] text-accent">
                    {act.group}
                  </Meta>
                  <p className="mt-1 text-[9px] text-dim">{act.period}</p>
                </div>
                <div>
                  <h3 className="text-[13.5px] font-bold">
                    {act.name}
                    <span className="ml-2 text-[9px] font-normal text-dim">
                      {act.role}
                    </span>
                    {act.link ? (
                      <a
                        href={`https://${act.link}`}
                        target="_blank"
                        rel="noreferrer"
                        className="ml-2 text-[9px] font-bold text-accent"
                      >
                        {act.link} ↗
                      </a>
                    ) : null}
                  </h3>
                  <p className="mt-1 text-[10px] leading-[1.6] text-muted">
                    {linkifyDesc(act.desc, act.descLinks)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <ColLabel>{ui.exhibitionsTitle}</ColLabel>
          <div className="mt-2">
            {showcases.map((s, i) => (
              <div
                key={s.name}
                className={`py-1.5 ${i > 0 ? "border-t border-line" : ""}`}
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-[11px] font-bold">{s.name}</span>
                  <span className="text-[9.5px] text-muted">{s.role}</span>
                  <span className="ml-auto text-[9px] text-dim">
                    {s.date}
                    {s.place ? ` · ${s.place}` : ""}
                  </span>
                </div>
                {s.desc ? (
                  <p className="mt-0.5 text-[8.5px] leading-[1.45] text-muted">
                    {s.desc}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}

function ContactSlide({ c }: { c: Content }) {
  const { profile, ui } = c;
  return (
    <Slide n={10} label="Contact" title={ui.deckContactTitle} c={c}>
      <div className="flex flex-1 flex-col justify-center">
        <p className="max-w-[212mm] text-[22px] font-extrabold leading-[1.5] tracking-tight">
          {ui.closingLine}
        </p>
        <p className="mt-3 text-[12.5px] leading-[1.7] text-muted">
          {ui.contactLead}
        </p>

        <div className="mt-9 flex gap-14 border-t border-fg/20 pt-5">
          {[
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
            {
              k: "GitHub",
              v: profile.contact.github,
              href: profile.contact.githubUrl,
            },
            {
              k: "LinkedIn",
              v: profile.contact.linkedin,
              href: profile.contact.linkedinUrl,
            },
          ].map((ct) => (
            <div key={ct.k}>
              <Meta className="text-[8.5px] font-bold uppercase tracking-[0.18em] text-dim">
                {ct.k}
              </Meta>
              <div className="mt-1.5 font-mono text-[14px] font-bold text-fg">
                {ct.href ? <a href={ct.href}>{ct.v}</a> : ct.v}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-7 text-[11px] font-bold text-accent">{profile.note}</p>
      </div>
    </Slide>
  );
}

/* -------------------------------------------------------------- */

export default function Deck({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  return (
    <div className="print-stack flex flex-col items-center gap-10">
      <CoverSlide c={c} />
      <AboutCareerSlide c={c} />
      <HiNestOverviewSlide c={c} />
      <HiNestTroubleSlide n={4} cases={c.hinestCases.slice(0, 2)} range="01–02" c={c} />
      <HiNestTroubleSlide n={5} cases={c.hinestCases.slice(2)} range="03–04" c={c} />
      <GomsOverviewSlide c={c} />
      <GomsTroubleSlide c={c} />
      <AwardsSlide c={c} />
      <ActivitySlide c={c} />
      <ContactSlide c={c} />
    </div>
  );
}
