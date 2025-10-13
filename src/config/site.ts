export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      href: "/",
      label: "Start",
      scroll: true,
    },
    {
      href: "/#festlich",
      label: "Festliche Herrenmode",
      scroll: true,
    },
    {
      label: "Herrenmode",
      href: "/#herrenmode",
      scroll: true,
    },
    // {
    //   href: "/klara",
    // },
    {
      href: "/termine",
    },
    {
      href: "/kontakt",
    },
    {
      href: "/empfehlungen",
    },
  ],

  links: {
    klara: "https://www.klara-fischer.de",
    instagram: "https://www.instagram.com/herrenhaus_fischer/",
  },
};
