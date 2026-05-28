// English portfolio content — mirrors lib/portfolio.ts in shape.
// Both layouts (vertical document / horizontal deck) render from this data.

import type {
  CareerItem,
  SkillGroup,
  TroubleCase,
  FeatureGroup,
  Project,
  Award,
  Activity,
  Showcase,
  Highlight,
} from "./portfolio";

export const profile = {
  name: "Jiwan Seo",
  nameEn: "서지완",
  role: "iOS · Frontend Developer & PM",
  footer: "Jiwan SEO — efface Founder / Engineer",
  birth: "2007.08.02",
  headline: "When I find friction, I turn it into a service.",
  summary:
    "A developer who turns everyday inconveniences into real services — planning them, building the iOS app and the frontend, and seeing them through release and operation as PM. I enjoy collaborating with all kinds of people and getting one step further than yesterday.",
  contact: {
    email: "xixn2@efface.dev",
    phone: "010-6286-0063",
    github: "xixn2",
    githubUrl: "https://github.com/xixn2",
    linkedin: "xixn2",
    linkedinUrl: "https://www.linkedin.com/in/xixn2",
    appStore: "https://apps.apple.com/kr/developer/jiwan-seo/id1778994453",
  },
  note: "Seeking alternative military service as an Industrial Technical Personnel.",
};

export const career: CareerItem[] = [
  {
    company: "efface",
    role: "Founder · Planning · Design · Development",
    period: "2026 — Present",
    badge: "Ongoing",
  },
  {
    company: "Hivits Inc.",
    role: "iOS Developer · Frontend Developer",
    period: "2026.03 — Present",
    badge: "Current",
  },
  {
    company: "Alivebrush Inc.",
    role: "Application & Service Planning (PM)",
    period: "2025.11 — 2026.01",
  },
  {
    company: "USLASH",
    role: "Co-founder · Operator",
    period: "2024.08 — 2025.06",
  },
  {
    company: "Gwangju Software Meister High School",
    role: "iOS Developer · PM",
    period: "2023.03 — 2026.02",
  },
];

export const skillGroups: SkillGroup[] = [
  { label: "Language", items: ["Swift", "TypeScript", "C / C++", "Python"] },
  {
    label: "iOS · Framework",
    items: ["SwiftUI", "UIKit", "Swift Concurrency", "RxSwift", "Combine", "MVVM", "MVC"],
  },
  {
    label: "Web · Backend",
    items: ["React", "Vite", "Express", "Prisma", "SQLite"],
  },
];

