# CodingInABox — Website Design System & Style Guide

> **Document for: Antigravity Development Team**
> **Version:** 1.0
> **Date:** March 8, 2026
> **Brand:** CodingInABox — EdTech STEM Kits & Competitions

---

## 1. Brand Overview

**CodingInABox** is an EdTech startup that provides hands-on STEM kits, robotics competitions, and coding courses for students. The brand is modern, tech-forward, and playful — appealing to kids/teens, parents, and school administrators alike.

**Tagline:** "Build. Code. Compete."

**Brand Voice:** Energetic, encouraging, accessible. We make complex tech feel approachable and exciting. We speak to young builders and their supporters with confidence and warmth.

---

## 2. Color Palette

### Primary Colors

| Name | Hex | Usage |
|------|-----|-------|
| Electric Blue | `#2563EB` | Primary buttons, links, headings, CTAs |
| Neon Green | `#10B981` | Success states, "new" badges, competition highlights |
| Deep Navy | `#0F172A` | Body text, dark backgrounds, footer |

### Secondary Colors

| Name | Hex | Usage |
|------|-----|-------|
| Bright Orange | `#F97316` | Accent highlights, sale prices, urgency badges |
| Vivid Purple | `#8B5CF6` | Course section accents, premium tier highlights |
| Hot Pink | `#EC4899` | Playful accents, hover states on secondary elements |

### Neutrals

| Name | Hex | Usage |
|------|-----|-------|
| White | `#FFFFFF` | Backgrounds, card surfaces |
| Light Gray | `#F8FAFC` | Alternate section backgrounds |
| Mid Gray | `#94A3B8` | Placeholder text, subtle borders |
| Charcoal | `#1E293B` | Primary body text |

### Gradients

- **Hero Gradient:** `linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #2563EB 100%)`
- **CTA Gradient:** `linear-gradient(90deg, #2563EB 0%, #8B5CF6 100%)`
- **Card Hover Glow:** `0 0 30px rgba(37, 99, 235, 0.3)`

---

## 3. Typography

| Element | Font | Weight | Size (Desktop) | Size (Mobile) |
|---------|------|--------|----------------|---------------|
| H1 (Hero) | Inter | 800 (ExtraBold) | 56px / 3.5rem | 36px / 2.25rem |
| H2 (Section) | Inter | 700 (Bold) | 40px / 2.5rem | 28px / 1.75rem |
| H3 (Card Title) | Inter | 600 (SemiBold) | 24px / 1.5rem | 20px / 1.25rem |
| H4 (Subsection) | Inter | 600 | 20px / 1.25rem | 18px / 1.125rem |
| Body | Inter | 400 (Regular) | 16px / 1rem | 16px / 1rem |
| Body Large | Inter | 400 | 18px / 1.125rem | 16px / 1rem |
| Caption | Inter | 500 (Medium) | 14px / 0.875rem | 13px / 0.8125rem |
| Button | Inter | 600 | 16px / 1rem | 14px / 0.875rem |
| Nav Link | Inter | 500 | 15px / 0.9375rem | 14px / 0.875rem |

**Line Heights:** Headings: 1.2 · Body: 1.6 · Captions: 1.4

**Font Import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

