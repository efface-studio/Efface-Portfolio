import Controls from "@/components/Controls";
import PdfViewer from "@/components/PdfViewer";
import { ui } from "@/lib/ui";

export default async function BusinessPlanPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const l = lang === "en" ? "en" : "ko";
  const t = ui[l];
  const pdf = `/docs/efface-business-plan-${l}.pdf`;

  return (
    <main className="stage flex flex-col items-center px-6 pb-28 pt-14">
      <div className="w-full max-w-[1000px]">
        <header className="mb-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
            efface — Venture
          </p>
          <h1 className="mt-2 text-[26px] font-extrabold tracking-[-0.025em] text-fg">
            {t.planTitle}
          </h1>
          <p className="mt-1.5 text-[12px] leading-[1.7] text-muted">
            {t.planNote}
          </p>
        </header>

        <PdfViewer url={pdf} lang={l} />
      </div>
      <Controls lang={l} />
    </main>
  );
}
