# ParleMoi Master Styling Guide

This document defines the complete visual design system used on the ParleMoi marketing website (parlemoi-site). Use this as the authoritative reference when building or updating the ParleMoi mobile app (React Native / Expo) to ensure visual consistency across web and native platforms.

---

## 1. Design Philosophy

**Dark-mode-first, premium-minimal.**

Inspired by Linear.app, Raycast.com, and Superhuman.com. The design communicates sophistication, restraint, and respect for the user. Every visual decision reinforces the brand positioning: "an adult language app, not a children's game."

Key principles:
- Dark backgrounds with subtle luminosity (gradient orbs, not flat black)
- Glassmorphism for depth without heaviness
- Generous whitespace between sections (64-128px)
- Serif headlines for warmth, sans-serif body for clarity
- Animations are purposeful and subtle, never decorative
- No emojis anywhere in the UI

---

## 2. Color Palette

### Brand Colors (canonical hex values)

| Token             | Hex         | Usage                                      |
|--------------------|-------------|---------------------------------------------|
| `navy`            | `#1B2A4A`   | Secondary background, elevated surfaces     |
| `deepNavy`        | `#0F1B33`   | Deep background, gradients                  |
| `darkest`         | `#080D1A`   | Primary page background                     |
| `orange`          | `#E8863A`   | Primary accent, CTAs, active states          |
| `orangeHover`     | `#d6762e`   | Button hover state                          |
| `orangeLight`     | `#F4A261`   | Secondary accent, hover highlights           |
| `cream`           | `#FBF5EF`   | Primary text on dark backgrounds             |
| `warmWhite`       | `#FFFDF9`   | Light surface backgrounds (rarely used)      |
| `gold`            | `#D4A853`   | Achievements, premium accents, secondary CTA |
| `success`         | `#4CAF7D`   | Correct answers, positive states, checkmarks |
| `error`           | `#D35454`   | Wrong answers, negative states               |
| `textDark`        | `#2C2C2C`   | Body text on light surfaces                  |
| `textLight`       | `#E8E4DF`   | Primary text on dark surfaces                |
| `textMuted`       | `#8B8B8B`   | Secondary/placeholder text                   |

### Alpha Variants (used extensively)

| Token                    | Value                           | Usage                          |
|---------------------------|----------------------------------|--------------------------------|
| `glass`                  | `rgba(255, 255, 255, 0.04)`     | Glass card background          |
| `glassBorder`            | `rgba(255, 255, 255, 0.08)`     | Glass card border              |
| `glassHover`             | `rgba(255, 255, 255, 0.07)`     | Glass card hover background    |
| `glassBorderHover`       | `rgba(255, 255, 255, 0.12)`     | Glass card hover border        |
| `glassInnerHighlight`    | `rgba(255, 255, 255, 0.06)`     | Inset top border for depth     |
| `textLight/80`           | `rgba(232, 228, 223, 0.80)`     | Emphasized body text           |
| `textLight/60`           | `rgba(232, 228, 223, 0.60)`     | Standard body text             |
| `textLight/50`           | `rgba(232, 228, 223, 0.50)`     | De-emphasized text             |
| `textLight/40`           | `rgba(232, 228, 223, 0.40)`     | Very subtle labels             |
| `white/20`               | `rgba(255, 255, 255, 0.20)`     | Subtle borders, dividers       |
| `white/10`               | `rgba(255, 255, 255, 0.10)`     | Ghost borders, outlines        |
| `white/5`                | `rgba(255, 255, 255, 0.05)`     | Faintest dividers, scrolled header border |
| `orange/10`              | `rgba(232, 134, 58, 0.10)`      | Icon container backgrounds     |
| `orange/30`              | `rgba(232, 134, 58, 0.30)`      | Gradient divider center        |
| `orange/60`              | `rgba(232, 134, 58, 0.60)`      | Scroll indicator               |

### Gradient Definitions

