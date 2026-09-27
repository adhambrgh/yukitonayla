import { siteConfig } from "./data/content.js";
import { createWelcomeSection } from "./sections/Welcome.js";
import { createPinSection } from "./sections/Pin.js";
import { createMessageSection } from "./sections/Message.js";
import { createPhotosSection } from "./sections/Photos.js";
import { createWordsSection } from "./sections/Words.js";
import { createVideosSection } from "./sections/Videos.js";
import { createClosingSection } from "./sections/Closing.js";
import { MusicPlayer } from "./components/MusicPlayer.js";

class App {
  constructor() {
    this.sections = [];
    this.currentSection = 0;
    this.musicPlayer = new MusicPlayer(siteConfig.music);
    this.init();
  }
  init() {
    this.buildSections();
    this.setupNavigation();
    this.setupIntersectionObserver();
    this.setupReducedMotion();
  }
  buildSections() {
    const main = document.getElementById("main");
    this.sections = [
      createWelcomeSection(siteConfig),
      createPinSection(siteConfig),
      createMessageSection(siteConfig, this.musicPlayer),
      createPhotosSection(siteConfig),
      createWordsSection(siteConfig),
      createVideosSection(siteConfig),
      createClosingSection(siteConfig),
    ];
    this.sections.forEach(s => main.appendChild(s));
  }
  setupNavigation() {
    window.addEventListener("navigate", e => this.goTo(e.detail.to));
  }
  setupIntersectionObserver() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if(e.isIntersecting) e.target.classList.add("is-visible"); });
    }, { threshold: 0.5 });
    this.sections.forEach(s => obs.observe(s));
  }
  setupReducedMotion() {
    if(window.matchMedia("(prefers-reduced-motion:reduce)").matches) document.body.classList.add("reduced-motion");
  }
  goTo(id) {
    const idx = this.sections.findIndex(s => s.id === id);
    if(idx === -1) return;
    this.sections[idx].scrollIntoView({behavior:"smooth"});
    this.currentSection = idx;
  }
}
document.addEventListener("DOMContentLoaded", () => new App());