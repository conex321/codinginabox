# Page: Individual Product Detail (Template + All 7 Products)

> **URL Pattern:** `/products/[product-slug]`
> **Template:** Product detail page
> **Note:** This file contains the master template AND the specific content for all 7 products. Antigravity should use the template to generate each individual product page dynamically or as static pages.

---

## Master Template Layout

### Section 1: Product Hero

**Layout:** Two-column (image left 50%, details right 50%)
**Background:** White
**Padding:** 80px top/bottom

```
┌──────────────────────────┬──────────────────────────────────┐
│                          │                                   │
│                          │  [Breadcrumb: Home > Kits > Name] │
│                          │                                   │
│   [Large Product Image]  │  Product Name                     │
│                          │  ★★★★☆ (4.5) · 23 reviews        │
│   [Thumbnail gallery     │                                   │
│    below main image]     │  Short description paragraph      │
│                          │  that explains what this kit      │
│                          │  does and who it's for.           │
│                          │                                   │
│                          │  ┌───────────┬───────────┐        │
│                          │  │ Ages: 10+ │ Time: 6h  │        │
│                          │  ├───────────┼───────────┤        │
│                          │  │ Level:    │ Parts:    │        │
│                          │  │ Beginner  │ 45+       │        │
│                          │  └───────────┴───────────┘        │
│                          │                                   │
│                          │  $XX.XX                            │
│                          │                                   │
│                          │  [Add to Cart]  [Buy for School]  │
│                          │                                   │
│                          │  🚚 Free shipping on 5+ kits      │
│                          │  📦 All parts & tools included     │
│                          │  📖 Step-by-step guide included    │
│                          │                                   │
└──────────────────────────┴──────────────────────────────────┘
```

**Main Image:** Large, white background, 1:1 or 4:3 aspect ratio
**Thumbnails:** 4-5 small images showing different angles/stages of the build
**Breadcrumb:** Inter 400, 14px, `#94A3B8`, with `>` separators
**Product Name:** H1, Inter 700, 36px
**Price:** Inter 800, 32px, `#0F172A`
**Specs Grid:** 2x2 grid with icon + label + value, border: 1px solid `#E2E8F0`, border-radius: 12px
**CTA Buttons:** Primary ("Add to Cart"), Secondary ("Buy for School")
**Trust Signals:** Icon + text rows below buttons, Inter 400, 14px, `#64748B`

---

### Section 2: What You'll Learn

**Layout:** Icon grid, 3 columns
**Background:** `#F8FAFC`
**Padding:** 80px top/bottom

```
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  ⚡ Electronics    │  │  💻 Coding        │  │  🔧 Mechanical    │
│                   │  │                   │  │                   │
│  Circuit design,  │  │  Arduino/Python   │  │  Gear systems,   │
│  wiring, sensors  │  │  programming      │  │  assembly skills  │
└──────────────────┘  └──────────────────┘  └──────────────────┘
```

---

### Section 3: What's in the Box

**Layout:** Grid with item list + image
**Background:** White

```
┌──────────────────────────┬──────────────────────────────────┐
│                          │                                   │
│  [Unboxing/Parts image]  │  What's in the Box:              │
│                          │                                   │
│                          │  ✓ Laser-cut wooden parts        │
│                          │  ✓ Microcontroller board         │
│                          │  ✓ Sensors & motors              │
│                          │  ✓ Wiring & connectors           │
│                          │  ✓ Screwdriver & tools           │
│                          │  ✓ Step-by-step build guide      │
│                          │  ✓ Code download card            │
│                          │                                   │
└──────────────────────────┴──────────────────────────────────┘
```

---

### Section 4: Build Journey (Step-by-step Preview)

**Layout:** Horizontal stepper / timeline
**Background:** `#F8FAFC`

```
  Step 1          Step 2          Step 3          Step 4
  ──●──────────────●──────────────●──────────────●──
  Unbox &        Assemble       Wire & Connect   Code &
  Sort Parts     Structure      Electronics      Test
```

Each step has: number, icon, title, 1-line description.

---

### Section 5: Competition Compatibility (if applicable)

