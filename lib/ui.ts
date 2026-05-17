/** UI chrome strings for the bilingual (KO/EN) portfolio. */

export type Lang = "ko" | "en";

export type UiStrings = {
  // floating controls
  docLabel: string;
  docSub: string;
  deckLabel: string;
  deckSub: string;
  pdf: string;
  printHint: string;
  // doc section titles
  careerTitle: string;
  stackTitle: string;
  awardsTitle: string;
  otherProjectsTitle: string;
  aboutTitle: string;
  ventureTitle: string;
  exhibitionsTitle: string;
  // contact
  contactEmail: string;
  contactPhone: string;
  contactAppStore: string;
  viewAppStore: string;
  // badges / meta labels
  role: string;
  period: string;
  team: string;
  // project blocks
  keyContributions: string;
  keyFeatures: string;
  troubleshooting: string;
  problem: string;
  solution: string;
  result: string;
  // engineering deep-dive
  gomsTroubleIntro: string;
  hinestTroubleIntro: string;
  // about
  strengthTag: string;
  weaknessTag: string;
  // studio / closing
  studioBadge: string;
  studioMeta: string;
  closingLine: string;
  // deck slide titles
  deckAboutTitle: string;
  deckGomsTitle: string;
  deckHinestTitle: string;
  deckTroubleTitle: string;
  deckOtherTitle: string;
  deckAwardsTitle: string;
  deckActivityTitle: string;
  deckStudioTitle: string;
  deckContactTitle: string;
  // deck misc
  deckCoverNote: string;
  coreStrengths: string;
  viewDeployedApp: string;
  contactLead: string;
  // business-plan page
  planLabel: string;
  planTitle: string;
  planNote: string;
};

export const ui: Record<Lang, UiStrings> = {
  ko: {
    docLabel: "세로",
    docSub: "문서",
    deckLabel: "가로",
    deckSub: "덱",
    pdf: "PDF 다운로드",
    printHint: "인쇄 대화상자에서 ‘PDF로 저장’(대상: PDF로 저장)을 선택하세요",
    careerTitle: "경력 · 학력",
    stackTitle: "기술 스택",
    awardsTitle: "수상 내역",
    otherProjectsTitle: "그 외 프로젝트",
    aboutTitle: "자기소개",
    ventureTitle: "활동 · 리더십",
    exhibitionsTitle: "부스 · 행사 · 교육",
    contactEmail: "이메일",
    contactPhone: "휴대폰",
    contactAppStore: "앱스토어",
    viewAppStore: "배포 앱 보기 ↗",
    role: "역할",
    period: "기간",
    team: "팀",
    keyContributions: "주요 기여",
    keyFeatures: "핵심 기능",
    troubleshooting: "트러블슈팅",
    problem: "문제",
    solution: "해결",
    result: "결과",
    gomsTroubleIntro:
      "운영 중인 iOS 앱에서 마주친 성능·인증·예외 처리 문제를 직접 진단하고 리팩토링한 기록입니다.",
    hinestTroubleIntro:
      "운영 중 마주친 동시성·정합성·보안·성능 문제를 실제 PR·커밋으로 해결한 기록입니다. 코드는 핵심 부분만 발췌했습니다.",
    strengthTag: "강점",
    weaknessTag: "보완점",
    studioBadge: "운영 스튜디오",
    studioMeta: "2026 — 운영 중",
    closingLine:
      "기획부터 개발·배포까지, 팀과 협업해 문제를 해결하는 모습을 보여드리겠습니다.",
    deckAboutTitle: "불편을 서비스로 만드는 사람",
    deckGomsTitle: "GOMS — 외출제 관리 서비스",
    deckHinestTitle: "HiNest — 사내 워크플레이스 플랫폼",
    deckTroubleTitle: "트러블슈팅",
    deckOtherTitle: "그 외 프로젝트",
    deckAwardsTitle: "수상 내역",
    deckActivityTitle: "활동과 리더십",
    deckStudioTitle: "운영 중인 웹 스튜디오",
    deckContactTitle: "함께 만들고 싶습니다",
    deckCoverNote: "세로(문서) · 가로(덱) 버전 제공",
    coreStrengths: "주력 역량",
    viewDeployedApp: "배포된 앱 보기 ↗",
    contactLead: "자세한 이야기는 인터뷰에서 직접 전하고 싶습니다.",
    planLabel: "계획서",
    planTitle: "사업 계획서",
    planNote: "현재 준비 중인 사업의 계획서입니다.",
  },
  en: {
    docLabel: "Doc",
    docSub: "A4",
    deckLabel: "Deck",
    deckSub: "16:9",
    pdf: "Download PDF",
    printHint: "In the print dialog, choose ‘Save as PDF’ as the destination",
    careerTitle: "Career & Education",
    stackTitle: "Tech Stack",
    awardsTitle: "Awards & Honors",
    otherProjectsTitle: "Other Projects",
    aboutTitle: "About Me",
    ventureTitle: "Venture & Leadership",
    exhibitionsTitle: "Exhibitions & Events",
    contactEmail: "Email",
    contactPhone: "Phone",
    contactAppStore: "App Store",
    viewAppStore: "View on App Store ↗",
    role: "Role",
    period: "Period",
    team: "Team",
    keyContributions: "Key Contributions",
    keyFeatures: "Key Features",
    troubleshooting: "Troubleshooting",
    problem: "Problem",
    solution: "Solution",
    result: "Result",
    gomsTroubleIntro:
      "A record of the performance, authentication, and exception-handling issues I diagnosed and refactored myself in a live iOS app.",
    hinestTroubleIntro:
      "A record of concurrency, data-integrity, security, and performance issues resolved through real PRs and commits. Only the essential parts of the code are excerpted.",
    strengthTag: "Strength",
    weaknessTag: "Growth Area",
    studioBadge: "Studio",
    studioMeta: "2026 — Ongoing",
    closingLine:
      "From planning to development and release, I’ll show you how I solve problems by collaborating with a team.",
    deckAboutTitle: "Turning friction into services",
    deckGomsTitle: "GOMS — Off-Campus Pass Management",
    deckHinestTitle: "HiNest — Internal Workplace Platform",
    deckTroubleTitle: "Troubleshooting",
    deckOtherTitle: "Other Projects",
    deckAwardsTitle: "Awards & Honors",
    deckActivityTitle: "Activity & Leadership",
    deckStudioTitle: "A Web Studio I Run",
    deckContactTitle: "Let’s build together",
    deckCoverNote: "Document & deck versions available",
    coreStrengths: "Core Strengths",
    viewDeployedApp: "View deployed app ↗",
    contactLead: "I’d love to share the details with you in an interview.",
    planLabel: "Plan",
    planTitle: "Pitch Deck",
    planNote: "The plan for a business I’m currently preparing.",
  },
};
