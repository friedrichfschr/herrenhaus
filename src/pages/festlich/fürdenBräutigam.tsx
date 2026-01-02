import { title } from "@/components/primitives";
import i18n from "@/i18n";
import { useZustand } from "@/zustand";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { t } from "i18next";
import React, { useEffect } from "react";
export function BackButton() {
  const { setActiveSection } = useZustand();
  return (
    <Button
      variant="ghost"
      className="sm:absolute sm:left-5 sm:top-1 max-w-25 mb-3 sm:mb-0 sm:ml-0 ml-5 rounded-md"
      size="md"
      as={Link}
      href="/#festlich"
      onPress={() => {
        setActiveSection("/#festlich");
        setTimeout(() => {
          document.getElementById("festlichscroll")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
          });
        }, 1);
      }}
    >
      {"<-"}
    </Button>
  );
}

export default function fürdenBräutigamPage() {
  const [language, setLanguage] = React.useState(i18n.language);

  useEffect(() => {
    i18n.on("languageChanged", (lan) => {
      setLanguage(lan);
    });
  }, [i18n]);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full">
      <div className="flex-col flex  text-center justify-center relative w-full max-w-xl md:max-w-3xl ">
        <BackButton />
        <h1 className={title()}>{t("festlich.buttons.1.title")}</h1>
      </div>
      <div className="max-w-xl md:max-w-3xl text-justify mx-auto  justify-center items-center text-lg px-4">
        <div>{t("festlich.buttons.1.texts.text1")}</div>
        <div className={"font-bold text-2xl mt-10 mb-5"}>
          {t("festlich.buttons.1.texts.title2")}
        </div>
        <div>{t("festlich.buttons.1.texts.text2")}</div>
        <div className={"font-bold text-2xl mt-10 mb-5"}>
          {t("festlich.buttons.1.texts.title3")}
        </div>
        <div>{t("festlich.buttons.1.texts.text3")}</div>
        <div className={"font-bold text-2xl mt-10 mb-5"}>
          {t("festlich.buttons.1.texts.title4")}
        </div>
        <div>{t("festlich.buttons.1.texts.text4")}</div>
        <div className="ml-5">
          <div className={"font-semibold  italic text-lg mt-4 mb-2"}>
            {t("festlich.buttons.1.texts.price1")}
          </div>
          <div>{t("festlich.buttons.1.texts.priceText1")}</div>

          <div className={"font-semibold  italic text-lg mt-4 mb-2"}>
            {t("festlich.buttons.1.texts.price2")}
          </div>
          <div>{t("festlich.buttons.1.texts.priceText2")}</div>
          <div className={"font-semibold italic  text-lg mt-4 mb-2"}>
            {t("festlich.buttons.1.texts.price3")}
          </div>
          <div>{t("festlich.buttons.1.texts.priceText3")}</div>
          <div className={"font-semibold  italic text-lg mt-4 mb-2"}>
            {t("festlich.buttons.1.texts.price4")}
          </div>

          <div>{t("festlich.buttons.1.texts.priceText4")}</div>
        </div>

        <div className={"font-bold text-2xl mt-10 mb-5"}>
          {t("festlich.buttons.1.texts.title5")}
        </div>
        <div>{t("festlich.buttons.1.texts.text5")}</div>
      </div>
    </section>
  );
}
