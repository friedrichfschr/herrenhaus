from pathlib import Path
from PIL import Image
import json
root=Path(r'C:/Users/localadmin/Programming/herrenhaus')
manifest={}
for p in (root/'public').rglob('*.webp'):
    if '.w' in p.stem: continue
    with Image.open(p) as im:
        variants=[]
        for w in (400,800,1200):
            if w >= im.width: continue
            out=p.with_name(p.stem+f'.w{w}.webp')
            resized=im.resize((w,round(im.height*w/im.width)),Image.Resampling.LANCZOS)
            resized.save(out,'WEBP',quality=82,method=6)
            variants.append({'src':'/'+out.relative_to(root/'public').as_posix(),'width':w})
        variants.append({'src':'/'+p.relative_to(root/'public').as_posix(),'width':im.width})
        manifest['/'+p.relative_to(root/'public').as_posix()]={'width':im.width,'height':im.height,'variants':variants}
(root/'src'/'image-manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print('Responsive image sets:',len(manifest))
