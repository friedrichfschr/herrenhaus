import { subtitle, title } from "@/components/primitives";

export default function SpektakulärPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Spektakulär</h1>
      </div>
      <div className="max-w-lg md:max-w-3xl text-justify mx-auto  justify-center items-center text-lg px-4">
        <div>
          Der Anzug für die Hochzeit soll etwas ganz Besonderes sein. Der
          Bräutigam steht gemeinsam mit der Braut auch optisch im Mittelpunkt.
          Das erreichen wir mit ausgefallenen Styles, mit Trachten- oder
          Militaryelementen und Anleihen an modischen Stilen längst vergangener
          Epochen. Hier ist der Phantasie kaum eine Grenze gesetzt und wir
          fertigen gerne auch individuelle Outfits an.
        </div>
        <div className={"font-bold text-2xl mt-10 mb-5"}>
          Vintage? Boho? Retro?
        </div>
        <div>
          Hochzeiten werden mittlerweile gerne unter bestimmten Motto-Aspekten
          zelebriert. Der glamouröse Stil der „Goldenen Zwanziger“, der coole
          Style der „Sixties“, ganz klassisch oder die lässige Scheunenfete
          stellen natürlich eine Herausforderung auch für das Outfit des
          Brautpaares dar. Wie auch immer das Motto genannt wird, wir bieten
          verschiedene Outfits zu den entsprechenden Themen an.
        </div>
        <div className={"font-bold text-2xl mt-10 mb-5"}>Klassiker</div>
        <div>
          Frack, Cut, Smoking und Co finden auch immer wieder Fans. Der
          klassische Hochzeitsanzug beim Adel, in England und in
          Hollywood-Blockbustern ist definitiv der graue Cut mit Stresemannhose.
          Mittlerweile als viel beliebtere Alternative hat sich der junge
          Smoking etabliert, gerne auch mal in Farbe, aber immer cool.
        </div>
        <div className={"font-bold text-2xl mt-10 mb-5"}>Kosten?</div>
        <div>
          Im Durchschnitt gibt ein Bräutigam etwa 1250,- € für ein komplettes
          Outfit aus. Schöne Outfits haben Ihren Preis. Wir sind uns jedoch
          sicher, dass für die meisten Geldbeutel das passende Outfit zu finden
          ist. Unsere „Menüs“ sollen hier ein Richtwert sein, damit Sie Ihr
          Budget passend planen können:
        </div>
        <div className="ml-5">
          <div className={"font-semibold  italic text-lg mt-4 mb-2"}>
            Gut und günstig.
          </div>
          <div>
            Ein komplettes Outfit könnte z.B. so oder so ähnlich aussehen:
            Eleganter Anzug, schickes Cityhemd, Krawatte komplett ab 400,- €
          </div>

          <div className={"font-semibold  italic text-lg mt-4 mb-2"}>
            Bezahlbar elegant.
          </div>
          <div>
            Festlicher Anzug, Galahemd und Schleife mit Ziertuch ab 600,- €
          </div>
          <div className={"font-semibold italic  text-lg mt-4 mb-2"}>
            Wertig komplett.
          </div>
          <div>
            Festlicher Anzug mit Schmuckweste, Plastron oder Schleife und
            Ziertuch, Galahemd, Manschettenknöpfe zusammen ab 900,- €
          </div>
          <div className={"font-semibold  italic text-lg mt-4 mb-2"}>
            Spektakulär teuer.
          </div>

          <div>
            Ausgefallener Anzug mit besonderen Elementen, passende Weste und
            Accessoires, Galahemd, Manschettenknöpfe evtl. individuell
            angefertigt kostet zusammen ungefähr 1200,- €
          </div>
        </div>

        <div className={"font-bold text-2xl mt-10 mb-5"}>Extras?</div>
        <div>
          Der Preis des Anzugs allein ist also nicht entscheidend. Denken Sie
          auch an die Kleinteile, die evtl. noch benötigt werden. Benötigen Sie
          elegante Schuhe? Ab 120,- € bis 200,- € Gürtel oder Hosenträger nicht
          vergessen, ab 30,-€ bis 100,- € Manschettenknöpfe kosten bei uns 39,95
          € bis 59,95 € und sind in verschiedenen Stilen erhältlich. Bei
          Unterhemd oder T-Shirt sind oft unschöne Kanten durch das helle
          Oberhemd zu sehen. Wir empfehlen das Tank-Top zu 19,95 € in weiß oder
          hautfarben. Der Preis vom Änderungsservice ist in der Regel abhängig
          von der erbrachten Dienstleistung. Wir nennen Ihnen schon vorher die
          Kosten und die sind dann auch fix. Eine individuelle Anfertigung
          kostet in der Regel nicht mehr als ein fertiges Kleidungsstück. Teurer
          wird es nur bei mangelnder Zeit oder besonderer Maßfertigung.
        </div>
      </div>
    </section>
  );
}
