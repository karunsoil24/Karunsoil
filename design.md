# KARUN'S — Design System Reference (Hero Design DNA)

This document contains the source-of-truth style specifications, colors, spacing parameters, and component systems used to build the KARUN'S Food Products website.

---

## 1. Color Palette

We utilize a premium organic wellness palette based on HSL/OKLCH color coordinates. We avoid cool tech blues, purples, or neon accents. 

> [!NOTE]
> **Light-Only Theme Enforcement:**
> The design system is strictly locked to the sun-warmed organic light-themed palette. Dark mode overrides (e.g. `prefers-color-scheme: dark`) have been disabled to preserve the editorial wellness feel of the brand.

- **Primary Background (Ivory):** `oklch(0.985 0.006 80)` / `#FAF9F5`. Represents soft warm sun-baked organic ivory.
- **Secondary Background (Sage Green):** `oklch(0.96 0.015 110)` / `#F0F2EB`. Soft, calming botanical green.
- **Primary Green (Leaf Green):** `oklch(0.48 0.08 140)` / `#487850`. Rich organic leaf green for primary actions, CTAs, and active highlights.
- **Accent Gold (Botanical Gold):** `oklch(0.80 0.11 85)` / `#D4AF37`. Botanical golden highlight for prices, rating stars, and premium badges.
- **Text Color (Charcoal Brown):** `oklch(0.24 0.015 65)` / `#2F2926`. Soft, rich dark brown charcoal for editorial readability.

---

## 2. Typography

- **Headings (Display Serif):** *Fraunces* (Google Fonts; weights: 400-700). Promotes an organic, boutique wellness brand editorial feel.
- **Body & Controls (Modern Sans):** *DM Sans* (Google Fonts; weights: 400-700). Geometric and highly legible at small sizes.

### Type Scale
- **H1 (Hero):** `text-4xl` sm:`text-5xl` md:`text-6xl` lg:`text-7xl` (`leading-[1.05]`).
- **H2 (Sections):** `text-3xl` sm:`text-4xl` md:`text-5xl` (`leading-tight`).
- **H3 (Cards / Accordions):** `text-lg` sm:`text-xl` (`leading-snug`).
- **Body:** `text-sm` sm:`text-base` (`leading-relaxed`).

---

## 3. Spacing & Whitespace System

We use generous breathing room to establish a sense of calm and premium simplicity:
- **Section Spacing:** Generous padding (`py-20` on mobile, `py-24` on desktop).
- **Layout Margins:** Maximum viewport container locks at `max-w-7xl` (`1280px`), horizontally centered with `mx-auto` and `px-4 sm:px-6 lg:px-8`.
- **Card Gaps:** Spaced out with `gap-6` or `gap-8` to prevent clutter.

---

## 4. Card Design Systems

All cards inherit clean visual guidelines from the hero design:
- **Border Radius:** Large rounded edges (`rounded-[2rem]` or `rounded-3xl` equivalent to `24px` / `32px`).
- **Borders:** Thin, soft borders (`border border-border/80`).
- **Shadows:** Smooth drop shadows (`shadow-sm`) that elevate into prominent deep shadows (`shadow-xl`) on hover.
- **Hover Transitions:** Smooth transitions (`transition-all duration-300`) with ease-in-out movement (`hover:-translate-y-1 hover:border-primary/20`).

### Special Layout Cards
- **Layered Overlapping Cards:** Uses relative coordinates to offset elements. Underneath elements are rotated (`-rotate-3`) with primary green borders, while overlaying content features pure backgrounds (`#FAF9F5`) and deep drop shadows.
- **Bento Grid Cards:** Uses asymmetrical grid-spans (`lg:col-span-2` mixed with `lg:col-span-1`) in a 3-column auto-row layout to create an editorial grid.

---

## 5. Visual Vector Elements & Illustrations

- **India Shipping Map:** Highly stylized vector trace of India outline showing Chelakkara/Thrissur factory as a radiating center radiating dotted paths to other nodes (New Delhi, Mumbai, Chennai, Kolkata).
- **Floating Accents:** Floating transparent coconut halves (`/assets/coconut-accent.png`) and price tags with gold leaf icons.
- **Dotted Halo Rings:** Circular dashed lines placed behind main bottle photography, animated with a slow rotation loop (`animate-spin-slow`, `26s` duration).

---

## 6. Expandable FAQ Layout

- Numbered indicators using lightweight primary color numerals (`01`, `02`, etc.) matching the body font.
- Expandable accordions transition height using Framer Motion (`easeInOut` over `0.3s`).
- Accent highlight border changes from default gray to primary green when active.

---

## 7. Flagship Product priority

- On the Products page, **KARUN'S Cold Pressed Coconut Oil** is extracted from the standard loop and placed at the top in a dedicated full-width featured row.
- Renders with a double-column visual layout, star reviews, expanded checklist of benefits, and wholesale/MOQ data blocks for business inquiries.