**Code/Tech Text:** Use `JetBrains Mono` for any code snippets or technical specs.
```html
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

---

## 4. Spacing & Layout

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 4px | Tight inner padding |
| `--space-sm` | 8px | Icon gaps, badge padding |
| `--space-md` | 16px | Card inner padding, form fields |
| `--space-lg` | 24px | Section padding (mobile) |
| `--space-xl` | 48px | Section padding (desktop) |
| `--space-2xl` | 80px | Hero vertical padding |
| `--space-3xl` | 120px | Between major page sections |

**Max Content Width:** 1280px
**Card Grid:** 12-column grid, `gap: 24px`
**Breakpoints:** Mobile: 0–768px · Tablet: 769–1024px · Desktop: 1025px+

---

## 5. Component Library

### 5.1 Buttons

**Primary Button:**
```
Background: linear-gradient(90deg, #2563EB, #8B5CF6)
Color: #FFFFFF
Border-radius: 12px
Padding: 14px 32px
Font: Inter 600, 16px
Hover: Scale 1.05, box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4)
Transition: all 0.3s ease
```

**Secondary Button:**
```
Background: transparent
Border: 2px solid #2563EB
Color: #2563EB
Border-radius: 12px
Padding: 12px 28px
Hover: Background #2563EB, Color #FFFFFF
```

**Ghost Button (on dark backgrounds):**
```
Background: transparent
Border: 2px solid rgba(255,255,255,0.5)
Color: #FFFFFF
Hover: Background rgba(255,255,255,0.1), Border-color #FFFFFF
```

### 5.2 Cards

**Product Card:**
```
Background: #FFFFFF
Border-radius: 16px
Box-shadow: 0 4px 20px rgba(0,0,0,0.08)
Overflow: hidden
Transition: transform 0.3s, box-shadow 0.3s
Hover: transform translateY(-8px), box-shadow: 0 12px 40px rgba(37,99,235,0.15)