**Layout:** Highlighted card
**Background:** Dark gradient card
**Conditional:** Only shown for competition-ready kits

```
┌────────────────────────────────────────────────────────────┐
│  🏆 This kit is competition-ready!                         │
│                                                            │
│  The [Product] qualifies for these CodingInABox            │
│  competition categories:                                   │
│                                                            │
│  • [Category 1 name + link]                                │
│  • [Category 2 name + link]                                │
│                                                            │
│  [View Competition Details →]                              │
└────────────────────────────────────────────────────────────┘
```

---

### Section 6: Related Kits

**Layout:** 3-column product cards
**Heading:** "You Might Also Like"

Show 3 other products (exclude current one). Use product card component from Design System.

---

### Section 7: FAQ Accordion

**Layout:** Max-width 800px, centered
**Background:** White

Common questions per product (5-6 items):
- "What age is this kit suitable for?"
- "Do I need prior coding experience?"
- "How long does it take to build?"
- "Are batteries included?"
- "Can this kit be used for competitions?"
- "Is there a warranty?"

**Accordion style:** Click to expand, smooth slide-down animation. Only one open at a time. Chevron icon rotates on open.

---

---

## Product-Specific Content for All 7 Kits

---

### PRODUCT 1: Robot Car Kit

**Slug:** `robot-car`
**SEO Title:** Robot Car STEM Kit — Build & Code Your Own Autonomous Car | CodingInABox
**Meta Description:** Build a fully functional robot car with ultrasonic sensors, line-following, and obstacle avoidance. Ages 10+. All parts included. Competition ready.
**Image:** `/assets/images/products/robot-car.png`
**Price:** $40.10
**Age:** 10+
**Difficulty:** Beginner
**Build Time:** 6-8 hours
**Parts Count:** 50+

**Description:**
Build and program your very own autonomous robot car! This kit includes everything you need — laser-cut wooden chassis, motors, wheels, ultrasonic distance sensors, and a microcontroller board. Follow our step-by-step guide to assemble the car, then learn to code behaviors like line following, obstacle avoidance, and remote control via Bluetooth.

**What You'll Learn:**
- Electronics: Motor control, sensor wiring, circuit design
- Coding: Arduino programming, conditional logic, sensor reading
- Mechanical: Chassis assembly, gear ratios, wheel alignment

**What's in the Box:**
- Laser-cut wooden chassis pieces
- 2x DC motors with wheels
- Ultrasonic distance sensor (HC-SR04)
- Line-following IR sensors
- Arduino-compatible microcontroller
- Motor driver board
- Battery holder (AA batteries not included)
- USB programming cable
- Wiring harness & connectors
- Assembly screws & screwdriver
- Illustrated build guide
- Code download card

**Competition Categories:**
- C1: Pick & Place
- C2: Speed (Beam)
- C3: NatCar
- C4: Sumo/Combat
- C5: Soccer

---

### PRODUCT 2: Smart Anti-Aircraft Gun

**Slug:** `anti-aircraft-gun`
**SEO Title:** Smart Anti-Aircraft Gun STEM Kit — Servo & Joystick Control | CodingInABox
**Meta Description:** Build a joystick-controlled turret with servo motors and sensors. Learn angle calculation and targeting mechanics. Ages 10+. All parts included.
**Image:** `/assets/images/products/anti-aircraft-gun.png`
**Price:** $32.36
**Age:** 10+
**Difficulty:** Intermediate
**Build Time:** 5-7 hours
**Parts Count:** 40+

**Description:**
Construct a smart turret with joystick control! This kit teaches servo motor mechanics, angle calculation, and sensor-based targeting through a hands-on build experience. Use the joystick to aim and the trigger mechanism to fire. A fantastic introduction to control systems and embedded programming.

**What You'll Learn:**
- Electronics: Servo motor control, joystick input reading, trigger circuits
- Coding: Mapping joystick values to servo angles, control loops
- Mechanical: Turret assembly, pivot mechanisms, base construction

