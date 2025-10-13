import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { useZustand } from "@/zustand";
import { act, useEffect, useRef, useState } from "react";

export default function DocsPage() {
  const sections = useRef([]);

  const { activeSection, setActiveSection } = useZustand();
  const handleScroll = () => {
    const pageYOffset = window.pageYOffset;
    let newActiveSection = null;

    sections.current.forEach((section) => {
      //@ts-ignore
      const sectionOffsetTop = section.offsetTop - 500;
      //@ts-ignore
      const sectionHeight = section.offsetHeight;

      if (
        pageYOffset >= sectionOffsetTop &&
        pageYOffset < sectionOffsetTop + sectionHeight
      ) {
        //@ts-ignore
        newActiveSection = section.id;
      }
    });
    //@ts-ignore
    if (newActiveSection != null) {
      if (newActiveSection == "/") setActiveSection(newActiveSection);
      else setActiveSection("/#" + newActiveSection);
    }
  };

  useEffect(() => {
    //@ts-ignore
    sections.current = document.querySelectorAll("[data-section]");
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <DefaultLayout>
      <section>
        <div
          id="/"
          data-section
          className=" max-w-lg text-center justify-center bg-red-200 h-400 py-10"
        >
          <h1 className={title()}>Start</h1>
        </div>

        <div
          id="festlich"
          data-section
          className=" max-w-lg text-center justify-center bg-green-200 h-400 py-10"
        >
          <h1 className={title()}>Festlich</h1>
        </div>
        <div
          id="herrenmode"
          data-section
          className=" max-w-lg text-center justify-center bg-blue-200 h-400 py-10"
        >
          <h1 className={title()}>Herrenmode</h1>
        </div>
      </section>
    </DefaultLayout>
  );
}
