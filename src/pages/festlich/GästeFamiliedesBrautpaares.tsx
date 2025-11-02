import { subtitle, title } from "@/components/primitives";
import { BackButton } from "./fürdenBräutigam";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { useZustand } from "@/zustand";

export default function GästeFamiliePage() {
  const { setActiveSection } = useZustand();
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full">
      <div className="text-center justify-center mt-12  relative w-full flex-col flex max-w-xl md:max-w-3xl">
        <Button
          variant="ghost"
          className=" max-w-25 mb-5  ml-5 rounded-md"
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
            });
          }}
        >
          {"<-"}
        </Button>
        <h1 className={title()}>Gäste & Familie des Brautpaares</h1>
      </div>
      <div className="max-w-xl md:max-w-3xl text-justify mx-auto  justify-center items-center text-lg px-4">
        <div className={"font-bold text-2xl mt-3 mb-3 text-left"}>
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

        <div className={"font-bold text-2xl mt-10 mb-3 text-left"}>
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
