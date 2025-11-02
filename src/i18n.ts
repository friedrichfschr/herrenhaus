import i18n from "i18next";

import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

export const keysToLanguages = {
  de: "Deutsch",
  gb: "English",
  fr: "Français",
  es: "Español",
};

i18n

  // detect user language

  // learn more: https://github.com/i18next/i18next-browser-languageDetector

  .use(LanguageDetector)

  // pass the i18n instance to react-i18next.

  .use(initReactI18next)

  // init i18next

  // for all options read: https://www.i18next.com/overview/configuration-options

  .init({
    debug: true,

    fallbackLng: "de",

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    resources: {
      de: {
        translation: {
          routes: {
            Start: "Start",
            "Festliche Herrenmode": "Festliche Herrenmode",
            Männermode: "Männermode",
            Termine: "Termine",
            "Klara Fischer": "Klara Fischer",
            Aktuelles: "Aktuelles",
            Kontakt: "Kontakt",
            Empfehlungen: "Empfehlungen",
          },
        },
      },
      gb: {
        translation: {
          routes: {
            Start: "Start",
            "Festliche Herrenmode": "Festive Menswear",
            Männermode: "Menswear",
            Termine: "Events",
            "Klara Fischer": "Klara Fischer",
            Aktuelles: "Latest",
            Kontakt: "Contact",
            Empfehlungen: "Recommendations",
          },
        },
      },
      fr: {
        translation: {
          routes: {},
        },
      },
      es: {
        translation: {
          routes: {
            About: "Moi",
            Resumé: "Resumé",
            Projects: "Projets",
            Blog: "Blog",
          },
        },
      },
    },
  });

export default i18n;
