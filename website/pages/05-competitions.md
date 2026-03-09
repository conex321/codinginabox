# Page: Competitions

> **URL:** `/competitions`
> **Template:** Content page with cards and tables
> **SEO Title:** Robotics & Drone Competitions for Students | CodingInABox
> **Meta Description:** Compete in drone racing, robot car challenges, sumo combat, and more. Open to schools and individuals. Build your kit, enter the arena, prove your skills.

---

## Section 1: Page Hero

**Layout:** Full-width, 50vh
**Background:** Dark gradient with subtle animated particle/confetti effect or trophy icon pattern

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│       🏆                                                   │
│       Competitions                                         │
│                                                            │
│       Where builders become champions.                     │
│       Enter the arena. Prove your skills.                  │
│                                                            │
│       [Register Now →]     [View Rules]                    │
│                                                            │
└──────────────────────────────────/─────────────────────────┘
```

**Heading:** "Competitions" — H1, #FFFFFF
**Subtitle:** "Where builders become champions. Enter the arena. Prove your skills."
**CTA 1:** "Register Now" → primary button → scrolls to registration section or `/contact`
**CTA 2:** "View Rules" → ghost button → scrolls to rules section

---

## Section 2: Overview

**Layout:** Max-width 800px, centered text
**Background:** White
**Padding:** 80px top/bottom

**Text:**

> CodingInABox runs competitions across two major disciplines: **Drone Competitions** and **Robot Car Competitions**. Each discipline has multiple categories designed for different skill levels — from beginners who fly without code to advanced builders who program autonomous behaviors.
>
> Competitions are open to schools, after-school clubs, and individual participants. Prizes, certificates, and sponsorship opportunities are available for top performers.

---

## Section 3: Competition Disciplines

**Layout:** Two major sections, each with sub-category cards
**Background:** `#F8FAFC`
**Padding:** 120px top/bottom

---

### Discipline A: Drone Competitions

**Section Header:**
- Icon: Drone/plane icon (Lucide `plane`)
- Eyebrow: "DISCIPLINE A"
- Heading: "Drone Competitions"
- Subtitle: "Three categories testing flight skills from manual control to fully autonomous navigation."
- Required Kit: Mini Drone Kit ($94.90) — link to product page

**Category Cards (3 cards in a row):**

```
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│                   │  │                   │  │                   │
│  B1               │  │  B2               │  │  B3               │
│  🎮 No-Code       │  │  💻 Coded Flight  │  │  ⚡ Beam Speeder  │
│  Flying           │  │                   │  │  Race             │
│                   │  │                   │  │                   │
│  Fly your drone   │  │  Program your     │  │  Race your drone  │
│  manually through │  │  drone to         │  │  along a beam     │
│  an obstacle      │  │  autonomously     │  │  track at maximum │
│  course using     │  │  navigate         │  │  speed. Fastest   │
│  only the remote  │  │  waypoints and    │  │  time wins.       │
│  controller.      │  │  complete tasks.  │  │                   │
│  No coding.       │  │                   │  │  Difficulty:      │
│                   │  │  Difficulty:      │  │  ●●● Advanced     │
│  Difficulty:      │  │  ●●○Intermediate │  │                   │
│  ●○○ Beginner     │  │                   │  │  [Details →]      │
│                   │  │  [Details →]      │  │                   │
│  [Details →]      │  │                   │  │                   │
└──────────────────┘  └──────────────────┘  └──────────────────┘
```

**Card Data:**

| Code | Name | Description | Difficulty | Coding Required |
|------|------|-------------|------------|-----------------|
| B1 | No-Code Flying | Fly your drone manually through an obstacle course using only the remote controller. Judged on time and precision. | Beginner | No |
| B2 | Coded Flight | Program your drone to autonomously navigate waypoints, avoid obstacles, and complete tasks without manual input. | Intermediate | Yes |
| B3 | Beam Speeder Race | Race your drone along a straight beam track at maximum speed. Fastest time wins. Requires precise speed control. | Advanced | Yes |

---

### Discipline B: Robot Car Competitions

**Section Header:**
- Icon: Car icon (Lucide `car`)
- Eyebrow: "DISCIPLINE B"
- Heading: "Robot Car Competitions"
- Subtitle: "Five categories testing everything from precision pick-and-place to full-contact robot sumo."
- Required Kit: Robot Car Kit ($40.10) — link to product page

