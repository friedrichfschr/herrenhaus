import { title } from "@/components/primitives";
import { BackButton } from "./fürdenBräutigam";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { useZustand } from "@/zustand";
import { t } from "i18next";
import React, { useEffect } from "react";
import i18n from "@/i18n";

export default function TippsPage() {
  const { setActiveSection } = useZustand();

  const [language, setLanguage] = React.useState(i18n.language);

  useEffect(() => {
    i18n.on("languageChanged", (lan) => {
      setLanguage(lan);
    });
  }, [i18n]);
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
        <h1 className={title()}>{t("festlich.buttons.4.title")}</h1>
      </div>
      <div className="max-w-xl md:max-w-3xl text-justify mx-auto  justify-center items-center text-lg px-4">
        <div className="mt-5">{t("festlich.buttons.4.texts.text1")}</div>
        <ul className="list-disc ml-5 mt-4 flex flex-col gap-3">
          <li>{t("festlich.buttons.4.texts.tipp1")}</li>
          <li>{t("festlich.buttons.4.texts.tipp2")}</li>
          <li>{t("festlich.buttons.4.texts.tipp3")}</li>
          <li>{t("festlich.buttons.4.texts.tipp4")}</li>
          <li>{t("festlich.buttons.4.texts.tipp5")}</li>
          <li>{t("festlich.buttons.4.texts.tipp6")}</li>
          <li>{t("festlich.buttons.4.texts.tipp7")}</li>
        </ul>
      </div>
    </section>
  );
}
