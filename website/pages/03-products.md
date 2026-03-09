# Page: Products / STEM Kits Overview

> **URL:** `/products` or `/kits`
> **Template:** Shop/catalog page (filterable grid)
> **SEO Title:** STEM Kits & Robotics Kits for Students | CodingInABox
> **Meta Description:** Explore 7 hands-on STEM kits including robot cars, drones, robotic arms, and more. Ages 10+. All components included. Build, code, and compete.

---

## Section 1: Page Hero

**Layout:** Full-width, 40vh
**Background:** Dark gradient with product silhouettes floating in background (low opacity)

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│            Our STEM Kits                                   │
│                                                            │
│     7 kits. Endless possibilities.                         │
│     Each one designed to teach real skills.                │
│                                                            │
└──────────────────────────────────/─────────────────────────┘
```

**Heading:** "Our STEM Kits" — H1, #FFFFFF
**Subtitle:** "7 kits. Endless possibilities. Each one designed to teach real skills." — Inter 400, 20px, rgba(255,255,255,0.8)

---

## Section 2: Filter Bar

**Layout:** Sticky below nav on scroll
**Background:** White with bottom border

```
┌────────────────────────────────────────────────────────────┐
│  [All Kits]  [Robotics]  [Drones]  [Sensors]  [Beginner]  │
│                                          Sort: [Featured ▾]│
└────────────────────────────────────────────────────────────┘
```

**Filter Tags:**
- All Kits (default, highlighted)
- Robotics (Robot Car, Robot Arm)
- Drones (Mini Drone)
- Sensors & Electronics (Laser Target, Water Dispenser, Solar Tracker, Anti-Aircraft Gun)
- Beginner Friendly
- Advanced

**Sort Options:** Featured, Price: Low to High, Price: High to Low, Newest

**Tag Style:** Pill-shaped, Inter 500, 14px
- Active: Background `#2563EB`, color `#FFF`
- Inactive: Background `#F1F5F9`, color `#64748B`
- Hover: Background `#E2E8F0`

---

## Section 3: Product Grid

**Layout:** 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
**Gap:** 24px
**Background:** `#F8FAFC`
**Padding:** 60px top, 120px bottom

### All 7 Products

---

#### Product 1: Robot Car Kit

```
┌─────────────────────────────┐
│                              │
│   [robot-car.png]            │
│                              │
│   [🟢 Beginner] [Popular]   │  ← badges top-right overlay
│                              │
├──────────────────────────────┤
│                              │
│   Robot Car Kit              │  ← H3
│                              │
│   Build and program your     │
│   own autonomous car with    │
│   ultrasonic sensors,        │
│   motors, and a micro-       │
│   controller. Learn line     │
│   following, obstacle        │
│   avoidance, and remote      │
│   control.                   │
│                              │
│   Ages 10+  •  6-8 hours     │
│                              │
│   $40.10        [View Kit →] │
│                              │
└─────────────────────────────┘
```

- **Image:** `/assets/images/products/robot-car.png`
- **Tags:** Robotics, Beginner Friendly
- **Badges:** "Popular" (gradient badge)
- **Price:** $40.10
- **Age:** 10+
- **Build Time:** 6-8 hours
- **Link:** `/products/robot-car`

---

#### Product 2: Smart Anti-Aircraft Gun

```
┌─────────────────────────────┐
│                              │
│   [anti-aircraft-gun.png]    │
│                              │
│   [🟡 Intermediate]          │
│                              │
├──────────────────────────────┤
│                              │
│   Smart Anti-Aircraft Gun    │
│                              │
│   Construct a joystick-      │
│   controlled turret that     │
│   teaches servo mechanics,   │
│   angle calculation, and     │
│   sensor-based targeting.    │
│                              │
│   Ages 10+  •  5-7 hours     │
│                              │
│   $32.36        [View Kit →] │
│                              │
└─────────────────────────────┘
```

- **Image:** `/assets/images/products/anti-aircraft-gun.png`
- **Tags:** Sensors & Electronics, Intermediate
- **Price:** $32.36
- **Age:** 10+
- **Build Time:** 5-7 hours
- **Link:** `/products/anti-aircraft-gun`

---

#### Product 3: Laser Shooting Target Device

