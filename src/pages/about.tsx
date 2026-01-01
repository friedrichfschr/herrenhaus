import { title } from "@/components/primitives";
import { useZustand } from "@/zustand";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { useTheme } from "@heroui/use-theme";
import React, { useEffect, useRef } from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { t } from "i18next";
import Marken from "@/components/marken";
import { ContactForm } from "@/components/contactForm";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import { StarRating } from "react-flexible-star-rating";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  YoutubeIcon,
} from "@/components/icons";
import i18n from "@/i18n";
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
  const [language, setLanguage] = React.useState(i18n.language);

  useEffect(() => {
    i18n.on("languageChanged", (lan) => {
      console.log("language changedsdfsdf", lan);
      setLanguage(lan);
    });
  }, [i18n]);
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-130px)] px-3">
      <div id="/" data-section className="w-full sm:pt-40">
        <div className="px-3 mb-10  max-w-[1050px] mx-auto text-center text-lg  py-8 lg:pb-20 bgtinted">
          <div className="pb-3">
            <h1 className={title()}>Herrenhaus Fischer</h1>
          </div>

          <img
            src="Start/Herrenhaus_Fischer_Außenansicht.jpg "
            className=" h-[250px] mx-auto sm:hidden "
            style={{
              float: "right",
              shapeOutside: "circle(48%)",
              clipPath: "circle(45%)",
            }}
          />
          <p className=" text-justify sm:hidden block ">{t("start.intro")}</p>
          <img
            src="Start/Herrenhaus_Fischer_Außenansicht.jpg"
            className="h-90 hidden sm:block "
            style={{
              float: "left",
              shapeOutside: "circle(60% at 37% 60%)",
              clipPath: "circle(57% at 37% 60%)",
            }}
          />
          <img
            src="Start/FamilieFischer.JPG "
            className="h-90  hidden sm:block "
            style={{
              float: "right",
              // marginTop: "-30px",
              shapeOutside: "circle(61% at 75% 25%)",
              clipPath: "circle(55% at 75% 25%)",
            }}
          />
          <p className=" text-justify sm:block hidden ">{t("start.intro")}</p>
          <div id="festlichscroll"></div>
        </div>
      </div>
      <div
        id="festlich"
        data-section
        className="py-8  w-full max-w-7xl bgtinted px-1 flex flex-col justify-center items-center"
      >
        <div className=" text-center justify-center">
          <h1 className={title()}>{t("routes.Festliche Herrenmode")}</h1>
        </div>
        <Accordion
          variant="bordered"
          defaultExpandedKeys={["1"]}
          className=" mx-auto  "
        >
          <AccordionItem
            onPress={() =>
              setTimeout(
                () =>
                  document
                    .getElementById("festlichscroll")
                    ?.scrollIntoView({ behavior: "instant" }),
                0
              )
            }
            key="1"
            aria-label={t("festlich.accordion.1")}
            title={t("festlich.accordion.1")}
          >
            <div className="max-w-7xl  text-center mx-auto text-lg px-4 pt-3">
              <p className=" ">{t("festlich.intro1")}</p>
              <p>{t("festlich.intro2")}</p>
              <p className="text-left mt-5  mr-1 ml-10 sm:ml-20 md:ml-35 lg:ml-27 xl:ml-30 italic font-serif">
                {t("festlich.gruß")}
              </p>
            </div>
            <div
              className="flex  justify-center gap-5 mb-10"
              style={{ marginTop: "-40px" }}
            >
              {theme == "dark" ? (
                <Image
                  className="w-50 sm:60 md:80 lg:w-100 mt-10 sm:mt-15"
                  src={"/UnterschriftDark.png"}
                />
              ) : (
                <Image
                  className="w-50 sm:60 md:80 lg:w-100 mt-10 sm:mt-15"
                  src={"/Unterschrift.png"}
                />
              )}
              <Image
                className="lg:w-50 lg:h-50 md:w-40 md:h-40 sm:w-30 sm:h-30 h-20 w-20 sm:flex  rounded-full "
                style={{ objectFit: "cover" }}
                src={"/BernhardFotoGruß.jpg"}
              />
            </div>
            <div className="flex-col flex gap-2 ">
              <Button
                className="font-semibold text-lg  whitespace-normal h-auto min-h-12"
                variant="bordered"
                as={Link}
                href="/bräutigam"
                onPress={() => window.scrollTo({ top: 0 })}
              >
                {t("festlich.buttons.1.title")}
              </Button>
              <Button
                className="font-semibold text-lg flex-1  whitespace-normal h-auto   min-h-12"
                variant="bordered"
                href="/trauzeuge"
                as={Link}
                onPress={() => window.scrollTo({ top: 0 })}
              >
                {t("festlich.buttons.2.title")}
              </Button>
              <Button
                variant="bordered"
                as={Link}
                href="familie"
                onPress={() => window.scrollTo({ top: 0 })}
                className="font-semibold text-lg flex-1  whitespace-normal h-auto   min-h-12"
              >
                {t("festlich.buttons.3.title")}
              </Button>
              <Button
                variant="bordered"
                as={Link}
                href="tipps"
                onPress={() => window.scrollTo({ top: 0 })}
                className="font-semibold text-lg  whitespace-normal h-auto   min-h-12"
              >
                {t("festlich.buttons.4.title")}
              </Button>
            </div>
          </AccordionItem>
          <AccordionItem
            onPress={() =>
              setTimeout(
                () =>
                  document
                    .getElementById("festlichscroll")
                    ?.scrollIntoView({ behavior: "instant" }),
                0
              )
            }
            key="2"
            aria-label={t("festlich.accordion.2")}
            title={t("festlich.accordion.2")}
          >
            <Marken />
          </AccordionItem>
          <AccordionItem
            onPress={() =>
              setTimeout(
                () =>
                  document
                    .getElementById("festlichscroll")
                    ?.scrollIntoView({ behavior: "instant" }),
                0
              )
            }
            key="3"
            aria-label={t("festlich.accordion.3")}
            title={t("festlich.accordion.3")}
          >
            <ul className="flex flex-col ">
              <li className="flex justify-between items-center gap-4">
                <h1 className="text-4xl ">Gut Holzhausen</h1>
                <ul className=" pl-5 text-sm">
                  <li>
                    Organisation durch Anne Schlüter, unendlich eventdesign
                  </li>
                  <li>Brautmode von Brautsein aus Brakel</li>
                  <li>Fotografie Anna Schnabel </li>
                </ul>
              </li>
              <Card className="grid grid-cols-1 p-3 sm:grid-cols-2 gap-3 lg:grid-cols-4">
                <Image src="/ShootingHolzhausen/Pavillon_1.jpg" />
                <Image src="/ShootingHolzhausen/Pavillon_3.jpg" />
                <Image src="/ShootingHolzhausen/Pavillon_2.jpg" />
                <Image src="/ShootingHolzhausen/Pavillon_4.jpg" />
              </Card>
              <br />
              <li className="flex justify-between items-center gap-4">
                <ul className=" pl-5 text-sm">
                  <li>
                    Organisation durch Nora Hartwich und Jennifer Horstmann
                  </li>
                  <li>Brautmode von Zeit & Ewigkeit aus Lemgo</li>
                  <li>Fotografie Blickfang by Jenny</li>
                </ul>
                <h1 className="text-5xl sm:mr-10">Exterhof</h1>
              </li>
              <Card className="grid grid-cols-1 p-3 sm:grid-cols-2 gap-3 lg:grid-cols-4">
                <Image src="/ShootingExterhof/Exterhof_1.jpg" />
                <Image src="/ShootingExterhof/Exterhof_3.jpg" />
                <Image src="/ShootingExterhof/Exterhof_2.jpg" />
                <Image src="/ShootingExterhof/Exterhof_4.jpg" />
              </Card>
              <br />
              <li className="flex justify-between items-center gap-4">
                <h1 className="text-4xl">Kloster Bredelaer</h1>
                <ul className=" pl-5 text-sm">
                  <li> Organisation durch Alexander Bürks</li>
                  <li>Brautmode von Brautsein aus Brakel</li>
                  <li>Fotografie Alexander Bürks</li>
                </ul>
              </li>
              <Card className="grid grid-cols-1 p-3 sm:grid-cols-2 gap-3 lg:grid-cols-4">
                <Image src="/ShootingBredelaer/Bredelaer_1.jpg" />
                <Image src="/ShootingBredelaer/Bredelaer_3.jpg" />
                <Image src="/ShootingBredelaer/Bredelaer_2.jpg" />
                <Image src="/ShootingBredelaer/Bredelaer_4.jpg" />
              </Card>
              <br />
              <li className="flex justify-between items-center gap-4">
                <ul className=" pl-5 text-sm">
                  <li> Organisation durch Angelique</li>
                  <li>Brautmode von Traumkleid Lippe</li>
                  <li>Fotografie Jan-Niklas Schulz</li>
                </ul>
                <h1 className="text-5xl sm:mr-10">Hof Frien</h1>
              </li>
              <Card className="grid grid-cols-1 p-3 sm:grid-cols-2 gap-3 lg:grid-cols-4">
                <Image src="/ShootingHofFrien/Frien_1.jpg" />
                <Image src="/ShootingHofFrien/Frien_3.jpg" />
                <Image src="/ShootingHofFrien/Frien_2.jpg" />
                <Image src="/ShootingHofFrien/Frien_4.jpg" />
              </Card>
            </ul>
          </AccordionItem>
          <AccordionItem
            id="männermodescroll"
            onPress={() =>
              setTimeout(
                () =>
                  document
                    .getElementById("festlichscroll")
                    ?.scrollIntoView({ behavior: "instant" }),
                0
              )
            }
            key="4"
            aria-label={t("festlich.accordion.4")}
            title={t("festlich.accordion.4")}
            subtitle=""
          >
            <div className="items-center flex flex-col mb-5">
              <b className="text-3xl mb-2">4.9 </b>
              <StarRating
                starsLength={5}
                initialRating={5}
                isReadOnly={true}
                dimension={11}
              />
              <span className="text-sm opacity-70 self-end">December 2025</span>
              <Link
                className="underline text-blue-400 self-end"
                href="https://www.google.com/maps/place/Herrenhaus+Fischer/@51.7159371,9.1800269,16z/data=!4m18!1m9!3m8!1s0x47bafe9d6aaca34b:0x6cc700fd279a294e!2sHerrenhaus+Fischer!8m2!3d51.7170957!4d9.1811834!9m1!1b1!16s%2Fg%2F11bzypxvtv!3m7!1s0x47bafe9d6aaca34b:0x6cc700fd279a294e!8m2!3d51.7170957!4d9.1811834!9m1!1b1!16s%2Fg%2F11bzypxvtv!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
              >
                277 Google Reviews
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <Card className="  p-3 text-lg">
                <CardHeader className="text-xl flex-row justify-start gap-4">
                  <Avatar
                    isBordered
                    radius="full"
                    size="md"
                    src="https://lh3.googleusercontent.com/a/ACg8ocKVxdNRkH_il1no5pnH2hQZVsUOZvvZ8Y5an_r2XryOTe_FDw=w36-h36-p-rp-mo-ba3-br100"
                  />
                  <div>
                    <h1>MeZZo RoX</h1>
                    <span className="text-sm opacity-70">September 2025</span>
                  </div>
                  <StarRating
                    starsLength={5}
                    initialRating={5}
                    isReadOnly={true}
                    dimension={7}
                  />
                  <Link
                    className="ml-auto underline text-blue-400"
                    href="https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tsMGIxQlZlbTVUVDJWTFExRTBkV2cxV21GRVluYxAB!2m1!1s0x0:0x6cc700fd279a294e!3m1!1s2@1:CAIQACodChtycF9oOkl0b1BVem5TT2VLQ1E0dWg1WmFEYnc%7C0cjhXAUSFQC%7C"
                  >
                    zum Review
                  </Link>
                </CardHeader>
                Ich habe hier meinen Hochzeitsanzug gekauft und bin absolut
                begeistert! Die Beratung war freundlich, professionell und sehr
                aufmerksam. Man nimmt sich Zeit, geht auf Wünsche ein und sorgt
                dafür, dass man am Ende wirklich zufrieden nach Hause geht. Für
                zukünftige Feiern werde ich definitiv wieder hierherkommen.
              </Card>

              <Card className=" p-3 mb-3 text-lg">
                <CardHeader className="text-xl flex-row justify-start  gap-5">
                  <Avatar
                    isBordered
                    radius="full"
                    size="md"
                    src="https://lh3.googleusercontent.com/a-/ALV-UjW32X3kFjhDDpKCshuIPBvgojDSchMEO25wpxWroTk_tj5aG1tX6g=w72-h72-p-rp-mo-ba3-br100"
                  />
                  <div>
                    <h1>Tobias Vogt</h1>
                    <span className="text-sm opacity-70">Mai 2025</span>
                  </div>
                  <StarRating
                    starsLength={5}
                    initialRating={5}
                    isReadOnly={true}
                    dimension={7}
                  />
                  <Link
                    className="ml-auto underline text-blue-400"
                    href="https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnTUNZZ3Y3OEl3EAE!2m1!1s0x0:0x6cc700fd279a294e!3m1!1s2@1:CIHM0ogKEICAgMCYgv78Iw%7CCgwIuvLTwAYQqMzWrQM%7C"
                  >
                    zum Review
                  </Link>
                </CardHeader>
                <CardBody className="px-3 py-0">
                  Ich habe heute im Herrenhaus Fischer einen Anzug gekauft und
                  bin absolut begeistert – sowohl vom Anzug selbst als auch von
                  der Beratung. Schon beim Betreten des Geschäfts spürt man die
                  Liebe zum Detail und die Leidenschaft für klassische
                  Herrenmode. Die Atmosphäre ist stilvoll und einladend.
                  Besonders hervorheben möchte ich die äußerst kompetente und
                  individuelle Beratung. Es wurde sich viel Zeit genommen, um
                  auf meine Wünsche und Vorstellungen einzugehen. Dabei war die
                  Beratung nicht nur fachlich top, sondern auch sehr freundlich
                  und angenehm – man fühlt sich als Kunde wirklich
                  wertgeschätzt. Am Ende habe ich einen perfekt sitzenden Anzug
                  gefunden, der genau meinen Geschmack trifft. Ich kann das
                  Herrenhaus Fischer uneingeschränkt empfehlen – für alle, die
                  Wert auf Qualität, Stil und exzellenten Service legen.
                </CardBody>
              </Card>
            </div>
          </AccordionItem>
        </Accordion>
        <div className="flex flex-row flex-wrap  justify-center gap-5 mt-10  px-4"></div>
      </div>
      <div
        id="männermode"
        data-section
        className="px-3 max-w-4xl  justify-center mt-30  w-full items-center text-center bgtinted p-8"
      >
        <div className="text-left pb-2">
          <h1 className={title()}>{t("routes.Männermode")}</h1>
        </div>
        <div>
          {t("männermode.text1")}
          <br />
          <br />
          <p>{t("männermode.text2")}</p>
          <div className="flex flex-row flex-wrap gap-5 justify-around mb-5 mt-3">
            <Image
              src="/Männermode/ETERNA_weißes_Hemd.jpg"
              isBlurred
              className="h-80 w-auto rounded-xl"
            />
            <div className="flex justify-center">
              <Image
                src="/Männermode/Marvelis.jpg"
                isBlurred
                className="h-80 w-auto rounded-xl"
                classNames={{ wrapper: "justify-center items-center " }}
              />
            </div>
            <Image
              src="/Männermode/CINQUE.jpg"
              isBlurred
              className="h-80 w-auto rounded-xl"
            />
          </div>
          <p>{t("männermode.text3")}</p>
          <div className="flex flex-row flex-wrap gap-5 justify-around mb-5 mt-3">
            <Image
              src="/Männermode/NZA_Image_Feuer.jpg"
              isBlurred
              className="h-80 w-auto rounded-xl"
            />
            <Image
              src="/Männermode/NZA_Norweger_Pulli_129,99_€.jpg"
              isBlurred
              className="h-80 w-auto rounded-xl"
              classNames={{ wrapper: "justify-center items-center " }}
            />
            <Image
              src="/Männermode/Replay.webp"
              isBlurred
              className="h-80 w-auto rounded-xl"
            />
          </div>
          <p>{t("männermode.text4")}</p>
          <br />
          <p id="schützenfestscroll">{t("männermode.text5")}</p>
        </div>
      </div>

      <div
        id="schützenfest"
        data-section
        className="px-3 max-w-5xl  justify-center mt-30  w-full items-center bgtinted p-8"
      >
        <div className="text-left">
          <h1 className={title()}>Schützenfest</h1>
        </div>
        <div>
          <p className="text-wrap text-left">{t("schützenfest.text1")}</p>
          <div className="sm:max-w-2/3 justify-self-center gap-5 flex items-center">
            <Image
              src="Diana_und_Bernhard.jpg"
              className="rounded-3xl max-w-50 align-baseline float-left"
            />
            <p className="text-default-500 text-left text-wrap">
              {t("schützenfest.text2")}
            </p>
            <div id="kontaktscroll"> </div>
          </div>
        </div>
      </div>
      <div
        id="kontakt"
        data-section
        className="px-3 max-w-4xl text-left justify-center mt-30  w-full items-center bgtinted p-8"
      >
        <ContactForm />
      </div>
      <div
        id="empfehlungen"
        data-section
        className=" max-w-3xl w-full justify-center text-left   p-8 mt-30 px-8 bgtinted
         "
      >
        <h1 className={title()}>{t("routes.Empfehlungen")}</h1>
        <ul className="list-disc text-left ">
          <li>
            <span className="font-bold">Brautmode</span>
            <ul className="list-inside list-disc ">
              <li>White Princess in Büren</li>
              <li>Fräulein Fraulich in Paderborn</li>
              <li>Zeit & Ewigkeit in Lemgo</li>{" "}
              <li>Majas Brautmoden in Kalletal</li>{" "}
              <li> Braut & Fest in Germete</li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Fotografie</span>
            <ul className="list-inside list-disc">
              <li>Blickfang by Jenny Alexander Bürks in warburg </li>
              <li> Die Hochzeitsfotografin Aenna</li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Dekortation etc.</span>
            <ul className="list-inside list-disc">
              <li>Unendlich Eventdesign in Bad Driburg</li>
              <li> Wedding Details by Nora Die Packerie</li>
              <li>Die Packerei</li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Gesang</span>
            <ul className="list-inside list-disc">
              <li>...</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
