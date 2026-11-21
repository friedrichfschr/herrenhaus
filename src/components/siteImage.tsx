import { Image, type ImageProps } from "@heroui/image";
import { useEffect, useRef, useState } from "react";
import manifest from "@/image-manifest.json";

export function imageSources(src: string, sizes: string) {
  const path = `/${src.trim().replace(/^\//, "")}`;
  const entry = manifest[path as keyof typeof manifest];
  return entry ? {
    srcSet: entry.variants.map((variant) => `${encodeURI(variant.src)} ${variant.width}w`).join(", "),
    sizes,
  } : {};
}

// HeroUI's detached Image() loader never finishes with loading="lazy".
// Use its existing styling while the actual DOM image handles loading.
export function SiteImage({ src = "", loading = "lazy", sizes = "(max-width: 640px) 90vw, 400px", ...props }: ImageProps) {
  const ref = useRef<HTMLImageElement>(null);
  const [nearViewport, setNearViewport] = useState(loading === "eager");

  useEffect(() => {
    if (nearViewport || !ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNearViewport(true);
        observer.disconnect();
      }
    }, { rootMargin: "400px" });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [nearViewport]);

  // Also gates the blurred duplicate, which HeroUI otherwise downloads eagerly.
  const path = `/${src.trim().replace(/^\//, "")}`;
  const entry = manifest[path as keyof typeof manifest];
  const fallback = entry?.variants.find((variant) => variant.width >= 800)?.src ?? src;
  return <Image {...props} as="img" ref={ref} decoding="async" loading={loading}
    style={{ ...(entry ? { aspectRatio: `${entry.width} / ${entry.height}` } : {}), ...props.style }}
    src={nearViewport ? fallback : undefined}
    {...(nearViewport ? imageSources(src, sizes) : {})} />;
}
