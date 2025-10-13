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
            "/": "Start",
            "/#festlich": "Festliche Herrenmode",
            "/#herrenmode": "Herrenmode",
            "/termine": "Termine",
            "/kontakt": "Kontakt",
            "/empfehlungen": "Empfehlungen",
          },
          projects: {
            Palabra:
              "A Language Learning App to build up & learn Vocabulary through Books, Videos and the News",
          },
        },
      },
      gb: {
        translation: {
          routes: {
            "/": "About",
            "/#scroll": "Festive Menswear",
            "/herrenmode": "Menswear",
            "/termine": "Events",
            "/kontakt": "Contact",
            "/empfehlungen": "Recommendations",
          },
          projects: {
            Palabra:
              "Eine Sprachenlernapp zum Wortschatz erweitern & Üben durch Bücher, Videos und Zeitung",
          },
        },
      },
      fr: {
        translation: {
          routes: {
            About: "Moi",
            Resumé: "Resumé",
            Projects: "Projets",
            Blog: "Blog",
          },
          projects: {
            Palabra:
              "Une application pour enricher son vocabulaire au moyen des vidéos, des livres ou les nouvelles",
          },
        },
      },
      es2: {
        translation: {
          routes: {
            About: "Moi",
            Resumé: "Resumé",
            Projects: "Projets",
            Blog: "Blog",
          },
          projects: {
            Palabra:
              "Une application pour enricher son vocabulaire au moyen des vidéos, des livres ou les nouvelles",
          },
        },
      },
    },
  });

export default i18n;
