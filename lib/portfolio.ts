// 서지완 포트폴리오 콘텐츠 — 이력서 PDF · Notion 포트폴리오 · efface.dev 기반.
// 세로(문서형)·가로(덱형) 두 레이아웃이 모두 이 데이터를 사용한다.

export const profile = {
  name: "서지완",
  nameEn: "Jiwan Seo",
  role: "iOS · Frontend Developer & PM",
  footer: "서지완 (Jiwan SEO) — efface Founder / Engineer",
  birth: "2007.08.02",
  headline: "불편함을 발견하면, 서비스로 만듭니다.",
  summary:
    "일상 생활의 불편함을 직접 서비스로 기획하고 iOS·프론트엔드 개발과 PM을 맡아 배포·운영까지 완수해 온 개발자입니다. 다양한 사람들과 협업하며 어제보다 한 걸음 더 나아가는 과정을 즐깁니다.",
  contact: {
    email: "xixn2@efface.dev",
    phone: "010-6286-0063",
    github: "xixn2",
    githubUrl: "https://github.com/xixn2",
    linkedin: "xixn2",
    linkedinUrl: "https://www.linkedin.com/in/xixn2",
    appStore: "https://apps.apple.com/kr/developer/jiwan-seo/id1778994453",
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
  file?: string;
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
      { value: "400+", label: "주간 사용자" },
      { value: "v1.5.0", label: "App Store 배포" },
      { value: "2년+", label: "운영 · 유지보수" },
    ],
    contributions: [
      "기획부터 유지보수까지 전 단계에 참여하며 iOS 개발의 40% 이상(3명 중)을 담당",
      "1 View — 1 ViewModel이 1:1로 대응하도록 MVVM 아키텍처를 설계",
      "프로필 화면을 퍼블리싱·비밀번호 재설정·회원탈퇴까지 단독 구현하고 리팩토링·성능 개선",
      "이메일 인증 기반 로그인·회원가입 플로우를 구현하고 입력 검증·예외 처리로 안정화",
      "메인 화면의 토큰 재발급 기반 새로고침과 어드민 페이지를 구현·개선",
      "QR 코드 스캔·생성과 카메라 바로 실행 기능을 구현",
      "앱 버전을 확인해 설치를 안내하는 자동 업데이트 팝업과 강제외출 기능을 구현",
      "권한별 테마 컬러와 테마·카메라 설정의 로컬 저장을 구현",
      "FCM으로 서버 기반 푸시 알림을 구현하고 디스코드 봇과 연동해 외출제 공지를 자동화",
      "Tuist를 도입해 .xcodeproj 충돌을 해소(3.x → 4.13.0)하고 v1.0.0~v1.5.0 App Store 배포·운영을 직접 수행",
    ],
    troubleshooting: [],
  },
  {
    name: "HiNest",
    tagline: "사내 워크플레이스 플랫폼",
    org: "(주) 하이비츠",
    period: "2026.04 — 운영·유지보수 중",
    role: "기획 · 디자인 · 개발 · 운영",
    team: "1인 단독 진행",
    summary:
      "흩어진 팀 업무 — 공지·일정·근태·회의록·결재·문서 — 를 한 곳에서 관리하는 (주)하이비츠의 사내 워크플레이스 플랫폼입니다. 기획·디자인·개발·운영까지 전 과정을 1인으로 맡아 만들고 있습니다. 도입 이후 흩어져 있던 대화와 업무 보고가 한 곳으로 모였고, 회의록과 결재 흐름도 훨씬 정리됐습니다. 외부 SaaS 구독 비용도 줄일 수 있었습니다.",
    icon: "/hinest/icon.svg",
    banner: "/hinest/banner.webp",
    stack: ["React", "Vite", "TypeScript", "Express", "Prisma", "SQLite"],
    links: [
      { label: "GitHub", url: "https://github.com/efface-studio/HiNest-Client" },
      { label: "서비스", url: "https://nest.hi-vits.com/" },
      { label: "다운로드", url: "https://nest.hi-vits.com/download" },
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
    category: "스캔 · 중복 제어",
    title: "프레임마다 리셋돼 무력화된 QR 스캔 가드",
    file: "Feature/Scene/QR/StudentQRViewController.swift",
    problem:
      "QR 스캔 가드 플래그를 captureOutput 콜백 안의 지역 변수로 둬, 카메라 프레임마다 true로 리셋됐습니다. 가드가 무력화돼 같은 QR 한 장이 외출 API를 연속 중복 호출했습니다.",
    solution:
      "플래그를 인스턴스 프로퍼티로 올려 인식 즉시 잠그고 captureSession을 정지했으며, 1.5초 뒤 다시 풀어 다음 스캔을 허용했습니다.",
    result:
      "QR 1회 인식이 외출 요청·화면 전환 1회로 보장돼 중복 호출이 사라졌습니다.",
    code: [
      {
        lang: "swift",
        caption: "콜백 지역 변수 → 인스턴스 플래그",
        lines: `// AS-IS — 콜백 안의 지역 변수: 매 프레임 true 로 리셋돼 가드 무력
func captureOutput(...) { var isScanningEnabled = true /* ... */ }

// TO-BE — 인스턴스 프로퍼티 + 인식 즉시 잠금 · 1.5초 디바운스
private var isScanningEnabled = true`,
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
    shots: ["/hinest/demo-dev-console.webp"],
  },
  {
    title: "사내톡 — 실시간 그룹 채팅",
    desc: "토스 스타일 플로팅 팝업으로 그룹·1:1 채팅을 구현했습니다. 코드 블록 자동 감지·신택스 하이라이팅, URL OG 프리뷰, 마크다운, 메시지 고정·리액션을 더하고, 폴링을 SSE 실시간 푸시로 전환했습니다.",
    refs: "PR #51–#64 · 7580f5f7",
    shots: ["/hinest/demo-chat-list.webp", "/hinest/demo-chat-room.webp"],
  },
  {
    title: "프로젝트 — 팀 단위 협업 공간",
    desc: "팀 단위 협업을 ‘프로젝트’ 공간으로 묶어 관리하는 기능입니다. ADMIN이 프로젝트를 생성하고 OWNER·MANAGER·MEMBER 3단계 권한 아래, 프로젝트별 전용 캘린더·QA 체크리스트·GitHub·Datadog·Vercel 웹훅 채널·멤버 관리를 제공합니다.",
    refs: "commit 65f78f7 · 265b594 · 38da517",
    shots: ["/hinest/demo-projects.webp"],
  },
  {
    title: "회의록 파일 · 링크 첨부",
    desc: "회의록 본문 JSON과 분리한 MeetingAttachment 테이블을 신설하고, 파일·링크 첨부 CRUD 라우트와 UI를 구현했습니다.",
    refs: "commit 7544231",
    shots: ["/hinest/demo-docs.webp"],
  },
  {
    title: "미리보기 모드",
    desc: "로그인 없이 데모 조직 데이터로 전 기능을 둘러보는 미리보기 모드를 도입했습니다. 플래그로 API 호출을 mock으로 단락하고 모든 페이지에 시드 데이터를 채웠습니다.",
    refs: "PR #119–#134",
    shots: ["/hinest/demo-home.webp"],
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
    category: "운영 · 비용",
    title: "사용자 수에 비해 비대했던 AWS 청구서",
    ref: {
      label: "PR #138",
      url: "https://github.com/efface-studio/HiNest-Client/pull/138",
    },
    file: ".github/workflows/cost-log-retention.yml",
    problem:
      "CloudWatch 로그 그룹 6개가 Never expire 기본값으로 무한 누적 중이었고, 클라이언트 SSE fallback 폴링이 hidden 탭에서도 계속 돌아 Fargate task가 idle에 못 들어갔습니다.",
    solution:
      "GitHub Actions OIDC + 주간 cron으로 로그 retention(일반 30일·일회성 7일)을 자동 표준화하고, 헬스체크·SSE 핸드셰이크의 access log를 핫패스에서 스킵했습니다. 클라이언트 폴링 4곳은 document.visibilityState로 게이팅해 hidden 탭에서 정지시켰습니다. 후속 PR #139로 Fargate 진단·다운사이즈(health 체크 + 자동 롤백) / ECR 라이프사이클 / VPC 비용 감사 워크플로우 4개를 추가해 운영을 도구화했습니다.",
    result:
      "RDS가 청구의 압도적 비중이라 HiNest 단독 절대 금액 대신 메커니즘별로 측정했습니다. 핫 엔드포인트 폴링 RPS가 탭당 40~75% 감소하고 백그라운드 탭은 0으로 떨어졌으며, 인메모리 로그 버퍼 −80%로 Fargate 다운사이즈(0.5→0.25 vCPU)의 메모리 헤드룸을 확보했습니다. 변경 워크플로우는 health 체크 + 자동 롤백, 진단 워크플로우는 read-only 권한으로 안전성을 보강했습니다.",
    code: [
      {
        lang: "ts",
        caption: "탭 가시성으로 폴링 게이팅 — hidden에선 정지",
        lines: `// 복귀 시 즉시 1회 동기화 + 인터벌 재무장 — 사용자 체감 0
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
        caption: "핫패스 access log 스킵 — 2xx만, 장애 라인은 보존",
        lines: `const SKIP = new Set(["/api/health", "/api/notification/stream"]);
res.on("finish", () => {
  // 4xx/5xx는 그대로 남겨 장애 진단 가능성 보존
  if (SKIP.has(req.path) && res.statusCode < 400) return;
  pushHttpLog(\`\${req.method} \${scrubUrl(url)} \${res.statusCode} \${dur}ms\`);
});`,
      },
    ],
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
    link: "github.com/Team-MindWay",
    desc: "30명 이상 규모의 전공 동아리를 부장으로 이끌며 팀 규모를 200% 확대했습니다. 매주 QA로 서비스 품질을 개선하고 자율적인 협업 문화를 정착시켰습니다.",
  },
  {
    group: "동아리",
    name: "학교기업 — 교육청 외주 동아리",
    role: "iOS Developer",
    period: "2024.06 — 2025.05",
    link: "github.com/school-of-company",
    desc: "광주광역시 교육청의 외주로 운영되는 학교 내부 스타트업 동아리. 박람회 사전 등록 서비스 ‘Expo’를 개발·운영하며 실무 수준의 프로젝트를 경험했습니다.",
  },
];

export type Showcase = {
  name: string;
  role: string;
  date: string;
  place: string;
  desc?: string;
};

export const showcases: Showcase[] = [
  {
    name: "2025 AI Expo",
    role: "GOMS 부스 운영 · 발표",
    date: "2025.05",
    place: "서울 코엑스",
    desc: "PM·iOS Leader로서 교내 최대 규모 앱 프로젝트 ‘GOMS’를 발표하고, 현장에서 받은 피드백으로 서비스 문제점을 개선했습니다.",
  },
  {
    name: "DevFest",
    role: "Washer 부스 운영",
    date: "2025.07",
    place: "교내",
    desc: "삼성 SmartThings를 활용한 기숙사 세탁기·건조기 관리·예약 서비스 ‘Washer’를 PM·iOS 개발로 직접 만들어, 교내 개발 콘테스트에서 25개 팀 중 최우수상(1위)을 수상했습니다.",
  },
  {
    name: "2024 Softwave",
    role: "Expo 부스 운영",
    date: "2024.12",
    place: "서울 코엑스",
    desc: "교육청 외주 프로젝트 ‘Expo’의 부스를 운영하며 방문자 피드백으로 서비스 문제점을 진단하고 개선해 나갔습니다.",
  },
  {
    name: "2023 Softwave",
    role: "소프트웨어 축전 참여",
    date: "2023.12",
    place: "서울 코엑스",
    desc: "국내 최대 규모 소프트웨어 축전에 참여해 타 소프트웨어마이스터고 학생과 스타트업의 서비스를 관람하고 현업 개발자와 네트워킹했습니다.",
  },
  {
    name: "2023 KWDC",
    role: "Apple 컨퍼런스 참여",
    date: "2023.07",
    place: "서울 코엑스",
    desc: "국내 Apple 개발자 커뮤니티 컨퍼런스에 참여해 Swift·iOS 최신 기술 세션과 현업 개발자들의 발표를 들으며 플랫폼 트렌드를 접했습니다.",
  },
  {
    name: "사이버 가디언즈",
    role: "정보보안 교육 프로그램 이수",
    date: "2023",
    place: "",
    desc: "한국인터넷진흥원(KISA)이 주관한 정보보안 교육 프로그램으로, 기본 개념부터 네트워크 보안·시스템 취약점 분석·모의 해킹까지 다루는 과정을 이수했습니다.",
  },
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
    v: "USLASH 비영리 법인을 공동 설립해 컨퍼런스·해커톤을 운영했고, 전공 동아리를 부장으로 이끌며 팀 규모를 200% 확대했습니다. 사람을 모으고 역할을 나눠 함께 끝까지 가는 과정을 즐깁니다.",
  },
  {
    k: "끝까지 책임지는 PM",
    v: "GOMS를 직접 기획·개발해 매주 400명 이상이 쓰는 교내 공식 서비스로 2년 넘게 운영하고 있으며, App Store 심사·배포와 버전 관리까지 직접 책임집니다.",
  },
  {
    k: "매일 성장하는 개발자",
    v: "남들이 주저하는 도전을 먼저 택하고, 낯선 기술 앞에서도 망설이기보다 부딪혀 봅니다. 어제보다 한 걸음 더 나아가는 과정 자체를 즐깁니다.",
  },
];

export const aboutMe = {
  strength: {
    label: "새로운 도전을 즐기는 성격",
    body: "불편함을 발견하면 ‘이걸 서비스로 만들면 어떨까?’라는 질문을 놓치지 않고 구체적인 기획으로 발전시킵니다. 팀원을 직접 모집하고 역할을 분배해 개발부터 App Store 배포·운영까지 끝까지 주도하며, 낯선 기술이나 새로운 도전 앞에서도 망설이기보다 일단 부딪혀 보는 편입니다. 실제로 기숙사 외출 관리를 QR 기반으로 바꾼 GOMS를 직접 만들어 매주 400명 이상이 쓰는 교내 공식 서비스로 2년 넘게 운영해 왔고, 비영리 법인 USLASH를 공동 설립해 컨퍼런스·해커톤을 주최했으며, 전공 동아리를 부장으로 이끌며 팀 규모를 두 배로 키웠습니다. 이렇게 만든 서비스는 외부 공모전과 Softwave·AI Expo 등에서 실제 사용자에게 선보이고, 현장에서 모은 피드백을 다음 개선으로 이어 왔습니다. 지금은 ‘efface’라는 이름의 스튜디오를 직접 운영하며, 기획부터 개발·배포까지 한 사람이 끝까지 책임질 때 나오는 완성도를 추구하고 있습니다.",
  },
  weakness: {
    label: "논리 중심의 성향",
    body: "문제를 논리와 현실성 우선으로 접근해 체계적으로 분석하는 강점이 있지만, 결론으로 빠르게 향하다 보니 때로 팀원의 감정과 입장을 충분히 살피지 못할 때가 있었습니다. 효율적인 판단이라고 생각한 것이 누군가에게는 부담이 될 수 있다는 점을 뒤늦게 깨닫기도 했습니다. 이를 보완하기 위해 최근에는 회의·피드백 과정에서 결론을 먼저 꺼내기보다 팀원의 생각과 감정을 먼저 확인하고 존중하려 하며, 진행 상황을 자주 공유해 서로의 기대를 맞춰 가고 있습니다. 문제를 빠르게 푸는 것만큼 팀이 같은 방향을 바라보게 만드는 일도 중요하다는 것을 배우며, 논리와 정서적 배려 사이의 균형을 맞추려 노력하고 있습니다.",
  },
};
