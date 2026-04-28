from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import math

SRC = Path("logos")
OUT = Path("logos2")
GOLD_A = (255, 241, 168, 255)
GOLD_B = (233, 200, 77, 255)
GOLD_C = (168, 132, 29, 255)
INK = (21, 19, 11, 255)
MOSS = (37, 53, 35, 255)


def font(size, bold=False, serif=False):
    names = (
        ["C:/Windows/Fonts/georgiab.ttf", "C:/Windows/Fonts/georgia.ttf"]
        if serif
        else ["C:/Windows/Fonts/arialbd.ttf", "C:/Windows/Fonts/arial.ttf"]
    )
    for name in names if bold else reversed(names):
        if Path(name).exists():
            return ImageFont.truetype(name, size)
    return ImageFont.load_default(size)


def gradient(size, c1=GOLD_A, c2=GOLD_B, c3=GOLD_C):
    w, h = size
    img = Image.new("RGBA", size)
    pix = img.load()
    for y in range(h):
        for x in range(w):
            t = (x / max(w - 1, 1) + y / max(h - 1, 1)) / 2
            a, b, u = (c1, c2, t / 0.55) if t < 0.55 else (c2, c3, (t - 0.55) / 0.45)
            pix[x, y] = tuple(int(a[i] * (1 - u) + b[i] * u) for i in range(4))
    return img


def masked(size, draw_mask):
    mask = Image.new("L", size, 0)
    d = ImageDraw.Draw(mask)
    draw_mask(d)
    return Image.composite(gradient(size), Image.new("RGBA", size, (0, 0, 0, 0)), mask)


def shadow(base, layer):
    alpha = layer.getchannel("A").filter(ImageFilter.GaussianBlur(5))
    sh = Image.new("RGBA", base.size, (0, 0, 0, 80))
    base.alpha_composite(Image.composite(sh, Image.new("RGBA", base.size, (0, 0, 0, 0)), alpha), (0, 5))
    base.alpha_composite(layer)


def save_icon(path, painter, size=(300, 300)):
    img = Image.new("RGBA", size, (0, 0, 0, 0))
    painter(img, ImageDraw.Draw(img))
    path.parent.mkdir(parents=True, exist_ok=True)
    img.save(path)


def hair(img, d, label=None):
    layer = masked(img.size, lambda m: (
        m.polygon([(62, 154), (140, 145), (180, 138), (181, 92), (235, 22), (219, 84), (220, 132), (238, 182), (211, 219), (166, 216), (138, 183), (82, 187)]),
        m.ellipse((133, 143, 208, 225), fill=255),
    ))
    shadow(img, layer)
    d.line([(72, 159), (116, 153), (164, 154)], fill=(45, 37, 18, 115), width=7)
    d.arc((96, 118, 225, 231), 48, 164, fill=GOLD_A, width=6)
    d.line([(95, 189), (132, 204), (207, 190)], fill=GOLD_B, width=8)
    if label:
        d.text((150, 244), label, fill=GOLD_B, font=font(26, True, True), anchor="mm")


def check(img, d):
    d.ellipse((42, 42, 258, 258), fill=INK)
    d.ellipse((58, 58, 242, 242), outline=GOLD_B, width=12)
    d.line([(95, 151), (130, 186), (208, 98)], fill=GOLD_B, width=24, joint="curve")


def star(img, d):
    pts = []
    for i in range(10):
        r = 108 if i % 2 == 0 else 48
        a = -math.pi / 2 + i * math.pi / 5
        pts.append((150 + r * math.cos(a), 150 + r * math.sin(a)))
    layer = masked(img.size, lambda m: m.polygon(pts, fill=255))
    shadow(img, layer)
    d.ellipse((40, 40, 260, 260), outline=GOLD_B, width=5)


def badge(img, d, text):
    d.rounded_rectangle((50, 75, 250, 225), 28, fill=INK)
    for y in (107, 150, 193):
        d.line((77, y, 223, y), fill=GOLD_B, width=16)
    d.text((150, 151), text, fill=GOLD_A, font=font(56, True), anchor="mm")


def faq(img, d):
    d.text((150, 135), "?", fill=GOLD_B, font=font(150, True), anchor="mm")
    d.ellipse((131, 235, 169, 273), fill=GOLD_B)
    d.arc((70, 60, 230, 195), 200, 340, fill=GOLD_A, width=7)


def care(img, d):
    d.polygon([(150, 44), (232, 76), (232, 142), (150, 260), (68, 142), (68, 76)], fill=INK)
    d.line([(150, 44), (232, 76), (232, 142), (150, 260), (68, 142), (68, 76), (150, 44)], fill=GOLD_B, width=12)
    d.line((150, 96, 150, 199), fill=GOLD_B, width=24)
    d.line((99, 147, 204, 147), fill=GOLD_B, width=24)


def book(img, d):
    d.rounded_rectangle((65, 76, 150, 226), 8, fill=INK, outline=GOLD_B, width=9)
    d.rounded_rectangle((150, 76, 235, 226), 8, fill=INK, outline=GOLD_B, width=9)
    for x in (88, 176):
        for y, w in [(112, 36), (145, 42), (178, 31)]:
            d.line((x, y, x + w, y), fill=GOLD_B, width=9)