export const featuredProjects: Project[] = [
  {
    name: "GOMS",
    tagline: "Off-Campus Pass Management",
    org: "Gwangju Software Meister H.S.",
    period: "2024.01 — In operation",
    role: "PM/PO · iOS Developer",
    team: "iOS 3 · Android 3 · Backend 3 · Design 1",
    summary:
      "An iOS app I planned and built myself while attending Gwangju Software Meister High School. It replaced the student council’s hand-written dormitory pass management with a QR-code-based system, and this service I made as a high-schooler still runs as an official campus app — used by 400+ students every week for over two years. I personally handled App Store review, release, and version management, gaining production-level iOS operations experience.",
    icon: "/goms/icon.jpg",
    banner: "/goms/banner.webp",
    screenshots: [
      "/goms/screen-1.webp",
      "/goms/screen-2.webp",
      "/goms/screen-3.webp",
      "/goms/screen-4.webp",
      "/goms/screen-5.webp",
    ],
    stack: [
      "UIKit",
      "MVVM",
      "Tuist",
      "Moya",
      "Needle",
      "Swift Concurrency",
      "Fastlane",
      "Firebase Cloud Messaging",
    ],
    links: [
      { label: "App Store", url: "https://apps.apple.com/kr/app/goms/id6502936560" },
      { label: "GitHub", url: "https://github.com/team-haribo/GOMS-iOS-V2" },
      { label: "Team Haribo", url: "http://team-haribo.vercel.app/" },
    ],
    metrics: [
      { value: "400+", label: "Weekly users" },
      { value: "v1.5.0", label: "App Store release" },
      { value: "2yr+", label: "In operation" },
    ],
    contributions: [
      "Took part in every stage from planning to maintenance, handling over 40% of the iOS development (of 3 developers).",
      "Designed an MVVM architecture where one View maps one-to-one to one ViewModel.",
      "Built the profile screen solo — publishing, password reset, account deletion — then refactored it and improved its performance.",
      "Implemented the email-verified login and sign-up flow, hardening it with input validation and exception handling.",
      "Built and improved the main screen's token-reissuing refresh and the admin pages.",
      "Implemented QR-code scanning and generation, plus a quick-launch shortcut for the camera.",
      "Built an auto-update popup that checks the app version and a forced-outing feature.",
      "Implemented per-role theme colors and local persistence of theme and camera settings.",
      "Built server-driven push notifications with FCM and linked a Discord bot to automate pass announcements.",
      "Introduced Tuist to resolve .xcodeproj conflicts (3.x → 4.13.0) and handled v1.0.0–v1.5.0 App Store release and operations.",
    ],
    troubleshooting: [],
  },
  {
    name: "HiNest",
    tagline: "Internal Workplace Platform",
    org: "Hivits Inc.",
    period: "2026.04 — In operation",
    role: "Planning · Design · Development · Operations",
    team: "Solo project",
    summary:
      "Hivits’ internal workplace platform that manages scattered team work — announcements, schedules, attendance, meeting notes, approvals, documents — in one place. I’m building it end to end on my own, from planning and design to development and operations. Since adoption, conversations and status reports that were scattered across tools now live in one place, and the meeting-note and approval flows are far better organized. It also cut external SaaS subscription costs.",
    icon: "/hinest/icon.svg",
    banner: "/hinest/banner.webp",
    stack: ["React", "Vite", "TypeScript", "Express", "Prisma", "SQLite"],
    links: [
      { label: "GitHub", url: "https://github.com/efface-studio/HiNest-Client" },
      { label: "Service", url: "https://nest.hi-vits.com/" },
      { label: "Download", url: "https://nest.hi-vits.com/download" },
    ],
    contributions: [
      "Handled the entire process solo — from planning and design to frontend, backend, and operations.",
      "Built a dashboard that gathers attendance, weekly schedules, and announcements, plus company-, team-, and personal-level monthly calendars.",
      "Implemented a 3-second-polling internal group chat for near-real-time team communication.",
      "Built attendance/leave approval, electronic approval (receipt upload & sign-off), invite-key sign-up, and an activity-log admin page.",
    ],
    troubleshooting: [],
  },
];

