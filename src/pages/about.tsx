import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { useTheme } from "@heroui/use-theme";
import React, { useEffect, useRef } from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { t } from "i18next";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import { StarRating } from "react-flexible-star-rating";

import { ContactForm } from "@/components/contactForm";
import Marken from "@/components/marken";
import { useZustand } from "@/zustand";
import { title } from "@/components/primitives";
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
      setLanguage(lan);
    });
  }, [i18n]);

  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-130px)] px-3">
      <div data-section className="w-full sm:pt-40" id="/">
        <div className="px-3 mb-10  max-w-[1050px] mx-auto text-center text-lg  py-8 lg:pb-20 bgtinted">
          <div className="pb-3">
            <h1 className={title()}>Herrenhaus Fischer</h1>
          </div>

          <img
            className=" h-[250px] mx-auto sm:hidden "
            src="Start/Herrenhaus_Fischer_Außenansicht.png "
            style={{
              float: "right",
              shapeOutside: "circle(48%)",
              clipPath: "circle(45%)",
            }}
          />

          <p className=" text-justify sm:hidden block ">{t("start.intro")}</p>
          <img
            className="h-90 hidden sm:block "
            src="Start/Herrenhaus_Fischer_Außenansicht.png"
            style={{
              float: "left",
              shapeOutside: "circle(60% at 37% 60%)",
              clipPath: "circle(57% at 37% 60%)",
            }}
          />
          <img
            className="h-90  hidden sm:block "
            src="Start/FamilieFischer.png "
            style={{
              float: "right",
              // marginTop: "-30px",
              shapeOutside: "circle(61% at 75% 25%)",
              clipPath: "circle(55% at 75% 25%)",
            }}
          />
          <p className=" text-justify sm:block hidden ">{t("start.intro")}</p>
          <div id="festlichscroll" />
        </div>
      </div>
      <div
        data-section
        className="py-8  w-full max-w-7xl bgtinted px-1 flex flex-col justify-center items-center"
        id="festlich"
      >
        <div className=" text-center justify-center">
          <h1 className={title()}>{t("routes.Festliche Herrenmode")}</h1>
        </div>
        <Accordion
          className=" mx-auto  "
          defaultExpandedKeys={["1"]}
          variant="bordered"
        >
          <AccordionItem
            key="1"
            aria-label={t("festlich.accordion.1")}
            title={t("festlich.accordion.1")}
            onPress={() =>
              setTimeout(
                () =>
                  document
                    .getElementById("festlichscroll")
                    ?.scrollIntoView({ behavior: "instant" }),
                0
              )
            }
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
                src={"/BernhardFotoGruß.png"}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex-col flex gap-2 ">
              <Button
                as={Link}
                className="font-semibold text-lg  whitespace-normal h-auto min-h-12"
                href="/bräutigam"
                variant="bordered"
                onPress={() => window.scrollTo({ top: 0 })}
              >
                {t("festlich.buttons.1.title")}
              </Button>
              <Button
                as={Link}
                className="font-semibold text-lg flex-1  whitespace-normal h-auto   min-h-12"
                href="/trauzeuge"
                variant="bordered"
                onPress={() => window.scrollTo({ top: 0 })}
              >
                {t("festlich.buttons.2.title")}
              </Button>
              <Button
                as={Link}
                className="font-semibold text-lg flex-1  whitespace-normal h-auto   min-h-12"
                href="familie"
                variant="bordered"
                onPress={() => window.scrollTo({ top: 0 })}
              >
                {t("festlich.buttons.3.title")}
              </Button>
              <Button
                as={Link}
                className="font-semibold text-lg  whitespace-normal h-auto   min-h-12"
                href="tipps"
                variant="bordered"
                onPress={() => window.scrollTo({ top: 0 })}
              >
                {t("festlich.buttons.4.title")}
              </Button>
            </div>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label={t("festlich.accordion.2")}
            title={t("festlich.accordion.2")}
            onPress={() =>
              setTimeout(
                () =>
                  document
                    .getElementById("festlichscroll")
                    ?.scrollIntoView({ behavior: "instant" }),
                0
              )
            }
          >
            <Marken />
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label={t("festlich.accordion.3")}
            title={t("festlich.accordion.3")}
            onPress={() =>
              setTimeout(
                () =>
                  document
                    .getElementById("festlichscroll")
                    ?.scrollIntoView({ behavior: "instant" }),
                0
              )
            }
          >
            <ul className="flex flex-col ">
              <li className="flex justify-between items-center gap-4">
                <h1 className="text-4xl ">Gut Holzhausen</h1>
                <ul className=" pl-5 text-sm">
                  <li>
                    {t("festlich.fotoshootings.organisation")} Anne Schlüter,
                    unendlich eventdesign
                  </li>
                  <li>
                    {t("festlich.fotoshootings.brautmode")} Brautsein aus Brakel
                  </li>
                  <li>
                    {t("festlich.fotoshootings.fotografie")} Anna Schnabel
                  </li>
                </ul>
              </li>
              <Card className="grid grid-cols-1 p-3 sm:grid-cols-2 gap-3 lg:grid-cols-4">
                <Image src="/ShootingHolzhausen/Pavillon_1.png" />
                <Image src="/ShootingHolzhausen/Pavillon_3.png" />
                <Image src="/ShootingHolzhausen/Pavillon_2.png" />
                <Image src="/ShootingHolzhausen/Pavillon_4.png" />
              </Card>
              <br />
              <li className="flex justify-between items-center gap-4">
                <ul className=" pl-5 text-sm">
                  <li>
                    {t("festlich.fotoshootings.organisation")} Nora Hartwich und
                    Jennifer Horstmann
                  </li>
                  <li>
                    {t("festlich.fotoshootings.brautmode")} Zeit & Ewigkeit aus
                    Lemgo
                  </li>
                  <li>
                    {t("festlich.fotoshootings.fotografie")} Blickfang by Jenny
                  </li>
                </ul>
                <h1 className="text-5xl sm:mr-10">Exterhof</h1>
              </li>
              <Card className="grid grid-cols-1 p-3 sm:grid-cols-2 gap-3 lg:grid-cols-4">
                <Image src="/ShootingExterhof/Exterhof_1.png" />
                <Image src="/ShootingExterhof/Exterhof_3.png" />
                <Image src="/ShootingExterhof/Exterhof_2.png" />
                <Image src="/ShootingExterhof/Exterhof_4.png" />
              </Card>
              <br />
              <li className="flex justify-between items-center gap-4">
                <h1 className="text-4xl">Kloster Bredelaer</h1>
                <ul className=" pl-5 text-sm">
                  <li>
                    {t("festlich.fotoshootings.organisation")} Alexander Bürks
                  </li>
                  <li>
                    {t("festlich.fotoshootings.brautmode")} Brautsein aus Brakel
                  </li>
                  <li>
                    {t("festlich.fotoshootings.fotografie")} Alexander Bürks
                  </li>
                </ul>
              </li>
              <Card className="grid grid-cols-1 p-3 sm:grid-cols-2 gap-3 lg:grid-cols-4">
                <Image src="/ShootingBredelaer/Bredelaer_1.png" />
                <Image src="/ShootingBredelaer/Bredelaer_3.png" />
                <Image src="/ShootingBredelaer/Bredelaer_2.png" />
                <Image src="/ShootingBredelaer/Bredelaer_4.png" />
              </Card>
              <br />
              <li className="flex justify-between items-center gap-4">
                <ul className=" pl-5 text-sm">
                  <li>{t("festlich.fotoshootings.organisation")} Angelique</li>
                  <li>
                    {t("festlich.fotoshootings.brautmode")} Traumkleid Lippe
                  </li>
                  <li>
                    {t("festlich.fotoshootings.fotografie")} Jan-Niklas Schulz
                  </li>
                </ul>
                <h1 className="text-5xl sm:mr-10">Hof Frien</h1>
              </li>
              <Card className="grid grid-cols-1 p-3 sm:grid-cols-2 gap-3 lg:grid-cols-4">
                <Image src="/ShootingHofFrien/Frien_1.png" />
                <Image src="/ShootingHofFrien/Frien_3.png" />
                <Image src="/ShootingHofFrien/Frien_2.png" />
                <Image src="/ShootingHofFrien/Frien_4.png" />
              </Card>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label={t("festlich.accordion.4")}
            id="männermodescroll"
            subtitle=""
            title={t("festlich.accordion.4")}
            onPress={() =>
              setTimeout(
                () =>
                  document
                    .getElementById("festlichscroll")
                    ?.scrollIntoView({ behavior: "instant" }),
                0
              )
            }
          >
            <div className="items-start flex flex-col mb-5">
              {/* <p className="text-2xl mb-2 text-default-600">4.9 </p>
              <StarRating
                starsLength={5}
                initialRating={5}
                isReadOnly={true}
                dimension={10}
              /> */}
              <span className="text-sm opacity-70 self-end">
                {t("time.december")} 2025
              </span>
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
                    <span className="text-sm opacity-70">
                      {t("time.september")} 2025
                    </span>
                  </div>
                  <StarRating
                    dimension={7}
                    initialRating={5}
                    isReadOnly={true}
                    starsLength={5}
                  />
                  <Link
                    className="ml-auto underline text-blue-400"
                    href="https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tsMGIxQlZlbTVUVDJWTFExRTBkV2cxV21GRVluYxAB!2m1!1s0x0:0x6cc700fd279a294e!3m1!1s2@1:CAIQACodChtycF9oOkl0b1BVem5TT2VLQ1E0dWg1WmFEYnc%7C0cjhXAUSFQC%7C"
                  >
                    {t("festlich.reviews.reviewLinkText")}
                  </Link>
                </CardHeader>
                {t("festlich.reviews.review1")}
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
                    <span className="text-sm opacity-70">
                      {t("time.may")} 2025
                    </span>
                  </div>
                  <StarRating
                    dimension={7}
                    initialRating={5}
                    isReadOnly={true}
                    starsLength={5}
                  />
                  <Link
                    className="ml-auto underline text-blue-400"
                    href="https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnTUNZZ3Y3OEl3EAE!2m1!1s0x0:0x6cc700fd279a294e!3m1!1s2@1:CIHM0ogKEICAgMCYgv78Iw%7CCgwIuvLTwAYQqMzWrQM%7C"
                  >
                    {t("festlich.reviews.reviewLinkText")}
                  </Link>
                </CardHeader>
                <CardBody className="px-3 py-0">
                  {t("festlich.reviews.review2")}
                </CardBody>
              </Card>
            </div>
          </AccordionItem>
        </Accordion>
        <div className="flex flex-row flex-wrap  justify-center gap-5 mt-10  px-4" />
      </div>
      <div
        data-section
        className="px-3 max-w-4xl  justify-center sm:mt-30  w-full items-center text-center bgtinted p-8"
        id="männermode"
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
              isBlurred
              className="h-80 w-auto rounded-xl"
              src="/Männermode/ETERNA_weißes_Hemd.png"
            />
            <div className="flex justify-center">
              <Image
                isBlurred
                className="h-80 w-auto rounded-xl"
                classNames={{ wrapper: "justify-center items-center " }}
                src="/Männermode/Marvelis.png"
              />
            </div>
            <Image
              isBlurred
              className="h-80 w-auto rounded-xl"
              src="/Männermode/CINQUE.png"
            />
          </div>
          <p>{t("männermode.text3")}</p>
          <div className="flex flex-row flex-wrap gap-5 justify-around mb-5 mt-3">
            <Image
              isBlurred
              className="h-80 w-auto rounded-xl"
              src="/Männermode/NZA_Image_Feuer.png"
            />
            <Image
              isBlurred
              className="h-80 w-auto rounded-xl"
              classNames={{ wrapper: "justify-center items-center " }}
              src="/Männermode/NZA_Norweger_Pulli_129,99_€.png"
            />
            <Image
              isBlurred
              className="h-80 w-auto rounded-xl"
              src="/Männermode/Replay.webp"
            />
          </div>
          <p>{t("männermode.text4")}</p>
          <br />
          <p id="schützenfestscroll">{t("männermode.text5")}</p>
        </div>
      </div>

      <div
        data-section
        className="px-3 max-w-5xl  justify-center sm:mt-30  w-full items-center bgtinted p-8"
        id="schützenfest"
      >
        <div className="text-left">
          <h1 className={title()}>Schützenfest</h1>
        </div>
        <div>
          <p className="text-wrap text-left">{t("schützenfest.text1")}</p>
          <div className="sm:max-w-2/3 justify-self-center gap-5 flex items-center  mt-4">
            <Image
              className="rounded-3xl max-[640px]:max-w-1/2 sm:max-w-60  min-w-35    float-left"
              src="Diana_und_Bernhard.png"
            />
            <p className="text-default-500  max-[640px]:max-w-1/2 text-left text-wrap">
              {t("schützenfest.text2")}
            </p>
            <div id="kontaktscroll"> </div>
          </div>
        </div>
      </div>
      <div
        data-section
        className="px-3 max-w-4xl text-left justify-center sm:mt-30  w-full items-center bgtinted p-8"
        id="kontakt"
      >
        <ContactForm />
      </div>
      <div
        data-section
        className=" max-w-3xl w-full justify-center text-left   p-8 sm:mt-30 px-8 bgtinted
         "
        id="empfehlungen"
      >
        <h1 className={title()}>{t("routes.Empfehlungen")}</h1>
        <ul className="list-disc text-left ">
          <li>
            <span className="font-bold">{t("empfehlungen.brautmode")}</span>
            <ul className="list-inside list-disc flex flex-col">
              <Link
                isExternal
                showAnchorIcon
                className=""
                color="foreground"
                href="https://whiteprincess.de/"
              >
                <li>White Princess in Büren</li>
              </Link>
              <Link
                isExternal
                showAnchorIcon
                className=""
                color="foreground"
                href="https://www.fraeuleinfraulich.de/"
              >
                <li>Fräulein Fraulich in Paderborn</li>
              </Link>

              <Link
                isExternal
                showAnchorIcon
                className=""
                color="foreground"
                href="https://www.zeitundewigkeit-brautmoden.de/"
              >
                <li>Zeit & Ewigkeit in Lemgo</li>
              </Link>

              <Link
                isExternal
                showAnchorIcon
                className=""
                color="foreground"
                href="https://www.majas-brautmoden.de/"
              >
                <li>Majas Brautmoden in Kalletal</li>
              </Link>
              <Link
                isExternal
                showAnchorIcon
                className=""
                color="foreground"
                href="https://brautundfest.de/"
              >
                <li> Braut & Fest in Germete</li>
              </Link>
              <Link
                isExternal
                showAnchorIcon
                className=""
                color="foreground"
                href="https://traumkleid-lippe.de/"
              >
                <li>Traumkleid Lippe in Lemgo</li>
              </Link>
              <Link
                isExternal
                showAnchorIcon
                className=""
                color="foreground"
                href="https://www.braut-abendmode-brilon.de/"
              >
                <li> Braut- und Abendmode Brilon</li>
              </Link>
              <Link
                isExternal
                showAnchorIcon
                className=""
                color="foreground"
                href="https://beccaloreen.de/"
              >
                <li> Beccaloreen Paderborn</li>
              </Link>
            </ul>
          </li>
          <li>
            <span className="font-bold">{t("empfehlungen.fotografie")}</span>
            <ul className="list-inside list-disc flex flex-col">
              <Link
                isExternal
                showAnchorIcon
                className=""
                color="foreground"
                href="https://www.blickfangbyjenny.de/"
              >
                <li>Blickfang by Jenny</li>
              </Link>
              <Link
                isExternal
                showAnchorIcon
                className=""
                color="foreground"
                href="https://www.diehochzeitsfotografin.de/"
              >
                <li> Die Hochzeitsfotografin Aenna</li>
              </Link>
              <Link
                isExternal
                showAnchorIcon
                className=""
                color="foreground"
                href="https://www.albueart.de/"
              >
                <li> Alexander Bürks in warburg </li>
              </Link>
            </ul>
          </li>
          <li>
            <span className="font-bold">{t("empfehlungen.dekoration")}</span>
            <ul className="list-inside list-disc flex flex-col">
              <Link
                isExternal
                showAnchorIcon
                className=""
                color="foreground"
                href="https://unendlich-events.de/"
              >
                <li>Unendlich Eventdesign in Bad Driburg</li>
              </Link>
              <Link
                isExternal
                showAnchorIcon
                className=""
                color="foreground"
                href="https://www.weddingdetails.de/"
              >
                <li> Wedding Details by Nora</li>
              </Link>
              <Link
                isExternal
                showAnchorIcon
                className=""
                color="foreground"
                href="https://www.die-packerie.de/"
              >
                <li>Die Packerei</li>
              </Link>
            </ul>
          </li>
          <li>
            <span className="font-bold">{t("empfehlungen.Spaß")}</span>
            <ul className="list-inside list-disc">
              <Link
                isExternal
                showAnchorIcon
                className=""
                color="foreground"
                href="https://fotomaschine.net/"
              >
                <li>Die Fotomaschine</li>
              </Link>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
