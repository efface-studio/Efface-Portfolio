// 서지완 포트폴리오 콘텐츠 — 이력서 PDF · Notion 포트폴리오 · efface.dev 기반.
// 세로(문서형)·가로(덱형) 두 레이아웃이 모두 이 데이터를 사용한다.

export const profile = {
  name: "서지완",
  nameEn: "Jiwan Seo",
  role: "iOS · Frontend Developer & PM",
  birth: "2007.08.02",
  headline: "불편함을 발견하면, 서비스로 만듭니다.",
  summary:
    "일상 생활의 불편함을 직접 서비스로 기획하고 iOS·프론트엔드 개발과 PM을 맡아 배포·운영까지 완수해 온 개발자입니다. 다양한 사람들과 협업하며 어제보다 한 걸음 더 나아가는 과정을 즐깁니다.",
  contact: {
    email: "xixn2@efface.dev",
    phone: "010-6286-0063",
    github: "github.com/xixn2",
    githubUrl: "https://github.com/xixn2",
    appStore: "https://apps.apple.com/kr/app/goms/id6502936560",
  },
  note: "병역특례(산업기능요원)를 희망하고 있습니다.",
};

export type CareerItem = {
  company: string;
  role: string;
  period: string;
  badge?: string;
};

export const career: CareerItem[] = [
  {
    company: "efface",
    role: "대표 · 기획 · 디자인 · 개발",
    period: "2026 — 운영 중",
    badge: "운영 중",
  },
  {
    company: "(주) 하이비츠",
    role: "iOS Developer · Frontend Developer",
    period: "2026.03 — 재직 중",
    badge: "재직 중",
  },
  {
    company: "(주) 얼라이브러쉬",
    role: "어플리케이션 · 서비스 기획 (PM)",
    period: "2025.11 — 2026.01",
  },
  {
    company: "USLASH",
    role: "공동 설립 · 운영",
    period: "2024.08 — 2025.06",
  },
  {
    company: "광주소프트웨어마이스터고",
    role: "iOS Developer · PM",
    period: "2023.03 — 2026.02",
  },
];

export type SkillGroup = { label: string; items: string[] };

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

export type SkillFocus = { name: string; desc: string };

export const skillFocus: SkillFocus[] = [
  {
    name: "Swift",
    desc: "객체지향·프로토콜 지향 패러다임을 적용해 요구사항에 맞는 iOS 앱을 설계·개발합니다.",
  },
  {
    name: "Architecture",
    desc: "MVVM·TCA 등 아키텍처 패턴을 이해하고 실제 프로젝트에 적용한 경험이 있습니다.",
  },
  {
    name: "SwiftUI · UIKit",
    desc: "선언형·명령형 UI 모두로 화면 전환, 뷰 계층 관리, 커스텀 컴포넌트를 구현합니다.",
  },
  {
    name: "Tuist",
    desc: "프로젝트 모듈화와 설정 자동화로 빌드·협업 효율을 끌어올립니다.",
  },
];

export type Trouble = { problem: string; solution: string; result: string };

export type CodeSnippet = {
  lang: "ts" | "sql" | "swift";
  caption: string;
  lines: string;
};

export type TroubleCase = {
  no: string;
  category: string;
  title: string;
  ref?: { label: string; url: string };
  refs?: string;
  file?: string;
  desc?: string;
  problem: string;
  solution: string;
  result: string;
  code: CodeSnippet[];
};

export type FeatureGroup = {
  title: string;
  desc: string;
  refs: string;
  shots?: string[];
};

export type Project = {
  name: string;
  tagline: string;
  org: string;
  period: string;
  role: string;
  team: string;
  summary: string;
  icon?: string;
  screenshots?: string[];
  banner?: string;
  stack: string[];
  links: { label: string; url: string }[];
  contributions: string[];
  troubleshooting: Trouble[];
  metrics?: { value: string; label: string }[];
};