**What's in the Box:**
- Laser-cut wooden turret body & base
- 2x servo motors (pan & tilt)
- Analog joystick module
- Arduino-compatible microcontroller
- Trigger mechanism components
- Battery holder
- USB programming cable
- Wiring & connectors
- Assembly tools & guide
- Code download card

**Competition Categories:** None (standalone educational kit)

---

### PRODUCT 3: Laser Shooting Target Device

**Slug:** `laser-shooting-target`
**SEO Title:** Laser Shooting Target STEM Kit — IR Sensor & LED Scoring | CodingInABox
**Meta Description:** Build an infrared laser gun and electronic target board with digital LED scoring. Learn sensor technology and circuit design. Ages 10+.
**Image:** `/assets/images/products/laser-shooting-target.png`
**Price:** $31.59
**Age:** 10+
**Difficulty:** Beginner
**Build Time:** 4-6 hours
**Parts Count:** 35+

**Description:**
Build your own infrared laser shooting system complete with a target board and digital LED score display! This kit introduces infrared sensor technology, LED display programming, and basic circuit design in the most fun way possible — by building a target shooting game.

**What You'll Learn:**
- Electronics: IR emitter/receiver pairs, LED display driving, circuit board assembly
- Coding: Score counting, sensor threshold calibration, display control
- Mechanical: Gun assembly, target board construction, sensor mounting

**What's in the Box:**
- Laser-cut wooden gun & target board pieces
- IR LED emitter & receiver sensors
- 4-digit LED display module
- Arduino-compatible microcontroller
- Control board with buttons
- Speaker/buzzer for sound effects
- Battery holder
- Wiring & connectors
- Assembly tools & guide
- Code download card

**Competition Categories:** None (standalone educational kit)

---

### PRODUCT 4: Smart Water Dispenser

**Slug:** `smart-water-dispenser`
**SEO Title:** Smart Water Dispenser STEM Kit — Pumps, Sensors & Digital Display | CodingInABox
**Meta Description:** Build a working smart water dispenser with digital display, pump system, and button controls. Learn about fluid mechanics and electronics. Ages 10+.
**Image:** `/assets/images/products/smart-water-dispenser.png`
**Price:** $26.65
**Age:** 10+
**Difficulty:** Beginner
**Build Time:** 4-5 hours
**Parts Count:** 30+

**Description:**
Construct a fully functional smart water dispenser! This kit combines a real water pump, digital temperature/volume display, and push-button controls into a working device that teaches fluid mechanics, pump electronics, and display programming in a practical, everyday context.

**What You'll Learn:**
- Electronics: Pump motor control, digital display interfacing, button circuits
- Coding: Pump timing, volume calculation, display output
- Mechanical: Tube routing, housing assembly, waterproofing basics

**What's in the Box:**
- Laser-cut wooden housing pieces
- Mini water pump with tubing
- 4-digit LED display module
- Push buttons (start/stop, volume select)
- Arduino-compatible microcontroller
- Battery holder
- Silicone tubing
- Wiring & connectors
- Assembly tools & guide
- Code download card

**Competition Categories:** None (standalone educational kit)

---

### PRODUCT 5: Solar Light Tracker

**Slug:** `solar-light-tracker`
**SEO Title:** Solar Light Tracker STEM Kit — Solar Energy & Servo Motors | CodingInABox
**Meta Description:** Build a solar panel that automatically follows the sun. Learn about renewable energy, servos, and light-dependent resistors. Ages 10+.
**Image:** `/assets/images/products/solar-light-tracker.png`
**Price:** $21.24
**Age:** 10+
**Difficulty:** Intermediate
**Build Time:** 5-6 hours
**Parts Count:** 35+

**Description:**
Build a solar panel that automatically tracks the sun! This kit uses light-dependent resistors (LDRs) and servo motors to orient a solar panel toward the brightest light source. Learn about renewable energy, analog sensors, and automated control systems — skills at the heart of green technology.

**What You'll Learn:**
- Electronics: LDR sensors, servo control, analog-to-digital conversion
- Coding: Sensor comparison algorithms, servo positioning, feedback loops
- Mechanical: Pan-tilt mechanism, solar panel mounting, base construction

