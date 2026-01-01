import { heroui } from "@heroui/theme";

module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    heroui({
      themes: {
        dark: {
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            link: "text-blue-400",

            primary: {
              100: "#FCF7DB",
              200: "#FAEDB9",
              300: "#F1DB93",
              400: "#E3C674",
              500: "#D1A949",
              600: "#B38A35",
              700: "#966E24",
              800: "#795317",
              900: "#64400E",
              DEFAULT: "#D1A949",
              foreground: "#ffffff",
            },
            focus: "#E3C674",
          },
          layout: {
            radius: { small: "0rem", medium: "0rem", large: "0rem" },
          },
        },
        light: {
          extend: "light", // <- inherit default values from dark theme
          colors: {
            link: "#2370ffff",
            primary: {
              100: "#FCF7DB",
              200: "#FAEDB9",
              300: "#F1DB93",
              400: "#E3C674",
              500: "#D1A949",
              600: "#B38A35",
              700: "#966E24",
              800: "#795317",
              900: "#64400E",
              DEFAULT: "#B38A35",
              foreground: "#ffffff",
            },
            focus: "#E3C674",
          },
          layout: {
            radius: { small: "0rem", medium: "0rem", large: "0rem" },
          },
        },
      },
    }),
  ],
};
