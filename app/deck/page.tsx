import Deck from "@/components/Deck";
import Controls from "@/components/Controls";
import PageScaler from "@/components/PageScaler";

export default function DeckPage() {
  return (
    <main className="stage flex justify-center px-6 pt-12 pb-28">
      <PageScaler widthMm={297}>
        <Deck />
      </PageScaler>
      <Controls />
    </main>
  );
}