**What's in the Box:**
- Laser-cut wooden base & mount
- Mini solar panel
- 2x light-dependent resistors (LDRs)
- 2x servo motors
- Expansion board with sensor inputs
- Arduino-compatible microcontroller
- Battery holder
- Wiring & connectors
- Assembly tools & guide
- Code download card

**Competition Categories:** None (standalone educational kit)

---

### PRODUCT 6: Robot Arm

**Slug:** `robot-arm`
**SEO Title:** Robot Arm STEM Kit — Multi-Axis Robotic Arm with Joystick Control | CodingInABox
**Meta Description:** Build a multi-axis robotic arm with joystick control and gripper claw. Learn industrial robotics, servo control, and programming. Ages 10+.
**Image:** `/assets/images/products/robot-arm.png`
**Price:** $39.31
**Age:** 10+
**Difficulty:** Intermediate
**Build Time:** 8-10 hours
**Parts Count:** 60+

**Description:**
Assemble a multi-axis robotic arm with joystick control and a working gripper claw! This is the most hands-on introduction to industrial robotics — learn how factory robots work by building your own. Control each joint independently, program automated pick-and-place sequences, and explore inverse kinematics.

**What You'll Learn:**
- Electronics: Multi-servo control, joystick mapping, power distribution
- Coding: Sequential motor control, pick-and-place algorithms, coordinate systems
- Mechanical: Multi-joint assembly, gear reduction, gripper mechanisms

**What's in the Box:**
- Laser-cut wooden arm segments & base
- 4x servo motors (base, shoulder, elbow, gripper)
- Dual joystick controller
- LCD display module
- Arduino-compatible microcontroller
- Battery holder
- Wiring harness & connectors
- Assembly screws & tools
- Illustrated build guide
- Code download card

**Competition Categories:**
- C1: Pick & Place

---

### PRODUCT 7: Mini Drone

**Slug:** `mini-drone`
**SEO Title:** Mini Drone STEM Kit — Build Your Own Programmable Quadcopter | CodingInABox
**Meta Description:** Build a quadcopter drone from scratch. Learn flight dynamics, motor control, gyroscopes, and wireless communication. Ages 12+. The ultimate STEM challenge.
**Image:** `/assets/images/products/mini-drone.png`
**Price:** $94.90
**Age:** 12+
**Difficulty:** Advanced
**Build Time:** 10-14 hours
**Parts Count:** 75+

**Description:**
The ultimate STEM challenge: build your own quadcopter drone from scratch! This premium kit takes you through every step of drone construction — from motor mounting and propeller balancing to flight controller programming and wireless communication. By the end, you'll have a flying machine you built with your own hands.

**What You'll Learn:**
- Electronics: Brushless motor control, ESC programming, gyroscope/accelerometer sensors, wireless communication
- Coding: PID control algorithms, flight stabilization, remote control signal processing
- Mechanical: Frame assembly, motor mounting, propeller balancing, center of gravity

**What's in the Box:**
- Laser-cut wooden drone frame with propeller guards
- 4x brushless motors
- 4x propellers (+ 2 spare)
- 4x Electronic Speed Controllers (ESCs)
- Flight controller board with gyroscope/accelerometer
- Wireless receiver module
- Remote controller (transmitter)
- LiPo battery + charger
- Wiring harness & connectors
- Assembly tools
- Comprehensive build guide (printed)
- Code download card

**Competition Categories:**
- B1: Drone — No Code (manual flying)
- B2: Drone — Coding (autonomous tasks)
- B3: Drone — Race / Beam Speeder

---

## Developer Notes

- **Dynamic Rendering:** Use a single template component that receives product data as props/context. All 7 products follow the identical layout — only the content differs.
- **Image Gallery:** Main image + thumbnails. Clicking a thumbnail swaps the main image. Consider a lightbox for zoom.
- **Related Products:** Show 3 products from the same category or difficulty level, excluding the current product.
- **Schema.org:** Add Product structured data (JSON-LD) for each product page: name, image, price, description, availability.
- **Mobile Layout:** Stack image above details on mobile. Image gallery becomes a horizontal swipeable carousel.
