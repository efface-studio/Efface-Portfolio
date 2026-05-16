/* eslint-disable @next/next/no-img-element */
import {
  profile,
  career,
  skillGroups,
  featuredProjects,
  otherProjects,
  awards,
  activities,
  showcases,
  studio,
  aboutMe,
  gomsCases,
  hinestCases,
  hinestFeatures,
  type Project,
  type TroubleCase,
  type FeatureGroup,
} from "@/lib/portfolio";
import { profilePhoto } from "@/lib/assets";
import { CodeBlock } from "@/components/CodeBlock";
import type { ReactNode } from "react";

const TOTAL = 8;
const [goms, hinest] = featuredProjects;

/* ----------------------------- shells ----------------------------- */

function DocPage({ n, children }: { n: number; children: ReactNode }) {
  return (
    <div className="doc-page page-doc flex flex-col text-fg">
      <div className="flex min-h-0 flex-1 flex-col">{children}</div>
      <div className="mt-6 flex items-center justify-between border-t border-line pt-2.5 text-[8.5px] tracking-wide text-dim">
        <span>서지완 — iOS Developer &amp; PM</span>
        <span>
          {String(n).padStart(2, "0")} &nbsp;/&nbsp; {String(TOTAL).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

/** Section header — Korean title left, English label right, hairline under. */
function SectionHead({ title, label }: { title: string; label: string }) {
  return (
    <div className="mb-4 flex items-baseline justify-between border-b border-fg/20 pb-2">
      <h2 className="text-[15px] font-bold tracking-tight">{title}</h2>
      <span className="text-[8.5px] font-bold uppercase tracking-[0.2em] text-dim">
        {label}
      </span>
    </div>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-accent-soft px-2.5 py-[3px] text-[9.5px] font-medium text-accent">
      {children}
    </span>
  );
}

function TagRow({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
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

/** Horizontal meta strip — role / period / team + links. */
function MetaStrip({ project }: { project: Project }) {
  return (
    <div className="mt-4 flex flex-wrap items-baseline gap-x-7 gap-y-2 border-y border-line py-2.5">
      {[
        ["역할", project.role],
        ["기간", project.period],
        ["팀", project.team],
      ].map(([k, v]) => (
        <span key={k} className="flex items-baseline gap-2">
          <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-dim">
            {k}
          </span>
          <span className="text-[10px] font-semibold">{v}</span>
        </span>
      ))}
      {project.links.map((l) => (
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

/* ----------------------- engineering deep-dive ----------------------- */

function FeatureRow({ f }: { f: FeatureGroup }) {
  return (
    <div className="grid grid-cols-[27mm_1fr] gap-5">
      <div>
        <p className="text-[21px] font-extrabold leading-none tracking-tight text-accent">
          {f.key}
        </p>
        <p className="mt-2 font-mono text-[7px] leading-[1.55] tracking-wide text-dim">
          {f.refs}
        </p>
      </div>
      <div className="min-w-0">
        <h4 className="text-[12px] font-bold tracking-tight">{f.title}</h4>
        <p className="mt-1.5 text-[9.5px] leading-[1.65] text-muted">
          {f.desc}
        </p>
      </div>
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
        className={`text-[9.5px] leading-[1.6] ${
          accent ? "font-semibold text-fg" : "text-muted"
        }`}
      >
        {text}
      </p>
    </div>
  );
}

function TroubleCaseBlock({ c }: { c: TroubleCase }) {
  return (
    <article>
      <div className="flex items-baseline justify-between gap-3">
        <div className="flex items-baseline gap-2.5">
          <span className="text-[12px] font-extrabold tracking-tight text-accent">
            {c.no}
          </span>
          <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-dim">
            {c.category}
          </span>
        </div>
        {c.ref && (
          <a
            href={c.ref.url}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 font-mono text-[8px] font-bold text-accent"
          >
            {c.ref.label} ↗
          </a>
        )}
      </div>
      <h3 className="mt-1.5 text-[14px] font-extrabold leading-[1.3] tracking-tight">
        {c.title}
      </h3>
      {c.file && (
        <p className="mt-1 font-mono text-[7.5px] text-dim">{c.file}</p>
      )}

      <div className="mt-2.5 space-y-1.5 border-t border-line pt-2.5">
        <CaseRow label="문제" text={c.problem} />
        <CaseRow label="해결" text={c.solution} />
        <CaseRow label="결과" text={c.result} accent />
      </div>

      <div className="mt-3 space-y-2">
        {c.code.map((s) => (
          <CodeBlock key={s.caption} snippet={s} />
        ))}
      </div>
    </article>
  );
}

/* ----------------------------- pages ----------------------------- */

function Page1() {
  const photo = profilePhoto();
  return (
    <DocPage n={1}>
      <header>
        <div className="flex items-baseline justify-between text-[8.5px] font-bold uppercase tracking-[0.22em] text-dim">
          <span>Portfolio</span>
          <span>2026</span>
        </div>

        <div className="mt-6 flex items-start justify-between gap-8">
          <div className="min-w-0 flex-1">
            <h1 className="text-[44px] font-extrabold leading-[0.95] tracking-[-0.04em]">
              {profile.name}
            </h1>
            <div className="mt-3 flex items-baseline gap-2.5">
              <p className="text-[15px] font-bold text-accent">
                {profile.role}
              </p>
              <span className="text-[10px] text-dim">·</span>
              <span className="text-[10px] text-dim">{profile.birth}</span>
            </div>
            <p className="mt-6 max-w-[110mm] text-[20px] font-extrabold leading-[1.4] tracking-[-0.015em]">
              {profile.headline}
            </p>
            <p className="mt-3 max-w-[116mm] text-[11px] leading-[1.8] text-muted">
              {profile.summary}
            </p>
          </div>
          {photo ? (
            <img
              src={photo}
              alt="서지완"
              className="h-[52mm] w-[40mm] shrink-0 rounded-lg object-cover"
            />
          ) : (
            <div className="flex h-[52mm] w-[40mm] shrink-0 items-center justify-center rounded-lg bg-fg">
              <span className="text-[40px] font-extrabold text-bg">서</span>
            </div>
          )}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-x-10 gap-y-3 border-t border-fg/20 pt-3">
          {[
            ["이메일", profile.contact.email, ""],
            ["휴대폰", profile.contact.phone, ""],
            ["GitHub", profile.contact.github, profile.contact.githubUrl],
            ["앱스토어", "배포 앱 보기 ↗", profile.contact.appStore],
          ].map(([k, v, href]) => (
            <span key={k} className="flex items-baseline gap-2.5">
              <span className="w-[15mm] shrink-0 text-[9px] font-bold uppercase tracking-wide text-dim">
                {k}
              </span>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[12.5px] font-semibold text-accent"
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

      <section className="mt-6">
        <SectionHead title="경력 · 학력" label="Career" />
        <div className="space-y-2.5">
          {career.map((c) => (
            <Entry key={c.company} meta={c.period}>
              <h3 className="text-[12.5px] font-bold">
                {c.company}
                {c.current ? (
                  <span className="ml-2 rounded-full bg-accent-soft px-2 py-[2px] text-[8px] font-bold text-accent">
                    재직 중
                  </span>
                ) : null}
              </h3>
              <p className="mt-0.5 text-[10.5px] text-muted">{c.role}</p>
            </Entry>
          ))}
        </div>
      </section>

      <section className="mt-5">
        <SectionHead title="기술 스택" label="Stack" />
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

      <section className="mt-5">
        <SectionHead title="수상 내역" label="Awards" />
        <div className="space-y-2">
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

/* --- GOMS I — overview --- */
function Page2() {
  return (
    <DocPage n={2}>
      <ProjectHead project={goms} kind="Project — iOS App" />

      {goms.screenshots && (
        <div className="mt-5 flex gap-3">
          {goms.screenshots.map((src) => (
            <div
              key={src}
              className="overflow-hidden rounded-lg border border-line shadow-[0_12px_30px_-16px_rgba(16,16,24,0.34)]"
            >
              <img src={src} alt="" className="h-[68mm] w-auto object-cover" />
            </div>
          ))}
        </div>
      )}

      <p className="mt-5 text-[12px] leading-[1.85]">{goms.summary}</p>

      <MetaStrip project={goms} />

      <div className="mt-5 flex min-h-0 flex-1 flex-col">
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

        <div className="mt-6 flex flex-1 flex-col">
          <div className="mb-3 flex items-baseline justify-between border-b border-fg/20 pb-2">
            <h4 className="text-[13px] font-bold tracking-tight">주요 기여</h4>
            <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-dim">
              Key Contributions
            </span>
          </div>
          <div className="flex flex-1 flex-col justify-between">
            {goms.contributions.map((c) => (
              <div key={c} className="flex gap-2.5">
                <span className="mt-[7px] h-px w-2.5 shrink-0 bg-accent" />
                <span className="text-[10.5px] leading-[1.6] text-muted">
                  {c}
                </span>
              </div>
            ))}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {goms.stack.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DocPage>
  );
}

/* --- GOMS II — troubleshooting --- */
function Page3() {
  return (
    <DocPage n={3}>
      <p className="text-[8.5px] font-bold uppercase tracking-[0.22em] text-accent">
        GOMS — Engineering Deep-Dive
      </p>
      <div className="mt-2 flex items-baseline justify-between border-b border-fg/20 pb-2">
        <h2 className="text-[15px] font-bold tracking-tight">트러블슈팅</h2>
        <span className="text-[8.5px] font-bold uppercase tracking-[0.2em] text-dim">
          Case 01 — 03
        </span>
      </div>
      <p className="mt-2.5 text-[9.5px] leading-[1.6] text-muted">
        운영 중인 iOS 앱에서 마주친 성능·인증·예외 처리 문제를 직접 진단하고
        리팩토링한 기록입니다.
      </p>
      <div className="mt-4">
        <TroubleCaseBlock c={gomsCases[0]} />
        <div className="my-3 border-t border-line-2" />
        <TroubleCaseBlock c={gomsCases[1]} />
        <div className="my-3 border-t border-line-2" />
        <TroubleCaseBlock c={gomsCases[2]} />
      </div>
    </DocPage>
  );
}

/* --- HiNest I — overview + key features --- */
function Page4() {
  return (
    <DocPage n={4}>
      <ProjectHead project={hinest} kind="Project — Flagship · Web Platform" />

      {hinest.banner && (
        <div className="mt-5 overflow-hidden rounded-lg border border-line shadow-[0_14px_34px_-18px_rgba(16,16,24,0.36)]">
          <img
            src={hinest.banner}
            alt=""
            className="h-[50mm] w-full object-cover"
          />
        </div>
      )}

      <p className="mt-5 text-[12px] leading-[1.85]">{hinest.summary}</p>

      <MetaStrip project={hinest} />

      <div className="mt-3">
        <TagRow items={hinest.stack} />
      </div>

      <div className="mt-6 flex min-h-0 flex-1 flex-col">
        <div className="flex items-baseline justify-between border-b border-fg/20 pb-2">
          <h4 className="text-[13px] font-bold tracking-tight">핵심 기능</h4>
          <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-dim">
            Key Features
          </span>
        </div>
        <div className="flex flex-1 flex-col">
          {hinestFeatures.map((f, i) => (
            <div
              key={f.key}
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

/* --- HiNest II — troubleshooting 01·02 --- */
function Page5() {
  return (
    <DocPage n={5}>
      <p className="text-[8.5px] font-bold uppercase tracking-[0.22em] text-accent">
        HiNest — Engineering Deep-Dive
      </p>
      <div className="mt-2 flex items-baseline justify-between border-b border-fg/20 pb-2">
        <h2 className="text-[15px] font-bold tracking-tight">트러블슈팅</h2>
        <span className="text-[8.5px] font-bold uppercase tracking-[0.2em] text-dim">
          Case 01 — 02
        </span>
      </div>
      <p className="mt-2.5 text-[9.5px] leading-[1.6] text-muted">
        운영 중 마주친 동시성·보안·정합성 문제를 실제 PR·커밋으로 해결한
        기록입니다. 코드는 핵심 부분만 발췌했습니다.
      </p>
      <div className="mt-4">
        <TroubleCaseBlock c={hinestCases[0]} />
        <div className="my-4 border-t border-line-2" />
        <TroubleCaseBlock c={hinestCases[1]} />
      </div>
    </DocPage>
  );
}

/* --- HiNest III — troubleshooting 03·04 --- */
function Page6() {
  return (
    <DocPage n={6}>
      <p className="text-[8.5px] font-bold uppercase tracking-[0.22em] text-accent">
        HiNest — Engineering Deep-Dive
      </p>
      <div className="mt-2 flex items-baseline justify-between border-b border-fg/20 pb-2">
        <h2 className="text-[15px] font-bold tracking-tight">트러블슈팅</h2>
        <span className="text-[8.5px] font-bold uppercase tracking-[0.2em] text-dim">
          Case 03 — 04
        </span>
      </div>
      <div className="mt-4">
        <TroubleCaseBlock c={hinestCases[2]} />
        <div className="my-4 border-t border-line-2" />
        <TroubleCaseBlock c={hinestCases[3]} />
      </div>

      <div className="mt-6 rounded-lg bg-accent-soft px-5 py-4">
        <div className="flex items-baseline justify-between">
          <h4 className="text-[10.5px] font-bold tracking-tight text-accent">
            트러블슈팅 노트
          </h4>
          <span className="text-[7.5px] font-bold uppercase tracking-[0.2em] text-accent/55">
            Engineering Note
          </span>
        </div>
        <p className="mt-2 text-[9.5px] leading-[1.72] text-muted">
          네 사례는 모두 평소엔 정상이지만 동시 요청·미가입 입력·다단계 상태처럼
          특정 조건이 겹칠 때만 어긋나는 문제였습니다. 재현이 어려운 결함일수록
          화면이 아니라 데이터·시간·신뢰 경계에서 원인을 찾았고, 수정은 PR과
          마이그레이션 단위로 남겨 추적·롤백할 수 있게 했습니다.
        </p>
      </div>
    </DocPage>
  );
}

/* --- 그 외 프로젝트 + 자기소개 --- */
function Page7() {
  return (
    <DocPage n={7}>
      <section>
        <SectionHead title="그 외 프로젝트" label="More Work" />
        <div className="space-y-4">
          {otherProjects.map((o) => (
            <Entry key={o.name} meta={o.role.split(" · ")[0]}>
              <div className="flex items-baseline gap-2.5">
                <h4 className="text-[12.5px] font-bold">{o.name}</h4>
                <span className="text-[9.5px] text-dim">{o.role}</span>
              </div>
              <div className="mt-2">
                <TagRow items={o.stack} />
              </div>
            </Entry>
          ))}
        </div>
      </section>

      <section className="mt-9">
        <SectionHead title="자기소개" label="About" />
        <div className="space-y-4">
          {[
            { tag: "강점", ...aboutMe.strength },
            { tag: "보완점", ...aboutMe.weakness },
          ].map((x) => (
            <Entry key={x.tag} meta={x.tag}>
              <h4 className="text-[12px] font-bold">{x.label}</h4>
              <p className="mt-1.5 text-[10.5px] leading-[1.8] text-muted">
                {x.body}
              </p>
            </Entry>
          ))}
        </div>
      </section>
    </DocPage>
  );
}

function Page8() {
  return (
    <DocPage n={8}>
      <section>
        <SectionHead title="활동 · 리더십" label="Venture & Leadership" />
        <div className="space-y-3.5">
          <Entry meta="2024 — 운영 중">
            <div className="flex items-baseline gap-2.5">
              <h4 className="text-[14px] font-extrabold tracking-tight">
                {studio.name}
              </h4>
              <span className="rounded-full bg-accent-soft px-2 py-[2px] text-[8px] font-bold text-accent">
                운영 스튜디오
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
            <p className="mt-1 text-[10px] leading-[1.7] text-muted">
              {studio.desc}
            </p>
            <div className="mt-1.5 flex gap-5">
              {studio.stats.map((s) => (
                <span key={s.label} className="text-[9.5px]">
                  <span className="font-extrabold text-fg">{s.value}</span>
                  <span className="ml-1 text-dim">{s.label}</span>
                </span>
              ))}
            </div>
          </Entry>

          {activities.map((act) => (
            <Entry key={act.name} meta={act.period}>
              <div className="flex items-baseline gap-2.5">
                <h4 className="text-[12.5px] font-bold">{act.name}</h4>
                <span className="rounded-full border border-line-2 px-2 py-[2px] text-[8px] font-semibold text-muted">
                  {act.group}
                </span>
                <span className="text-[9px] text-dim">{act.role}</span>
              </div>
              <p className="mt-1 text-[10px] leading-[1.7] text-muted">
                {act.desc}
              </p>
            </Entry>
          ))}
        </div>
      </section>

      <section className="mt-7">
        <SectionHead title="부스 · 행사 · 교육" label="Exhibitions" />
        <div className="space-y-2.5">
          {showcases.map((s) => (
            <Entry key={s.name} meta={s.date}>
              <div className="flex items-baseline gap-2.5">
                <h4 className="text-[11.5px] font-bold">{s.name}</h4>
                <span className="text-[9.5px] text-muted">{s.role}</span>
                {s.place ? (
                  <span className="text-[9px] text-dim">· {s.place}</span>
                ) : null}
              </div>
            </Entry>
          ))}
        </div>
      </section>

      <div className="mt-auto pt-7">
        <p className="text-[14px] font-extrabold leading-[1.55] tracking-tight">
          기획부터 개발·배포까지, 팀과 협업해 문제를 해결하는 모습을
          보여드리겠습니다.
        </p>
        <div className="mt-2 flex items-baseline justify-between border-t border-fg/20 pt-2.5">
          <span className="text-[10px] font-bold text-accent">
            {profile.note}
          </span>
          <span className="text-[9.5px] text-dim">
            {profile.contact.email}
          </span>
        </div>
        <p className="mt-3 text-[8.5px] leading-[1.6] text-muted">
          이 이력서 또한 템플릿 없이 직접 디자인하고 개발했습니다.{" "}
          <span className="font-mono text-dim">
            Next.js · TypeScript · Tailwind CSS
          </span>
        </p>
      </div>
    </DocPage>
  );
}

export default function VerticalDoc() {
  return (
    <div className="print-stack flex flex-col items-center gap-10">
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8 />
    </div>
  );
}
