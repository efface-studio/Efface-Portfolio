import VerticalDoc from "@/components/VerticalDoc";
import Controls from "@/components/Controls";
import PageScaler from "@/components/PageScaler";
import SiteAside from "@/components/SiteAside";

export default function Home() {
  return (
    <main className="stage px-8 pb-28 pt-14">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-12 lg:flex-row lg:items-start lg:gap-14">
        <SiteAside />
        <div className="min-w-0 flex-1">
          <PageScaler widthMm={210}>
            <VerticalDoc />
          </PageScaler>
        </div>
      </div>
      <Controls />
    </main>
  );
}