| Name                     | CSS                                                                  | Usage                     |
|---------------------------|----------------------------------------------------------------------|---------------------------|
| `glow-btn`               | `linear-gradient(135deg, #E8863A, #D4A853)`                         | Primary CTA buttons       |
| `hero-bg`                | `linear-gradient(to bottom-right, #0F1B33, #1B2A4A)` (on web, via orbs) | Hero section background |
| `badge`                  | `linear-gradient(to right, #E8863A, #D4A853)`                       | "Best Value" pricing badge |
| `divider`                | `linear-gradient(90deg, transparent, rgba(232,134,58,0.3), transparent)` | Section dividers     |

---

## 3. Typography

### Font Families

| Role       | Font Stack                                                              | React Native Equivalent        |
|------------|-------------------------------------------------------------------------|-------------------------------|
| `display`  | Georgia, "Times New Roman", serif                                       | Georgia (built-in iOS/Android) |
| `body`     | Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto  | System default / Inter         |

### Type Scale

| Level           | Size (web)                          | Weight | Letter Spacing | Line Height | Usage                        |
|-----------------|-------------------------------------|--------|----------------|-------------|-------------------------------|
| `hero`          | `clamp(2.5rem, 1rem + 5vw, 5rem)`  | 700    | `-0.03em`      | 1.08        | Main hero headline            |
| `h2`            | `2rem` / `2.5rem` (md)             | 700    | `-0.02em`      | 1.1         | Section headlines              |
| `h3`            | `1.25rem`                           | 700    | normal         | 1.3         | Card titles                   |
| `h3-large`      | `1.5rem`                           | 700    | normal         | 1.3         | Featured card title            |
| `body`          | `1rem`                             | 400    | normal         | 1.6         | Standard body text             |
| `body-lg`       | `1.125rem` / `1.25rem` (md)        | 400    | normal         | 1.6         | Subheadlines, philosophy text  |
| `small`         | `0.875rem`                         | 400    | normal         | 1.6         | Card descriptions, features    |
| `xs`            | `0.75rem`                          | 500    | `0.05em`       | normal      | Labels, badges, muted text     |
| `section-label` | `0.875rem`                         | 500    | `0.05em`       | normal      | "FEATURES", "PRICING" labels   |

### Typography Rules
- Section labels: orange, uppercase, wider tracking (`0.05em`), font-medium
- Headlines: Georgia serif, cream color, tight negative letter-spacing
- Body text: Inter or system sans-serif, `textLight/50` to `textLight/80` depending on emphasis
- Use `text-wrap: balance` on headlines for editorial-quality line breaks
- Apply `-webkit-font-smoothing: antialiased` globally

---

## 4. Surface & Card System

### Glass Cards (primary surface pattern)

The entire UI is built on "glassmorphism" cards — semi-transparent surfaces with blur, creating depth against the dark background.

```
Background:    rgba(255, 255, 255, 0.04)
Backdrop:      blur(16px) saturate(180%)
Border:        1px solid rgba(255, 255, 255, 0.08)
Shadow:        0 8px 32px rgba(0, 0, 0, 0.2),
               inset 0 1px 0 rgba(255, 255, 255, 0.06)
Border Radius: 16px (rounded-2xl)

Hover:
  Background:  rgba(255, 255, 255, 0.07)
  Border:      rgba(255, 255, 255, 0.12)
```

**React Native translation:**
- Use `backgroundColor` with low alpha white over the dark background
- `borderWidth: 1, borderColor: rgba(255,255,255,0.08)`
- `borderRadius: 16`
- Shadow: `shadowColor: '#000', shadowOffset: {width:0, height:8}, shadowOpacity: 0.2, shadowRadius: 32`
- The inset highlight can be simulated with a `LinearGradient` overlay or a top-border
- `blurView` from `expo-blur` for native backdrop blur

### Icon Containers

Small rounded squares that hold feature icons:

```
Size:          40x40 (10x10 on web), or 48x48 (12x12) for featured cards
Background:   brand-color at 10% opacity (e.g., rgba(232,134,58,0.10))
Border Radius: 12px (rounded-xl)
Hover:         brand-color at 15% opacity

Icon inside:   20x20 (5x5), stroke-width 1.5, stroke = brand color
```

