import { Navbar as HeroUINavbar } from "@heroui/navbar";
import { Image } from "@heroui/image";

import { siteConfig } from "@/config/site";

export const NavbarLogo = () => {
  return (
    <HeroUINavbar
      className="shadow-md shadow-background pb-2 inset-shadow-xl z-50 w-full bg-transparent h-20"
      maxWidth="2xl"
      position="static"
      isBlurred={false}
      // style={{ backgroundColor: "rgb(255, 255, 255, 0.9)" }}
    >
      <Image
        className="md:ml-30 mt-10"
        src={siteConfig.links.logo}
        width={200}
      />
      {/* <span className={`font-serif italic text-3xl mt-2 font-bold `}>
            Herrenhaus Fischer
          </span> */}
    </HeroUINavbar>
  );
};