/* GOMS deep-dive — 3 troubleshooting cases. Only the essential code is excerpted. */
export const gomsCases: TroubleCase[] = [
  {
    no: "01",
    category: "Performance · Async",
    title: "Loading delays piling up from sequential API calls on the main screen",
    problem:
      "The main screen called getProfile, getLateList, and getOutingList in nested sequence, so response times accumulated and the UI-update logic was scattered across callbacks.",
    solution:
      "Refactored the three APIs to run in parallel with a DispatchGroup, updating the screen once in notify after every response had arrived.",
    result:
      "Cut data-loading time by about 3× (60%) and improved readability by gathering the scattered UI updates into one place.",
    code: [
      {
        lang: "swift",
        caption: "Running the three APIs in parallel with DispatchGroup",
        lines: `let group = DispatchGroup()
// Fire all three APIs at once with no dependency — removes the sequential wait
group.enter()
getProfile { [weak self] in self?.profile = $0; group.leave() }
group.enter()
getLateList { [weak self] in self?.lateList = $0; group.leave() }
group.enter()
getOutingList { [weak self] in self?.outingList = $0; group.leave() }
// Once all three responses arrive, redraw the main screen exactly once
group.notify(queue: .main) { [weak self] in self?.reloadMainView() }`,
      },
    ],
  },
  {
    no: "02",
    category: "Auth · State Management",
    title: "A lazy property that ignored token refreshes",
    problem:
      "accessToken was declared as a lazy var, so even after the token was refreshed the stale value evaluated first kept being used, causing authentication errors.",
    solution:
      "Changed the lazy stored property into a computed property, so it re-reads the latest token from the keychain every time it is accessed.",
    result:
      "Removed the authentication errors caused by missed refreshes and improved the stability of API requests and session retention.",
    code: [
      {
        lang: "swift",
        caption: "lazy stored property → computed property",
        lines: `// AS-IS — a lazy var evaluates once; a refreshed token leaves the old value frozen in
lazy var accessToken: String = keychain.read(.accessToken) ?? ""

// TO-BE — computed property: re-reads the latest token from the keychain on every access
var accessToken: String {
    keychain.read(.accessToken) ?? ""
}`,
      },
    ],
  },
  {
    no: "03",
    category: "Scan · Deduplication",
    title: "A QR scan guard reset on every camera frame",
    file: "Feature/Scene/QR/StudentQRViewController.swift",
    problem:
      "The QR scan guard flag lived as a local variable inside the captureOutput callback, so it reset to true every frame — the guard did nothing, and one QR code fired the outing API repeatedly.",
    solution:
      "Lifted the flag to an instance property, locked it on a successful scan and stopped the captureSession, then released it 1.5s later.",
    result:
      "One QR scan now maps to exactly one outing request and one screen transition — the duplicate calls are gone.",
    code: [
      {
        lang: "swift",
        caption: "Callback-local variable → instance flag",
        lines: `// AS-IS — local variable in the callback: reset true every frame
func captureOutput(...) { var isScanningEnabled = true /* ... */ }

// TO-BE — instance property + lock on scan · 1.5s debounce
private var isScanningEnabled = true`,
      },
    ],
  },
];

/* HiNest deep-dive — key features A–E + 4 troubleshooting cases.
 * Code is excerpted and condensed from real PRs/commits in efface-studio/HiNest-Client. */
export const hinestFeatures: FeatureGroup[] = [
  {
    title: "11 operator tools — developer page",
    desc: "Split impersonation, server-side sessions, an error dashboard, health checks, a trash bin, audit trails, feature flags, API tokens, rate-limiting, a 2FA policy, and a terminal console into feature-level PRs for incremental rollout.",
    refs: "PR #93–#102 · #66 · #65",
    shots: ["/hinest/demo-dev-console.webp"],
  },
  {
    title: "In-house chat — real-time group messaging",
    desc: "A Toss-style floating popup for group and 1:1 chat — with automatic code-block detection and syntax highlighting, URL OG previews, markdown, and message pins and reactions, plus a move from polling to real-time SSE push.",
    refs: "PR #51–#64 · 7580f5f7",
    shots: ["/hinest/demo-chat-list.webp", "/hinest/demo-chat-room.webp"],
  },
  {
    title: "Projects — a team-level collaboration space",
    desc: "Groups team-level collaboration into dedicated ‘Project’ spaces. An ADMIN creates a project, and under three roles — OWNER, MANAGER, MEMBER — each project offers its own calendar, a QA checklist, GitHub/Datadog/Vercel webhook channels, and member management.",
    refs: "commit 65f78f7 · 265b594 · 38da517",
    shots: ["/hinest/demo-projects.webp"],
  },
  {
    title: "Meeting-note file & link attachments",
    desc: "Added a MeetingAttachment table separate from the meeting-note body JSON, with CRUD routes and UI for file and link attachments.",
    refs: "commit 7544231",
    shots: ["/hinest/demo-docs.webp"],
  },
  {
    title: "Preview mode",
    desc: "Added a preview mode that tours every feature with demo-org data and no login. A flag short-circuits API calls to mocks, and every page is filled with seed data.",
    refs: "PR #119–#134",
    shots: ["/hinest/demo-home.webp"],
  },
];

