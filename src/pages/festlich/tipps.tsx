import { title } from "@/components/primitives";
import { BackButton } from "./fürdenBräutigam";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { useZustand } from "@/zustand";

export default function TippsPage() {
  const { setActiveSection } = useZustand();
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full">
      <div className="text-center justify-center mt-12  relative w-full flex-col flex max-w-xl md:max-w-3xl">
        <Button
          variant="ghost"
          className="sm:absolute sm:left-5 sm:top-1 max-w-25 mb-3 sm:mb-0 sm:ml-0 ml-5 rounded-md"
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
        <h1 className={title()}>Tipps für den Bräutigam</h1>
      </div>
      <div className="max-w-xl md:max-w-3xl text-justify mx-auto  justify-center items-center text-lg px-4">
        <div className="mt-5">
          Das Outfit für den „Schönsten Tag des Lebens“ auszusuchen sollte
          Freude bereiten und nicht stressen!
        </div>
        <ul className="list-disc ml-5 mt-4 flex flex-col gap-3">
          <li>
            Rechtzeitig losgehen, falls eine Anfertigung nötig ist. Diese dauert
            ca. 6-16 Wochen. Um alle Möglichkeiten nutzen zu können, empfehlen
            wir eine Terminvereinbarung circa 6 Monate vor der Hochzeit.
          </li>
          <li>
            Eine Terminvereinbarung ist unbedingt nötig. So können telefonisch
            auch schon ein paar Fragen geklärt werden.
          </li>
          <li>Überlegt Euch ein Budget und sprecht auch darüber.</li>
          <li>
            Lasst Euch nicht zu viele Vorgaben machen. Natürlich sind die
            Wünsche der Braut wichtig, aber in erster Linie müsst auch Ihr Euch
            wohlfühlen.
          </li>
          <li>
            Auf Hochzeitsmessen oder im Internet kann man sich schon etwas mit
            dem Thema Hochzeitsanzug auseinandersetzen. Prospekte, Zeitschriften
            und Internetseiten zeigen immer nur die halbe Wahrheit. Probieren
            Sie unterschiedliche Styles an sich selbst aus, um sicher zu sein,
            welches der Richtige für Sie ist.
          </li>
          <li>
            Bringen Sie gerne Berater zum Termin mit, z.B. Eltern, Braut oder
            Freunde, aber denken Sie daran, dass zu viele Berater auch
            verunsichern können. (Bringen Sie möglichst nicht Mutter und
            Schwiegermutter gleichzeitig als Berater mit. Es sei denn, die
            beiden sind beste Freundinnen…)
          </li>
          <li>
            Welche Stilrichtung hat das Brautkleid? Ist es weiß oder
            elfenbeinfarben? Gerne kann die Braut auch ein Bild ihres Kleides
            übermitteln. Dann können wir im Feintuning gezielter beraten.
          </li>
        </ul>
      </div>
    </section>
  );
}