Color mapping for icon containers:
- Speaking/Voice features: `orange/10` background, `orange` icon
- Conversation features: `gold/10` background, `gold` icon
- Accuracy/Success features: `success/10` background, `success` icon
- Protection/Trust features: `cream/10` background, `cream` icon
- Connectivity features: `navy/30` background, `textLight` icon

---

## 5. Spacing System

| Token   | Value  | Usage                                |
|---------|--------|--------------------------------------|
| `xs`    | 4px    | Tight gaps (icon to dot)             |
| `sm`    | 8px    | Small gaps within components         |
| `md`    | 16px   | Standard padding, gaps               |
| `lg`    | 24px   | Card padding, section gaps           |
| `xl`    | 32px   | Large section padding                |
| `2xl`   | 48px   | Major section gaps                   |
| `3xl`   | 64px   | Section vertical padding (mobile)    |
| `4xl`   | 128px  | Section vertical padding (desktop)   |

### Section Spacing
Sections use fluid padding: `clamp(4rem, 3rem + 4vw, 8rem)` top and bottom.
In the mobile app, use 48-64px vertical padding between major sections.

### Card Padding
- Standard cards: 24px (p-6)
- Featured/large cards: 32px (p-8)
- Nested glass elements: 16px (p-4)

---

## 6. Border Radius Scale

| Token  | Value | Usage                                |
|--------|-------|--------------------------------------|
| `sm`   | 8px   | Small buttons, inner elements        |
| `md`   | 12px  | Icon containers, small cards         |
| `lg`   | 16px  | Primary cards, sections              |
| `xl`   | 24px  | Large containers, modals             |
| `2xl`  | 32px  | Hero elements                        |
| `full` | 9999px| Pill buttons, badges, avatars        |

---

## 7. Animation & Motion

### Entrance Animations

Elements fade in and slide up when they enter the viewport:

```
Initial state:    opacity: 0, translateY: 30px
Final state:      opacity: 1, translateY: 0
Duration:         800ms
Easing:           cubic-bezier(0.16, 1, 0.3, 1)  — fast start, gentle settle
```

**Stagger pattern:** When multiple siblings animate in, each delays by 80ms:
- Child 1: 0ms delay
- Child 2: 80ms delay
- Child 3: 160ms delay
- Child 4: 240ms delay
- etc.

**Hero entrance:** Uses longer duration (1000ms) with cascading delays:
- Badge: 0ms
- Headline: 150ms
- Subheadline: 300ms
- CTAs: 500ms
- Scroll indicator: 700ms

**React Native translation:**
- Use `Animated.timing` with duration 800ms
- Or `react-native-reanimated` with `withTiming(value, { duration: 800, easing: Easing.bezier(0.16, 1, 0.3, 1) })`
- Stagger with `Animated.stagger(80, animations)`
- Trigger on mount or when scrolled into view via `onLayout`

### Hover / Press States

| Element       | Property           | Resting                         | Active/Hover                    | Duration |
|---------------|--------------------|---------------------------------|---------------------------------|----------|
| Glass card    | background         | `rgba(255,255,255,0.04)`        | `rgba(255,255,255,0.07)`        | 300ms    |
| Glass card    | borderColor        | `rgba(255,255,255,0.08)`        | `rgba(255,255,255,0.12)`        | 300ms    |
| Glow button   | transform          | none                            | `translateY(-2px)`              | 300ms    |
| Glow button   | box-shadow         | `0 0 20px orange/30`            | `0 0 30px orange/50`           | 300ms    |
| Icon container| background         | `color/10`                      | `color/15`                      | 200ms    |
| Nav link      | color              | `textLight/60`                  | `textLight`                     | 200ms    |
| Ghost button  | borderColor        | `white/10`                      | `white/20`                      | 200ms    |

### Background Animations

**Gradient mesh orbs** — Three colored circles with heavy blur, drifting slowly:

