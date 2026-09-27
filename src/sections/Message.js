import { getStickerSVG } from "./Sticker.js";
import { createBubbleField, createFallingHearts, createSeaweed } from "./BubbleField.js";
import { MusicPlayer } from "./MusicPlayer.js";

export function createMessageSection(config, musicPlayer) {
  const s = document.createElement("section");
  s.className = "section section-message";
  s.id = "section-message";
  s.setAttribute("aria-label", "Ucapan");
  s.style.display = "none";
  s.innerHTML = `<div class="ocean-bg" aria-hidden="true"></div><div class="bubbles-layer" aria-hidden="true"></div><div class="falling-hearts-layer" aria-hidden="true"></div><div class="seaweeds-layer" aria-hidden="true"></div><div class="message-content"><div class="message-bear">${getStickerSVG("bearBrown")}</div><div class="message-card"><h1 class="message-title">${config.message.title}</h1><div class="message-text">${config.message.content}</div></div><div class="music-container" id="music-container"></div></div>`;
  createBubbleField(s.querySelector(".bubbles-layer"), 12);
  createFallingHearts(s.querySelector(".falling-hearts-layer"), 15);
  createSeaweed(s.querySelector(".seaweeds-layer"), 4);
  s.querySelector("#music-container").appendChild(musicPlayer.createControl());
  setTimeout(() => musicPlayer.play(), 800);
  return s;
}