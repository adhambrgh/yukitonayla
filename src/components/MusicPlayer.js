export class MusicPlayer {
  constructor(config) {
    this.config = config;
    this.audio = new Audio(config.src);
    this.audio.volume = config.volume || 0.4;
    this.audio.loop = true;
    this.isPlaying = false;
    this.container = null;
    this.toggleButton = null;
    this.playFallback = null;
  }
  async play() {
    try {
      await this.audio.play();
      this.isPlaying = true;
      this.updateUI();
      return true;
    } catch {
      this.isPlaying = false;
      this.showFallback();
      return false;
    }
  }
  pause() {
    this.audio.pause();
    this.isPlaying = false;
    this.updateUI();
  }
  toggle() {
    this.isPlaying ? this.pause() : this.play();
  }
  updateUI() {
    if (!this.toggleButton) return;
    this.toggleButton.classList.toggle("is-playing", this.isPlaying);
    this.toggleButton.setAttribute("aria-label", this.isPlaying ? "Pause musik" : "Play musik");
    this.toggleButton.innerHTML = this.isPlaying
      ? `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="4" width="5" height="16" rx="1.5"/><rect x="14" y="4" width="5" height="16" rx="1.5"/></svg>`
      : `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15c0 1.2 1.3 1.9 2.3 1.3l12-7.5c1-.6 1-1.9 0-2.5l-12-7.5C8.3 2.7 7 3.4 7 4.5z"/></svg>`;
  }
  showFallback() {
    if (this.playFallback) { this.playFallback.style.display = "flex"; return; }
    this.playFallback = document.createElement("button");
    this.playFallback.className = "music-fallback";
    this.playFallback.type = "button";
    this.playFallback.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15c0 1.2 1.3 1.9 2.3 1.3l12-7.5c1-.6 1-1.9 0-2.5l-12-7.5C8.3 2.7 7 3.4 7 4.5z"/></svg> <span>Play musik</span>`;
    this.playFallback.addEventListener("click", () => { this.play(); this.playFallback.style.display = "none"; });
    document.body.appendChild(this.playFallback);
  }
  createControl() {
    this.container = document.createElement("div");
    this.container.className = "music-control";
    this.toggleButton = document.createElement("button");
    this.toggleButton.type = "button";
    this.toggleButton.className = "music-toggle";
    this.toggleButton.setAttribute("aria-label", "Play musik");
    this.toggleButton.addEventListener("click", () => this.toggle());
    this.container.appendChild(this.toggleButton);
    this.updateUI();
    return this.container;
  }
}