```
┌─────────────────────────────┐
│                              │
│   [laser-shooting-target.png]│
│                              │
│   [🟢 Beginner] [🆕 New]     │
│                              │
├──────────────────────────────┤
│                              │
│   Laser Shooting Target      │
│                              │
│   Build an infrared laser    │
│   gun and electronic target  │
│   board with digital LED     │
│   scoring. Learn about IR    │
│   sensors, displays, and     │
│   basic circuitry.           │
│                              │
│   Ages 10+  •  4-6 hours     │
│                              │
│   $31.59        [View Kit →] │
│                              │
└─────────────────────────────┘
```

- **Image:** `/assets/images/products/laser-shooting-target.png`
- **Tags:** Sensors & Electronics, Beginner Friendly
- **Badges:** "New" (green badge)
- **Price:** $31.59
- **Age:** 10+
- **Build Time:** 4-6 hours
- **Link:** `/products/laser-shooting-target`

---

#### Product 4: Smart Water Dispenser

```
┌─────────────────────────────┐
│                              │
│   [smart-water-dispenser.png]│
│                              │
│   [🟢 Beginner]              │
│                              │
├──────────────────────────────┤
│                              │
│   Smart Water Dispenser      │
│                              │
│   Construct a working water  │
│   dispenser with a digital   │
│   display, pump system, and  │
│   push-button controls.      │
│   Learn about fluid          │
│   mechanics and electronics. │
│                              │
│   Ages 10+  •  4-5 hours     │
│                              │
│   $26.65        [View Kit →] │
│                              │
└─────────────────────────────┘
```

- **Image:** `/assets/images/products/smart-water-dispenser.png`
- **Tags:** Sensors & Electronics, Beginner Friendly
- **Price:** $26.65
- **Age:** 10+
- **Build Time:** 4-5 hours
- **Link:** `/products/smart-water-dispenser`

---

#### Product 5: Solar Light Tracker

```
┌─────────────────────────────┐
│                              │
│   [solar-light-tracker.png]  │
│                              │
│   [🟡 Intermediate]          │
│                              │
├──────────────────────────────┤
│                              │
│   Solar Light Tracker        │
│                              │
│   Build a solar panel that   │
│   automatically follows the  │
│   sun. Learn about solar     │
│   energy, servo motors, and  │
│   light-dependent resistors  │
│   (LDRs).                    │
│                              │
│   Ages 10+  •  5-6 hours     │
│                              │
│   $21.24        [View Kit →] │
│                              │
└─────────────────────────────┘
```

- **Image:** `/assets/images/products/solar-light-tracker.png`
- **Tags:** Sensors & Electronics, Intermediate
- **Price:** $21.24
- **Age:** 10+
- **Build Time:** 5-6 hours
- **Link:** `/products/solar-light-tracker`

---

#### Product 6: Robot Arm

```
┌─────────────────────────────┐
│                              │
│   [robot-arm.png]            │
│                              │
│   [🟡 Intermediate] [Popular]│
│                              │
├──────────────────────────────┤
│                              │
│   Robot Arm                  │
│                              │
│   Assemble a multi-axis      │
│   robotic arm with joystick  │
│   control, gripper claw, and │
│   servo-driven joints.       │
│   Perfect for learning       │
│   industrial robotics.       │
│                              │
│   Ages 10+  •  8-10 hours    │
│                              │
│   $39.31        [View Kit →] │
│                              │
└─────────────────────────────┘
```

- **Image:** `/assets/images/products/robot-arm.png`
- **Tags:** Robotics, Intermediate
- **Badges:** "Popular" (gradient badge)
- **Price:** $39.31
- **Age:** 10+
- **Build Time:** 8-10 hours
- **Link:** `/products/robot-arm`

---

#### Product 7: Mini Drone

```
┌─────────────────────────────┐
│                              │
│   [mini-drone.png]           │
│                              │
│   [🔴 Advanced] [⭐ Premium] │
│                              │
├──────────────────────────────┤
│                              │
│   Mini Drone                 │
│                              │
│   Build your own quadcopter  │
│   from scratch. Learn about  │
│   flight dynamics, motor     │
│   control, gyroscopes, and   │
│   wireless communication.    │
│   The ultimate STEM          │
│   challenge.                 │
│                              │
│   Ages 12+  •  10-14 hours   │
│                              │
│   $94.90        [View Kit →] │
│                              │
└─────────────────────────────┘
```

