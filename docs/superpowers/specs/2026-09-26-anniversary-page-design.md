# Anniversary page design spec

## Overview
Add a dedicated `anniversary.html` page that serves as a full-screen typewriter love letter, keeping the existing ocean theme and romantic coral/gold accents.

## Flow & navigation
- Current flow: `index → love-letter → gift → thank-you → love-letter`
- New flow: `index → love-letter → gift → thank-you → anniversary → love-letter`
- `thank-you.html` tap button target changes from `love-letter.html` to `anniversary.html`
- `anniversary.html` includes a discreet "Kembali ke Terima Kasih" link back to `thank-you.html`
- `anniversary.html` scroll/button end returns to `love-letter.html` to preserve existing loop

## Visual theme
- Palette: `--ocean-deep #00416B`, `--ocean-mid #0077B6`, `--ocean-bright #48CAE4`, `--coral #FF6B6B`, `--gold #E3AB6B`, `--ink #002D4A`
- Fonts: `Baloo 2` for headings/numbers, `Quicksand` for body text
- Card/paper: `#fffdf8` with soft ocean shadow, no heavy blur
- Existing ocean fauna bubbles remain in background

## Components
1. **Hero section**
   - Route icons (pinned location → heart → pinned location) with dashed line
   - Eyebrow text: "surat kecil di hari jadi kita"
   - Heading: "Happy Anniversary", gradient ocean-coral-gold
   - Counter: automatically counts days since `START_DATE`
   - Scroll hint with chevron

2. **Letter section**
   - Typewriter effect: paragraphs typed sequentially on intersection
   - Caret blink until paragraph finishes
   - Signature line and end heart appear after last paragraph

3. **Decorations**
   - Floating hearts and golden sparks using simple JS-created DOM
   - Subtle bubbles via existing background script or minimal CSS
   - No new illustration assets; use existing PNGs or inline SVGs only

4. **Music toggle**
   - Floating button top-right, hidden until hover/focus
   - If no `<source>` exists, button stays silent and shows tooltip

## Motion & accessibility
- All animations respect `prefers-reduced-motion: reduce`
- Toggle button has visible focus ring
- `aria-label` provided on interactive elements
- Contrast checked: body text ≥4.5:1 on light background

## File changes
1. Create `anniversary.html` (single new file)
2. Edit `thank-you.html` button `href` from `love-letter.html` to `anniversary.html`
3. No server changes needed; static files only

## Risks / open items
- User must supply `START_DATE` and optional music file
- Avoid adding large assets; keep lightweight
