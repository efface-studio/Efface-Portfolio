import VerticalDoc from "@/components/VerticalDoc";
import Controls from "@/components/Controls";
import PageScaler from "@/components/PageScaler";
import SiteAside from "@/components/SiteAside";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const l = lang === "en" ? "en" : "ko";

  return (
    <main className="stage px-8 pb-28 pt-14">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-12 lg:flex-row lg:items-start lg:gap-14">
        <SiteAside lang={l} />
        <div className="min-w-0 flex-1">
          <PageScaler widthMm={210}>
            <VerticalDoc lang={l} />
          </PageScaler>
        </div>
      </div>
      <Controls lang={l} />
    </main>
  );
}
