export type SiteConfig = typeof siteConfig;

export const sectionIds: Record<string, string> = {
  "/": "/",
  "/festlich": "festlich",
  "/maennermode": "männermode",
  "/schuetzenfest": "schützenfest",
  "/kontakt": "kontakt",
  "/empfehlungen": "empfehlungen",
};

export const siteConfig = {
  name: "Vite + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  scrollNavItems: [
    {
      href: "/",
      label: "Start",
    },
    {
      href: "/festlich",
      label: "Festliche Herrenmode",
    },
    {
      label: "Männermode",
      href: "/maennermode",
    },
    {
      label: "Schützenfest",
      href: "/schuetzenfest",
    },
    {
      label: "Kontakt",
      href: "/kontakt",
    },
    {
      label: "Empfehlungen",
      href: "/empfehlungen",
    },
  ],
  navItems: [
    // {
    //   href: "https://www.klara-fischer.de/",
    //   isExternal: true,
    //   label: "Klara Fischer",
    // },
    // {
    //   label: "Termine",
    //   href: "/termine",
    // },
    // {
    //   label: "Kontakt",
    //   href: "/kontakt",
    // },
    // {
    //   label: "Empfehlungen",
    //   href: "/empfehlungen",
    // },
  ],

  links: {
    logo: "",
    klara: "https://www.klara-fischer.de",
    instagram: "https://www.instagram.com/herrenhaus_fischer/",
  },
};