export const hinestCases: TroubleCase[] = [
  {
    no: "01",
    category: "Auth · Concurrency",
    title: "An invite-key sign-up race condition and a login timing oracle",
    ref: {
      label: "PR #117",
      url: "https://github.com/efface-studio/HiNest-Client/pull/117",
    },
    file: "server/src/routes/auth.ts",
    problem:
      "The gap between checking an invite key as unused and marking it used allowed concurrent sign-ups with the same key, and non-member emails skipped the password comparison, so response time alone revealed whether an account existed.",
    solution:
      "Wrapped lookup, creation, and use-marking into a single transaction and branched on updateMany’s row count, and made login always call bcrypt.compare once using a dummy hash.",
    result:
      "Guaranteed exactly one sign-up per invite key, and equalized response times to block account-enumeration attacks.",
    code: [
      {
        lang: "ts",
        caption: "Atomic invite-key claim — only one concurrent request passes",
        lines: `user = await prisma.$transaction(async (tx) => {
  // Mark only an unused key as used — the DB atomically guarantees 'only one passes'
  const claim = await tx.inviteKey.updateMany({
    where: { id: key.id, used: false },
    data: { used: true, usedAt: now },
  });
  // 0 rows updated = another request claimed it first → reject the sign-up
  if (claim.count === 0) throw httpError(400, "Invite key already used");
  return tx.user.create({ data: { email, name, passwordHash } });
}, { isolationLevel: "Serializable" });`,
      },
      {
        lang: "ts",
        caption: "Timing-oracle block — always one bcrypt.compare",
        lines: `// Once at module load — forces an equal-cost comparison even for non-member emails
const TIMING_DUMMY_HASH = bcrypt.hashSync(
  Math.random().toString(36) + Date.now().toString(36), 12,
);
// Never skip compare even when user is missing → equalizes response time
const ok = await bcrypt.compare(
  password, user?.passwordHash ?? TIMING_DUMMY_HASH,
);`,
      },
    ],
  },
  {
    no: "02",
    category: "Performance",
    title: "Chat polling that re-fetched every message each cycle",
    ref: {
      label: "commit 65be580",
      url: "https://github.com/efface-studio/HiNest-Client/commit/65be580",
    },
    file: "client/src/components/ChatMiniApp.tsx",
    problem:
      "The chat re-fetched the room’s entire ~300-message list every 1.5s, re-rendered all bubbles on each new message, and queried the room, membership, and cursor as three separate DB round-trips.",
    solution:
      "Switched to ?after incremental polling so idle polls return empty, memoized the bubbles so only the new one renders, and merged the server’s three lookups into one round-trip with a (roomId, createdAt) index.",
    result:
      "Cut an idle poll’s payload from ~300 messages to 0, the render per new message from the whole list to a single bubble, and the message-fetch DB round-trips from 3 to 1.",
    code: [
      {
        lang: "ts",
        caption: "Incremental polling — only messages past the last id",
        lines: `// full=false → only messages after the last one; idle polls return empty
const after = full ? null : latestIdRef.current;
const url = \`/api/chat/rooms/\${roomId}/messages\`;
const res = await api<{ messages: Message[] }>(
  after ? \`\${url}?after=\${after}\` : url,
);
if (!after) return setMessages(res.messages);
// Incremental response — append only new messages, dedupe by id
setMessages((prev) => {
  const seen = new Set(prev.map((m) => m.id));
  return [...prev, ...res.messages.filter((m) => !seen.has(m.id))];
});`,
      },
    ],
  },
  {
    no: "03",
    category: "Frontend Security",
    title: "Plugging a network leak in preview mode",
    ref: {
      label: "PR #134",
      url: "https://github.com/efface-studio/HiNest-Client/pull/134",
    },
    file: "client/src/lib/previewMock.ts",
    problem:
      "Preview mode only intercepted calls through the shared api() wrapper, so code using fetch or EventSource directly leaked requests to the real server.",
    solution:
      "On entering preview mode, patched window.fetch and EventSource so /api/* requests short-circuit to mocks and only external URLs such as images pass through.",
    result:
      "Blocked every /api call headed to the real server right at the network boundary in the demo environment.",
    code: [
      {
        lang: "ts",
        caption: "Patching fetch · EventSource to stop /api egress",
        lines: `function installNetworkPatches() {
  if (_origFetch) return;
  _origFetch = window.fetch.bind(window);
  window.fetch = ((input, init) => {
    const url = typeof input === "string" ? input : input.url;
    // /api/* short-circuits to a mock; external URLs (images, etc.) pass through
    if (url.startsWith("/api/")) return previewMockFetch(url, init);
    return _origFetch!(input, init);
  }) as typeof fetch;
  // EventSource too — /api/* SSE is replaced with a CLOSED dummy
}`,
      },
    ],
  },
  {
    no: "04",
    category: "Data Integrity",
    title: "An over-counted notification badge in multi-step approvals",
    ref: {
      label: "commit 98a006d",
      url: "https://github.com/efface-studio/HiNest-Client/commit/98a006d",
    },
    file: "server/src/routes/approval.ts",
    problem:
      "In multi-step approvals, an approval was counted in the badge even when a reviewer ahead of me had not acted yet, so the ‘my turn’ screen showed 0 while the sidebar showed a red number.",
    solution:
      "Fetched PENDING steps in ascending order and counted only approvals whose first step (= the current turn) has me as the reviewer.",
    result:
      "Aligned the badge number exactly with the screen’s ‘my turn’ criterion, removing the count mismatch.",
    code: [
      {
        lang: "ts",
        caption: "Count only approvals on the current turn — matching the screen",
        lines: `// Only the first PENDING step of each candidate — order ASC gives the one 'current turn'
const candidates = await prisma.approval.findMany({
  where: { status: "PENDING", steps: { some: { reviewerId: me } } },
  select: { steps: {
    where: { status: "PENDING" }, orderBy: { order: "asc" }, take: 1,
    select: { reviewerId: true },
  } },
});
// Only ones where I am the first-step reviewer = same criterion as the screen's 'my turn'
const pending = candidates.filter((a) => a.steps[0]?.reviewerId === me).length;`,
      },
    ],
  },
  {
    no: "05",
    category: "Operations · Cost",
    title: "An AWS bill that grew faster than the user count",
    ref: {
      label: "PR #138",
      url: "https://github.com/efface-studio/HiNest-Client/pull/138",
    },
    file: ".github/workflows/cost-log-retention.yml",
    problem:
      "Six CloudWatch log groups were left on the default Never-expire policy and piled up indefinitely, while client SSE fallback polling kept running in hidden tabs — preventing Fargate tasks from going idle.",
    solution:
      "Used GitHub Actions OIDC with a weekly cron to standardise log retention (30 days, 7 days for one-shot debug groups), skipped access logs on the health-check and SSE-handshake hot paths, and visibility-gated four client poll loops so they pause when the tab is hidden. A follow-up PR #139 added four operational workflows — Fargate diagnose & rightsize (with health check + auto-rollback), ECR lifecycle, and a VPC cost audit — turning the ongoing tuning into tooling. I also removed the schedule from a now-obsolete keepalive workflow (a 10-minute ping left over from the Render era), saving ~4,300 GitHub Actions minutes a month — a CI cost, not AWS (PR #152) — and moved @types/* packages to devDependencies so the production image no longer bundles type-only packages, trimming ECR storage and Fargate pull time (PR #156).",
    result:
      "With RDS dominating the absolute bill, I held off on a HiNest-only dollar figure and measured per mechanism instead. Polling RPS on the hot endpoints dropped 40–75% per tab with background tabs going to zero, and the in-memory log buffer shrank 90% to give Fargate downsizing (0.5 → 0.25 vCPU) the memory headroom it needed. Mutating workflows ship with a health check plus auto-rollback; diagnostic workflows are read-only.",
    code: [
      {
        lang: "ts",
        caption: "Visibility-gated polling — pause when the tab is hidden",
        lines: `// On return, refresh once and re-arm the interval — no perceptible UX hit
let timer: number | null = null;
const start = () => (timer ??= window.setInterval(load, 60_000));
const stop = () => {
  if (timer !== null) { clearInterval(timer); timer = null; }
};
if (document.visibilityState === "visible") start();
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") { load(); start(); }
  else stop();
});`,
      },
      {
        lang: "ts",
        caption: "Skip access logs on hot paths — keep 4xx/5xx for diagnostics",
        lines: `const SKIP = new Set(["/api/health", "/api/notification/stream"]);
res.on("finish", () => {
  // Only skip 2xx — leave error rows for incident diagnosis
  if (SKIP.has(req.path) && res.statusCode < 400) return;
  pushHttpLog(\`\${req.method} \${scrubUrl(url)} \${res.statusCode} \${dur}ms\`);
});`,
      },
    ],
  },
];

