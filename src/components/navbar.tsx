import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Select, SelectItem } from "@heroui/select";
import { Avatar } from "@heroui/avatar";
import { useLocation } from "react-router-dom";
import { memo, useEffect, useMemo, useState } from "react";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { t } from "i18next";

import { FacebookIcon, InstagramIcon, MailIcon, YoutubeIcon } from "./icons";

import { useZustand } from "@/zustand";
import i18n, { keysToLanguages } from "@/i18n";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";
import { Button } from "@heroui/button";

export const Navbar = () => {
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const renderValue = useMemo(() => {
    const language =
      keysToLanguages[i18n.resolvedLanguage as keyof typeof keysToLanguages];

    return (
      <>
        <div className="sm:hidden flex-auto min-w-13">
          <FlagAvatar alt={language} code={i18n.resolvedLanguage} />
        </div>
        <div className="hidden sm:flex items-center gap-2 min-w-32 flex-auto">
          <FlagAvatar alt={language} code={i18n.resolvedLanguage} />
          {language}
        </div>
      </>
    );
  }, [i18n.resolvedLanguage]);
  const location = useLocation();
  const pathname = location.pathname + location.hash;

  const { t } = useTranslation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const { activeSection, setActiveSection } = useZustand();

  return (
    <HeroUINavbar
      className=" pb-14  sm:pb-16 inset-shadow-xl backgrounddiv mask-navbar"
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      style={
        {
          // backgroundColor: "rgb(255, 255, 255, 0.2)",
        }
      }
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent
        className="basis-1/5 sm:basis-full flex-col items-start "
        justify="start"
      >
        <Image
          className=" top-0 lg:left-0 xl:left-auto  z-0 fixed "
          src="/logo-herrenhaus-fischer.png"
          width={230}
        />
      </NavbarContent>

      <NavbarContent
        className="mt-3 flex flex-wrap  items-center basis-1 lg:basis-full gap-1"
        justify="end"
      >
        <NavbarItem className="flex mr-4">
          <Select
            aria-label="Select Language"
            className="flex-grow"
            renderValue={() => renderValue}
            selectedKeys={[`${i18n.resolvedLanguage}`]}
            value={i18n.resolvedLanguage}
            variant="bordered"
            onSelectionChange={(e) => {
              i18n.changeLanguage(e.currentKey);
            }}
          >
            {Object.entries(keysToLanguages).map(([key, language]) => (
              <SelectItem key={key} hideSelectedIcon textValue={language}>
                <>
                  <div className="sm:hidden min-w">
                    <FlagAvatar alt={language} code={key} />
                  </div>
                  <div className="hidden sm:flex items-center justify-start flex-row flex-auto gap-2">
                    <FlagAvatar alt={language} code={key} />
                    {language}
                  </div>
                </>
              </SelectItem>
            ))}
          </Select>
        </NavbarItem>

        <NavbarItem className="flex-row flex items-center ">
          <ThemeSwitch />
          <button
            className="py-5 pl-5 pr-6 lg:hidden flex items-center"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              as={NavbarMenuItem}
              className=""
            />
          </button>
        </NavbarItem>

        <div className="hidden lg:flex gap-4 justify-start ml-2 z-4 backgrounddiv  pl-2 rounded-2xl">
          {siteConfig.scrollNavItems.map((item) => (
            <NavbarItem key={item.href} className="" id={item.href}>
              <Button
                color={item.href === activeSection ? "primary" : "default"}
                variant="light"
                className="text-md"
                onPress={() => {
                  if (item.href.split("#")[0] !== location.pathname) {
                    setActiveSection(item.href);
                    setTimeout(() => {
                      document
                        .getElementById(item.href.split("#")[1])
                        ?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                          inline: "start",
                        });
                    }, 1);
                  }
                  let anchorId: string | undefined = undefined;

                  if (item.href.includes("#"))
                    anchorId = item.href.split("#")[1];

                  if (!anchorId)
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  else
                    document.getElementById(anchorId)?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
              >
                {t(`routes.${item.label}`)}
              </Button>
            </NavbarItem>
          ))}

          {/* {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href} id={item.href}>
              <Link
                color={"foreground"}
                href={item.href}
                isExternal={item.isExternal}
                showAnchorIcon={item.isExternal}
                style={{ textDecoration: "underline" }}
              >
                {t(`routes.${item.label}`)}
              </Link>
            </NavbarItem>
          ))} */}
        </div>
      </NavbarContent>

      <NavbarMenu className="pt-10">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.scrollNavItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={clsx("italic text-lg font-semibold")}
                color={item.href === activeSection ? "primary" : "foreground"}
                href={item.href}
                onPress={() => {
                  setIsMenuOpen(false);
                  if (item.href.split("#")[0] !== location.pathname) {
                    setActiveSection(item.href);
                    setTimeout(() => {
                      document
                        .getElementById(item.href.split("#")[1])
                        ?.scrollIntoView({
                          behavior: "smooth",
                        });
                    }, 1);
                  }
                  let anchorId: string | undefined = undefined;

                  if (item.href.includes("#"))
                    anchorId = item.href.split("#")[1];

                  if (!anchorId)
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  else
                    document.getElementById(anchorId)?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
              >
                {t(`routes.${item.label}`)}
              </Link>
            </NavbarMenuItem>
          ))}
          <Divider className="my-1" />

          <NavbarItem>
            <Link
              isExternal
              showAnchorIcon
              className={clsx(
                "decoration-secondary underline font-semibold text-lg w-full"
              )}
              color="secondary"
              href={siteConfig.links.klara}
            >
              {t(`routes.Klara Fischer`)}
            </Link>
          </NavbarItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};

const FlagAvatar = memo(
  ({ code, alt }: { code: string | undefined; alt: string }) => (
    <Avatar
      alt={alt}
      className="w-6 h-6"
      src={`https://flagcdn.com/${code}.svg`}
    />
  )
);

export const Footer = () => {
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    i18n.on("languageChanged", (lan) => {
      setLanguage(lan);
    });
  }, [i18n]);

  return (
    <footer className="w-full max-w-7xl mx-auto mb-10 text-center text-sm  pt-15 md:pt-30 lg:-40 xl:pt-70">
      <div className="flex justify-center gap-4 mb-2">
        <Link
          color="foreground"
          href="https://www.instagram.com/herrenhaus_fischer/"
        >
          <InstagramIcon />
        </Link>
        <Link
          color="foreground"
          href="https://www.facebook.com/HerrenhausFischer/"
        >
          <FacebookIcon />
        </Link>
        <Link
          color="foreground"
          href="https://www.youtube.com/@bernhardfischer4937/"
        >
          <YoutubeIcon />
        </Link>
        <Link color="foreground" href="mailto:mode@herrenhaus-fischer.de">
          <MailIcon />
        </Link>
      </div>
      © 2026 Herrenhaus Fischer - {t("footer.design")}
      <Link
        className="text-sm italic"
        color="foreground"
        href="https://friedrich.fschr.me"
      >
        Friedrich Fischer
      </Link>
    </footer>
  );
};