Structure:
┌─────────────────────────┐
│     Product Image        │ ← 16:12 aspect ratio, object-fit: cover
│     (with gradient       │
│      overlay at bottom)  │
├─────────────────────────┤
│  [Badge: "Ages 10+"]    │ ← Positioned absolute, top-right of image
│                          │
│  Product Name            │ ← H3, Inter 600, #0F172A
│  Short description       │ ← Body, Inter 400, #64748B
│                          │
│  $XX.XX    [View Kit →]  │ ← Price + CTA row
└─────────────────────────┘
```

**Competition Card:**
```
Background: linear-gradient(135deg, #0F172A, #1E293B)
Border: 1px solid rgba(37, 99, 235, 0.3)
Border-radius: 16px
Color: #FFFFFF
Padding: 32px

Structure:
┌─────────────────────────┐
│  🏆 Icon                │ ← Category icon (SVG)
│  Category Name           │ ← H3, #FFFFFF
│  Description             │ ← Body, rgba(255,255,255,0.7)
│                          │
│  Sub-categories:         │
│  • Item 1                │
│  • Item 2                │
│                          │
│  [Learn More →]          │ ← Ghost button
└─────────────────────────┘
```

### 5.3 Navigation Bar

```
Position: Fixed top, z-index: 1000
Background: rgba(15, 23, 42, 0.95) with backdrop-filter: blur(20px)
Height: 72px
Max-width: 1280px (centered)
Border-bottom: 1px solid rgba(255,255,255,0.1)

Layout:
[Logo]                    [Home] [About] [Kits ▾] [Competitions] [Courses] [Contact]    [Get Started →]

Mobile: Hamburger menu with slide-in drawer from right
```

### 5.4 Footer

```
Background: #0F172A
Color: rgba(255,255,255,0.7)
Padding: 80px 0 40px

Layout (4 columns):
┌──────────┬──────────┬──────────┬──────────┐
│ Logo +   │ Products │ Learn    │ Connect  │
│ Tagline  │ • Kits   │ • Courses│ • Email  │
│          │ • Drones │ • Blog   │ • Social │
│ Socials  │ • Cars   │ • FAQ    │ • Phone  │
└──────────┴──────────┴──────────┴──────────┘
─────────────────────────────────────────────
 © 2026 CodingInABox · Privacy · Terms
```

### 5.5 Badges / Tags

```
Age Badge:     Background #EFF6FF, Color #2563EB, border-radius: 20px, padding: 4px 12px
Difficulty:    Background varies (Easy=#D1FAE5/#10B981, Medium=#FEF3C7/#F59E0B, Advanced=#FEE2E2/#EF4444)
"New" Badge:   Background #10B981, Color #FFF, font-size: 12px, uppercase
"Popular":     Background linear-gradient(90deg, #F97316, #EC4899), Color #FFF
```

### 5.6 Section Dividers

Use angled dividers between page sections for visual energy:
```css
.section-divider {
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}
```

---

## 6. Iconography

Use **Lucide Icons** (open source, consistent with modern tech feel) at 24px default size.
Stroke width: 2px.
Key icons needed:

| Context | Icon Name | Usage |
|---------|-----------|-------|
| Robot Car | `car` | Product cards |
| Drone | `plane` | Drone products/competitions |
| Robot Arm | `grab` | Robot arm product |
| Courses | `graduation-cap` | Course section |
| Competition | `trophy` | Competition section |
| Code | `code-2` | Coding references |
| Age Range | `users` | Age badges |
| Difficulty | `signal` | Skill level indicator |
| Arrow CTA | `arrow-right` | Button arrows |
| Menu | `menu` | Mobile hamburger |
| Close | `x` | Close mobile menu |
| Solar | `sun` | Solar tracker product |
| Target | `crosshair` | Laser target product |
| Water | `droplets` | Water dispenser product |

---

## 7. Animation & Micro-interactions

**Page Load:** Elements fade-in + slide-up with staggered delays (use Intersection Observer)
```css
.animate-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.animate-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Card Hover:** Scale 1.03 + elevated shadow + subtle glow in brand color

**Button Hover:** Scale 1.05 + deeper shadow

**Number Counters:** Animate from 0 to target on scroll (for stats section)

**Hero Background:** Subtle animated circuit-board pattern or floating geometric shapes (CSS or lightweight canvas animation)

---

## 8. Image Guidelines

### Product Photography
- All product images should be on white/transparent backgrounds
- Minimum resolution: 800x600px
- Consistent lighting and angle across all products
- Show the fully assembled kit

### Hero Images
- Dark overlays for text readability: `linear-gradient(rgba(15,23,42,0.7), rgba(15,23,42,0.9))`
- Recommended: lifestyle shots of students building kits, competition events

### Image Placeholders
- Use generated SVG illustrations in brand colors where photography isn't available
- Product images from the kit catalog are provided in `/assets/images/products/`

---

## 9. Page Structure Map

```
CodingInABox Website
├── 01-home.md              ← Landing page with hero, featured kits, stats, CTAs
├── 02-about.md             ← Company story, team, mission/vision
├── 03-products.md          ← All STEM kits overview / shop page
├── 04-product-robot-car.md ← Individual product detail page
├── 05-product-drone.md     ← Individual product detail page
├── 06-product-robot-arm.md ← Individual product detail page
├── 07-competitions.md      ← Competition categories, rules, registration
├── 08-courses.md           ← Online/offline course offerings
├── 09-sponsorship.md       ← Sponsorship opportunities
├── 10-contact.md           ← Contact form, locations, FAQ
└── 00-DESIGN-SYSTEM.md     ← This file
```

---

## 10. SEO & Meta Guidelines

Each page should include:
```html
<title>[Page Title] | CodingInABox — Build. Code. Compete.</title>
<meta name="description" content="[Page-specific description, 150-160 chars]">
<meta property="og:title" content="[Page Title]">
<meta property="og:description" content="[Description]">
<meta property="og:image" content="/assets/images/og-[page].jpg">
<meta property="og:type" content="website">
```

---

## 11. Responsive Behavior

| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Product Grid | 3 columns | 2 columns | 1 column |
| Navigation | Horizontal links | Horizontal links | Hamburger drawer |
| Hero Text | 56px heading | 40px heading | 36px heading |
| Section Padding | 120px vertical | 80px | 60px |
| Footer | 4 columns | 2x2 grid | Stacked single column |

---

## 12. Tech Stack Recommendation

- **Framework:** Next.js 14+ (App Router) or Astro for static
- **Styling:** Tailwind CSS 3.x
- **Animations:** Framer Motion or CSS-only
- **Icons:** Lucide React
- **CMS (optional):** Sanity or Contentful for product data
- **Hosting:** Vercel or Netlify
