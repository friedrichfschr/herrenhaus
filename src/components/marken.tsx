import { Accordion, AccordionItem } from "@heroui/accordion";
import { useEffect, useLayoutEffect, useState } from "react";
import { ImageCarouselBrands } from "./imageCarouselBrands";
import { t } from "i18next";
import i18n from "@/i18n";
import { Card, CardBody } from "@heroui/card";
export interface PhotoInfo {
  file: string;
  text: string;
  preise?: any;
  zusammensetzung?: string;
}

export interface Marken {
  name: string;
  text: string;
  folderPath: string;
}

export interface MarkeWithPhotos extends Marken {
  photos: PhotoInfo[];
}

async function getData<T>(path: string): Promise<T> {
  const response = await fetch(path, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    cache: "force-cache",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${path}: ${response.statusText}`);
  }

  const data: T = await response.json();
  return data;
}

const normalizePhotos = (raw: any[], folderPath: string): PhotoInfo[] => {
  return (raw ?? []).map((p: any) => {
    const rawPreise = p.preise ?? p.Preise ?? undefined;

    // Ensure file path is rooted under folderPath (assets in /public resolve from site root)
    const fileFromJson: string = p.file ?? "";
    const file = fileFromJson.startsWith("/")
      ? `${folderPath.replace(/\/$/, "")}${fileFromJson}`
      : `${folderPath.replace(/\/$/, "")}/${fileFromJson}`;

    return {
      file,
      text: p.text ?? "",
      preise: rawPreise,
      zusammensetzung: p.zusammensetzung, // present in your new format; leave undefined if absent
    } as PhotoInfo;
  });
};

/**
 * Loads all Marken and, for each Marke, loads `<folderPath>/photos.json`.
 * Change `PHOTOS_FILE_NAME` if your per-marke file is named differently.
 */
const PHOTOS_FILE_NAME = "texteZuPhotos.json";

export const fetchMarkenWithPhotos = async (): Promise<MarkeWithPhotos[]> => {
  // 1) Load marken.json
  const marken = await getData<Marken[]>("marken.json");

  // 2) In parallel, load each marke's photos.json
  const withPhotos = await Promise.all(
    marken.map(async (m) => {
      const photosPath = `${m.folderPath.replace(/\/$/, "")}/${PHOTOS_FILE_NAME}`;
      console.log("FOLDERPATH", m.folderPath, m.name);
      try {
        const rawPhotos = await getData<any[]>(photosPath);
        const photos = normalizePhotos(rawPhotos, m.folderPath);
        return { ...m, photos } as MarkeWithPhotos;
      } catch (e) {
        // If a brand has no photos file, fail softly and just return empty photos
        console.warn(`No photos for ${m.name} at ${photosPath}:`, e);
        return { ...m, photos: [] } as MarkeWithPhotos;
      }
    })
  );

  return withPhotos;
};

export default function Marken() {
  const [items, setItems] = useState<MarkeWithPhotos[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedKeys, setSelectedKeys] = useState(new Set([""]));
  const [tt, forceUpdate] = useState(0);
  console.log("FlipCard render");

  useLayoutEffect(() => {
    (async () => {
      try {
        const result = await fetchMarkenWithPhotos();
        setItems(result);
      } catch (e: any) {
        setError(e?.message ?? "Unknown error");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    i18n.on("languageChanged", (lan) => {
      console.log("language changedsdfsdf", lan);
      setLanguage(lan);
    });
  }, [i18n]);

  if (loading) return <p>Loading…</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  if (loading) return <p>Loading…</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  return (
    <Accordion
      variant="splitted"
      className="rounded-none overflow-visible"
      onSelectionChange={(selection) => {
        console.log("force", tt);
        setTimeout(() => forceUpdate((prev) => (prev == 0 ? 1 : 0)), 100);
        //@ts-ignore
        setSelectedKeys(selection);
      }}
      selectedKeys={selectedKeys}
    >
      {items.map((marke, i) => {
        const heightOfCarousel = document.getElementById(
          `carouselDiv${i}`
        )?.offsetHeight;
        const isOpen = selectedKeys.has(i.toString());
        return (
          <AccordionItem
            // onPress={() =>
            //   setTimeout(() => forceUpdate((prev) => (prev == 0 ? 1 : 0)), 100)
            // }
            className="rounded-none"
            key={i}
            aria-label={marke.name}
            title={marke.name}
            style={{
              paddingBottom: isOpen ? heightOfCarousel : 0,
            }}
          >
            <p>{t("festlich.markenTexte." + marke.name)}</p>
            <div
              className="max-w-[1700px] w-[100%] left-0 min-[1700px]:left-[calc((100vw-1700px)/2)]  absolute overflow-visible pt-5 "
              id={`carouselDiv${i}`}
            >
              <ImageCarouselBrands data={marke.photos} />
            </div>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
