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
import { title } from "./primitives";
import { keysToLanguages } from "@/i18n";

export const Navbar = () => {
  const { search } = useLocation();

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
  const pathname = useLocation().pathname;
  const { t } = useTranslation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);
  return (
    <HeroUINavbar
      maxWidth="2xl"
      position="sticky"
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <div className="hidden sm:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color={item.href === pathname ? "primary" : "foreground"}
                href={item.href + search}
              >
                {t(`routes.${item.href}`)}
              </Link>
            </NavbarItem>
          ))}
        </div>
        <div className=" flex sm:hidden gap-4 justify-start ml-2">
          <span className={`${title({ size: "sm" })} font-serif`}>
            {t(
              "routes." +
                siteConfig.navItems.find((value) => value.href == pathname)
                  ?.href
            )}
          </span>
        </div>
      </NavbarContent>

      <NavbarContent className="sm:flex  basis-1 sm:basis-full" justify="end">
        <NavbarItem className="sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="flex">
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
        <NavbarMenuToggle
          className="sm:hidden flex"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={item.href === pathname ? "primary" : "foreground"}
                href={item.href + search}
                size="lg"
              >
                {t(`routes.${item.href}`)}
              </Link>
            </NavbarMenuItem>
          ))}
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
