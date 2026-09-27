const stickerSVGs = {
  bearBrown: {
    viewBox: "0 0 120 120",
    body: `<ellipse cx="60" cy="72" rx="34" ry="36" fill="#8B5E3C"/><ellipse cx="60" cy="82" rx="24" ry="24" fill="#D4A574"/><circle cx="42" cy="48" r="14" fill="#8B5E3C"/><circle cx="78" cy="48" r="14" fill="#8B5E3C"/><circle cx="42" cy="48" r="7" fill="#D4A574"/><circle cx="78" cy="48" r="7" fill="#D4A574"/><circle cx="49" cy="64" r="4.5" fill="#1A1A1A"/><circle cx="71" cy="64" r="4.5" fill="#1A1A1A"/><ellipse cx="60" cy="76" rx="8" ry="6" fill="#1A1A1A"/><ellipse cx="60" cy="82" rx="10" ry="7" fill="#D4A574"/><path d="M60 82 Q60 88 54 88 M60 82 Q60 88 66 88" stroke="#1A1A1A" stroke-width="1.8" fill="none" stroke-linecap="round"/><circle cx="36" cy="72" r="5" fill="#F4A6A6" opacity="0.7"/><circle cx="84" cy="72" r="5" fill="#F4A6A6" opacity="0.7"/>`,
  },
  bearWhite: {
    viewBox: "0 0 120 120",
    body: `<ellipse cx="60" cy="72" rx="34" ry="36" fill="#F5F7FA"/><ellipse cx="60" cy="82" rx="24" ry="24" fill="#E8EDF2"/><circle cx="42" cy="48" r="14" fill="#F5F7FA"/><circle cx="78" cy="48" r="14" fill="#F5F7FA"/><circle cx="42" cy="48" r="7" fill="#E8EDF2"/><circle cx="78" cy="48" r="7" fill="#E8EDF2"/><circle cx="49" cy="64" r="4.5" fill="#1A1A1A"/><circle cx="71" cy="64" r="4.5" fill="#1A1A1A"/><ellipse cx="60" cy="76" rx="8" ry="6" fill="#1A1A1A"/><ellipse cx="60" cy="82" rx="10" ry="7" fill="#E8EDF2"/><path d="M60 82 Q60 88 54 88 M60 82 Q60 88 66 88" stroke="#1A1A1A" stroke-width="1.8" fill="none" stroke-linecap="round"/><circle cx="36" cy="72" r="5" fill="#F4A6A6" opacity="0.7"/><circle cx="84" cy="72" r="5" fill="#F4A6A6" opacity="0.7"/>`,
  },
  fish: {
    viewBox: "0 0 100 60",
    body: `<ellipse cx="42" cy="30" rx="28" ry="18" fill="#48CAE4"/><path d="M70 30 L96 14 L96 46 Z" fill="#48CAE4"/><circle cx="30" cy="25" r="4" fill="#1A1A1A"/><path d="M45 20 Q50 30 45 40" stroke="#0096C7" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M42 12 Q46 20 42 28 M52 12 Q56 20 52 28" stroke="#0096C7" stroke-width="2" fill="none" stroke-linecap="round"/>`,
  },
  jellyfish: {
    viewBox: "0 0 80 100",
    body: `<path d="M40 6 Q74 6 74 40 Q74 52 62 52 L18 52 Q6 52 6 40 Q6 6 40 6 Z" fill="#F7A6C4"/><circle cx="28" cy="32" r="3" fill="#1A1A1A"/><circle cx="52" cy="32" r="3" fill="#1A1A1A"/><path d="M28 42 Q40 48 52 42" stroke="#E84D70" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M20 52 Q16 66 20 78 M34 52 Q30 68 34 82 M48 52 Q44 68 48 82 M62 52 Q58 66 62 78" stroke="#F7A6C4" stroke-width="3" fill="none" stroke-linecap="round"/>`,
  },
  shell: {
    viewBox: "0 0 80 80",
    body: `<path d="M40 12 Q70 20 70 50 Q70 68 40 72 Q10 68 10 50 Q10 20 40 12 Z" fill="#F4C7A3"/><path d="M40 12 L40 72 M40 12 L22 60 M40 12 L58 60 M40 12 L14 40 M40 12 L66 40" stroke="#D4A574" stroke-width="2" fill="none"/>`,
  },
  starfish: {
    viewBox: "0 0 80 80",
    body: `<path d="M40 6 L49 32 L76 32 L54 48 L63 74 L40 58 L17 74 L26 48 L4 32 L31 32 Z" fill="#F4A259"/><circle cx="40" cy="40" r="3" fill="#E76F51"/>`,
  },
  bubble: {
    viewBox: "0 0 60 60",
    body: `<circle cx="30" cy="30" r="24" fill="none" stroke="#BDE0FE" stroke-width="3"/><circle cx="22" cy="22" r="6" fill="#FFFFFF" opacity="0.8"/>`,
  },
  heart: {
    viewBox: "0 0 60 60",
    body: `<path d="M30 54 C10 42 4 30 10 20 C15 11 26 12 30 20 C34 12 45 11 50 20 C56 30 50 42 30 54 Z" fill="#FF6B9D"/><circle cx="22" cy="22" r="4" fill="#FFFFFF" opacity="0.6"/>`,
  },
  coral: {
    viewBox: "0 0 100 100",
    body: `<path d="M50 100 L50 60 M50 60 L30 40 M50 60 L70 40 M30 40 L30 15 M70 40 L70 15" stroke="#E76F51" stroke-width="10" fill="none" stroke-linecap="round"/><circle cx="50" cy="55" r="8" fill="#E9C46A"/><circle cx="30" cy="35" r="6" fill="#E9C46A"/><circle cx="70" cy="35" r="6" fill="#E9C46A"/>`,
  },
};

export function getStickerSVG(type) {
  const s = stickerSVGs[type] || stickerSVGs.bubble;
  return `<svg viewBox="${s.viewBox}" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">${s.body}</svg>`;
}

export function createSticker(type, className = "", ariaLabel = "") {
  const w = document.createElement("span");
  w.className = `sticker ${className}`;
  w.setAttribute("aria-label", ariaLabel || type);
  w.innerHTML = getStickerSVG(type);
  return w;
}
