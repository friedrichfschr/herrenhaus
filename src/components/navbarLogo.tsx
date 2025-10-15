import { Navbar as HeroUINavbar, NavbarContent } from "@heroui/navbar";

import { siteConfig } from "@/config/site";

import { Image } from "@heroui/image";

export const NavbarLogo = () => {
  return (
    <HeroUINavbar
      maxWidth="2xl"
      position="static"
      className="shadow-md shadow-background pb-2 inset-shadow-xl z-50 w-full bg-transparent h-20"
      isBlurred={false}
      // style={{ backgroundColor: "rgb(255, 255, 255, 0.9)" }}
    >
      <Image
        src={siteConfig.links.logo}
        width={200}
        className="md:ml-30 mt-10"
      />
      {/* <span className={`font-serif italic text-3xl mt-2 font-bold `}>
            Herrenhaus Fischer
          </span> */}
    </HeroUINavbar>
  );
};
