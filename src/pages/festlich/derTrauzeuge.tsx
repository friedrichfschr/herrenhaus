import { title } from "@/components/primitives";
import i18n from "@/i18n";
import { useZustand } from "@/zustand";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { t } from "i18next";
import React, { useEffect } from "react";

export default function TrauzeugePage() {
  const { setActiveSection } = useZustand();
  const [language, setLanguage] = React.useState(i18n.language);

  useEffect(() => {
    i18n.on("languageChanged", (lan) => {
      console.log("language changedsdfsdf", lan);
      setLanguage(lan);
    });
  }, [i18n]);
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
        <h1 className={title()}>{t("festlich.buttons.2.title")}</h1>
      </div>
      <div className="max-w-lg md:max-w-3xl text-justify mx-auto  justify-center items-center text-lg px-4">
        <div className={"font-bold text-2xl mt-10 mb-3 text-left"}>
          {t("festlich.buttons.2.texts.title1")}
        </div>
        <div>{t("festlich.buttons.2.texts.text1")}</div>
        <div className={"font-bold text-2xl mt-10 mb-3 text-left"}>
          {t("festlich.buttons.2.texts.title2")}
        </div>
        <div>{t("festlich.buttons.2.texts.text2")}</div>
      </div>
    </section>
  );
}