export const awards: Award[] = [
  {
    title: "Woori Bank ‘Woori Dream’ Scholarship",
    rank: "Overall & IT Track — 1st place",
    date: "2025",
    desc: "Overall and IT-track top scholar, selected from a 50-person program.",
  },
  {
    title: "GSM DevFest",
    rank: "Grand Prize · 1st of 25 teams",
    date: "2025.07",
    project: "Washer",
    desc: "Dormitory washer/dryer reservation service on Samsung SmartThings; led PM and iOS.",
  },
  {
    title: "SK Planet 29th STAC App Jam",
    rank: "Encouragement Award",
    date: "2025.02",
    project: "Saenggakhada",
    desc: "Self-built AI that evaluates user projects and ideas; led core iOS in a 4-person team.",
  },
  {
    title: "SK Planet 25th STAC App Jam",
    rank: "Excellence Award",
    date: "2024.04",
    project: "Ateut",
    desc: "An online memorial service themed on ‘love’; handled iOS in a 5-person team.",
  },
  {
    title: "Hi-Thon Hackathon",
    rank: "Popularity Award · National high-school contest",
    date: "2024.01",
    project: "Akkimeobsi Dream",
    desc: "A platform for trading time with experts to learn skills; led core iOS.",
  },
];

export const activities: Activity[] = [
  {
    group: "Nonprofit",
    name: "USLASH",
    role: "Co-founder · Operator",
    period: "2024.08 — 2025.06",
    link: "uslash.org",
    desc: "A nonprofit organization founded to support future IT talent and entrepreneurs. We hosted and ran the U/CON25 conference (110 attendees · 4.9 satisfaction), the U/THON25 hackathon, and regular FastFive meetups.",
    descLinks: [
      { term: "U/CON25", url: "https://www.uslash.org/projects/ucon25" },
      { term: "U/THON25", url: "https://www.uslash.org/projects/uthon25" },
    ],
  },
  {
    group: "GOMS Dev Team",
    name: "Team Haribo",
    role: "Team Leader",
    period: "2024.01 — In operation",
    link: "team-haribo.vercel.app",
    desc: "Led ‘Team Haribo,’ the team that plans, builds, and operates GOMS, as team leader. Coordinated scheduling and collaboration across a 10-person iOS, Android, Backend, and Design team, driving the service to launch and operation.",
  },
  {
    group: "Club",
    name: "Mindway — Major Club President",
    role: "President · iOS · PM",
    period: "2023.10 — 2025.03",
    link: "github.com/Team-MindWay",
    desc: "Led a major-focused club of 30+ members as president and grew the team by 200%. Ran weekly QA to improve service quality and established an autonomous collaboration culture.",
  },
  {
    group: "Club",
    name: "School Enterprise — Office-of-Education Club",
    role: "iOS Developer",
    period: "2024.06 — 2025.05",
    link: "github.com/school-of-company",
    desc: "An in-school startup club run on contract for the Gwangju Metropolitan Office of Education. I developed and operated ‘Expo,’ an exhibition pre-registration service, gaining production-level project experience.",
  },
];