export const featuredProjects: Project[] = [
  {
    name: "GOMS",
    tagline: "외출제 관리 서비스",
    org: "광주소프트웨어마이스터고",
    period: "2024.01 — 운영·유지보수 중",
    role: "PM/PO · iOS Developer",
    team: "iOS 3 · Android 3 · Backend 3 · Design 1",
    summary:
      "광주소프트웨어마이스터고 재학 중 직접 기획하고 개발한 iOS 앱입니다. 학생회가 수기로 관리하던 기숙사 외출을 QR코드 기반으로 전환했고, 고등학생 때 만든 이 서비스는 지금도 매주 400명 이상이 쓰는 교내 공식 앱으로 2년 넘게 운영되고 있습니다. App Store 심사·배포와 버전 관리까지 직접 수행하며 실무 수준의 iOS 운영을 경험했습니다.",
    icon: "/goms/icon.jpg",
    banner: "/goms/banner.png",
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
      { value: "400+", label: "주간 사용자" },
      { value: "v1.5.0", label: "App Store 배포" },
      { value: "2년+", label: "운영 · 유지보수" },
    ],
    contributions: [
      "기획부터 유지보수까지 전 단계에 참여하며 iOS 개발의 40% 이상(3명 중)을 담당",
      "1 View — 1 ViewModel이 1:1로 대응하도록 MVVM 아키텍처를 설계",
      ".xcodeproj 충돌 해소와 모듈화를 위해 Tuist를 도입하고 3.x → 4.13.0으로 마이그레이션",
      "v1.0.0부터 v1.5.0까지 App Store 배포·심사 대응·버전 관리를 직접 수행",
      "FCM으로 서버 기반 푸시 알림을 구현하고 디스코드 봇과 연동해 외출제 공지를 자동화",
    ],
    troubleshooting: [],
  },
  {
    name: "HiNest",
    tagline: "사내 워크플레이스 플랫폼",
    org: "(주) 하이비츠",
    period: "2026.03 — 운영·유지보수 중",
    role: "기획 · 디자인 · 개발 · 운영",
    team: "1인 단독 진행",
    summary:
      "흩어진 팀 업무 — 공지·일정·근태·회의록·결재·문서 — 를 한 곳에서 관리하는 (주)하이비츠의 사내 워크플레이스 플랫폼입니다. 기획·디자인·개발·운영까지 전 과정을 1인으로 맡아 만들고 있습니다. 도입 이후 흩어져 있던 대화와 업무 보고가 한 곳으로 모였고, 회의록과 결재 흐름도 훨씬 정리됐습니다. 외부 SaaS 구독 비용도 줄일 수 있었습니다.",
    icon: "/hinest/icon.svg",
    banner: "/hinest/banner.png",
    stack: ["React", "Vite", "TypeScript", "Express", "Prisma", "SQLite"],
    links: [
      { label: "GitHub", url: "https://github.com/efface-studio/HiNest-Client" },
    ],
    contributions: [
      "기획·디자인부터 프론트엔드·백엔드 개발과 운영까지 전 과정을 1인으로 담당",
      "출퇴근·주간 일정·공지를 모은 대시보드와 전사·팀·개인 월별 캘린더 구현",
      "3초 폴링 기반 사내 그룹 채팅(사내톡)을 구현해 실시간에 가까운 팀 커뮤니케이션 제공",
      "근태·휴가 결재, 전자결재(영수증 업로드·승인), 초대키 가입, 활동 로그 관리자 페이지 구현",
    ],
    troubleshooting: [],
  },
];

