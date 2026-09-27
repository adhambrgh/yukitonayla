export function createBubbleField(container, count = 12) {
  for (let i = 0; i < count; i++) {
    const b = document.createElement("span");
    b.className = "bubble";
    b.style.left = `${Math.random() * 100}%`;
    b.style.width = `${Math.random() * 14 + 6}px`;
    b.style.height = b.style.width;
    b.style.setProperty("--duration", `${Math.random() * 6 + 7}s`);
    b.style.setProperty("--delay", `${Math.random() * 8}s`);
    b.style.setProperty("--drift", `${Math.random() * 60 - 30}px`);
    container.appendChild(b);
  }
}

export function createFallingHearts(container, count = 10) {
  for (let i = 0; i < count; i++) {
    const h = document.createElement("span");
    h.className = "falling-heart";
    h.style.left = `${Math.random() * 100}%`;
    h.style.setProperty("--duration", `${Math.random() * 4 + 5}s`);
    h.style.setProperty("--delay", `${Math.random() * 8}s`);
    h.style.setProperty("--size", `${Math.random() * 10 + 12}px`);
    h.style.setProperty("--sway", `${Math.random() * 40 - 20}px`);
    container.appendChild(h);
  }
}

export function createSeaweed(container, count = 4) {
  for (let i = 0; i < count; i++) {
    const w = document.createElement("span");
    w.className = "seaweed";
    w.style.left = `${Math.random() * 90 + 5}%`;
    w.style.setProperty("--height", `${Math.random() * 60 + 60}px`);
    w.style.setProperty("--delay", `${Math.random() * 3}s`);
    container.appendChild(w);
  }
}