export const showcases: Showcase[] = [
  {
    name: "2025 AI Expo",
    role: "GOMS booth operation & presentation",
    date: "2025.05",
    place: "COEX, Seoul",
    desc: "As PM and iOS Leader, presented ‘GOMS’ — the largest in-house app project — and improved the service from feedback gathered on site.",
  },
  {
    name: "DevFest",
    role: "Washer booth operation",
    date: "2025.07",
    place: "On campus",
    desc: "Built ‘Washer,’ a dormitory washer/dryer management and reservation service powered by Samsung SmartThings, as PM and iOS developer — winning first place among 25 teams at the in-school dev contest.",
  },
  {
    name: "2024 Softwave",
    role: "Expo booth operation",
    date: "2024.12",
    place: "COEX, Seoul",
    desc: "Operated the booth for ‘Expo’, an education-office commissioned project, using visitor feedback to diagnose and improve the service.",
  },
  {
    name: "2023 Softwave",
    role: "Software festival attendee",
    date: "2023.12",
    place: "COEX, Seoul",
    desc: "Attended Korea’s largest software festival, exploring services from other schools and startups and networking with working developers.",
  },
  {
    name: "2023 KWDC",
    role: "Apple conference attendee",
    date: "2023.07",
    place: "COEX, Seoul",
    desc: "Attended a Korean Apple-developer community conference, taking in Swift and iOS sessions and talks by working developers to keep up with platform trends.",
  },
  {
    name: "Cyber Guardians",
    role: "Completed an information-security education program",
    date: "2023",
    place: "",
    desc: "Completed an information-security program hosted by the Korea Internet & Security Agency (KISA), spanning fundamentals to network security, vulnerability analysis, and penetration testing.",
  },
];

