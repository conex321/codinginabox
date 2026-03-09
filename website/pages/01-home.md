# Page: Home (Landing Page)

> **URL:** `/` or `/home`
> **Template:** Landing page (full-width sections, no sidebar)
> **SEO Title:** CodingInABox — Build. Code. Compete. | STEM Kits & Robotics for Students
> **Meta Description:** Hands-on STEM kits, robotics competitions, and coding courses that turn students into builders. Explore robot cars, drones, and more with CodingInABox.

---

## Section 1: Hero

**Layout:** Full-width, min-height 100vh, centered content
**Background:** Dark gradient `linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #2563EB 100%)` with subtle animated circuit-board SVG pattern overlay (low opacity)

### Content

```
[Nav Bar - fixed, transparent on hero, solid on scroll]

                    ┌─────────────────────────────┐
                    │                               │
                    │   [Small badge: "🚀 Now       │
                    │    Shipping Worldwide"]    │
                    │                               │
                    │   Build It. Code It.          │
                    │   Compete With It.            │
                    │                               │
                    │   Hands-on STEM kits that     │
                    │   teach robotics, coding,      │
                    │   and engineering — from your  │
                    │   desk to the competition      │
                    │   stage.                       │
                    │                               │
                    │   [Get Started →]  [View Kits] │
                    │                               │
                    └─────────────────────────────┘

     [Floating product images: drone, robot car, robot arm —
      slightly rotated, with glow effects, positioned around
      the text on desktop. Hidden on mobile.]

     [Scroll indicator: animated chevron bouncing at bottom]
```

**Heading:** "Build It. Code It. Compete With It."
- Font: Inter 800, 56px desktop / 36px mobile
- Color: #FFFFFF
- Letter-spacing: -0.02em

**Subheading:** "Hands-on STEM kits that teach robotics, coding, and engineering — from your desk to the competition stage."
- Font: Inter 400, 20px desktop / 16px mobile
- Color: rgba(255,255,255,0.8)
- Max-width: 600px

**CTA Buttons:**
1. "Get Started" → Primary gradient button → links to `/products`
2. "View Kits" → Ghost button (white border) → links to `/products`

**Floating Images:** Use product images (drone, robot car, robot arm) with:
- Drop shadow + blue glow: `filter: drop-shadow(0 0 40px rgba(37,99,235,0.5))`
- Slight CSS rotation transforms (-5deg, 3deg, -2deg)
- Floating animation (translateY oscillation, 3s loop)
- Desktop only (hidden on mobile)

---

## Section 2: Trusted By (Social Proof Bar)

**Layout:** Full-width, light background `#F8FAFC`
**Height:** ~80px strip

```
┌────────────────────────────────────────────────────────────┐
│  Trusted by schools worldwide  •  [Logo] [Logo] [Logo] [Logo] [Logo]  │
└────────────────────────────────────────────────────────────┘
```

**Content:**
- Text: "Trusted by schools worldwide" — Inter 500, 14px, #94A3B8
- Placeholder for 4-6 school/partner logos in grayscale
- Logos should auto-scroll on mobile (marquee animation)

**Developer Note:** If no logos are available yet, use placeholder text: "Partnering with 15+ schools nationwide" with small icons representing school types.

---

## Section 3: Featured STEM Kits (Product Highlights)

**Layout:** Max-width 1280px, centered
**Background:** White `#FFFFFF`
**Padding:** 120px top/bottom

### Header
- Eyebrow text: "OUR STEM KITS" — Inter 600, 14px, #2563EB, uppercase, letter-spacing 2px
- Heading: "Everything You Need to Start Building" — H2 style
- Subtitle: "From beginner-friendly robot cars to advanced programmable drones — each kit comes with step-by-step guides and all components included."
- Max-width: 700px, centered

