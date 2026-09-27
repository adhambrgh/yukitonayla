import { getStickerSVG } from "./Sticker.js";
import { createBubbleField, createSeaweed } from "./BubbleField.js";

export function createPinSection(config) {
  const s = document.createElement("section");
  s.className = "section section-pin";
  s.id = "section-pin";
  s.setAttribute("aria-label", "Masukkan PIN");
  s.style.display = "none";
  s.innerHTML = `<div class="ocean-bg" aria-hidden="true"></div><div class="bubbles-layer" aria-hidden="true"></div><div class="seaweeds-layer" aria-hidden="true"></div><div class="pin-content"><div class="pin-bear">${getStickerSVG("bearWhite")}</div><h1 class="pin-title">${config.pin.title}</h1><p class="pin-subtitle">${config.pin.subtitle}</p><div class="pin-input-group"><input type="password" class="pin-input" id="pin-input" maxlength="4" inputmode="numeric" pattern="[0-9]*" placeholder="${config.pin.placeholder}" aria-label="Masukkan PIN 4 digit" autocomplete="off"/><button class="btn btn-primary" type="button" id="pin-btn">${config.pin.buttonText}</button></div><p class="pin-feedback" id="pin-feedback" aria-live="polite"></p></div><div class="floating-stickers" aria-hidden="true"></div>`;
  createBubbleField(s.querySelector(".bubbles-layer"), 10);
  createSeaweed(s.querySelector(".seaweeds-layer"), 3);
  const fl = s.querySelector(".floating-stickers");
  ["fish","shell","coral","bubble"].forEach((t,i) => {
    const st = document.createElement("span"); st.className = `float-sticker float-${t}`;
    st.style.left = `${10+i*20}%`; st.style.top = `${20+i*12}%`;
    st.style.setProperty("--drift", `${Math.random()*20-10}px`); st.style.setProperty("--delay", `${i*1.5}s`);
    st.innerHTML = getStickerSVG(t); fl.appendChild(st);
  });
  const pinInput = s.querySelector("#pin-input");
  const pinBtn = s.querySelector("#pin-btn");
  const feedback = s.querySelector("#pin-feedback");
  const handlePin = () => {
    const v = pinInput.value.trim();
    if (v === config.pin) {
      feedback.className = "pin-feedback pin-success";
      feedback.textContent = config.pin.successMessage;
      pinInput.value = "";
      setTimeout(() => window.dispatchEvent(new CustomEvent("navigate", { detail: { to: "message" } })), 1200);
    } else {
      feedback.className = "pin-feedback pin-error";
      feedback.textContent = config.pin.errorMessage;
      pinInput.value = "";
      pinInput.focus();
    }
  };
  pinBtn.addEventListener("click", handlePin);
  pinInput.addEventListener("keydown", e => { if (e.key === "Enter") handlePin(); });
  pinInput.addEventListener("input", () => { pinInput.value = pinInput.value.replace(/[^0-9]/g,"").slice(0,4); feedback.textContent=""; feedback.className="pin-feedback"; });
  return s;
}