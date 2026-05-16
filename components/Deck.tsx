/* eslint-disable @next/next/no-img-element */
import {
  profile,
  career,
  skillGroups,
  skillFocus,
  featuredProjects,
  otherProjects,
  awards,
  activities,
  showcases,
  studio,
  aboutHighlights,
  gomsCases,
  hinestCases,
  hinestFeatures,
  type TroubleCase,
  type FeatureGroup,
} from "@/lib/portfolio";
import { profilePhoto } from "@/lib/assets";
import { ChipRow, Meta } from "@/components/primitives";
import { CodeBlock } from "@/components/CodeBlock";
import type { ReactNode } from "react";

const TOTAL = 12;
const pad = (n: number) => String(n).padStart(2, "0");

const goms = featuredProjects[0];
const hinest = featuredProjects[1];

/* -------------------------------------------------------------- */

function Slide({
  n,
  label,
  title,
  children,
}: {
  n: number;
  label: string;
  title: string;
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
          서지완 · iOS DEVELOPER &amp; PM
        </Meta>
        <Meta className="text-[8.5px] text-dim">{profile.contact.github}</Meta>
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
    <div className="flex gap-3.5">
      <p className="w-[7mm] shrink-0 text-[19px] font-extrabold leading-none tracking-tight text-accent">
        {f.key}
      </p>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <h4 className="text-[12px] font-bold tracking-tight">{f.title}</h4>
          <span className="shrink-0 font-mono text-[8px] text-dim">
            {f.refs}
          </span>
        </div>
        <p className="mt-1 text-[9.5px] leading-[1.55] text-muted">{f.desc}</p>
      </div>
    </div>
  );
}

/** Wide troubleshooting row — narrative left, code right. */
function TroubleRow({ c }: { c: TroubleCase }) {
  return (
    <div className="grid grid-cols-[1fr_1.5fr] items-center gap-6">
      <div>
        <div className="flex items-baseline justify-between gap-2">
          <div className="flex items-baseline gap-2">
            <span className="text-[14px] font-extrabold tracking-tight text-accent">
              {c.no}
            </span>
            <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-dim">
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
        <h3 className="mt-1.5 text-[14px] font-bold leading-snug tracking-tight">
          {c.title}
        </h3>
        <p className="mt-2.5 text-[9.5px] leading-[1.6] text-muted">
          <Meta className="font-bold text-dim">문제 </Meta>
          {c.problem}
        </p>
        <p className="mt-1.5 text-[9.5px] leading-[1.6] text-fg">
          <Meta className="font-bold text-accent">결과 </Meta>
          {c.result}
        </p>
      </div>
      {c.code[0] && <CodeBlock snippet={c.code[0]} />}
    </div>
  );
}

/* ----------------------------- slides ----------------------------- */

function CoverSlide() {
  const photo = profilePhoto();
  return (
    <div className="slide page-deck flex flex-col text-fg">
      <div className="flex items-start justify-between text-[11px] font-bold uppercase tracking-[0.22em]">
        <Meta className="text-accent">Portfolio</Meta>
        <Meta className="text-dim">2026</Meta>
      </div>

      <div className="flex flex-1 items-center gap-12">
        <div className="min-w-0 flex-1">
          <h1 className="text-[96px] font-extrabold leading-[0.92] tracking-[-0.045em]">
            {profile.name}
          </h1>
          <p className="mt-5 text-[21px] font-bold text-muted">
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
            alt="서지완"
            className="h-[62mm] w-[49mm] shrink-0 rounded-lg object-cover"
          />
        ) : (
          <div className="flex h-[62mm] w-[49mm] shrink-0 items-center justify-center rounded-lg bg-fg">
            <span className="text-[68px] font-extrabold text-bg">서</span>
          </div>
        )}
      </div>

      <div className="flex items-baseline justify-between border-t border-fg/20 pt-4">
        <div className="flex items-baseline gap-4 text-[11px] text-muted">
          <span className="font-semibold text-fg">{profile.contact.email}</span>
          <span className="text-line-2">·</span>
          <span>{profile.contact.phone}</span>
          <span className="text-line-2">·</span>
          <span>{profile.contact.github}</span>
        </div>
        <Meta className="text-[9px] text-dim">
          세로(문서) · 가로(덱) 버전 제공
        </Meta>
      </div>
    </div>
  );
}

