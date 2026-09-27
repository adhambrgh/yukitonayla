import os
from PIL import Image

SRC = "assets/images_orig"
DST = "assets/images"

# sticker/deco: shown at 40-70px, plus one 631px "mascot" hero use
DECO = ["1.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png"]
BG = "2.png"

DECO_MAX = 320
BG_MAX_W = 1440

total_before = total_after = 0

for name in DECO:
    src = os.path.join(SRC, name)
    before = os.path.getsize(src)
    im = Image.open(src).convert("RGBA")
    if max(im.size) > DECO_MAX:
        ratio = DECO_MAX / max(im.size)
        im = im.resize((round(im.width * ratio), round(im.height * ratio)), Image.LANCZOS)
    out = os.path.join(DST, name)
    im.save(out, "PNG", optimize=True)
    after = os.path.getsize(out)
    total_before += before
    total_after += after
    print(f"{name:8} {im.width}x{im.height:<5} {before/1024:7.0f}KB -> {after/1024:6.0f}KB")

src = os.path.join(SRC, BG)
before = os.path.getsize(src)
im = Image.open(src).convert("RGB")
if im.width > BG_MAX_W:
    ratio = BG_MAX_W / im.width
    im = im.resize((BG_MAX_W, round(im.height * ratio)), Image.LANCZOS)
out = os.path.join(DST, "2.png")
im.save(out, "PNG", optimize=True)
after = os.path.getsize(out)
total_before += before
total_after += after
print(f"{BG:8} {im.width}x{im.height:<5} {before/1024:7.0f}KB -> {after/1024:6.0f}KB")

print(f"\nTOTAL {total_before/1024/1024:.2f} MB -> {total_after/1024/1024:.2f} MB")
