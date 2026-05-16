/** Left-column note (web view only) — how this portfolio itself was built. */
export default function SiteAside() {
  const built = [
    "하나의 데이터로 세로(문서)·가로(덱) 두 레이아웃을 렌더링",
    "print CSS로 화면 그대로 A4 PDF가 출력되도록 페이지를 고정",
    "비공개 열람을 위한 비밀번호 게이트를 서버에서 검증",
  ];

  return (
    <aside className="no-print w-full shrink-0 text-fg lg:sticky lg:top-14 lg:w-[302px]">
      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
        About this page
      </p>
      <h2 className="mt-3 text-[21px] font-extrabold leading-[1.32] tracking-[-0.02em]">
        이력서까지 코드로 만들었습니다
      </h2>

      <p className="mt-4 text-[11.5px] leading-[1.85] text-muted">
        이력서는 보통 문서 도구나 템플릿으로 만듭니다. 하지만 iOS·프론트엔드
        개발자의 이력서라면, 그 자체가 개발의 결과물이어야 한다고 생각했습니다.
      </p>
      <p className="mt-2.5 text-[11.5px] leading-[1.85] text-muted">
        그래서 이 페이지를 직접 설계하고 구현했습니다.
      </p>

      <ul className="mt-4 space-y-2">
        {built.map((t) => (
          <li
            key={t}
            className="flex gap-2.5 text-[11px] leading-[1.7] text-muted"
          >
            <span className="mt-[7px] h-px w-2.5 shrink-0 bg-accent" />
            <span>{t}</span>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-[11.5px] leading-[1.85] text-muted">
        내용을 채우는 일만큼, 그 내용을 담을 그릇을 만드는 과정도 보여드리고
        싶었습니다.
      </p>

      <p className="mt-5 border-t border-line pt-3 font-mono text-[9.5px] tracking-wide text-dim">
        Next.js · TypeScript · Tailwind CSS
      </p>
    </aside>
  );
}