| Orb | Size    | Color                     | Blur  | Animation Duration | Movement              |
|-----|---------|---------------------------|-------|--------------------|-----------------------|
| 1   | 600px   | `orange` at 25% opacity   | 80px  | 14s                | +60px right, +40px down, scale 1.15 |
| 2   | 500px   | `gold` at 18% opacity     | 80px  | 18s                | -50px left, +30px down, scale 1.1  |
| 3   | 400px   | `navy` at 40% opacity     | 80px  | 16s                | +40px right, -30px up, scale 1.2   |

All use `ease-in-out infinite alternate` timing.

**React Native translation:**
- Use `LinearGradient` from `expo-linear-gradient` for backgrounds
- Animated orbs can be `Animated.View` with absolute positioning, large borderRadius, and `Animated.loop` with `Animated.sequence`
- Apply `blurRadius` via styles or wrap in `BlurView`

### Micro-animations
- **Pulse dot** (status indicator): `animate-pulse` — opacity oscillates between 1 and 0, 2s loop
- **Bounce dot** (scroll indicator): `animate-bounce` — small translateY oscillation, 1s loop
- **Transition timing:** 200ms for micro-interactions, 300ms for state changes, 800ms for entrances

---

## 8. Grain Texture Overlay

A fixed, full-screen SVG noise pattern overlaid on everything at very low opacity:

```
Position:       fixed, covering entire viewport
Z-Index:        9999 (above all content)
Pointer Events: none (click-through)
Opacity:        0.035 (3.5%)
Blend Mode:     overlay
Pattern:        SVG feTurbulence fractalNoise, baseFrequency 0.85, 4 octaves
```

This adds subtle organic texture that prevents the dark UI from feeling flat or "digital." It's barely perceptible but subconsciously adds premium depth.

**React Native translation:**
- Overlay a semi-transparent PNG noise texture image as an absolutely positioned `Image` with `pointerEvents: 'none'`
- Set opacity to 0.03-0.04
- Use `blendMode` if supported, or simply overlay at low opacity

---

## 9. Buttons

### Primary CTA (Glow Button)

```
Background:     linear-gradient(135deg, #E8863A, #D4A853)
Text:           white, 14px, font-weight 500
Padding:        14px 28px
Border Radius:  9999px (full pill)
Shadow:         0 0 20px rgba(232,134,58,0.3),
                0 0 60px rgba(232,134,58,0.12)

Hover/Press:
  Transform:    translateY(-2px)
  Shadow:       0 0 30px rgba(232,134,58,0.5),
                0 0 80px rgba(232,134,58,0.2)
```

### Ghost / Secondary Button

```
Background:     transparent
Text:           textLight/70, 14px, font-weight 500
Padding:        14px 28px
Border:         1px solid rgba(255,255,255,0.10)
Border Radius:  9999px (full pill)

Hover/Press:
  Text:         textLight
  Border:       rgba(255,255,255,0.20)
```

### Tertiary / Card Button

```
Background:     rgba(255,255,255,0.05)
Text:           cream, 14px, font-weight 500
Padding:        12px 0 (full width)
Border:         1px solid rgba(255,255,255,0.10)
Border Radius:  9999px (full pill)

Hover/Press:
  Background:   rgba(255,255,255,0.10)
```

---

## 10. Icons

All icons follow the Lucide icon style:

```
Size:           20x20 (standard) or 24x24 (featured)
Stroke Width:   1.5px
Stroke:         currentColor (inherits from text color)
Fill:           none (outline style only)
Line Cap:       round
Line Join:      round
```

**React Native translation:**
- Use `lucide-react-native` or custom SVG components
- Apply stroke color via the icon's color prop
- Maintain 1.5 stroke width for consistency

---

## 11. Dividers

### Gradient Divider
A 1px horizontal line with a gradient that fades from transparent to `orange/30` at center and back:

```
Height:    1px
Background: linear-gradient(90deg, transparent, rgba(232,134,58,0.3), transparent)
```

Used between major sections to create visual breathing room without hard borders.