/* GOMS 심층 — 트러블슈팅 3선. 코드는 핵심 부분만 발췌했습니다. */
export const gomsCases: TroubleCase[] = [
  {
    no: "01",
    category: "성능 · 비동기",
    title: "메인 화면 API 순차 호출로 누적되던 로딩 지연",
    problem:
      "메인 화면이 getProfile·getLateList·getOutingList를 중첩 순차 호출해 응답 시간이 누적되고, UI 갱신 로직이 콜백마다 흩어졌습니다.",
    solution:
      "세 API를 DispatchGroup으로 병렬 실행하고, 모든 응답이 도착한 뒤 notify에서 화면을 한 번에 갱신하도록 리팩토링했습니다.",
    result:
      "데이터 로딩 속도를 약 3배(60%) 단축하고, 흩어져 있던 UI 갱신을 한 곳으로 모아 가독성을 높였습니다.",
    code: [
      {
        lang: "swift",
        caption: "DispatchGroup 으로 세 API 를 병렬 실행",
        lines: `let group = DispatchGroup()
// 세 API 를 의존성 없이 동시에 발사 — 순차 누적 대기 제거
group.enter()
getProfile { [weak self] in self?.profile = $0; group.leave() }
group.enter()
getLateList { [weak self] in self?.lateList = $0; group.leave() }
group.enter()
getOutingList { [weak self] in self?.outingList = $0; group.leave() }
// 세 응답이 모두 도착하면 메인 화면을 한 번만 다시 그린다
group.notify(queue: .main) { [weak self] in self?.reloadMainView() }`,
      },
    ],
  },
  {
    no: "02",
    category: "인증 · 상태 관리",
    title: "토큰을 갱신해도 반영되지 않던 lazy 프로퍼티",
    problem:
      "accessToken을 lazy var로 선언해, 토큰을 갱신해도 최초 평가된 옛 값이 계속 쓰여 인증 오류가 발생했습니다.",
    solution:
      "lazy 저장 프로퍼티를 연산 프로퍼티로 바꿔, 접근하는 시점마다 키체인의 최신 토큰을 다시 읽도록 했습니다.",
    result:
      "갱신 누락으로 인한 인증 오류를 제거하고 API 요청·세션 유지 안정성을 높였습니다.",
    code: [
      {
        lang: "swift",
        caption: "lazy 저장 프로퍼티 → 연산 프로퍼티",
        lines: `// AS-IS — lazy var 는 최초 1회만 평가, 토큰을 갱신해도 옛 값이 박제됨
lazy var accessToken: String = keychain.read(.accessToken) ?? ""

// TO-BE — 연산 프로퍼티: 접근 시점마다 키체인의 최신 토큰을 다시 읽음
var accessToken: String {
    keychain.read(.accessToken) ?? ""
}`,
      },
    ],
  },
  {
    no: "03",
    category: "기능 · 예외 대응",
    title: "QR 스캔 불가 사용자를 위한 강제 외출",
    problem:
      "카메라 성능이 낮거나 스캔 권한이 없는 사용자는 QR 인식이 안 돼, 외출 처리를 아예 할 수 없는 사각지대가 있었습니다.",
    solution:
      "관리자가 QR 스캔 없이 외출 상태를 직접 전이시키는 강제 외출 기능을 추가했습니다.",
    result:
      "스캔이 불가능한 상황에서도 외출 처리가 가능해져 운영 사각지대를 없앴습니다.",
    code: [
      {
        lang: "swift",
        caption: "관리자 강제 외출 — 스캔 단계 우회",
        lines: `// 카메라·권한 문제로 QR 스캔이 막힌 경우 관리자가 외출 상태를 직접 전이
func forceOuting(for studentID: String) async throws {
    try await outingClient.updateState(studentID, to: .outing)
    await MainActor.run { reloadOutingList() }
}`,
      },
    ],
  },
];

/* HiNest 심층 — 핵심 기능 A–F + 트러블슈팅 4선.
 * 코드는 efface-studio/HiNest-Client 의 실제 PR·커밋에서 발췌·축약했습니다. */
export const hinestFeatures: FeatureGroup[] = [
  {
    title: "운영자 도구 11종 — 개발자 페이지",
    desc: "임퍼소네이션 · 서버사이드 세션 · 에러 대시보드 · 헬스체크 · 휴지통 · 감사 추적 · Feature Flag · API 토큰 · Rate-limit · 2FA 정책 · 터미널 콘솔을 기능 단위 PR로 분리해 점진 배포했습니다.",
    refs: "PR #93–#102 · #66 · #65",
    shots: ["/hinest/demo-dev-console.png"],
  },
  {
    title: "사내톡 — 실시간 그룹 채팅",
    desc: "토스 스타일 플로팅 팝업으로 그룹·1:1 채팅을 구현했습니다. 코드 블록 자동 감지·신택스 하이라이팅, URL OG 프리뷰, 마크다운, 메시지 고정·리액션을 더하고, 폴링을 SSE 실시간 푸시로 전환했습니다.",
    refs: "PR #51–#64 · 7580f5f7",
    shots: ["/hinest/demo-chat-list.png", "/hinest/demo-chat-room.png"],
  },
  {
    title: "미리보기 모드",
    desc: "로그인 없이 데모 조직 데이터로 전 기능을 둘러보는 미리보기 모드를 도입했습니다. 플래그로 API 호출을 mock으로 단락하고 모든 페이지에 시드 데이터를 채웠습니다.",
    refs: "PR #119–#134",
    shots: ["/hinest/demo-home.png"],
  },
  {
    title: "회의록 파일 · 링크 첨부",
    desc: "회의록 본문 JSON과 분리한 MeetingAttachment 테이블을 신설하고, 파일·링크 첨부 CRUD 라우트와 UI를 구현했습니다.",
    refs: "commit 7544231",
    shots: ["/hinest/demo-docs.png"],
  },
];

