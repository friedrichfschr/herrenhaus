import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { t } from "i18next";
import React, { useEffect } from "react";

import { useZustand } from "@/zustand";
import { title } from "@/components/primitives";
import i18n from "@/i18n";

export default function GästeFamiliePage() {
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
          as={Link}
          className=" max-w-25 mb-5  ml-5 rounded-md"
          href="/#festlich"
          size="md"
          variant="ghost"
          onPress={() => {
            setActiveSection("/#festlich");
            setTimeout(() => {
              document.getElementById("festlichscroll")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "start",
              });
            });
          }}
        >
          {"<-"}
        </Button>
        <h1 className={title()}>{t("festlich.buttons.3.title")}</h1>
      </div>
      <div className="max-w-xl md:max-w-3xl text-justify mx-auto  justify-center items-center text-lg px-4">
        <div className={"font-bold text-2xl mt-3 mb-3 text-left"}>
          {t("festlich.buttons.3.texts.title1")}
        </div>

        <div>{t("festlich.buttons.3.texts.text1")}</div>

        <div className={"font-bold text-2xl mt-10 mb-3 text-left"}>
          {t("festlich.buttons.3.texts.title2")}
        </div>
        <div>{t("festlich.buttons.3.texts.text2")}</div>
      </div>
    </section>
  );
}
