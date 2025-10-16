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

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { useTranslation } from "react-i18next";
import { Select, SelectItem } from "@heroui/select";
import { Avatar } from "@heroui/avatar";
import { useLocation } from "react-router-dom";
import { memo, useEffect, useMemo, useState } from "react";
import { keysToLanguages } from "@/i18n";
import { useZustand } from "@/zustand";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";

export const Navbar = () => {
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const renderValue = useMemo(() => {
    const language =
      keysToLanguages[i18n.resolvedLanguage as keyof typeof keysToLanguages];
    return (
      <>
        <div className="sm:hidden flex-auto min-w-13">
          <FlagAvatar code={i18n.resolvedLanguage} alt={language} />
        </div>
        <div className="hidden sm:flex items-center gap-2 min-w-32 flex-auto">
          <FlagAvatar code={i18n.resolvedLanguage} alt={language} />
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
      maxWidth="xl"
      position="sticky"
      className="shadow-md shadow-background pb-6  sm:pb-12 inset-shadow-xl "
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      // style={{ backgroundColor: "rgb(255, 255, 255, 0.9)" }}
    >
      <NavbarContent
        className="basis-1/5 sm:basis-full flex-col"
        justify="start"
      >
        <Image src="/logo-herrenhaus-fischer.png" width={230} />
      </NavbarContent>

      <NavbarContent
        className="mt-3 flex flex-wrap  items-center basis-1 lg:basis-full gap-1"
        justify="end"
      >
        <NavbarItem className="flex mr-4">
          <Select
            className="flex-grow"
            value={i18n.resolvedLanguage}
            aria-label="Select Language"
            renderValue={() => renderValue}
            onSelectionChange={(e) => {
              i18n.changeLanguage(e.currentKey);
            }}
            variant="bordered"
            selectedKeys={[`${i18n.resolvedLanguage}`]}
          >
            {Object.entries(keysToLanguages).map(([key, language]) => (
              <SelectItem key={key} hideSelectedIcon textValue={language}>
                <>
                  <div className="sm:hidden min-w">
                    <FlagAvatar code={key} alt={language} />
                  </div>
                  <div className="hidden sm:flex items-center justify-start flex-row flex-auto gap-2">
                    <FlagAvatar code={key} alt={language} />
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
              className=""
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            />
          </button>
        </NavbarItem>

        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.scrollNavItems.map((item) => (
            <NavbarItem key={item.href} id={item.href}>
              <Link
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
                      block: "start",
                      inline: "start",
                    });
                }}
                className={clsx(
                  "data-[active=true]:text-primary data-[active=true]:font-medium "
                )}
                color={item.href === activeSection ? "primary" : "foreground"}
                href={item.href}
              >
                {t(`routes.${item.label}`)}
              </Link>
            </NavbarItem>
          ))}
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href} id={item.href}>
              <Link
                style={{ textDecoration: "underline" }}
                color={"foreground"}
                href={item.href}
                isExternal={item.isExternal}
                showAnchorIcon={item.isExternal}
              >
                {t(`routes.${item.label}`)}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarMenu className="pt-10">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.scrollNavItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
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
                color={item.href === activeSection ? "primary" : "foreground"}
                className={clsx("italic text-lg font-semibold")}
                href={item.href}
              >
                {t(`routes.${item.label}`)}
              </Link>
            </NavbarMenuItem>
          ))}
          <Divider className="my-1" />

          <NavbarItem>
            <Link
              color="secondary"
              isExternal
              showAnchorIcon
              className={clsx(
                "decoration-secondary underline font-semibold text-lg w-full"
              )}
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
