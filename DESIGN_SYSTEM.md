# DefiShard Design System: "Institutional Precision"

**Version:** 1.0
**Philosophy:** Professional, secure, high-contrast, trustworthy. We avoid "cyber" neon bloat in favor of clear, schematic communication.

---

## 1. Color Palette

### Backgrounds (Deep Charcoal)
We use a layered dark theme to create depth without blur effects.
- **Base BG**: `#0F1115` (Main page background)
- **Surface**: `#161920` (Cards, Sections)
- **Elevated**: `#1D2129` (Hover states, Popovers)
- **Border**: `#2D3340` (Subtle dividers)

### Brand Accent (Electric Lime)
Used sparingly for high-value actions, success states, and key data.
- **Primary**: `#CCFF00`
- **Hover**: `#B3E600`
- **Text on Lime**: `#000000` (Always use black text on lime for contrast)

### Typography Colors
- **Headings (White)**: `#FFFFFF`
- **Body (Slate)**: `#94A3B8` (Readable contrast, not harsh white)
- **Error (Red)**: `#EF4444` (Use with restraint)

---

## 2. Typography

### Font Families
- **Primary (Sans)**: `Inter`
  - Usage: Headings, long-form text, navigation.
- **Technical (Mono)**: `JetBrains Mono`
  - Usage: Data values (`$1B+`), labels (`STATUS: ACTIVE`), code snippets, technical diagrams.

### Type Scale
- **Display XL**: `text-4xl` to `text-6xl` (Hero Headlines)
- **Display LG**: `text-2xl` to `text-3xl` (Section Headers)
- **Body**: `text-base` or `text-lg` (Readable paragraph text)
- **Label**: `text-xs` + `uppercase` + `tracking-wider` (Technical labels)

---

## 3. Components & Primitives

### Buttons
Buttons are solid, rectangular, and use monospace fonts.

**Primary Button**
```tsx
<button className="btn-primary">
  <span>ACTION</span>
</button>
```
- Background: `#CCFF00`
- Text: `#000000`
- Border Radius: `rounded-md` (4px)

**Secondary Button**
```tsx
<button className="btn-secondary">
  <span>ALTERNATIVE</span>
</button>
```
- Background: Transparent
- Border: `#2D3340` (Slate)
- Text: `#FFFFFF`
- Hover: Border becomes Lime, Text becomes Lime.

### Cards ("Technical Card")
Cards represent modular units of information. They often have a "header" bar.

```tsx
<div className="card-technical">
  <div className="border-b border-dark-border pb-4 mb-4">
    <span className="text-xs font-mono text-brand-slate">CARD_HEADER</span>
  </div>
  <div className="content">...</div>
</div>
```
- Background: `#161920`
- Border: 1px Solid `#2D3340`
- Hover Effect: Border turns Lime (`#CCFF00`), slight lift (`-translate-y-1`), sharp shadow.

### Status Badges
Used to indicate state (Online, Secure, Error).

```tsx
<span className="px-2 py-1 bg-brand-lime/10 border border-brand-lime/20 text-brand-lime text-xs font-mono rounded">
  SYSTEM_ONLINE
</span>
```

---

## 4. Visual Effects

### "Schematic" Aesthetics
Instead of glowing blobs, we use:
- **Dashed Lines**: To show connection/flow.
- **Grid Backgrounds**: Subtle background patterns.
- **1px Borders**: Crisp definition of areas.

### Grids
We use distinct grids to separate content.
```tsx
<div className="grid grid-cols-2 gap-px bg-dark-border border border-dark-border">
  <div className="bg-dark-surface p-6">...</div>
  <div className="bg-dark-surface p-6">...</div>
</div>
```
*Note: The `gap-px` with a `bg-dark-border` wrapper creates a perfect grid-line effect.*

---

## 5. Implementation Guide

### Tailwind Config
Ensure your `tailwind.config.ts` includes the custom color extensions for `brand-lime` and `dark-bg`.

### Icons
Use **Lucide React** icons.
- Default stroke width: `2`
- For technical diagrams: `1.5` can be cleaner.
- Color: Usually `text-brand-slate` or `text-brand-lime`.

