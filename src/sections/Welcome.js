import { getStickerSVG } from "./Sticker.js";
import { createBubbleField, createSeaweed } from "./BubbleField.js";

export function createWelcomeSection(config) {
  const s = document.createElement("section");
  s.className = "section section-welcome";
  s.id = "section-welcome";
  s.setAttribute("aria-label", "Selamat datang");
  s.innerHTML = `<div class="ocean-bg" aria-hidden="true"></div><div class="bubbles-layer" aria-hidden="true"></div><div class="seaweeds-layer" aria-hidden="true"></div><div class="welcome-content"><div class="welcome-bear">${getStickerSVG("bearBrown")}</div><h1 class="welcome-title">${config.welcome.title}</h1><p class="welcome-subtitle">${config.welcome.subtitle}</p><button class="btn btn-primary btn-continue" type="button">${config.ui.nextButtonText}</button></div><div class="floating-stickers" aria-hidden="true"></div>`;
  createBubbleField(s.querySelector(".bubbles-layer"), 15);
  createSeaweed(s.querySelector(".seaweeds-layer"), 5);
  const fl = s.querySelector(".floating-stickers");
  ["fish","jellyfish","bubble","starfish"].forEach((t,i) => {
    const st = document.createElement("span"); st.className = `float-sticker float-${t}`;
    st.style.left = `${5+i*22}%`; st.style.top = `${15+i*15}%`;
    st.style.setProperty("--drift", `${Math.random()*30-15}px`); st.style.setProperty("--delay", `${i*1.2}s`);
    st.innerHTML = getStickerSVG(t); fl.appendChild(st);
  });
  s.querySelector(".btn-continue").addEventListener("click", () => {
    window.dispatchEvent(new CustomEvent("navigate", { detail: { to: "pin" } }));
  });
  return s;
}