export const hinestCases: TroubleCase[] = [
  {
    no: "01",
    category: "인증 · 동시성",
    title: "초대키 동시 가입 레이스 컨디션과 로그인 타이밍 오라클",
    ref: {
      label: "PR #117",
      url: "https://github.com/efface-studio/HiNest-Client/pull/117",
    },
    file: "server/src/routes/auth.ts",
    problem:
      "초대키 미사용 확인과 사용 처리 사이의 틈으로 같은 키 동시 가입이 가능했고, 미가입 이메일은 비밀번호 비교를 건너뛰어 응답 시간만으로 가입 여부가 드러났습니다.",
    solution:
      "조회·생성·사용 처리를 한 트랜잭션으로 묶어 updateMany의 갱신 건수로 분기하고, 로그인은 더미 해시로 bcrypt.compare를 항상 1회 호출하도록 했습니다.",
    result:
      "초대키 1개당 1명만 가입되도록 보장하고, 응답 시간을 균일화해 계정 열거(enumeration) 공격을 차단했습니다.",
    code: [
      {
        lang: "ts",
        caption: "원자적 초대키 점유 — 동시 요청 중 하나만 통과",
        lines: `user = await prisma.$transaction(async (tx) => {
  // 미사용 키만 사용 처리 — DB가 원자적으로 '하나만 통과' 보장
  const claim = await tx.inviteKey.updateMany({
    where: { id: key.id, used: false },
    data: { used: true, usedAt: now },
  });
  // 갱신 0건 = 다른 요청이 먼저 선점 → 가입 거부
  if (claim.count === 0) throw httpError(400, "이미 사용된 초대키");
  return tx.user.create({ data: { email, name, passwordHash } });
}, { isolationLevel: "Serializable" });`,
      },
      {
        lang: "ts",
        caption: "타이밍 오라클 차단 — 항상 1회 bcrypt.compare",
        lines: `// 모듈 로드 시 1회 — 미가입 이메일에도 동일 비용의 비교를 강제
const TIMING_DUMMY_HASH = bcrypt.hashSync(
  Math.random().toString(36) + Date.now().toString(36), 12,
);
// user가 없어도 compare를 생략하지 않는다 → 응답 시간 균일화
const ok = await bcrypt.compare(
  password, user?.passwordHash ?? TIMING_DUMMY_HASH,
);`,
      },
    ],
  },
  {
    no: "02",
    category: "성능",
    title: "전체 메시지를 매번 다시 받던 사내톡 폴링",
    ref: {
      label: "commit 65be580",
      url: "https://github.com/efface-studio/HiNest-Client/commit/65be580",
    },
    file: "client/src/components/ChatMiniApp.tsx",
    problem:
      "사내톡이 1.5초마다 방의 전체 메시지(~300건)를 다시 받았고, 새 메시지 하나가 붙을 때마다 리스트의 모든 버블이 다시 렌더링됐습니다. 메시지 조회도 방·멤버십·커서를 각각 따로 DB에 물었습니다.",
    solution:
      "마지막 메시지 id 이후만 받는 ?after 증분 폴링으로 바꿔 유휴 폴링이 빈 응답이 되게 했고, 버블을 React.memo로 감싸 새로 붙은 것만 렌더했습니다. 서버는 세 조회를 한 번의 왕복으로 병합하고 (roomId, createdAt) 인덱스를 더했습니다. 편집·리액션은 15초 주기·포커스 복귀 시 전체 동기화로 보정합니다.",
    result:
      "유휴 폴링 1회 전송량을 ~300건에서 0건으로, 새 메시지당 렌더를 리스트 전체에서 버블 1개로, 메시지 조회 DB 왕복을 3회에서 1회로 줄였습니다.",
    code: [
      {
        lang: "ts",
        caption: "마지막 id 이후만 받는 증분 폴링",
        lines: `// full=false 면 마지막 메시지 이후만 — 유휴 폴링은 대부분 빈 응답
const after = full ? null : latestIdRef.current;
const url = \`/api/chat/rooms/\${roomId}/messages\`;
const res = await api<{ messages: Message[] }>(
  after ? \`\${url}?after=\${after}\` : url,
);
if (!after) return setMessages(res.messages);
// 증분 응답 — 새 메시지만 이어붙이고 중복은 id로 방어
setMessages((prev) => {
  const seen = new Set(prev.map((m) => m.id));
  return [...prev, ...res.messages.filter((m) => !seen.has(m.id))];
});`,
      },
    ],
  },
  {
    no: "03",
    category: "프론트엔드 보안",
    title: "미리보기 모드의 네트워크 누수 차단",
    ref: {
      label: "PR #134",
      url: "https://github.com/efface-studio/HiNest-Client/pull/134",
    },
    file: "client/src/lib/previewMock.ts",
    problem:
      "미리보기 모드가 공용 래퍼 api() 호출만 가로채, fetch·EventSource를 직접 쓰는 코드는 실제 서버로 요청이 새어 나갔습니다.",
    solution:
      "미리보기 진입 시 window.fetch와 EventSource를 패치해, /api/* 요청은 mock으로 단락하고 이미지 같은 외부 URL만 통과시켰습니다.",
    result:
      "데모 환경에서 실제 서버로 향하는 모든 /api 호출을 네트워크 경계 자체에서 차단했습니다.",
    code: [
      {
        lang: "ts",
        caption: "fetch · EventSource를 패치해 /api 진출 차단",
        lines: `function installNetworkPatches() {
  if (_origFetch) return;
  _origFetch = window.fetch.bind(window);
  window.fetch = ((input, init) => {
    const url = typeof input === "string" ? input : input.url;
    // /api/* 는 mock으로 단락, 외부 URL(이미지 등)은 그대로 통과
    if (url.startsWith("/api/")) return previewMockFetch(url, init);
    return _origFetch!(input, init);
  }) as typeof fetch;
  // EventSource도 동일 — /api/* SSE는 CLOSED 더미로 대체
}`,
      },
    ],
  },
  {
    no: "04",
    category: "데이터 정합성",
    title: "다단계 결재의 알림 배지 과다 카운트",
    ref: {
      label: "commit 98a006d",
      url: "https://github.com/efface-studio/HiNest-Client/commit/98a006d",
    },
    file: "server/src/routes/approval.ts",
    problem:
      "다단계 결재에서 내 앞 순번 리뷰어가 결재 전이어도 배지에 집계돼, ‘내 차례’ 화면은 0건인데 사이드바에는 빨간 숫자가 떴습니다.",
    solution:
      "PENDING 스텝을 order 오름차순으로 가져와, 첫 스텝(= 현재 차례)의 리뷰어가 나인 결재만 카운트하도록 바꿨습니다.",
    result:
      "배지 숫자를 화면의 ‘내 차례’ 기준과 정확히 일치시켜 카운트 불일치를 제거했습니다.",
    code: [
      {
        lang: "ts",
        caption: "현재 차례인 결재만 집계 — 화면 기준과 일치",
        lines: `// 후보 결재의 첫 PENDING 스텝만 — order ASC로 '현재 차례' 한 건
const candidates = await prisma.approval.findMany({
  where: { status: "PENDING", steps: { some: { reviewerId: me } } },
  select: { steps: {
    where: { status: "PENDING" }, orderBy: { order: "asc" }, take: 1,
    select: { reviewerId: true },
  } },
});
// 첫 스텝 리뷰어가 나인 건만 = 화면의 '내 차례'와 동일 기준
const pending = candidates.filter((a) => a.steps[0]?.reviewerId === me).length;`,
      },
    ],
  },
  {
    no: "05",
    category: "협업 · 프로젝트 관리",
    title: "프로젝트 — 팀 단위 협업 공간",
    refs: "65f78f7 · 265b594 · 38da517 · 2996217 · 84736e7 · PR #41 · #30 · #38",
    desc: "HiNest 안에서 팀 단위 협업을 ‘프로젝트’라는 공간으로 묶어 관리하는 기능입니다.",
    problem:
      "전사 워크플레이스에는 팀 단위로 일정·QA·외부 알림을 묶을 공간이 없어, 팀별 협업 맥락이 개인 일정과 전사 채널에 흩어졌습니다.",
    solution:
      "팀 협업을 ‘프로젝트’ 공간으로 분리했습니다. ADMIN이 프로젝트를 생성하고 일반 유저는 초대로 참여하며, OWNER·MANAGER·MEMBER 3단계 권한으로 운영됩니다. 각 프로젝트에는 전용 캘린더, 상태·담당자·플랫폼·마감일 QA 체크리스트, GitHub·Datadog·Vercel 웹훅 채널, 멤버 관리, 설정 모달을 담았습니다.",
    result:
      "팀별 일정·QA·알림·멤버가 프로젝트 단위로 모여, 협업 맥락이 명확히 분리·관리됩니다.",
    code: [],
  },
];