def growth(img, d):
    d.line((60, 225, 240, 225), fill=INK, width=18)
    d.line((78, 207, 128, 150, 170, 111, 224, 75), fill=GOLD_B, width=12, joint="curve")
    d.ellipse((126, 110, 198, 160), fill=GOLD_A)
    d.line((71, 229, 229, 229), fill=GOLD_C, width=6)


def clock(img, d):
    d.ellipse((49, 49, 251, 251), fill=INK, outline=GOLD_B, width=13)
    d.line((150, 91, 150, 157, 198, 188), fill=GOLD_B, width=17, joint="curve")
    d.line((91, 76, 66, 101), fill=GOLD_A, width=12)
    d.line((209, 76, 234, 101), fill=GOLD_A, width=12)


def cost(img, d):
    d.ellipse((44, 44, 256, 256), fill=INK, outline=GOLD_B, width=12)
    d.arc((86, 82, 220, 219), 110, 250, fill=GOLD_B, width=15)
    d.line((76, 134, 175, 134), fill=GOLD_B, width=15)
    d.line((76, 166, 164, 166), fill=GOLD_B, width=15)


def consult(img, d):
    d.ellipse((71, 79, 153, 161), fill=GOLD_B)
    d.ellipse((149, 79, 231, 161), fill=INK, outline=GOLD_B, width=10)
    d.rounded_rectangle((62, 163, 245, 231), 28, fill=INK, outline=GOLD_B, width=10)


def mail(img, d):
    d.rounded_rectangle((55, 88, 245, 216), 22, fill=INK, outline=GOLD_B, width=12)
    d.line((66, 105, 150, 177, 234, 105), fill=GOLD_B, width=12)


def phone(img, d):
    d.rounded_rectangle((95, 43, 205, 257), 27, fill=INK, outline=GOLD_B, width=12)
    d.ellipse((140, 214, 160, 234), fill=GOLD_A)
    d.arc((48, 96, 105, 206), 115, 245, fill=GOLD_B, width=10)
    d.arc((195, 96, 252, 206), -65, 65, fill=GOLD_B, width=10)


def social(img, d, camera):
    d.ellipse((35, 35, 265, 265), fill=INK)
    if camera:
        d.rounded_rectangle((82, 82, 218, 218), 36, outline=GOLD_B, width=18)
        d.ellipse((115, 115, 185, 185), outline=GOLD_A, width=15)
        d.ellipse((184, 94, 206, 116), fill=GOLD_A)
    else:
        for box in [(64, 122, 120, 178), (168, 63, 224, 119), (176, 176, 232, 232)]:
            d.ellipse(box, fill=GOLD_B)
        d.line((118, 136, 170, 105), fill=GOLD_B, width=14)
        d.line((118, 164, 176, 193), fill=GOLD_B, width=14)


def partner(path, title):
    img = Image.new("RGBA", (560, 280), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle((20, 52, 540, 228), 18, fill=INK, outline=GOLD_B, width=7)
    d.ellipse((67, 85, 177, 195), fill=GOLD_B)
    words = [w for w in title.replace("-", " ").split() if w.lower() not in {"logo", "png"}]
    initials = "".join(w[0] for w in words[:2]).upper() or "P"
    display = " ".join(words)
    if len(display) > 25:
        display = display[:23] + "..."
    d.text((122, 142), initials, fill=INK, font=font(32, True, True), anchor="mm")
    d.text((205, 128), display, fill=GOLD_B, font=font(34, True, True), anchor="lm")
    d.text((207, 164), "PARTNER SALON", fill=GOLD_A, font=font(16, False), anchor="lm")
    d.line((205, 185, 435, 185), fill=GOLD_C, width=5)
    path.parent.mkdir(parents=True, exist_ok=True)
    img.save(path)


def painter_for(rel):
    s = rel.as_posix().lower()
    if s.startswith("partner-logos/"):
        return None
    if "check" in s:
        return check
    if "en-vlag" in s:
        return lambda i, d: badge(i, d, "EN")
    if "nl-vlag" in s:
        return lambda i, d: badge(i, d, "NL")
    if "instagram" in s:
        return lambda i, d: social(i, d, True)
    if "facebook" in s:
        return lambda i, d: social(i, d, False)
    if "faq" in s:
        return faq
    if "kennis" in s:
        return book
    if "zorg" in s or "expertise" in s or "betrouwbaar" in s or "veiligheid" in s:
        return care
    if "ster" in s:
        return star
    if "mail" in s or "email" in s:
        return mail
    if "mobiel" in s or "telefoon" in s:
        return phone
    if "consult" in s or "analyse" in s:
        return consult
    if "tijd" in s or "herstel" in s or "resultaat" in s:
        return clock
    if "kosten" in s or "tarief" in s:
        return cost
    if "haar" in s or "graft" in s or "implant" in s or "groei" in s or "dichtheid" in s or "regeneratie" in s:
        return growth
    return lambda i, d: hair(i, d, "45" if "favicon" in s else None)


for file in SRC.rglob("*.png"):
    rel = file.relative_to(SRC)
    out = OUT / rel
    if rel.as_posix().startswith("partner-logos/"):
        partner(out, file.stem)
    else:
        save_icon(out, painter_for(rel))