export const studio = {
  name: "efface",
  url: "efface.dev",
  fullUrl: "https://efface.dev",
  tagline: "Erase the complexity, keep only the effect.",
  desc: "I run a web-agency studio that owns the whole process in one place — planning, design, development, and deployment. Our principle is to finish with solid code and a clean handover.",
  services: ["Landing pages", "Corporate & brand sites", "E-commerce", "Internal tools & web apps"],
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
};

export const aboutHighlights: Highlight[] = [
  {
    k: "Someone who leads teams",
    v: "Co-founded the USLASH nonprofit — running its conferences and hackathons — and as a major-club president grew the team by 200%. I enjoy gathering people, dividing up roles, and seeing things through together.",
  },
  {
    k: "A PM who sees things through",
    v: "Planned and built GOMS, now an official campus service used by 400+ students every week for over two years, and personally own its App Store review, release, and version management.",
  },
  {
    k: "A developer who grows every day",
    v: "Chooses the challenges others hesitate to take and, rather than hesitating before unfamiliar technology, dives in — enjoying the very process of getting one step further than yesterday.",
  },
];

export const aboutMe = {
  strength: {
    label: "Someone who enjoys new challenges",
    body: "When I notice an inconvenience, I never let go of the question ‘what if I made this into a service?’ and develop it into a concrete plan. I recruit teammates myself, divide up roles, and drive everything from development through App Store release and operation — and rather than hesitating in front of unfamiliar technology or a new challenge, I tend to dive in first. I built GOMS, which replaced hand-written dormitory passes with a QR-based system and now runs as an official campus service used by 400+ students every week for over two years; I also co-founded the USLASH nonprofit, hosting conferences and hackathons, and as a major-club president grew the team twofold. I then show what I’ve built to real users at outside competitions and events like Softwave and AI Expo, carrying the feedback I gather on site into the next round of improvements. These days I run my own studio under the name ‘efface’, pursuing the kind of quality that comes when one person owns a project end to end — from planning through development and deployment.",
  },
  weakness: {
    label: "A logic-first disposition",
    body: "I have a strength for analyzing problems systematically, prioritizing logic and feasibility — but because I move quickly toward a conclusion, at times I have not fully considered teammates’ feelings and positions. I have come to realize, sometimes belatedly, that what I saw as an efficient call could feel like a burden to someone else. To make up for this, I have lately worked to check and respect teammates’ thoughts and emotions first during meetings and feedback, and to share progress often so we can align our expectations. Learning that getting a team to face the same direction matters as much as solving a problem quickly, I keep working to balance logic with emotional consideration.",
  },
};