export type Award = {
  title: string;
  rank: string;
  date: string;
  project?: string;
  desc: string;
};

export const awards: Award[] = [
  {
    title: "우리은행 우리 꿈·꾸·당(堂) 장학생",
    rank: "전체 · IT 분야 수석",
    date: "2025",
    desc: "50명이 선발된 장학생 사업에서 전체 수석과 IT 분야 수석으로 선정되었습니다.",
  },
  {
    title: "GSM DevFest",
    rank: "최우수상 · 25개 팀 중 1위",
    date: "2025.07",
    project: "Washer",
    desc: "삼성 SmartThings를 활용한 기숙사 세탁기·건조기 관리·예약 서비스. PM과 iOS 개발을 담당했습니다.",
  },
  {
    title: "SK플래닛 제29회 STAC 앱잼",
    rank: "장려상",
    date: "2025.02",
    project: "생각하다",
    desc: "사용자가 만든 프로젝트·아이디어를 자체 제작한 AI가 평가·피드백하는 서비스. 4인 팀에서 iOS 핵심 기능 구현을 주도했습니다.",
  },
  {
    title: "SK플래닛 제25회 STAC 앱잼",
    rank: "우수상",
    date: "2024.04",
    project: "애틋",
    desc: "‘사랑’을 주제로 한 온라인 추모 서비스. 5인 팀에서 iOS 개발을 맡아 감정 기록·추모 공간·공유 기능을 구현했습니다.",
  },
  {
    title: "하이톤 해커톤",
    rank: "인기상 · 전국 고등학생 대상",
    date: "2024.01",
    project: "아낌없이 Dream",
    desc: "전문가와 시간을 거래해 실력을 전수받는 플랫폼. 5인 팀에서 iOS 핵심 기능 구현을 담당했습니다.",
  },
];

