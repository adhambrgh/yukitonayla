import { getStickerSVG } from "./Sticker.js";
import { createBubbleField } from "./BubbleField.js";

export function createPhotosSection(config) {
  const s = document.createElement("section");
  s.className = "section section-photos";
  s.id = "section-photos";
  s.setAttribute("aria-label", "Foto moments");
  s.style.display = "none";
  const cards = config.photos.items.map((p,i) => `<figure class="photo-card" style="animation-delay:${i*0.15}s"><div class="photo-placeholder"><svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="200" height="200" rx="12" fill="#CAF0F8"/><circle cx="100" cy="80" r="28" fill="#48CAE4" opacity="0.5"/><ellipse cx="100" cy="150" rx="50" ry="30" fill="#48CAE4" opacity="0.3"/></svg></div><figcaption class="photo-caption">${p.caption}</figcaption></figure>`).join("");
  const fs = config.photos.stickers ? ["fish","jellyfish","starfish","bubble","shell"].map((t,i) => `<span class="float-sticker float-${t}" style="left:${15+i*18}%;top:${25+i*12}%">${getStickerSVG(t)}</span>`).join("") : "";
  s.innerHTML = `<div class="ocean-bg" aria-hidden="true"></div><div class="bubbles-layer" aria-hidden="true"></div><div class="photos-content"><h1 class="section-heading">${config.photos.title}</h1><p class="section-subtitle">${config.photos.subtitle}</p><div class="photos-grid">${cards}</div><div class="floating-stickers" aria-hidden="true">${fs}</div></div>`;
  createBubbleField(s.querySelector(".bubbles-layer"), 8);
  return s;
}