### Border Divider
For subtle structural separation (header on scroll, footer top):
```
Border:  1px solid rgba(255,255,255,0.05)
```

---

## 12. Layout Patterns

### Bento Grid (Features)
An asymmetric grid where cards have different sizes to create visual hierarchy:

```
Grid:           4 columns on desktop, 1 column on mobile
Gap:            16px
Featured card:  spans 2 columns and 2 rows
Wide cards:     span 2 columns
Standard cards: 1 column, 1 row
```

**React Native translation:**
- Use `FlatList` with variable-height items, or manual `View` stacking
- Featured card gets double height and full width
- Standard cards arranged in 2-column `flexWrap` rows

### Section Layout
Every section follows this structure:
1. Section label (orange, uppercase, tracking-wider, 14px)
2. Section headline (Georgia serif, cream, 32-40px, negative tracking)
3. Optional subtitle (textMuted, 16px, max-width ~448px centered)
4. 48-64px gap
5. Content (cards, grid, text blocks)

### Max Widths
- Content: 1152px (max-w-6xl) with 24px horizontal padding
- Narrow content (philosophy, CTA): 768px (max-w-3xl)
- Pricing grid: 1024px (max-w-5xl)

---

## 13. Scrolled Header

The sticky header transitions from fully transparent to frosted glass on scroll:

```
Default (top of page):
  Background:   transparent
  Border:       none

Scrolled (> 20px):
  Background:   rgba(8, 13, 26, 0.80)  — darkest at 80%
  Backdrop:     blur(24px)  — heavy blur
  Border:       1px solid rgba(255, 255, 255, 0.05)
  Transition:   300ms ease
```

Height: 64px. Content max-width 1152px with 24px padding.

---

## 14. Social Proof Metrics

Stats displayed in a 4-column grid with glowing orange text:

```
Value:          Georgia serif, 24-32px, bold, color: orange
Text Shadow:    0 0 40px rgba(232,134,58,0.3)  — soft glow
Label:          12-14px, textMuted, wider tracking
```

---

## 15. Pricing Cards

### Standard Card
Same as glass card with standard padding.

### Highlighted Card (Yearly / Best Value)
```
Border:         1px solid rgba(232,134,58,0.3)  — orange tint
Scale:          1.05x on desktop
Vertical offset: -8px on desktop (slightly elevated)
CTA:            glow-btn (gradient + shadow)
```

### Badge
```
Position:     absolute, top -12px, centered horizontally
Background:   linear-gradient(to right, #E8863A, #D4A853)
Text:         white, 12px, font-weight 600
Padding:      4px 16px
Border Radius: 9999px
Shadow:       0 4px 12px rgba(232,134,58,0.2)
```

---

## 16. Mobile App Integration Checklist

When applying this design system to the React Native app:

- [ ] Set app background to `#080D1A` (darkest)
- [ ] Replace any light-mode surfaces with glass cards (`rgba(255,255,255,0.04)` + border)
- [ ] Use Georgia for all headlines/display text
- [ ] Use system font or Inter for body text
- [ ] Apply the alpha-variant text colors (`textLight` at 50-80% opacity)
- [ ] Replace solid-color buttons with gradient glow buttons for primary CTAs
- [ ] Add grain texture overlay as a full-screen decorative layer
- [ ] Use gradient orbs (via LinearGradient + blur) on key screens (onboarding, home)
- [ ] Apply entrance animations: fadeIn + translateY(30) with 800ms cubic-bezier
- [ ] Use 80ms stagger for list items
- [ ] Ensure icon containers use `color/10` backgrounds with `color` stroke icons
- [ ] Section dividers use the gradient-fade pattern
- [ ] Round all card corners to 16px
- [ ] Round all buttons to 9999px (pill shape)
- [ ] Maintain generous spacing: 48-64px between major sections
- [ ] Keep text opacity hierarchy: 80% for emphasis, 60% for standard, 50% for secondary, 40% for tertiary

---

*This guide is the single source of truth for ParleMoi visual design across web and native platforms. Update this document when either platform's design evolves.*