export type Activity = {
  group: string;
  name: string;
  role: string;
  period: string;
  link: string;
  desc: string;
  descLinks?: { term: string; url: string }[];
};

export const activities: Activity[] = [
  {
    group: "법인 운영",
    name: "USLASH",
    role: "공동 설립 · 운영",
    period: "2024.08 — 2025.06",
    link: "uslash.org",
    desc: "미래의 IT 인재와 창업가를 지원하기 위해 설립한 비영리 법인 단체. U/CON25 컨퍼런스(참여자 110명·만족도 4.9), U/THON25 해커톤, 패스트파이브 정기 밋업 등을 주최·운영했습니다.",
    descLinks: [
      { term: "U/CON25", url: "https://www.uslash.org/projects/ucon25" },
      { term: "U/THON25", url: "https://www.uslash.org/projects/uthon25" },
    ],
  },
  {
    group: "GOMS 개발팀",
    name: "Team Haribo",
    role: "팀 리더",
    period: "2024.01 — 운영 중",
    link: "team-haribo.vercel.app",
    desc: "GOMS를 기획·개발·운영하는 개발팀 ‘Team Haribo’를 팀 리더로 이끌었습니다. iOS·Android·Backend·Design 10인 규모 팀의 일정과 협업을 조율하며 서비스 출시와 운영을 주도했습니다.",
  },
  {
    group: "동아리",
    name: "Mindway — 전공 동아리 부장",
    role: "부장 · iOS · PM",
    period: "2023.10 — 2025.03",
    link: "",
    desc: "30명 이상 규모의 전공 동아리를 부장으로 이끌며 팀 규모를 200% 확대했습니다. 매주 QA로 서비스 품질을 개선하고 자율적인 협업 문화를 정착시켰습니다.",
  },
  {
    group: "동아리",
    name: "학교기업 — 교육청 외주 동아리",
    role: "iOS Developer",
    period: "2024.06 — 2025.05",
    link: "",
    desc: "광주광역시 교육청의 외주로 운영되는 학교 내부 스타트업 동아리. 박람회 사전 등록 서비스 ‘Expo’를 개발·운영하며 실무 수준의 프로젝트를 경험했습니다.",
  },
];