- **Image:** `/assets/images/products/mini-drone.png`
- **Tags:** Drones, Advanced
- **Badges:** "Premium" (purple badge)
- **Price:** $94.90
- **Age:** 12+
- **Build Time:** 10-14 hours
- **Link:** `/products/mini-drone`

---

## Section 4: Comparison Table

**Layout:** Full-width table, horizontally scrollable on mobile
**Background:** White
**Padding:** 80px top/bottom

### Header
- Heading: "Compare All Kits at a Glance"

| Kit | Price | Age | Build Time | Difficulty | Competition Ready | Coding Required |
|-----|-------|-----|------------|------------|-------------------|-----------------|
| Robot Car | $40.10 | 10+ | 6-8 hrs | Beginner | ✅ Yes | ✅ Yes |
| Anti-Aircraft Gun | $32.36 | 10+ | 5-7 hrs | Intermediate | ❌ No | ✅ Yes |
| Laser Shooting Target | $31.59 | 10+ | 4-6 hrs | Beginner | ❌ No | Optional |
| Smart Water Dispenser | $26.65 | 10+ | 4-5 hrs | Beginner | ❌ No | Optional |
| Solar Light Tracker | $21.24 | 10+ | 5-6 hrs | Intermediate | ❌ No | Optional |
| Robot Arm | $39.31 | 10+ | 8-10 hrs | Intermediate | ✅ Yes (Pick & Place) | ✅ Yes |
| Mini Drone | $94.90 | 12+ | 10-14 hrs | Advanced | ✅ Yes | ✅ Yes |

**Table Style:**
- Header row: `#0F172A` background, white text, Inter 600
- Alternating rows: White / `#F8FAFC`
- Hover row: Light blue tint `#EFF6FF`
- Checkmarks: Green (`#10B981`), X marks: Red (`#EF4444`)
- Border-radius on table container: 16px

---

## Section 5: Bulk / School Pricing CTA

**Layout:** Full-width gradient banner
**Background:** `linear-gradient(135deg, #2563EB, #8B5CF6)`

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│   🏫 Ordering for a School or Class?                       │
│                                                            │
│   We offer bulk pricing for 10+ kits. Get a custom         │
│   quote and curriculum support included.                   │
│                                                            │
│   [Request Bulk Pricing →]                                 │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## Section 6: What's In Every Box

**Layout:** Max-width 1280px, icon grid
**Background:** `#F8FAFC`
**Padding:** 100px top/bottom

### Header
- Heading: "What's In Every Box"

### Icon Grid (2x3 on desktop, 1-column mobile)

```
┌──────────┐  ┌──────────┐  ┌──────────┐
│ 📦        │  │ 📖        │  │ 🔧        │
│ All Parts │  │ Step-by-  │  │ Tools     │
│ Included  │  │ Step Guide│  │ Included  │
└──────────┘  └──────────┘  └──────────┘
┌──────────┐  ┌──────────┐  ┌──────────┐
│ 💻        │  │ 🏆        │  │ 🎓        │
│ Code      │  │ Competition│ │ Learning  │
│ Access    │  │ Ready      │ │ Outcomes  │
└──────────┘  └──────────┘  └──────────┘
```

Each item:
- **Icon:** 48px, brand color
- **Title:** Inter 600, 16px, #0F172A
- **Description (short):**
  - All Parts Included: "Every component, wire, and screw you need"
  - Step-by-Step Guide: "Visual instructions for every build stage"
  - Tools Included: "Screwdriver and assembly tools in the box"
  - Code Access: "Download code samples and libraries online"
  - Competition Ready: "Select kits qualify for official events"
  - Learning Outcomes: "Mapped to STEM curriculum standards"

---

## Developer Notes

- **Filtering:** Should work client-side with smooth transitions (no page reload). Animate cards in/out with CSS grid + opacity transitions.
- **Lazy Loading:** All product images should lazy-load
- **Sticky Filter Bar:** Filter bar becomes sticky below the nav when user scrolls past the hero
- **Price Display:** All prices in USD. Note in small text: "*Retail prices. Bulk/school pricing available."
- **Mobile Grid:** Switch to single column with horizontal card layout (image left, text right)
