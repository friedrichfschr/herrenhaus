import { Accordion, AccordionItem } from "@heroui/accordion";
import { useEffect, useState } from "react";
import { t } from "i18next";

import { markenFile, MarkeInterface } from "../markenFile.ts";

import { ImageCarouselBrands } from "./imageCarouselBrands";

import i18n from "@/i18n";

export interface PhotoInfo {
  file: string;
  text: string;
  preise?: any;
  zusammensetzung?: string;
}

export interface MarkeWithPhotos extends MarkeInterface {
  photos: PhotoInfo[];
}

async function getData<T>(path: string): Promise<T> {
  const response = await fetch(path, {
    cache: "force-cache",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${path}: ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

const normalizePhotos = (raw: any[], TextDateiName: string): PhotoInfo[] => {
  return (raw ?? []).map((p: any) => {
    const rawPreise = p.preise ?? p.Preise ?? undefined;

    // Ensure file path is rooted under TextDateiName (assets in /public resolve from site root)

    return {
      file: "/marken/" + TextDateiName + "/" + p.file,
      text: p.text ?? "",
      preise: rawPreise,
      zusammensetzung: p.zusammensetzung, // present in your new format; leave undefined if absent
    } as PhotoInfo;
  });
};

export const fetchMarkenWithPhotos = async (): Promise<MarkeWithPhotos[]> => {
  return Promise.all(markenFile.map(async (m) => {
    if (!m.TextDateiName) return { ...m, photos: [] };
    try {
      const rawPhotos = await getData<any[]>(
        `/marken/texte/${m.TextDateiName}.json`,
      );
      return { ...m, photos: normalizePhotos(rawPhotos, m.TextDateiName) };
    } catch (e) {
      console.warn(`No photos for ${m.name}`, e);
      return { ...m, photos: [] };
    }
  }));
};

export default function Marken() {
  const [items, setItems] = useState<MarkeWithPhotos[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedKeys, setSelectedKeys] = useState(new Set([""]));
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const result = await fetchMarkenWithPhotos();
        if (!cancelled) setItems(result);
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? "Unknown error");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    i18n.on("languageChanged", (lan) => {
      setLanguage(lan);
    });
  }, [i18n]);

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <Accordion
      className="rounded-none overflow-visible"
      selectedKeys={selectedKeys}
      variant="splitted"
      onSelectionChange={(selection) => {
        setTimeout(() => forceUpdate((prev) => (prev == 0 ? 1 : 0)), 100);
        //@ts-ignore
        setSelectedKeys(selection);
      }}
    >
      {items.map((marke, i) => {
        const heightOfCarousel = document.getElementById(
          `carouselDiv${i}`,
        )?.offsetHeight;
        const isOpen = selectedKeys.has(i.toString());

        return (
          <AccordionItem
            // onPress={() =>
            //   setTimeout(() => forceUpdate((prev) => (prev == 0 ? 1 : 0)), 100)
            // }
            key={i}
            aria-label={marke.name}
            className="rounded-none"
            style={{
              paddingBottom: isOpen ? heightOfCarousel : 0,
            }}
            title={marke.name}
          >
            <p>{t("festlich.markenTexte." + marke.name)}</p>
            <div
              className="max-w-[1700px] w-[100%] left-0 min-[1700px]:left-[calc((100vw-1700px)/2)]  absolute overflow-visible pt-5 "
              id={`carouselDiv${i}`}
            >
              {marke.photos.length > 0 && (
                <ImageCarouselBrands data={marke.photos} />
              )}
            </div>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