export type Showcase = { name: string; role: string; date: string; place: string };

export const showcases: Showcase[] = [
  { name: "2025 AI Expo", role: "GOMS 부스 운영 · 발표", date: "2025.05", place: "서울 코엑스" },
  { name: "DevFest", role: "Washer 부스 운영", date: "2025.07", place: "교내" },
  { name: "2024 Softwave", role: "Expo 부스 운영", date: "2024.12", place: "서울 코엑스" },
  { name: "2023 KWDC", role: "Apple 컨퍼런스 참여", date: "2023.07", place: "서울 코엑스" },
  { name: "사이버 가디언즈", role: "정보보안 교육 프로그램 이수", date: "2023", place: "" },
];

export const studio = {
  name: "efface",
  url: "efface.dev",
  fullUrl: "https://efface.dev",
  tagline: "복잡함은 지우고, 효과만 남깁니다.",
  desc: "기획·디자인·개발·배포까지 한 곳에서 책임지는 웹 외주 제작 스튜디오를 직접 운영하고 있습니다. 견고한 코드와 깔끔한 인수인계로 마무리하는 것을 원칙으로 합니다.",
  services: ["랜딩 페이지", "기업·브랜드 사이트", "쇼핑몰·커머스", "사내 관리툴·웹앱"],
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
};

export type Highlight = { k: string; v: string };

export const aboutHighlights: Highlight[] = [
  {
    k: "팀을 이끄는 사람",
    v: "USLASH 비영리 법인을 공동 설립하고, 전공 동아리 부장으로 팀 규모를 200% 확대했습니다.",
  },
  {
    k: "끝까지 책임지는 PM",
    v: "GOMS를 기획·개발해 매주 400명 이상이 사용하는 교내 공식 서비스로 운영하고 있습니다.",
  },
  {
    k: "매일 성장하는 개발자",
    v: "남들이 주저하는 도전을 택하고, 어제보다 한 걸음 더 나아가기 위해 노력합니다.",
  },
];

export const aboutMe = {
  strength: {
    label: "새로운 도전을 즐기는 성격",
    body: "불편함을 발견하면 ‘이걸 서비스로 만들면 어떨까?’라는 질문을 놓치지 않고 구체적인 기획으로 발전시킵니다. 팀원을 모집하고 역할을 분배해 개발과 배포까지 주도하며, 만든 서비스를 외부 공모전과 Softwave·AI Expo 등에서 실제 사용자에게 선보이고 피드백을 수집해 왔습니다.",
  },
  weakness: {
    label: "논리 중심의 성향",
    body: "문제를 논리와 현실성 우선으로 접근해 체계적으로 분석하는 강점이 있지만, 때로 팀원의 감정과 입장을 충분히 살피지 못할 때가 있었습니다. 최근에는 회의·피드백 과정에서 팀원의 감정을 먼저 확인하고 존중하며 문제 해결과 정서적 배려의 균형을 맞추려 노력하고 있습니다.",
  },
};
