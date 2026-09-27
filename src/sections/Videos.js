import { getStickerSVG } from "./Sticker.js";
import { createBubbleField } from "./BubbleField.js";

export function createVideosSection(config) {
  const s = document.createElement("section");
  s.className = "section section-videos";
  s.id = "section-videos";
  s.setAttribute("aria-label", "Video moments");
  s.style.display = "none";
  const cards = config.videos.items.map((v,i) => `<div class="video-card" style="animation-delay:${i*0.2}s"><div class="video-player"><video controls preload="metadata" playsinline muted aria-label="${v.alt||'Video'}"><source src="${v.src}" type="video/mp4"/>Browser tidak mendukung video.</video></div><figcaption class="video-caption">${v.caption||''}</figcaption></div>`).join("");
  const fs = ["fish","jellyfish","starfish","bubble","heart"].map((t,i) => `<span class="float-sticker float-${t}" style="left:${5+i*20}%;top:${25+i*12}%">${getStickerSVG(t)}</span>`).join("");
  s.innerHTML = `<div class="ocean-bg" aria-hidden="true"></div><div class="bubbles-layer" aria-hidden="true"></div><div class="videos-content"><h1 class="section-heading">${config.videos.title}</h1><p class="section-subtitle">${config.videos.subtitle}</p><div class="videos-grid">${cards}</div><div class="floating-stickers" aria-hidden="true">${fs}</div></div>`;
  createBubbleField(s.querySelector(".bubbles-layer"), 8);
  return s;
}