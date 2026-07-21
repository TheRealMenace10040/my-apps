from PIL import Image, ImageDraw, ImageFont
import os

OUT = os.path.join(os.path.dirname(__file__), "..", "public", "icons")
os.makedirs(OUT, exist_ok=True)

BG = (13, 15, 18, 255)       # matches --bg
ACCENT = (94, 234, 212, 255)  # matches --accent

def make_icon(size, path, corner_radius_ratio=0.22):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    r = int(size * corner_radius_ratio)
    draw.rounded_rectangle([0, 0, size - 1, size - 1], radius=r, fill=BG)

    # Rocket emoji glyph via system font; fall back to a simple accent circle if unavailable.
    text = "\U0001F680"  # 🚀
    font = None
    for font_path in [
        r"C:\Windows\Fonts\seguiemj.ttf",
    ]:
        if os.path.exists(font_path):
            try:
                font = ImageFont.truetype(font_path, int(size * 0.6))
                break
            except Exception:
                pass

    if font:
        bbox = draw.textbbox((0, 0), text, font=font, embedded_color=True)
        w, h = bbox[2] - bbox[0], bbox[3] - bbox[1]
        pos = ((size - w) / 2 - bbox[0], (size - h) / 2 - bbox[1])
        draw.text(pos, text, font=font, embedded_color=True)
    else:
        cx, cy = size / 2, size / 2
        rad = size * 0.28
        draw.ellipse([cx - rad, cy - rad, cx + rad, cy + rad], fill=ACCENT)

    img.save(path)

make_icon(180, os.path.join(OUT, "apple-touch-icon.png"))
make_icon(192, os.path.join(OUT, "icon-192.png"))
make_icon(512, os.path.join(OUT, "icon-512.png"))
print("done")
