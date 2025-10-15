export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  scrollNavItems: [
    {
      href: "/",
      label: "Start",
    },
    {
      href: "/#festlich",
      label: "Festliche Herrenmode",
    },
    {
      label: "Männermode",
      href: "/#männermode",
    },
    {
      label: "Termine",
      href: "/#termine",
    },
    {
      label: "Klara Fischer",
      href: "/#klara",
    },
    {
      label: "Aktuelles",
      href: "/#aktuelles",
    },
    {
      label: "Kontakt",
      href: "/#kontakt",
    },
  ],
  navItems: [
    // // {
    // //   href: "/klara",
    // // },
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
