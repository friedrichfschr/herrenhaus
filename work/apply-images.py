from pathlib import Path
root=Path(r'C:/Users/localadmin/Programming/herrenhaus')
for name in ['src/pages/about.tsx','src/components/imageCarouselBrands.tsx']:
    p=root/name
    text=p.read_text(encoding='utf-8')
    text=text.replace('import { Image } from "@heroui/image";', 'import { SiteImage as Image, imageSources } from "@/components/siteImage";')
    if name.endswith('about.tsx'):
        text=text.replace('src="/Start/Herrenhaus_Fischer_Außenansicht.webp"','src="/Start/Herrenhaus_Fischer_Außenansicht.webp"\n            {...imageSources("/Start/Herrenhaus_Fischer_Außenansicht.webp", "(max-width: 640px) 250px, 360px")}')
        text=text.replace('src="/Start/FamilieFischer.webp"','src="/Start/FamilieFischer.webp"\n            {...imageSources("/Start/FamilieFischer.webp", "360px")}')
    p.write_text(text,encoding='utf-8')
