import { subtitle, title } from "@/components/primitives";

export default function RatPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Trauzeuge</h1>
      </div>
      <div className="max-w-lg md:max-w-3xl text-justify mx-auto  justify-center items-center text-lg px-4">
        <div className={"font-bold text-2xl mt-10 mb-3"}>Styles</div>
        <div>
          Natürlich wird der Trauzeuge sich ebenfalls elegant kleiden. Jedoch
          immer etwas dezenter als der Bräutigam. Es gibt hier keine besondere
          gesellschaftliche Erwartungshaltung. Allerdings wird das Brautpaar
          eventuell Wünsche äußern.
        </div>
        <div className={"font-bold text-2xl mt-10 mb-3"}>
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
      <div className="inline-block max-w-lg text-center justify-center mt-12">
        <h1 className={title()}>Gäste & Familie des Brautpaares</h1>
      </div>
      <div className="max-w-lg md:max-w-3xl text-justify mx-auto  justify-center items-center text-lg px-4">
        <div className={"font-bold text-2xl mt-3 mb-3"}>
          Dem festlichen Anlass entsprechend!
        </div>

        <div>
          Anlassmode heißt so, weil Sie einem bestimmten Anlass entsprechen
          soll. In unserer freien Gesellschaft ist das Tragen von formeller
          Kleidung mittlerweile nicht mehr Standard. Kleider machen zwar immer
          noch Leute, aber Kleidung ist in vielen Berufen kein Muss für
          Aufstiegschancen. Daher kommen wir oft eher lässig leger daher. Was
          dem Anlass entsprechend heißt, bestimmt jeder selbst für sich.
          Zumindest sollte man sich hinterfragen und berücksichtigen, dass das
          Brautpaar sich sehr viel Mühe mit der Ausgestaltung ihres wichtigen
          Tages gibt und sich wahrscheinlich wünscht, dass sich auch die Gäste
          entsprechend kleiden.
        </div>

        <div className={"font-bold text-2xl mt-10 mb-3"}>
          Lässig und trotzdem chic?
        </div>
        <div>
          Es muss auch nicht immer die formelle Anlasskleidung sein. Als Gast
          kann ich mit einer sportlicheren Chino und gepflegtem Oberteil auch
          eine gute Figur machen. Im Zweifel lohnt es sich, nachzufragen, ob ein
          bestimmter Dress-Code einzuhalten ist.
        </div>
      </div>
    </section>
  );
}