### Product Grid (Show top 4 featured kits)

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ [Robot Car   │  │ [Mini Drone  │  │ [Robot Arm   │  │ [Laser       │
│  Image]      │  │  Image]      │  │  Image]      │  │  Target Img] │
│              │  │              │  │              │  │              │
│ Robot Car    │  │ Mini Drone   │  │ Robot Arm    │  │ Laser Target │
│ Build & code │  │ Fly your own │  │ Pick, grip & │  │ Aim, shoot,  │
│ your own...  │  │ drone from...│  │ control...   │  │ & score...   │
│              │  │              │  │              │  │              │
│ Ages 10+     │  │ Ages 12+     │  │ Ages 10+     │  │ Ages 10+     │
│ $40.10       │  │ $94.90       │  │ $39.31       │  │ $31.59       │
│ [View Kit →] │  │ [View Kit →] │  │ [View Kit →] │  │ [View Kit →] │
└──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘
```

**Card Spec:** See Design System `5.2 Product Card`

**Product Data:**

| Kit | Image | Price | Age | Short Description |
|-----|-------|-------|-----|-------------------|
| Robot Car | `/assets/images/products/robot-car.png` | $40.10 | 10+ | Build and code your own autonomous car with sensors and motors |
| Mini Drone | `/assets/images/products/mini-drone.png` | $94.90 | 12+ | Assemble and fly your very own programmable quadcopter |
| Robot Arm | `/assets/images/products/robot-arm.png` | $39.31 | 10+ | Construct a multi-axis robotic arm with joystick control |
| Laser Shooting Target | `/assets/images/products/laser-shooting-target.png` | $31.59 | 10+ | Build an infrared targeting system with digital scoreboard |

**Below Grid:**
- Centered CTA: "View All 7 Kits →" button (secondary style) → links to `/products`

---

## Section 4: How It Works

**Layout:** Max-width 1280px, centered
**Background:** `#F8FAFC` (light gray)
**Padding:** 120px top/bottom

### Header
- Eyebrow: "HOW IT WORKS"
- Heading: "From Unboxing to Competition in 3 Steps"

### Steps (3-column layout)

```
┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐
│       ①            │  │       ②            │  │       ③            │
│   [Icon: box]      │  │   [Icon: wrench]   │  │   [Icon: trophy]   │
│                    │  │                    │  │                    │
│   Choose Your Kit  │  │   Build & Code     │  │   Compete & Win    │
│                    │  │                    │  │                    │
│   Pick from our    │  │   Follow our       │  │   Enter local and  │
│   range of 7       │  │   step-by-step     │  │   national         │
│   hands-on STEM    │  │   guides. Learn     │  │   competitions.    │
│   kits designed    │  │   real engineering  │  │   Show off your    │
│   for ages 10+.    │  │   and programming   │  │   skills against   │
│                    │  │   along the way.    │  │   other builders.  │
└───────────────────┘  └───────────────────┘  └───────────────────┘
```

**Step Icons:** Large (64px) with circular gradient background (`#2563EB` → `#8B5CF6`), white icon inside
**Step Numbers:** Small badge (24px circle, `#2563EB`, white text) positioned top-left of icon
**Connecting Line:** Dashed horizontal line connecting the three circles on desktop (hidden on mobile)

---

## Section 5: Stats Counter

**Layout:** Full-width dark section
**Background:** `#0F172A`
**Padding:** 80px top/bottom

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│    7+              500+             15+           10+       │
│  STEM Kits      Students         Schools       Courses     │
│  Available       Enrolled        Partnered     Available   │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Numbers:** Inter 800, 48px, #FFFFFF — animate counting up on scroll
**Labels:** Inter 500, 14px, rgba(255,255,255,0.6), uppercase, letter-spacing 2px

---

## Section 6: Competitions Preview

**Layout:** Max-width 1280px
**Background:** White
**Padding:** 120px top/bottom

### Header
- Eyebrow: "COMPETITIONS"
- Heading: "Where Builders Become Champions"
- Subtitle: "From drone races to robot sumo wrestling — our competitions test skills across multiple disciplines. Schools and individuals welcome."

### Competition Highlights (2-column grid)

