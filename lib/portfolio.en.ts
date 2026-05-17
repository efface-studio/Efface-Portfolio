// English portfolio content — mirrors lib/portfolio.ts in shape.
// Both layouts (vertical document / horizontal deck) render from this data.

import type {
  CareerItem,
  SkillGroup,
  SkillFocus,
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
  birth: "2007.08.02",
  headline: "When I find friction, I turn it into a service.",
  summary:
    "A developer who turns everyday inconveniences into real services — planning them, building the iOS app and the frontend, and seeing them through release and operation as PM. I enjoy collaborating with all kinds of people and getting one step further than yesterday.",
  contact: {
    email: "xixn2@efface.dev",
    phone: "010-6286-0063",
    github: "github.com/xixn2",
    githubUrl: "https://github.com/xixn2",
    appStore: "https://apps.apple.com/kr/app/goms/id6502936560",
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

export const skillFocus: SkillFocus[] = [
  {
    name: "Swift",
    desc: "Designs and builds iOS apps that fit the requirements, applying object-oriented and protocol-oriented paradigms.",
  },
  {
    name: "Architecture",
    desc: "Understands architecture patterns such as MVVM and TCA, with experience applying them in real projects.",
  },
  {
    name: "SwiftUI · UIKit",
    desc: "Implements screen transitions, view-hierarchy management, and custom components in both declarative and imperative UI.",
  },
  {
    name: "Tuist",
    desc: "Raises build and collaboration efficiency through project modularization and configuration automation.",
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
    screenshots: [
      "/goms/screen-1.png",
      "/goms/screen-2.png",
      "/goms/screen-3.png",
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
    links: [{ label: "App Store", url: "https://apps.apple.com/kr/app/goms/id6502936560" }],
    metrics: [
      { value: "400+", label: "Weekly users" },
      { value: "v1.5.0", label: "App Store release" },
      { value: "2yr+", label: "In operation" },
    ],
    contributions: [
      "Took part in every stage from planning to maintenance, handling over 40% of the iOS development (of 3 developers).",
      "Designed an MVVM architecture where one View maps one-to-one to one ViewModel.",
      "Introduced Tuist to resolve .xcodeproj conflicts and modularize the project, migrating it from 3.x to 4.13.0.",
      "Personally handled App Store release, review responses, and version management from v1.0.0 to v1.5.0.",
      "Built server-driven push notifications with FCM and linked a Discord bot to automate pass announcements.",
    ],
    troubleshooting: [],
  },
  {
    name: "HiNest",
    tagline: "Internal Workplace Platform",
    org: "Hivits Inc.",
    period: "2026.03 — In progress",
    role: "Planning · Design · Development · Operations",
    team: "Solo project",
    summary:
      "Hivits’ internal workplace platform that manages scattered team work — announcements, schedules, attendance, meeting notes, approvals, documents — in one place. I’m building it end to end on my own, from planning and design to development and operations.",
    icon: "/hinest/icon.svg",
    banner: "/hinest/banner.png",
    stack: ["React", "Vite", "TypeScript", "Express", "Prisma", "SQLite"],
    links: [
      { label: "GitHub", url: "https://github.com/efface-studio/HiNest-Client" },
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
    category: "Feature · Exception Handling",
    title: "Forced check-out for users who cannot scan a QR code",
    problem:
      "Users with low-end cameras or no scan permission could not get their QR recognized, leaving a blind spot where their pass could not be processed at all.",
    solution:
      "Added a forced check-out feature that lets an admin transition the pass state directly, without a QR scan.",
    result:
      "Made pass processing possible even when scanning is not, closing the operational blind spot.",
    code: [
      {
        lang: "swift",
        caption: "Admin forced check-out — bypassing the scan step",
        lines: `// When a camera or permission issue blocks the QR scan, an admin transitions the state directly
func forceOuting(for studentID: String) async throws {
    try await outingClient.updateState(studentID, to: .outing)
    await MainActor.run { reloadOutingList() }
}`,
      },
    ],
  },
];

/* HiNest deep-dive — key features A–E + 4 troubleshooting cases.
 * Code is excerpted and condensed from real PRs/commits in efface-studio/HiNest-Client. */
export const hinestFeatures: FeatureGroup[] = [
  {
    key: "A",
    title: "11 operator tools — developer page",
    desc: "Split impersonation, server-side sessions, an error dashboard, health checks, a trash bin, audit trails, feature flags, API tokens, rate-limiting, a 2FA policy, and a terminal console into feature-level PRs for incremental rollout.",
    refs: "PR #93–#102 · #66 · #65",
  },
  {
    key: "B",
    title: "In-house chat — real-time group messaging",
    desc: "A Toss-style floating popup for group and 1:1 chat — with automatic code-block detection and syntax highlighting, URL OG previews, markdown, and message pins and reactions, plus a move from polling to real-time SSE push.",
    refs: "PR #51–#64 · 7580f5f7",
  },
  {
    key: "C",
    title: "Account security — lockout & password reset",
    desc: "Built automatic lockout after 5 failed logins with admin unlock, and email-verified self-service password reset (reset token stored as a SHA-256 hash, single-use for 30 minutes, forced logout of all sessions).",
    refs: "PR #116 · 8a28fdd",
  },
  {
    key: "D",
    title: "Preview mode",
    desc: "Added a preview mode that tours every feature with demo-org data and no login. A flag short-circuits API calls to mocks, and every page is filled with seed data.",
    refs: "PR #119–#134",
  },
  {
    key: "E",
    title: "Meeting-note file & link attachments",
    desc: "Added a MeetingAttachment table separate from the meeting-note body JSON, with CRUD routes and UI for file and link attachments.",
    refs: "commit 7544231",
  },
  {
    key: "F",
    title: "Security-review response",
    desc: "Diagnosed and fixed 3 HIGH-severity vulnerabilities found in a security review.",
    refs: "PR #85",
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
    link: "",
    desc: "Led a major-focused club of 30+ members as president and grew the team by 200%. Ran weekly QA to improve service quality and established an autonomous collaboration culture.",
  },
  {
    group: "Club",
    name: "School Enterprise — Office-of-Education Club",
    role: "iOS Developer",
    period: "2024.06 — 2025.05",
    link: "",
    desc: "An in-school startup club run on contract for the Gwangju Metropolitan Office of Education. I developed and operated ‘Expo,’ an exhibition pre-registration service, gaining production-level project experience.",
  },
];

export const showcases: Showcase[] = [
  { name: "2025 AI Expo", role: "GOMS booth operation & presentation", date: "2025.05", place: "COEX, Seoul" },
  { name: "DevFest", role: "Washer booth operation", date: "2025.07", place: "On campus" },
  { name: "2024 Softwave", role: "Expo booth operation", date: "2024.12", place: "COEX, Seoul" },
  { name: "2023 KWDC", role: "Apple conference attendee", date: "2023.07", place: "COEX, Seoul" },
  { name: "Cyber Guardians", role: "Completed an information-security education program", date: "2023", place: "" },
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
    v: "Co-founded the USLASH nonprofit and, as a major-club president, grew the team by 200%.",
  },
  {
    k: "A PM who sees things through",
    v: "Planned and built GOMS, now an official school service used by 400+ students every week.",
  },
  {
    k: "A developer who grows every day",
    v: "Chooses the challenges others hesitate to take, striving to get one step further than yesterday.",
  },
];

export const aboutMe = {
  strength: {
    label: "Someone who enjoys new challenges",
    body: "When I notice an inconvenience, I never let go of the question ‘what if I made this into a service?’ and develop it into a concrete plan. I recruit teammates, divide up roles, and drive development through to release, then show what I’ve built to real users at outside competitions and events like Softwave and AI Expo to collect feedback.",
  },
  weakness: {
    label: "A logic-first disposition",
    body: "I have a strength for analyzing problems systematically, prioritizing logic and feasibility — but at times I have not fully considered teammates’ feelings and positions. Lately I have worked to check and respect teammates’ emotions first during meetings and feedback, balancing problem-solving with emotional consideration.",
  },
};