**Category Cards (3 + 2 layout, or scrollable carousel):**

```
ROW 1:
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  C1               │  │  C2               │  │  C3               │
│  🎯 Pick & Place  │  │  ⚡ Speed (Beam)  │  │  🏁 NatCar       │
│                   │  │                   │  │                   │
│  Program your     │  │  Race your robot  │  │  Navigate a       │
│  robot car to     │  │  car along a      │  │  predefined       │
│  pick up objects  │  │  straight beam    │  │  national         │
│  from one         │  │  track. Fastest   │  │  standard course  │
│  location and     │  │  time wins.       │  │  with obstacles,  │
│  place them in    │  │  Precision and    │  │  turns, and       │
│  another.         │  │  speed control    │  │  checkpoints.     │
│  Accuracy +       │  │  are key.         │  │                   │
│  speed scored.    │  │                   │  │  Difficulty:      │
│                   │  │  Difficulty:      │  │  ●●○Intermediate │
│  Difficulty:      │  │  ●●○Intermediate │  │                   │
│  ●●○Intermediate │  │                   │  │  [Details →]      │
│                   │  │  [Details →]      │  │                   │
│  [Details →]      │  │                   │  │                   │
└──────────────────┘  └──────────────────┘  └──────────────────┘

ROW 2:
┌──────────────────┐  ┌──────────────────┐
│  C4               │  │  C5               │
│  🥊 Sumo/Combat  │  │  ⚽ Robot Soccer  │
│                   │  │                   │
│  Two robot cars   │  │  Team-based robot │
│  enter a ring.    │  │  soccer! Program  │
│  Push your        │  │  your cars to     │
│  opponent out     │  │  work together    │
│  to win. Strategy,│  │  and score goals. │
│  power, and       │  │  Teamwork and     │
│  programming      │  │  strategy meet    │
│  all matter.      │  │  coding skills.   │
│                   │  │                   │
│  Difficulty:      │  │  Difficulty:      │
│  ●●● Advanced    │  │  ●●● Advanced    │
│                   │  │                   │
│  [Details →]      │  │  [Details →]      │
└──────────────────┘  └──────────────────┘
```

**Card Data:**

| Code | Name | Description | Difficulty | Coding Required |
|------|------|-------------|------------|-----------------|
| C1 | Pick & Place | Program your robot car (or arm) to pick up objects from one location and place them in another. Scored on accuracy and speed. | Intermediate | Yes |
| C2 | Speed (Beam) | Race your robot car along a straight beam track. Fastest time wins. Tests precision motor control and speed tuning. | Intermediate | Yes |
| C3 | NatCar | Navigate a predefined national-standard course with obstacles, turns, and checkpoints. Tests autonomous navigation. | Intermediate | Yes |
| C4 | Sumo / Combat | Two robot cars enter a ring — push your opponent out to win. Tests strategy, power management, and real-time programming. | Advanced | Yes |
| C5 | Robot Soccer | Team-based robot soccer. Program 2-3 cars to work together and score goals. Tests multi-robot coordination and team strategy. | Advanced | Yes |

---

## Section 4: Competition Calendar

**Layout:** Timeline or table
**Background:** White
**Padding:** 80px top/bottom

### Header
- Heading: "Upcoming Events"
- Subtitle: "Mark your calendar. Registration opens 30 days before each event."

### Events Table

| Date | Event | Location | Categories | Registration |
|------|-------|----------|------------|--------------|
| Q3 2026 | Regional Qualifier — Region A | TBD | All categories | Opening Soon |
| Q3 2026 | Regional Qualifier — Region B | TBD | All categories | Opening Soon |
| Q4 2026 | CodingInABox National Championship | TBD | All categories | Coming Soon |
| 2027 | International STEM Challenge | TBD | Select categories | TBD |

**Table Style:** From Design System (dark header, alternating rows)
**Registration Status Badges:**
- "Opening Soon" → Yellow badge
- "Open" → Green badge with link
- "Closed" → Gray badge
- "Coming Soon" → Blue badge

---

## Section 5: How to Enter

**Layout:** 4-step horizontal process
**Background:** `#F8FAFC`
**Padding:** 100px top/bottom