function AboutCareerSlide() {
  return (
    <Slide n={2} label="About · Career" title="불편을 서비스로 만드는 사람">
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
          <div className="flex flex-col justify-between">
            <div>
              <ColLabel>경력 · 학력</ColLabel>
              <div className="mt-3.5">
                {career.map((c, i) => (
                  <div
                    key={c.company}
                    className={`flex items-baseline justify-between gap-4 py-2.5 ${
                      i > 0 ? "border-t border-line" : ""
                    }`}
                  >
                    <div>
                      <h4 className="text-[13px] font-bold">
                        {c.company}
                        {c.current ? (
                          <span className="ml-2 text-[9px] font-bold text-accent">
                            재직 중
                          </span>
                        ) : null}
                      </h4>
                      <p className="mt-0.5 text-[10px] text-muted">{c.role}</p>
                    </div>
                    <Meta className="shrink-0 text-[9px] text-dim">
                      {c.period}
                    </Meta>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <ColLabel>주력 역량</ColLabel>
              <div className="mt-3 space-y-2">
                {skillFocus.map((s) => (
                  <p
                    key={s.name}
                    className="text-[10px] leading-[1.6] text-muted"
                  >
                    <span className="font-bold text-fg">{s.name}</span>
                    {" — "}
                    {s.desc}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col border-l border-line pl-10">
            <ColLabel>기술 스택</ColLabel>
            <div className="mt-4 flex flex-1 flex-col justify-around">
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

function GomsOverviewSlide() {
  return (
    <Slide n={3} label="Project 01 · iOS App" title="GOMS — 외출제 관리 서비스">
      <div className="grid flex-1 grid-cols-[1fr_1.08fr] gap-9">
        <div className="flex flex-col justify-center">
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
                  alt="GOMS 앱 아이콘"
                  className="h-[15mm] w-[15mm] rounded-[22%] border border-line"
                />
              )}
              <div>
                <Meta className="text-[8.5px] font-bold uppercase tracking-[0.16em] text-dim">
                  {goms.links[0].label}
                </Meta>
                <div className="mt-1 text-[13px] font-bold tracking-tight text-accent">
                  배포된 앱 보기 ↗
                </div>
              </div>
            </a>
          )}
          <p className="mt-5 text-[12px] leading-[1.75] text-muted">
            {goms.summary}
          </p>
          <div className="mt-4">
            <MetaRow k="Role" v={goms.role} />
            <MetaRow k="Team" v={goms.team} />
            <MetaRow k="Period" v={goms.period} />
          </div>
          {goms.metrics && (
            <div className="mt-5 flex gap-10 border-y border-line py-3.5">
              {goms.metrics.map((m) => (
                <div key={m.label}>
                  <div className="text-[22px] font-extrabold leading-none tracking-tight text-accent">
                    {m.value}
                  </div>
                  <Meta className="mt-1.5 block text-[9px] text-dim">
                    {m.label}
                  </Meta>
                </div>
              ))}
            </div>
          )}
          <div className="mt-4">
            <ChipRow items={goms.stack} />
          </div>
        </div>
        <div className="flex items-center justify-center gap-3">
          {goms.screenshots?.map((src) => (
            <img
              key={src}
              src={src}
              alt="GOMS 스크린샷"
              className="h-[82mm] w-auto rounded-xl border border-line"
            />
          ))}
        </div>
      </div>
    </Slide>
  );
}

function GomsTroubleSlide() {
  return (
    <Slide
      n={4}
      label="Project 01 · GOMS"
      title="트러블슈팅 — 직접 진단하고 고친 것"
    >
      <div className="flex flex-1 flex-col justify-around">
        {gomsCases.map((c) => (
          <TroubleRow key={c.no} c={c} />
        ))}
      </div>
    </Slide>
  );
}

function HiNestOverviewSlide() {
  return (
    <Slide
      n={5}
      label="Project 02 · Flagship"
      title="HiNest — 사내 워크플레이스 플랫폼"
    >
      <div className="grid flex-1 grid-cols-[1.04fr_1fr] gap-10">
        <div className="flex flex-col">
          {hinest.banner && (
            <img
              src={hinest.banner}
              alt="HiNest 배너"
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
        </div>
        <div className="flex flex-col border-l border-line pl-10">
          <ColLabel>핵심 기능</ColLabel>
          <div className="mt-3 flex flex-1 flex-col">
            {hinestFeatures.map((f, i) => (
              <div
                key={f.key}
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
}: {
  n: number;
  cases: TroubleCase[];
  range: string;
}) {
  return (
    <Slide n={n} label={`Project 02 · HiNest · ${range}`} title="트러블슈팅">
      <div className="flex flex-1 flex-col justify-around">
        {cases.map((c) => (
          <TroubleRow key={c.no} c={c} />
        ))}
      </div>
    </Slide>
  );
}

function OtherProjectsSlide() {
  return (
    <Slide n={8} label="More Work" title="그 외 프로젝트">
      <div className="flex flex-1 flex-col">
        {otherProjects.map((o, i) => (
          <div
            key={o.name}
            className={`flex flex-1 items-center gap-8 ${
              i > 0 ? "border-t border-line" : ""
            }`}
          >
            <div className="w-[66mm] shrink-0">
              <h3 className="text-[21px] font-bold tracking-tight">{o.name}</h3>
              <Meta className="mt-1.5 block text-[10px] font-semibold text-accent">
                {o.role}
              </Meta>
            </div>
            <div className="flex-1">
              <ChipRow items={o.stack} size="md" />
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
}

function AwardsSlide() {
  return (
    <Slide n={9} label="Awards" title="수상 내역">
      <div className="flex flex-1 flex-col">
        {awards.map((a, i) => (
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

function ActivitySlide() {
  return (
    <Slide n={10} label="Activity" title="활동과 리더십">
      <div className="flex flex-1 flex-col gap-6">
        <div className="flex flex-1 flex-col">
          {activities.map((act, i) => (
            <div
              key={act.name}
              className={`grid flex-1 grid-cols-[36mm_1fr] gap-7 ${
                i > 0 ? "border-t border-line" : ""
              }`}
            >
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
                </h3>
                <p className="mt-1 text-[10px] leading-[1.6] text-muted">
                  {act.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <ColLabel>부스 · 행사 · 교육</ColLabel>
          <div className="mt-2">
            {showcases.map((s, i) => (
              <div
                key={s.name}
                className={`flex items-baseline gap-3 py-2 ${
                  i > 0 ? "border-t border-line" : ""
                }`}
              >
                <span className="text-[11px] font-bold">{s.name}</span>
                <span className="text-[9.5px] text-muted">{s.role}</span>
                <span className="ml-auto text-[9px] text-dim">
                  {s.date}
                  {s.place ? ` · ${s.place}` : ""}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}

function StudioSlide() {
  return (
    <Slide n={11} label="Venture" title="운영 중인 웹 스튜디오">
      <div className="flex flex-1 flex-col justify-center">
        <div className="flex items-end gap-4">
          <h3 className="text-[56px] font-extrabold leading-[0.9] tracking-[-0.03em]">
            {studio.name}
          </h3>
          <a
            href={studio.fullUrl}
            target="_blank"
            rel="noreferrer"
            className="mb-1.5 font-mono text-[11px] font-bold text-accent"
          >
            {studio.url} ↗
          </a>
        </div>
        <p className="mt-3 text-[14px] font-bold text-accent">
          {studio.tagline}
        </p>
        <p className="mt-3 max-w-[200mm] text-[12px] leading-[1.8] text-muted">
          {studio.desc}
        </p>

        <div className="mt-7 flex gap-12 border-y border-line py-4">
          {studio.stats.map((s) => (
            <div key={s.label}>
              <div className="text-[26px] font-extrabold leading-none tracking-tight text-accent">
                {s.value}
              </div>
              <Meta className="mt-2 block text-[9px] text-dim">{s.label}</Meta>
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-[24mm_1fr] items-baseline gap-4">
          <Meta className="text-[9px] font-bold uppercase tracking-[0.14em] text-dim">
            Services
          </Meta>
          <ChipRow items={studio.services} size="md" />
        </div>
        <div className="mt-3 grid grid-cols-[24mm_1fr] items-baseline gap-4">
          <Meta className="text-[9px] font-bold uppercase tracking-[0.14em] text-dim">
            Stack
          </Meta>
          <ChipRow items={studio.stack} size="md" />
        </div>
      </div>
    </Slide>
  );
}

function ContactSlide() {
  return (
    <Slide n={12} label="Contact" title="함께 만들고 싶습니다">
      <div className="flex flex-1 flex-col justify-center">
        <p className="max-w-[212mm] text-[22px] font-extrabold leading-[1.5] tracking-tight">
          기획부터 개발·배포까지, 팀과 협업해 문제를 해결하는 모습을
          보여드리겠습니다.
        </p>
        <p className="mt-3 text-[12.5px] leading-[1.7] text-muted">
          자세한 이야기는 인터뷰에서 직접 전하고 싶습니다.
        </p>

        <div className="mt-9 flex gap-14 border-t border-fg/20 pt-5">
          {[
            { k: "Email", v: profile.contact.email },
            { k: "Tel", v: profile.contact.phone },
            { k: "GitHub", v: profile.contact.github },
          ].map((c) => (
            <div key={c.k}>
              <Meta className="text-[8.5px] font-bold uppercase tracking-[0.18em] text-dim">
                {c.k}
              </Meta>
              <div className="mt-1.5 font-mono text-[14px] font-bold text-fg">
                {c.v}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-7 text-[11px] font-bold text-accent">{profile.note}</p>
        <p className="mt-3 text-[9px] leading-[1.6] text-muted">
          이 포트폴리오 또한 템플릿 없이 직접 디자인하고 개발했습니다.{" "}
          <span className="font-mono text-dim">
            Next.js · TypeScript · Tailwind CSS
          </span>
        </p>
      </div>
    </Slide>
  );
}

/* -------------------------------------------------------------- */

export default function Deck() {
  return (
    <div className="print-stack flex flex-col items-center gap-10">
      <CoverSlide />
      <AboutCareerSlide />
      <GomsOverviewSlide />
      <GomsTroubleSlide />
      <HiNestOverviewSlide />
      <HiNestTroubleSlide n={6} cases={hinestCases.slice(0, 2)} range="01–02" />
      <HiNestTroubleSlide n={7} cases={hinestCases.slice(2, 4)} range="03–04" />
      <OtherProjectsSlide />
      <AwardsSlide />
      <ActivitySlide />
      <StudioSlide />
      <ContactSlide />
    </div>
  );
}
