"""Generate six on-brand abstract thumbnails for the portfolio grid.
Each is a layered gradient with a halftone dot field, tinted per-project."""
import math
import random
from PIL import Image, ImageDraw, ImageFilter

W, H = 1280, 960

# (name, base color, accent color)
PROJECTS = [
    ("northwind", (28, 33, 48), (240, 169, 60)),
    ("verdant",   (24, 40, 36), (224, 97, 60)),
    ("cassette",  (40, 28, 44), (242, 211, 120)),
    ("meridian",  (18, 26, 42), (108, 156, 214)),
    ("ploom",     (44, 30, 30), (224, 124, 96)),
    ("atlas-co",  (22, 34, 40), (108, 198, 176)),
]


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def make(name, base, accent, seed):
    rnd = random.Random(seed)
    img = Image.new("RGB", (W, H), base)
    px = img.load()
    # diagonal gradient base
    top = lerp(base, (0, 0, 0), 0.25)
    bot = lerp(base, accent, 0.18)
    for y in range(H):
        for x in range(0, W, 1):
            t = (x / W) * 0.5 + (y / H) * 0.5
            px[x, y] = lerp(top, bot, t)

    draw = ImageDraw.Draw(img, "RGBA")

    # soft accent blob
    blob = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    bd = ImageDraw.Draw(blob)
    cx, cy = rnd.randint(int(W * 0.3), int(W * 0.8)), rnd.randint(int(H * 0.2), int(H * 0.7))
    r = rnd.randint(260, 380)
    bd.ellipse([cx - r, cy - r, cx + r, cy + r], fill=accent + (140,))
    blob = blob.filter(ImageFilter.GaussianBlur(170))
    img = Image.alpha_composite(img.convert("RGBA"), blob).convert("RGB")
    draw = ImageDraw.Draw(img, "RGBA")

    # halftone dot field, density falls off from a focal point
    fx, fy = rnd.uniform(0.2, 0.8) * W, rnd.uniform(0.2, 0.8) * H
    step = 30
    maxd = math.hypot(W, H)
    for gy in range(0, H + step, step):
        for gx in range(0, W + step, step):
            d = math.hypot(gx - fx, gy - fy) / maxd
            rad = max(0.0, (1.0 - d) * 11.0)
            if rad < 0.6:
                continue
            jitter = rnd.uniform(-2, 2)
            a = int(70 * (1.0 - d) + 18)
            col = accent if (gx + gy) % (step * 2) == 0 else (244, 242, 236)
            draw.ellipse(
                [gx - rad + jitter, gy - rad, gx + rad + jitter, gy + rad],
                fill=col + (a,),
            )

    # thin baseline rule for an editorial feel
    draw.line([(60, H - 90), (W - 60, H - 90)], fill=(244, 242, 236, 40), width=2)
    img.save(f"public/work/{name}.jpg", quality=86, optimize=True)
    print("wrote", name)


for i, (n, b, a) in enumerate(PROJECTS):
    make(n, b, a, i + 7)
