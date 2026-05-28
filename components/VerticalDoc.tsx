/* eslint-disable @next/next/no-img-element */
import type { Project, TroubleCase, FeatureGroup } from "@/lib/portfolio";
import { getContent, type Content, type Lang } from "@/lib/content";
import { profilePhoto } from "@/lib/assets";
import { CodeBlock } from "@/components/CodeBlock";
import { linkifyDesc, linkifyRefs } from "@/components/refs";
import ImageZoom from "@/components/ImageZoom";
import LinkIcon from "@/components/LinkIcon";
import type { ReactNode } from "react";

const TOTAL = 8;

/* ----------------------------- shells ----------------------------- */

function DocPage({
  n,
  c,
  children,
}: {
  n: number;
  c: Content;
  children: ReactNode;
}) {
  return (
    <div className="doc-page page-doc flex flex-col text-fg">
      <div className="flex min-h-0 flex-1 flex-col">{children}</div>
      <div className="mt-6 flex items-center justify-between border-t border-line pt-2.5 text-[8.5px] tracking-wide text-dim">
        <span>{c.profile.footer}</span>
        <span>
          {String(n).padStart(2, "0")} &nbsp;/&nbsp; {String(TOTAL).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

/** Section header — title left, English label right, hairline under. */
function SectionHead({ title, label }: { title: string; label: string }) {
  return (
    <div className="mb-2.5 flex items-baseline justify-between border-b border-fg/20 pb-2">
      <h2 className="text-[15px] font-bold tracking-tight">{title}</h2>
      <span className="text-[8.5px] font-bold uppercase tracking-[0.2em] text-dim">
        {label}
      </span>
    </div>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-surface px-2 py-[3px] text-[9.5px] font-medium text-muted">
      {children}
    </span>
  );
}

function TagRow({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1">
      {items.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </div>
  );
}

/** Meta-left / content-right entry row (Brittany Chiang pattern). */
function Entry({ meta, children }: { meta: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-[26mm_1fr] gap-5">
      <span className="pt-[3px] text-[8.5px] font-semibold uppercase tracking-wide text-dim">
        {meta}
      </span>
      <div>{children}</div>
    </div>
  );
}

function ProjectIcon({ project }: { project: Project }) {
  if (project.icon) {
    return (
      <img
        src={project.icon}
        alt=""
        className="h-[13mm] w-[13mm] shrink-0 rounded-[22%] border border-line object-cover"
      />
    );
  }
  return (
    <div className="flex h-[13mm] w-[13mm] shrink-0 items-center justify-center rounded-[22%] bg-fg">
      <span className="text-[19px] font-extrabold text-bg">
        {project.name.charAt(0)}
      </span>
    </div>
  );
}

/** Project header band — kicker, icon, name, tagline. */
function ProjectHead({ project, kind }: { project: Project; kind: string }) {
  return (
    <>
      <p className="text-[8.5px] font-bold uppercase tracking-[0.22em] text-accent">
        {kind}
      </p>
      <div className="mt-3 flex items-center gap-3.5">
        <ProjectIcon project={project} />
        <div className="min-w-0">
          <h3 className="text-[29px] font-extrabold leading-none tracking-[-0.035em]">
            {project.name}
          </h3>
          <p className="mt-2 text-[11.5px] text-muted">
            {project.tagline}
            <span className="text-dim"> · {project.org}</span>
          </p>
        </div>
      </div>
    </>
  );
}

/* ----------------------- engineering deep-dive ----------------------- */

function FeatureRow({ f }: { f: FeatureGroup }) {
  return (
    <div className="flex items-center gap-5">
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <h4 className="text-[12px] font-bold tracking-tight">{f.title}</h4>
          <span className="shrink-0 font-mono text-[7px] tracking-wide text-dim">
            {linkifyRefs(f.refs)}
          </span>
        </div>
        <p className="mt-1.5 text-[9.5px] leading-[1.65] text-muted">{f.desc}</p>
      </div>
      {f.shots && (
        <div className="flex shrink-0 gap-1.5">
          {f.shots.map((src) => (
            <ImageZoom
              key={src}
              src={src}
              className="h-[21mm] w-auto rounded-md border border-line"
            />
          ))}
        </div>
      )}
    </div>
  );
}

function CaseRow({
  label,
  text,
  accent,
}: {
  label: string;
  text: string;
  accent?: boolean;
}) {
  return (
    <div className="grid grid-cols-[10mm_1fr] gap-3">
      <span
        className={`pt-[1.5px] text-[8.5px] font-bold tracking-[0.04em] ${
          accent ? "text-accent" : "text-dim"
        }`}
      >
        {label}
      </span>
      <p
        className={`text-[9px] leading-[1.5] ${
          accent ? "font-semibold text-fg" : "text-muted"
        }`}
      >
        {text}
      </p>
    </div>
  );
}

function TroubleCaseBlock({ tc, c }: { tc: TroubleCase; c: Content }) {
  return (
    <article>
      <div className="flex items-baseline justify-between gap-3">
        <div className="flex items-baseline gap-2.5">
          <span className="text-[12px] font-extrabold tracking-tight text-accent">
            {tc.no}
          </span>
          <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-dim">
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
      <h3 className="mt-1.5 text-[14px] font-extrabold leading-[1.3] tracking-tight">
        {tc.title}
      </h3>
      {tc.file && (
        <p className="mt-1 font-mono text-[7.5px] text-dim">{tc.file}</p>
      )}

      <div className="mt-2 space-y-1 border-t border-line pt-2">
        <CaseRow label={c.ui.problem} text={tc.problem} />
        <CaseRow label={c.ui.solution} text={tc.solution} />
        <CaseRow label={c.ui.result} text={tc.result} accent />
      </div>

      <div className="mt-2 space-y-1.5">
        {tc.code.map((s) => (
          <CodeBlock key={s.caption} snippet={s} />
        ))}
      </div>
    </article>
  );
}

/* ----------------------------- pages ----------------------------- */

function CoverPage({ c }: { c: Content }) {
  const { profile, career, skillGroups, awards, ui } = c;
  const photo = profilePhoto();
  return (
    <DocPage n={1} c={c}>
      <header>
        <div className="text-[8.5px] font-bold uppercase tracking-[0.22em] text-dim">
          <span>Portfolio</span>
        </div>

        <div className="mt-5 flex items-start justify-between gap-8">
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-3">
              <h1 className="text-[36px] font-extrabold leading-[1] tracking-[-0.04em]">
                {profile.name}
              </h1>
              <span className="text-[13px] font-bold uppercase tracking-[0.18em] text-dim">
                {profile.nameEn}
              </span>
            </div>
            <div className="mt-2.5 flex items-baseline gap-2.5">
              <p className="text-[15px] font-bold text-accent">
                {profile.role}
              </p>
              <span className="text-[10px] text-dim">·</span>
              <span className="text-[10px] text-dim">{profile.birth}</span>
            </div>
            <p className="mt-3 max-w-[110mm] text-[20px] font-extrabold leading-[1.4] tracking-[-0.015em]">
              {profile.headline}
            </p>
            <p className="mt-2 max-w-[116mm] text-[11px] leading-[1.6] text-muted">
              {profile.summary}
            </p>
          </div>
          {photo ? (
            <img
              src={photo}
              alt={profile.name}
              className="-mt-4 h-[52mm] w-[40mm] shrink-0 rounded-lg object-cover"
            />
          ) : (
            <div className="-mt-4 flex h-[52mm] w-[40mm] shrink-0 items-center justify-center rounded-lg bg-fg">
              <span className="text-[40px] font-extrabold text-bg">
                {profile.name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        <div className="mt-3 grid grid-cols-3 gap-x-6 gap-y-1 border-t border-fg/20 pt-2">
          {[
            [ui.contactEmail, profile.contact.email, `mailto:${profile.contact.email}`],
            [
              ui.contactPhone,
              profile.contact.phone,
              `tel:${profile.contact.phone.replace(/[^\d+]/g, "")}`,
            ],
            ["GitHub", profile.contact.github, profile.contact.githubUrl],
            ["LinkedIn", profile.contact.linkedin, profile.contact.linkedinUrl],
            [ui.contactAppStore, ui.viewAppStore, profile.contact.appStore],
          ].map(([k, v, href]) => (
            <span key={k} className="flex items-baseline gap-2">
              <span className="w-[13mm] shrink-0 text-[9px] font-bold uppercase tracking-wide text-dim">
                {k}
              </span>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`text-[12.5px] font-semibold ${
                    href === profile.contact.appStore
                      ? "text-accent"
                      : "text-fg"
                  }`}
                >
                  {v}
                </a>
              ) : (
                <span className="text-[12.5px] font-semibold">{v}</span>
              )}
            </span>
          ))}
        </div>
      </header>

      <section className="mt-4">
        <SectionHead title={ui.careerTitle} label="Career" />
        <div className="space-y-2">
          {career.map((ci) => (
            <Entry key={ci.company} meta={ci.period}>
              <h3 className="text-[12.5px] font-bold">
                {ci.company}
                {ci.badge ? (
                  <span className="ml-2 rounded-full bg-accent-soft px-2 py-[2px] text-[8px] font-bold text-accent">
                    {ci.badge}
                  </span>
                ) : null}
              </h3>
              <p className="mt-0.5 text-[10.5px] text-muted">{ci.role}</p>
            </Entry>
          ))}
        </div>
      </section>

      <section className="mt-4">
        <SectionHead title={ui.stackTitle} label="Stack" />
        <div className="space-y-2">
          {skillGroups.map((g) => (
            <Entry key={g.label} meta={g.label}>
              <p className="text-[10.5px] leading-[1.7]">
                {g.items.map((it, i) => (
                  <span key={it}>
                    {i > 0 && <span className="text-dim"> · </span>}
                    <span className="text-fg">{it}</span>
                  </span>
                ))}
              </p>
            </Entry>
          ))}
        </div>
      </section>

      <section className="mt-4">
        <SectionHead title={ui.awardsTitle} label="Awards" />
        <div className="space-y-1.5">
          {awards.map((a) => (
            <Entry key={a.title} meta={a.date}>
              <h4 className="text-[12px] font-bold">
                {a.title}
                <span className="ml-2 text-[9px] font-bold text-accent">
                  {a.rank}
                </span>
              </h4>
              <p className="mt-0.5 text-[10px] leading-[1.6] text-muted">
                {a.project ? (
                  <span className="font-semibold text-fg">
                    {a.project}{" — "}
                  </span>
                ) : null}
                {a.desc}
              </p>
            </Entry>
          ))}
        </div>
      </section>
    </DocPage>
  );
}

/* --- GOMS — overview --- */
function GomsOverviewPage({ c }: { c: Content }) {
  const { ui } = c;
  const goms = c.featuredProjects[0];
  return (
    <DocPage n={6} c={c}>
      <div className="grid grid-cols-[1fr_82mm] gap-7">
        <div>
          <ProjectHead project={goms} kind="Project — iOS App" />

          <p className="mt-4 text-[11px] leading-[1.65]">{goms.summary}</p>

          <div className="mt-4">
            {[
              [ui.role, goms.role],
              [ui.period, goms.period],
              [ui.team, goms.team],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex gap-3 border-b border-line py-[5px] first:border-t"
              >
                <span className="w-[12mm] shrink-0 pt-[1.5px] text-[8px] font-bold uppercase tracking-[0.14em] text-dim">
                  {k}
                </span>
                <span className="text-[9.5px] font-semibold leading-[1.55]">
                  {v}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
            {goms.links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[10px] font-bold text-accent"
              >
                <LinkIcon label={l.label} projectIcon={goms.icon} />
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>

        <div>
          {goms.banner && (
            <img
              src={goms.banner}
              alt=""
              className="w-full rounded-lg border border-line shadow-[0_14px_34px_-18px_rgba(16,16,24,0.36)]"
            />
          )}
          <div className="mt-3">
            <TagRow items={goms.stack} />
          </div>
        </div>
      </div>

      {goms.screenshots && (
        <div className="mt-6 flex gap-3">
          {goms.screenshots.map((src) => (
            <ImageZoom
              key={src}
              src={src}
              className="h-[48mm] w-auto rounded-lg border border-line shadow-[0_12px_30px_-16px_rgba(16,16,24,0.34)]"
            />
          ))}
        </div>
      )}

      <div className="mt-5">
        {goms.metrics && (
          <div className="grid grid-cols-3 border-y border-line">
            {goms.metrics.map((m, i) => (
              <div
                key={m.label}
                className={`py-3.5 ${i > 0 ? "border-l border-line pl-6" : ""}`}
              >
                <p className="text-[23px] font-extrabold leading-none tracking-tight text-accent">
                  {m.value}
                </p>
                <p className="mt-1.5 text-[9px] font-medium text-muted">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6">
          <div className="mb-3 flex items-baseline justify-between border-b border-fg/20 pb-2">
            <h4 className="text-[13px] font-bold tracking-tight">
              {ui.keyContributions}
            </h4>
            <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-dim">
              Key Contributions
            </span>
          </div>
          <div className="space-y-2">
            {goms.contributions.map((co) => (
              <div key={co} className="flex gap-2.5">
                <span className="mt-[7px] h-px w-2.5 shrink-0 bg-accent" />
                <span className="text-[9.5px] leading-[1.5] text-muted">
                  {co}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DocPage>
  );
}

/* --- GOMS — troubleshooting --- */
function GomsTroublePage({ c }: { c: Content }) {
  const { gomsCases, ui } = c;
  return (
    <DocPage n={7} c={c}>
      <p className="text-[8.5px] font-bold uppercase tracking-[0.22em] text-accent">
        GOMS — Engineering Deep-Dive
      </p>
      <div className="mt-2 flex items-baseline justify-between border-b border-fg/20 pb-2">
        <h2 className="text-[15px] font-bold tracking-tight">
          {ui.troubleshooting}
        </h2>
        <span className="text-[8.5px] font-bold uppercase tracking-[0.2em] text-dim">
          Case 01 — 03
        </span>
      </div>
      <p className="mt-2.5 text-[9.5px] leading-[1.6] text-muted">
        {ui.gomsTroubleIntro}
      </p>
      <div className="mt-3.5">
        <TroubleCaseBlock tc={gomsCases[0]} c={c} />
        <div className="my-1 border-t border-line-2" />
        <TroubleCaseBlock tc={gomsCases[1]} c={c} />
        <div className="my-1 border-t border-line-2" />
        <TroubleCaseBlock tc={gomsCases[2]} c={c} />
      </div>
    </DocPage>
  );
}

/* --- HiNest — overview + key features --- */
function HiNestOverviewPage({ c }: { c: Content }) {
  const { hinestFeatures, ui } = c;
  const hinest = c.featuredProjects[1];
  return (
    <DocPage n={2} c={c}>
      <div className="grid grid-cols-[1fr_82mm] gap-7">
        <div>
          <ProjectHead
            project={hinest}
            kind="Project — Flagship · Web Platform"
          />

          <p className="mt-5 text-[11px] leading-[1.8]">{hinest.summary}</p>

          <div className="mt-4">
            {[
              [ui.role, hinest.role],
              [ui.period, hinest.period],
              [ui.team, hinest.team],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex gap-3 border-b border-line py-[5px] first:border-t"
              >
                <span className="w-[12mm] shrink-0 pt-[1.5px] text-[8px] font-bold uppercase tracking-[0.14em] text-dim">
                  {k}
                </span>
                <span className="text-[9.5px] font-semibold leading-[1.55]">
                  {v}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
            {hinest.links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[10px] font-bold text-accent"
              >
                <LinkIcon label={l.label} projectIcon={hinest.icon} />
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>

        <div>
          {hinest.banner && (
            <img
              src={hinest.banner}
              alt=""
              className="w-full rounded-lg border border-line shadow-[0_14px_34px_-18px_rgba(16,16,24,0.36)]"
            />
          )}
          <div className="mt-3">
            <TagRow items={hinest.stack} />
          </div>
        </div>
      </div>

      <div className="mt-6 flex min-h-0 flex-1 flex-col">
        <div className="flex items-baseline justify-between border-b border-fg/20 pb-2">
          <h4 className="text-[13px] font-bold tracking-tight">
            {ui.keyFeatures}
          </h4>
          <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-dim">
            Key Features
          </span>
        </div>
        <div className="flex flex-1 flex-col">
          {hinestFeatures.map((f, i) => (
            <div
              key={f.title}
              className={`flex flex-1 flex-col justify-center ${
                i > 0 ? "border-t border-line" : ""
              }`}
            >
              <FeatureRow f={f} />
            </div>
          ))}
        </div>
      </div>
    </DocPage>
  );
}

/* --- HiNest — troubleshooting 01·02 --- */
function HiNestTroublePageA({ c }: { c: Content }) {
  const { hinestCases, ui } = c;
  return (
    <DocPage n={3} c={c}>
      <p className="text-[8.5px] font-bold uppercase tracking-[0.22em] text-accent">
        HiNest — Engineering Deep-Dive
      </p>
      <div className="mt-2 flex items-baseline justify-between border-b border-fg/20 pb-2">
        <h2 className="text-[15px] font-bold tracking-tight">
          {ui.troubleshooting}
        </h2>
        <span className="text-[8.5px] font-bold uppercase tracking-[0.2em] text-dim">
          Case 01 — 02
        </span>
      </div>
      <div className="mt-3">
        <TroubleCaseBlock tc={hinestCases[0]} c={c} />
        <div className="my-1.5 border-t border-line-2" />
        <TroubleCaseBlock tc={hinestCases[1]} c={c} />
      </div>
    </DocPage>
  );
}

/* --- HiNest — troubleshooting 03·04 --- */
function HiNestTroublePageB({ c }: { c: Content }) {
  const { hinestCases, ui } = c;
  return (
    <DocPage n={4} c={c}>
      <p className="text-[8.5px] font-bold uppercase tracking-[0.22em] text-accent">
        HiNest — Engineering Deep-Dive
      </p>
      <div className="mt-2 flex items-baseline justify-between border-b border-fg/20 pb-2">
        <h2 className="text-[15px] font-bold tracking-tight">
          {ui.troubleshooting}
        </h2>
        <span className="text-[8.5px] font-bold uppercase tracking-[0.2em] text-dim">
          Case 03
        </span>
      </div>
      <div className="mt-4">
        <TroubleCaseBlock tc={hinestCases[2]} c={c} />
      </div>
    </DocPage>
  );
}

function HiNestTroublePageC({ c }: { c: Content }) {
  const { hinestCases, ui } = c;
  return (
    <DocPage n={5} c={c}>
      <p className="text-[8.5px] font-bold uppercase tracking-[0.22em] text-accent">
        HiNest — Engineering Deep-Dive
      </p>
      <div className="mt-2 flex items-baseline justify-between border-b border-fg/20 pb-2">
        <h2 className="text-[15px] font-bold tracking-tight">
          {ui.troubleshooting}
        </h2>
        <span className="text-[8.5px] font-bold uppercase tracking-[0.2em] text-dim">
          Case 04
        </span>
      </div>
      <div className="mt-4">
        <TroubleCaseBlock tc={hinestCases[3]} c={c} />
      </div>
    </DocPage>
  );
}

/* --- about + venture (final page) --- */
function AboutVenturePage({ c }: { c: Content }) {
  const { aboutMe, activities, showcases, studio, profile, ui } = c;
  return (
    <DocPage n={8} c={c}>
      <section>
        <SectionHead title={ui.aboutTitle} label="About" />
        <div className="space-y-2">
          {[
            { tag: ui.strengthTag, ...aboutMe.strength },
            { tag: ui.weaknessTag, ...aboutMe.weakness },
          ].map((x) => (
            <Entry key={x.tag} meta={x.tag}>
              <h4 className="text-[11px] font-bold">{x.label}</h4>
              <p className="mt-1 text-[8.5px] leading-[1.45] text-muted">
                {x.body}
              </p>
            </Entry>
          ))}
        </div>
      </section>

      <section className="mt-3">
        <SectionHead title={ui.ventureTitle} label="Leadership" />
        <div className="space-y-2">
          <Entry meta={ui.studioMeta}>
            <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
              <h4 className="text-[12px] font-extrabold tracking-tight">
                {studio.name}
              </h4>
              <span className="rounded-full bg-accent-soft px-2 py-[2px] text-[8px] font-bold text-accent">
                {ui.studioBadge}
              </span>
              <a
                href={studio.fullUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[9px] font-bold text-accent"
              >
                {studio.url} ↗
              </a>
            </div>
            <p className="mt-1 text-[8.5px] leading-[1.45] text-muted">
              {studio.desc}
            </p>
          </Entry>

          {activities.map((act) => (
            <Entry key={act.name} meta={act.period}>
              <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                <h4 className="text-[11px] font-bold">{act.name}</h4>
                <span className="rounded-full border border-line-2 px-2 py-[2px] text-[8px] font-semibold text-muted">
                  {act.group}
                </span>
                <span className="text-[9px] text-dim">{act.role}</span>
                {act.link ? (
                  <a
                    href={`https://${act.link}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[9px] font-bold text-accent"
                  >
                    {act.link} ↗
                  </a>
                ) : null}
              </div>
              <p className="mt-1 text-[8.5px] leading-[1.45] text-muted">
                {linkifyDesc(act.desc, act.descLinks)}
              </p>
            </Entry>
          ))}
        </div>
      </section>

      <section className="mt-3">
        <SectionHead title={ui.exhibitionsTitle} label="Exhibitions" />
        <div className="space-y-1">
          {showcases.map((s) => (
            <Entry key={s.name} meta={s.date}>
              <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
                <h4 className="text-[11px] font-bold">{s.name}</h4>
                <span className="text-[9px] text-muted">{s.role}</span>
                {s.place ? (
                  <span className="text-[8.5px] text-dim">· {s.place}</span>
                ) : null}
              </div>
              {s.desc ? (
                <p className="mt-0.5 text-[8.5px] leading-[1.4] text-muted">
                  {s.desc}
                </p>
              ) : null}
            </Entry>
          ))}
        </div>
      </section>

      <div className="mt-auto pt-2">
        <p className="text-[16px] font-extrabold leading-[1.4] tracking-tight">
          {ui.closingLine}
        </p>
        <div className="mt-2 flex items-baseline justify-between border-t border-fg/20 pt-2">
          <span className="text-[14px] font-bold text-accent">
            {profile.note}
          </span>
          <a
            href={`mailto:${profile.contact.email}`}
            className="text-[11px] text-dim"
          >
            {profile.contact.email}
          </a>
        </div>
      </div>
    </DocPage>
  );
}

export default function VerticalDoc({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  return (
    <div className="print-stack flex flex-col items-center gap-10">
      <CoverPage c={c} />
      <HiNestOverviewPage c={c} />
      <HiNestTroublePageA c={c} />
      <HiNestTroublePageB c={c} />
      <HiNestTroublePageC c={c} />
      <GomsOverviewPage c={c} />
      <GomsTroublePage c={c} />
      <AboutVenturePage c={c} />
    </div>
  );
}
