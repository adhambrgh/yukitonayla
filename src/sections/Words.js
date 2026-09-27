import { getStickerSVG } from "./Sticker.js";
import { createBubbleField } from "./BubbleField.js";

export function createWordsSection(config) {
  const s = document.createElement("section");
  s.className = "section section-words";
  s.id = "section-words";
  s.setAttribute("aria-label", "Kata-kata, harapan & doa");
  s.style.display = "none";
  const cards = config.words.sections.map((sec,i) => `<div class="word-card" style="animation-delay:${i*0.2}s"><div class="word-icon">${getStickerSVG(sec.icon)}</div><h2 class="word-label">${sec.label}</h2><div class="word-text">${sec.content}</div></div>`).join("");
  const fs = ["fish","jellyfish","heart","bubble"].map((t,i) => `<span class="float-sticker float-${t}" style="left:${10+i*25}%;top:${20+i*15}%">${getStickerSVG(t)}</span>`).join("");
  s.innerHTML = `<div class="ocean-bg" aria-hidden="true"></div><div class="bubbles-layer" aria-hidden="true"></div><div class="words-content"><h1 class="section-heading">${config.words.title}</h1><div class="words-grid">${cards}</div><div class="floating-stickers" aria-hidden="true">${fs}</div></div>`;
  createBubbleField(s.querySelector(".bubbles-layer"), 6);
  return s;
}