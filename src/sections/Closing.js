import { getStickerSVG } from "./Sticker.js";
import { createBubbleField } from "./BubbleField.js";

export function createClosingSection(config) {
  const s = document.createElement("section");
  s.className = "section section-closing";
  s.id = "section-closing";
  s.setAttribute("aria-label", "Penutup");
  s.style.display = "none";
  const fs = ["fish","jellyfish","heart","starfish","bubble","shell"].map((t,i) => `<span class="float-sticker float-${t}" style="left:${5+i*16}%;top:${10+i*14}%">${getStickerSVG(t)}</span>`).join("");
  s.innerHTML = `<div class="ocean-bg" aria-hidden="true"></div><div class="bubbles-layer" aria-hidden="true"></div><div class="closing-content"><div class="closing-bear">${getStickerSVG("bearBrown")}</div><div class="closing-card"><h1 class="closing-title">${config.closing.title}</h1><div class="closing-message">${config.closing.message}</div><div class="closing-final">${config.closing.finalMessage}</div><p class="closing-signature">${config.closing.signature}</p></div></div><div class="floating-stickers" aria-hidden="true">${fs}</div><div class="branding">${config.closing.branding}</div>`;
  createBubbleField(s.querySelector(".bubbles-layer"), 10);
  const fl = s.querySelector(".floating-stickers");
  ["fish","jellyfish","heart","starfish","bubble","shell"].forEach((t,i) => {
    const st = document.createElement("span"); st.className = `float-sticker float-${t}`;
    st.style.left = `${5+i*16}%`; st.style.top = `${10+i*14}%`;
    st.style.setProperty("--drift", `${Math.random()*25-12}px`); st.style.setProperty("--delay", `${i*1.3}s`);
    st.innerHTML = getStickerSVG(t); fl.appendChild(st);
  });
  return s;
}