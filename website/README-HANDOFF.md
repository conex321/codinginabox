# CodingInABox Website — Handoff Package for Antigravity

> **Prepared:** March 8, 2026
> **Brand:** CodingInABox
> **Tagline:** Build. Code. Compete.

---

## Package Contents

### Design & Style
- `00-DESIGN-SYSTEM.md` — Complete design system: colors, typography, spacing, components, animations, responsive rules, and tech stack recommendations

### Pages (8 total)

| # | File | Page | URL |
|---|------|------|-----|
| 1 | `pages/01-home.md` | Home / Landing Page | `/` |
| 2 | `pages/02-about.md` | About Us | `/about` |
| 3 | `pages/03-products.md` | Products Overview (All 7 Kits) | `/products` |
| 4 | `pages/04-product-detail-template.md` | Product Detail (Template + All 7) | `/products/[slug]` |
| 5 | `pages/05-competitions.md` | Competitions | `/competitions` |
| 6 | `pages/06-courses.md` | Courses (10 courses) | `/courses` |
| 7 | `pages/07-sponsorship.md` | Sponsorship & Partnerships | `/sponsorship` |
| 8 | `pages/08-contact.md` | Contact Us | `/contact` |

### Assets

```
assets/
├── images/
│   ├── products/              ← 7 product photos (from original kit catalog)
│   │   ├── robot-car.png
│   │   ├── anti-aircraft-gun.png
│   │   ├── laser-shooting-target.png
│   │   ├── smart-water-dispenser.png
│   │   ├── solar-light-tracker.png
│   │   ├── robot-arm.png
│   │   └── mini-drone.png
│   ├── icons/                 ← SVG section icons (gradient circles)
│   │   ├── icon-drone.svg
│   │   ├── icon-robot-car.svg
│   │   ├── icon-robot-arm.svg
│   │   ├── icon-trophy.svg
│   │   └── icon-graduation.svg
│   ├── heroes/                ← Hero background patterns
│   │   └── hero-circuit-pattern.svg
│   ├── logo-codinginabox.svg      ← Logo (dark backgrounds: use white variant)
│   ├── logo-codinginabox-white.svg
│   └── business-model-sketch.jpeg  ← Original founder sketch (for reference only)
```

---

## Site Map

```
CodingInABox.com
│
├── / (Home)
│   ├── Hero with floating product images
│   ├── Trust bar (school logos)
│   ├── Featured STEM Kits (4 products)
│   ├── How It Works (3 steps)
│   ├── Stats counter
│   ├── Competition preview
│   ├── Courses preview
│   ├── Schools CTA
│   └── Newsletter signup
│
├── /about
│   ├── Page hero
│   ├── Our Story (text + image)
│   ├── Mission / Vision / Values
│   ├── Meet the Founders
│   ├── Impact numbers
│   └── Timeline / Milestones
│
├── /products
│   ├── Page hero
│   ├── Filter bar (category + sort)
│   ├── Product grid (7 kits)
│   ├── Comparison table
│   ├── Bulk pricing CTA
│   └── What's In Every Box
│
├── /products/[slug]  (×7 pages)
│   ├── Breadcrumb
│   ├── Product hero (image + details + buy)
│   ├── What You'll Learn
│   ├── What's In the Box
│   ├── Build Journey (steps)
│   ├── Competition compatibility
│   ├── Related Kits
│   └── FAQ accordion
│
├── /competitions
│   ├── Page hero
│   ├── Overview text
│   ├── Drone Competitions (B1-B3)
│   ├── Robot Car Competitions (C1-C5)
│   ├── Competition calendar
│   ├── How to Enter (4 steps)
│   ├── Rules & Regulations (accordion)
│   ├── Prizes & Recognition
│   └── Registration CTA
│
├── /courses
│   ├── Page hero
│   ├── Course formats (online/offline/hybrid)
│   ├── Course catalog (10 courses, filterable)
│   ├── Pricing overview (3 tiers)
│   ├── Learning path visualization
│   ├── Testimonials carousel
│   └── Enrollment CTA
│
├── /sponsorship
│   ├── Page hero
│   ├── Why Sponsor
│   ├── Sponsorship tiers (Bronze/Silver/Gold)
│   ├── What sponsors get (6 benefits)
│   ├── How it works (4 steps)
│   ├── Current sponsors (logo grid)
│   ├── Sponsor a Student (individual)
│   └── Contact CTA
│
└── /contact
    ├── Page hero
    ├── Contact form + info (2-column)
    ├── Quick help cards (4 options)
    ├── FAQ accordion
    └── Map (optional)
```

---

## Revenue Model Context (From Founder Notes)

For Antigravity's understanding of the business model:

**Revenue Stream A — Courses:**
Online and offline courses (10+ courses), serving students after they purchase kits or compete.

**Revenue Stream B — Competitions:**
- Drone competitions: B1 (no code), B2 (coding), B3 (race/beam speeder)
- Robot Car competitions: C1 (pick & place), C2 (speed/beam), C3 (NatCar), C4 (sumo/combat), C5 (soccer)

**Growth Strategy:**
Competitions → attract sponsorship → attract more schools and individual customers (existing + new).

---

## What Antigravity Needs to Provide / Decide

1. **Hosting & Domain:** Recommend Vercel + custom domain `codinginabox.com`
2. **CMS:** Whether to use a headless CMS (Sanity, Contentful) for products/courses or hardcode initially
3. **E-commerce:** Payment integration for kit sales (Stripe or similar)
4. **Form Backend:** Contact form submission handling (Formspree, Netlify Forms, or custom API)
5. **Analytics:** Google Analytics 4 or Plausible
6. **Email:** Newsletter integration (Mailchimp, ConvertKit)
7. **Photography:** Professional product photos and lifestyle shots (current images are manufacturer photos)
8. **Founder Photos:** Professional headshots for the About page

---

## Notes for Developers

- Each page MD contains **complete wireframes in ASCII**, **exact copy/content**, **component specs**, **responsive behavior notes**, and **interaction details**
- The Design System file is the single source of truth for all visual decisions
- Product images from the original catalog are included in `/assets/images/products/`
- SVG icons are provided for key sections — these are ready to use or can inspire custom illustrations
- All pricing marked as placeholder (TBD) where final numbers aren't confirmed
- The site should be **fast, accessible (WCAG 2.1 AA), and SEO-optimized** from day one