```
┌──────────────────────────┐  ┌──────────────────────────┐
│ 🤖 Robot Car Competitions │  │ 🛩️ Drone Competitions     │
│                           │  │                           │
│ 5 categories including    │  │ 3 categories from         │
│ pick & place, speed       │  │ no-code flying to         │
│ racing, sumo combat,      │  │ coded navigation          │
│ and robot soccer.          │  │ and beam speed races.     │
│                           │  │                           │
│ [View Categories →]       │  │ [View Categories →]       │
└──────────────────────────┘  └──────────────────────────┘
```

**Card Style:** Competition card from Design System `5.2`
**CTA below:** "See All Competitions →" → `/competitions`

---

## Section 7: Courses Preview

**Layout:** Max-width 1280px
**Background:** `#F8FAFC`
**Padding:** 120px top/bottom

### Header
- Eyebrow: "LEARN WITH US"
- Heading: "10+ Courses. Online & Offline."
- Subtitle: "Whether you're just starting out or ready to go pro, we have courses that match your pace. Available online and at partner schools."

### Course Preview Cards (3 cards)

```
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ 🟢 Beginner       │  │ 🟡 Intermediate   │  │ 🔴 Advanced       │
│                   │  │                   │  │                   │
│ "First Steps in   │  │ "Robot Car        │  │ "Drone            │
│  Robotics"        │  │  Programming"     │  │  Engineering"     │
│                   │  │                   │  │                   │
│ • Ages 8-10       │  │ • Ages 10-14      │  │ • Ages 12-16      │
│ • 6 weeks         │  │ • 8 weeks         │  │ • 10 weeks        │
│ • Online + Live   │  │ • Online + Live   │  │ • Online + Live   │
│                   │  │                   │  │                   │
│ [Enroll Now →]    │  │ [Enroll Now →]    │  │ [Enroll Now →]    │
└──────────────────┘  └──────────────────┘  └──────────────────┘
```

**Difficulty indicators:** Colored dot + text using difficulty badge colors from Design System

---

## Section 8: Call to Action (Schools)

**Layout:** Full-width
**Background:** Gradient `linear-gradient(135deg, #2563EB, #8B5CF6)` with subtle geometric pattern overlay
**Padding:** 100px top/bottom

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│        Are You a School Administrator?                      │
│                                                            │
│    Bring CodingInABox to your school. We offer             │
│    bulk pricing, teacher training, and competition          │
│    hosting support.                                        │
│                                                            │
│    [Partner With Us →]       [Download Info Pack]           │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Heading:** Inter 700, 40px, #FFFFFF
**Body:** Inter 400, 18px, rgba(255,255,255,0.9)
**Button 1:** White background, dark text → `/contact`
**Button 2:** Ghost button (white border) → downloads PDF

---

## Section 9: Newsletter / Stay Updated

**Layout:** Max-width 700px, centered
**Background:** White
**Padding:** 80px top/bottom

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│        Stay in the Loop                                    │
│                                                            │
│    Get updates on new kits, competition dates,             │
│    and early-bird course discounts.                        │
│                                                            │
│    [  Enter your email          ] [Subscribe →]            │
│                                                            │
│    🔒 No spam. Unsubscribe anytime.                        │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Input field:** Rounded, large (48px height), border: 2px solid #E2E8F0, focus border: #2563EB
**Submit button:** Primary gradient, attached to right side of input (pill shape together)

---

## Section 10: Footer

See Design System `5.4 Footer` for full specification.

---

## Interaction Notes for Developers

1. **Scroll Animations:** All sections should animate in using Intersection Observer (fade-up, staggered children)
2. **Nav Transparency:** Navigation starts transparent on hero, transitions to solid `rgba(15,23,42,0.95)` with backdrop-blur after 100px scroll
3. **Smooth Scroll:** All internal anchor links should smooth-scroll
4. **Performance:** Lazy-load product images, use WebP format with PNG fallback
5. **Mobile Hero:** Hide floating product images on screens < 1024px; stack CTA buttons vertically
