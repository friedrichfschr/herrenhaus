import { ImageCarousel } from "@/components/imageCarousel";
import { title } from "@/components/primitives";
import { useZustand } from "@/zustand";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { useTheme } from "@heroui/use-theme";
import { useEffect, useRef } from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { t } from "i18next";
export default function DocsPage() {
  const sections = useRef([]);

  const { setActiveSection, theme: zustandTheme } = useZustand();
  const { theme: heroTheme } = useTheme();
  let theme;
  if (zustandTheme) theme = zustandTheme;
  else theme = heroTheme;
  const handleScroll = () => {
    const pageYOffset = window.pageYOffset;
    let newActiveSection = null;

    sections.current.forEach((section) => {
      //@ts-ignore
      const sectionOffsetTop = section.offsetTop - 500;
      //@ts-ignore
      const sectionHeight = section.offsetHeight;

      if (
        pageYOffset >= sectionOffsetTop &&
        pageYOffset < sectionOffsetTop + sectionHeight
      ) {
        //@ts-ignore
        newActiveSection = section.id;
      }
    });
    //@ts-ignore
    if (newActiveSection != null) {
      if (newActiveSection == "/") setActiveSection(newActiveSection);
      else setActiveSection("/#" + newActiveSection);
    }
  };

  useEffect(() => {
    //@ts-ignore
    sections.current = document.querySelectorAll("[data-section]");
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-130px)] pt-10 pb-120">
      <div id="/" data-section className="w-full pt-10">
        <ImageCarousel />

        <div className="flex flex-col items-center text-center my-10  max-w-5xl mx-auto">
          <h1 className={title() + "text-center font-serif italic "}>
            Herzlich Willkommen bei Ihrem Partner für stilvolle Männermode!
          </h1>
          Das Herrenhaus Fischer wurde 1998 von Bernhard und Diana Fischer in
          Brakel gegründet und steht seither für hochwertige Mode für Männer –
          von der Jeans bis zum Mantel, vom Hemd bis zum festlichen Anzug. Mit
          Leidenschaft für Qualität, Passform und persönliche Beratung hat sich
          das Haus zu einem führenden Spezialisten für Bräutigam-Mode
          entwickelt. Heute vertrauen Kunden aus einem weiten Einzugsgebiet
          zwischen Dortmund, Hannover, Kassel und darüber hinaus auf die
          Kompetenz und den Service des Herrenhaus Fischer.
        </div>
      </div>
      <div id="festlich" data-section className=" pt-30 w-full max-w-5xl ">
        <div className=" text-center justify-center">
          <h1 className={title() + "text-center font-serif italic"}>
            {t("routes.Festliche Herrenmode")}
          </h1>
        </div>
        <Accordion
          variant="bordered"
          defaultExpandedKeys={["1"]}
          className="mx-1 w-[98%] "
        >
          <AccordionItem
            key="1"
            aria-label="Für den Bräutigam und seine Gäste"
            title="Für den Bräutigam und seine Gäste"
          >
            <div className="max-w-lg md:max-w-3xl text-center mx-auto text-lg px-4 pt-3">
              <p className=" ">
                Liebe Freunde und Freundinnen von Festlichkeit, Stil und Mode,
              </p>
              <p>
                seit 1998 bin ich der Herrenausstatter für den Bräutigam und
                seine Gäste. Die größer werdenden Wünsche nach Individualität,
                Klasse und Nachhaltigkeit sind eine ordentliche Herausforderung.
                Umso mehr Freude bereitet es mir, Kunden auf dem Weg zu „Ihrem
                wichtigsten Tag“ ein kleines Wegstück zu begleiten. Ich freue
                mich auf Euch!
              </p>
              <p className="sm:text-left mt-5  text-center mr-1 sm:ml-20 md:ml-35 lg:ml-27 xl:ml-30 italic font-serif">
                Herzlichst
              </p>
            </div>
            <div
              className="flex  justify-center gap-5 mb-10"
              style={{ marginTop: "-40px" }}
            >
              {theme == "dark" ? (
                <Image
                  width={400}
                  className="w-80 sm:100 md:140 lg:w-200 mt-10 sm:mt-15"
                  src={"/UnterschriftDark.png"}
                />
              ) : (
                <Image
                  width={400}
                  className="w-80 sm:100 md:140 lg:w-200 mt-10 sm:mt-15"
                  src={"/Unterschrift.png"}
                />
              )}
              <Image
                className="lg:w-50 lg:h-50 md:w-40 md:h-40 sm:w-30 sm:h-30 hidden sm:flex  rounded-full "
                style={{ objectFit: "cover" }}
                src={"/BernhardFotoGruß.jpg"}
              />
            </div>
            <div className="grid-cols-2 grid gap-2">
              <Button
                className="font-semibold text-lg  whitespace-normal h-auto"
                variant="bordered"
                as={Link}
                href="/bräutigam"
                onPress={() => window.scrollTo({ top: 0 })}
              >
                Für den Bräutigam
              </Button>
              <Button
                className="font-semibold text-lg flex-1  whitespace-normal h-auto"
                variant="bordered"
                href="/trauzeuge"
                as={Link}
                onPress={() => window.scrollTo({ top: 0 })}
              >
                Der Trauzeuge
              </Button>
              <Button
                variant="bordered"
                as={Link}
                href="familie"
                onPress={() => window.scrollTo({ top: 0 })}
                className="font-semibold text-lg flex-1  whitespace-normal h-auto"
              >
                Gäste & Familie des Brautpaares
              </Button>
              <Button
                variant="bordered"
                as={Link}
                href="tipps"
                onPress={() => window.scrollTo({ top: 0 })}
                className="font-semibold text-lg  whitespace-normal h-auto"
              >
                Tipps für den Bräutigam
              </Button>
            </div>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Unsere Marken"
            title="Unsere Marken"
          >
            <ul>
              <li>Wilvorst</li>
              <li>Roberto Vicenti</li>
              <li>Kastell Wedding</li>
              <li>Digel Ceremony</li>
              <li>Tziacco</li>
              <li>Una</li>
              <li>Olymp</li>
              <li>Eterna</li>
              <li>Lindenmann</li>
              <li>Abrazi</li>
              <li>Lloyd</li>
              <li>Digel Schuhe</li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Fotoshootings"
            title="Fotoshootings"
          >
            <ul>
              <li>Gut Holzhausen</li>
              <li>Exterhof</li>
              <li>Kloster Bredelaer</li>
              <li>Hof Frien</li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Von unseren Kunden"
            title="Von unseren Kunden"
          ></AccordionItem>
        </Accordion>
        <div className="flex flex-row flex-wrap  justify-center gap-5 mt-10 mb-10 px-4"></div>
      </div>
      <div
        id="männermode"
        data-section
        className=" max-w-2xl text-center justify-center  pt-30
         "
      >
        <h1 className={title() + "text-center font-serif italic"}>
          {t("routes.Männermode")}
        </h1>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          suscipit placeat perspiciatis, eveniet accusamus, ut ullam, cumque
          atque aut ipsam id magnam tenetur beatae. Iusto nulla neque facilis
          veniam adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Fugiat suscipit placeat perspiciatis, eveniet accusamus, ut
          ullam, cumque atque aut ipsam id magnam tenetur beatae. Iusto nulla
          neque facilis veniam adipisci! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Fugiat suscipit placeat perspiciatis, eveniet
          accusamus, ut ullam, cumque atque aut ipsam id magnam tenetur beatae.
          Iusto nulla neque facilis veniam adipisci! Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Fugiat suscipit placeat perspiciatis,
          eveniet accusamus, ut ullam, cumque atque aut ipsam id magnam tenetur
          beatae. Iusto nulla neque facilis veniam adipisci! Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Fugiat suscipit placeat
          perspiciatis, eveniet accusamus, ut ullam, cumque atque aut ipsam id
          magnam tenetur beatae. Iusto nulla neque facilis veniam adipisci!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          suscipit placeat perspiciatis, eveniet accusamus, ut ullam, cumque
          atque aut ipsam id magnam tenetur beatae. Iusto nulla neque facilis
          veniam adipisci!
        </div>
      </div>
      <div
        id="termine"
        data-section
        className=" max-w-2xl text-center  justify-center   pt-30 
         "
      >
        <h1 className={title() + "text-center font-serif italic"}>
          {" "}
          {t("routes.Termine")}
        </h1>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          suscipit placeat perspiciatis, eveniet accusamus, ut ullam, cumque
          atque aut ipsam id magnam tenetur beatae. Iusto nulla neque facilis
          veniam adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Fugiat suscipit placeat perspiciatis, eveniet accusamus, ut
          ullam, cumque atque aut ipsam id magnam tenetur beatae. Iusto nulla
          neque facilis veniam adipisci! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Fugiat suscipit placeat perspiciatis, eveniet
          accusamus, ut ullam, cumque atque aut ipsam id magnam tenetur beatae.
          Iusto nulla neque facilis veniam adipisci! Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Fugiat suscipit placeat perspiciatis,
          eveniet accusamus, ut ullam, cumque atque aut ipsam id magnam tenetur
          beatae. Iusto nulla neque facilis veniam adipisci! Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Fugiat suscipit placeat
          perspiciatis, eveniet accusamus, ut ullam, cumque atque aut ipsam id
          magnam tenetur beatae. Iusto nulla neque facilis veniam adipisci!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          suscipit placeat perspiciatis, eveniet accusamus, ut ullam, cumque
          atque aut ipsam id magnam tenetur beatae. Iusto nulla neque facilis
          veniam adipisci!
        </div>
      </div>
      <div
        id="klara"
        data-section
        className=" max-w-2xl text-center  justify-center   pt-30 
         "
      >
        <h1 className={title() + "text-center font-serif italic"}>
          {t("routes.Klara Fischer")}
        </h1>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          suscipit placeat perspiciatis, eveniet accusamus, ut ullam, cumque
          atque aut ipsam id magnam tenetur beatae. Iusto nulla neque facilis
          veniam adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Fugiat suscipit placeat perspiciatis, eveniet accusamus, ut
          ullam, cumque atque aut ipsam id magnam tenetur beatae. Iusto nulla
          neque facilis veniam adipisci! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Fugiat suscipit placeat perspiciatis, eveniet
          accusamus, ut ullam, cumque atque aut ipsam id magnam tenetur beatae.
          Iusto nulla neque facilis veniam adipisci! Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Fugiat suscipit placeat perspiciatis,
          eveniet accusamus, ut ullam, cumque atque aut ipsam id magnam tenetur
          beatae. Iusto nulla neque facilis veniam adipisci! Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Fugiat suscipit placeat
          perspiciatis, eveniet accusamus, ut ullam, cumque atque aut ipsam id
          magnam tenetur beatae. Iusto nulla neque facilis veniam adipisci!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          suscipit placeat perspiciatis, eveniet accusamus, ut ullam, cumque
          atque aut ipsam id magnam tenetur beatae. Iusto nulla neque facilis
          veniam adipisci!
        </div>
      </div>
      <div
        id="aktuelles"
        data-section
        className=" max-w-2xl text-center  justify-center   pt-30 
         "
      >
        <h1 className={title() + "text-center font-serif italic"}>
          {t("routes.Aktuelles")}
        </h1>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          suscipit placeat perspiciatis, eveniet accusamus, ut ullam, cumque
          atque aut ipsam id magnam tenetur beatae. Iusto nulla neque facilis
          veniam adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Fugiat suscipit placeat perspiciatis, eveniet accusamus, ut
          ullam, cumque atque aut ipsam id magnam tenetur beatae. Iusto nulla
          neque facilis veniam adipisci! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Fugiat suscipit placeat perspiciatis, eveniet
          accusamus, ut ullam, cumque atque aut ipsam id magnam tenetur beatae.
          Iusto nulla neque facilis veniam adipisci! Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Fugiat suscipit placeat perspiciatis,
          eveniet accusamus, ut ullam, cumque atque aut ipsam id magnam tenetur
          beatae. Iusto nulla neque facilis veniam adipisci! Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Fugiat suscipit placeat
          perspiciatis, eveniet accusamus, ut ullam, cumque atque aut ipsam id
          magnam tenetur beatae. Iusto nulla neque facilis veniam adipisci!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          suscipit placeat perspiciatis, eveniet accusamus, ut ullam, cumque
          atque aut ipsam id magnam tenetur beatae. Iusto nulla neque facilis
          veniam adipisci!
        </div>
      </div>
      <div
        id="kontakt"
        data-section
        className=" max-w-2xl text-center  justify-center   pt-30 
         "
      >
        <h1 className={title() + "text-center font-serif italic"}>
          {t("routes.Kontakt")}
        </h1>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          suscipit placeat perspiciatis, eveniet accusamus, ut ullam, cumque
          atque aut ipsam id magnam tenetur beatae. Iusto nulla neque facilis
          veniam adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Fugiat suscipit placeat perspiciatis, eveniet accusamus, ut
          ullam, cumque atque aut ipsam id magnam tenetur beatae. Iusto nulla
          neque facilis veniam adipisci! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Fugiat suscipit placeat perspiciatis, eveniet
          accusamus, ut ullam, cumque atque aut ipsam id magnam tenetur beatae.
          Iusto nulla neque facilis veniam adipisci! Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Fugiat suscipit placeat perspiciatis,
          eveniet accusamus, ut ullam, cumque atque aut ipsam id magnam tenetur
          beatae. Iusto nulla neque facilis veniam adipisci! Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Fugiat suscipit placeat
          perspiciatis, eveniet accusamus, ut ullam, cumque atque aut ipsam id
          magnam tenetur beatae. Iusto nulla neque facilis veniam adipisci!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          suscipit placeat perspiciatis, eveniet accusamus, ut ullam, cumque
          atque aut ipsam id magnam tenetur beatae. Iusto nulla neque facilis
          veniam adipisci!
        </div>
      </div>
    </section>
  );
}
