import { subtitle, title } from "@/components/primitives";
import { BackButton } from "./fürdenBräutigam";
import { useZustand } from "@/zustand";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function TrauzeugePage() {
  const { setActiveSection } = useZustand();
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full">
      <div className="text-center justify-center mt-12  relative w-full flex-col flex max-w-xl md:max-w-3xl">
        <Button
          variant="ghost"
          className=" max-w-25 mb-5  ml-5"
          size="md"
          as={Link}
          href="/#festlich"
          onPress={() => {
            setActiveSection("/#festlich");
            setTimeout(() => {
              document.getElementById("festlich")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "start",
              });
            }, 1);
          }}
        >
          {"<-"}
        </Button>
        <h1 className={title()}>Der Trauzeuge</h1>
      </div>
      <div className="max-w-lg md:max-w-3xl text-justify mx-auto  justify-center items-center text-lg px-4">
        <div className={"font-bold text-2xl mt-10 mb-3 text-left"}>Styles</div>
        <div>
          Natürlich wird der Trauzeuge sich ebenfalls elegant kleiden. Jedoch
          immer etwas dezenter als der Bräutigam. Es gibt hier keine besondere
          gesellschaftliche Erwartungshaltung. Allerdings wird das Brautpaar
          eventuell Wünsche äußern.
        </div>
        <div className={"font-bold text-2xl mt-10 mb-3 text-left"}>
          „Best man“ – und das sieht man auch!
        </div>
        <div>
          Ein beliebter Trend bei dem Trauzeugen ist in der dezenten
          Ausgestaltung der Accessoires zu sehen, die perfekt auf das Outfit des
          Bräutigams abgestimmt werden. So kann der Trauzeuge seine
          Verbundenheit z.B. dadurch ausdrücken, dass seine Schleife mit
          Hosenträgern kombiniert im selben Design gefertigt sind wie die Weste
          mit Plastron des Bräutigams.
        </div>
      </div>
    </section>
  );
}