### Header
- Heading: "How to Enter"

### Steps

```
  Step 1              Step 2              Step 3              Step 4
  ──●──────────────────●──────────────────●──────────────────●──
  Get Your Kit        Build & Practice    Register Online     Compete!

  Purchase a           Assemble your kit   Fill out the        Show up, set up,
  competition-ready    and practice the    online registration and give it your
  kit from our shop.   skills for your     form. Individual    best shot.
                       chosen category.    or school entries   Winners receive
                                           accepted.           prizes & certs.
```

---

## Section 6: Rules & Regulations (Accordion)

**Layout:** Max-width 800px, centered
**Background:** White
**Padding:** 80px top/bottom

### Header
- Heading: "Rules & Regulations"

### Accordion Items

**General Rules:**
- All participants must use official CodingInABox kits (unmodified hardware)
- Software modifications and custom code are encouraged
- Safety equipment must be worn in drone events
- Each participant may enter a maximum of 3 categories
- School teams may have up to 5 members per category entry
- Judges' decisions are final

**Drone Competitions (B1-B3):**
- All drones must be built from the CodingInABox Mini Drone Kit
- Maximum flight altitude: 3 meters indoors
- Safety propeller guards must be installed
- B1 (No-Code): No automated features allowed; remote control only
- B2 (Coded): Must demonstrate at least 3 autonomous waypoints
- B3 (Beam Speeder): Drone must follow a 10-meter beam; timed in seconds

**Robot Car Competitions (C1-C5):**
- All cars must be built from the CodingInABox Robot Car Kit
- Maximum dimensions: 25cm x 25cm x 20cm
- C1 (Pick & Place): 3 objects, 2-minute time limit
- C2 (Speed Beam): 5-meter straight track, best of 3 runs
- C3 (NatCar): Standardized course, 5-minute time limit
- C4 (Sumo): 1-meter diameter ring, best of 3 rounds, 30 seconds each
- C5 (Soccer): 2v2 robot soccer, 5-minute matches

---

## Section 7: Prizes & Recognition

**Layout:** 3-column highlight cards
**Background:** Gradient `linear-gradient(135deg, #0F172A, #1E293B)`
**Padding:** 100px top/bottom

```
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ 🥇                │  │ 🥈                │  │ 🥉                │
│ 1st Place         │  │ 2nd Place         │  │ 3rd Place         │
│                   │  │                   │  │                   │
│ • Trophy          │  │ • Trophy          │  │ • Trophy          │
│ • Certificate     │  │ • Certificate     │  │ • Certificate     │
│ • Premium kit     │  │ • Next-tier kit   │  │ • CodingInABox    │
│   bundle          │  │   upgrade         │  │   merchandise     │
│ • Feature on      │  │ • Feature on      │  │                   │
│   website         │  │   website         │  │                   │
│ • Sponsorship     │  │                   │  │                   │
│   consideration   │  │                   │  │                   │
└──────────────────┘  └──────────────────┘  └──────────────────┘
```

**Additional:** "All participants receive a Certificate of Participation and are eligible for sponsorship opportunities."

---

## Section 8: Registration CTA

**Layout:** Full-width gradient
**Background:** `linear-gradient(90deg, #2563EB, #8B5CF6)`
**Padding:** 80px top/bottom

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│        Ready to Compete?                                   │
│                                                            │
│    Registration for Q3 2026 regionals opens soon.          │
│    Sign up for notifications to be the first to know.      │
│                                                            │
│    [  Enter your email          ] [Notify Me →]            │
│                                                            │
│    Or [Contact us] for school group registrations.         │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## Developer Notes

- **Card Animations:** Competition category cards should have a subtle glow effect on hover matching their discipline color (blue for drones, green for robot cars)
- **Difficulty Indicator:** Use filled/empty dots (●●○ = intermediate). Map to colors from Design System difficulty badges.
- **Calendar Integration:** Consider adding "Add to Calendar" buttons (Google Calendar / iCal) for confirmed event dates
- **Registration Form:** Can be a simple embedded form (Google Forms, Typeform, or custom) that collects: name, email, school (optional), categories interested in
- **Responsive:** Cards stack to single column on mobile. Timeline becomes vertical.
