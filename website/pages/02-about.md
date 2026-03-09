# Page: About Us

> **URL:** `/about`
> **Template:** Content page (standard width with sections)
> **SEO Title:** About CodingInABox — Our Mission to Empower Young Builders
> **Meta Description:** CodingInABox was founded by Matthew & Sam to make STEM education hands-on, accessible, and fun. Learn about our mission, vision, and the team behind the kits.

---

## Section 1: Page Hero

**Layout:** Full-width, 50vh height
**Background:** Dark gradient with subtle geometric pattern
**Style:** Angled bottom edge using `clip-path`

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│            About CodingInABox                              │
│                                                            │
│     We believe every student deserves to build              │
│     something real.                                        │
│                                                            │
└──────────────────────────────────────────────/─────────────┘
                                           (angled clip-path)
```

**Heading:** "About CodingInABox" — H1, #FFFFFF
**Subtitle:** "We believe every student deserves to build something real." — Inter 400, 20px, rgba(255,255,255,0.8)

---

## Section 2: Our Story

**Layout:** Two-column (text left, image right)
**Background:** White
**Padding:** 120px top/bottom

### Left Column (60%)

**Eyebrow:** "OUR STORY"
**Heading:** "Started With a Simple Idea"

**Body Text:**

> CodingInABox was born in February 2026 when co-founders Matthew and Sam saw a gap in the education landscape: students were learning about technology in theory but rarely getting to build with their hands.
>
> We set out to change that. By partnering with hardware manufacturers and designing our own curriculum, we created a system where every student can go from unboxing a kit to competing on stage — all while learning real coding, electronics, and engineering skills.
>
> Today, CodingInABox offers 7 unique STEM kits, 10+ structured courses, and a growing competition circuit spanning drone racing, robot car challenges, and more. We work with schools, after-school programs, and individual families who want to give their kids a head start in the future economy.

### Right Column (40%)

**Image Placeholder:** Lifestyle photo of students building a robot car together, or founders working on prototypes. Use a placeholder with text: "[IMAGE: Founders/students working with STEM kits]"

**Developer Note:** Design an SVG illustration placeholder showing two figures collaborating over a robot kit on a desk, using brand colors (Electric Blue + Neon Green accents on Deep Navy background).

---

## Section 3: Mission, Vision, Values

**Layout:** Three cards in a row
**Background:** `#F8FAFC`
**Padding:** 120px top/bottom

```
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ 🎯                │  │ 🔭                │  │ 💡                │
│ Our Mission       │  │ Our Vision        │  │ Our Values        │
│                   │  │                   │  │                   │
│ To make STEM      │  │ A future where    │  │ • Hands-on first  │
│ education         │  │ every student     │  │ • Accessible to   │
│ hands-on,         │  │ student has       │  │   all income      │
│ accessible, and   │  │ access to world-  │  │   levels          │
│ competition-      │  │ class robotics    │  │ • Competition      │
│ ready for every   │  │ and coding        │  │   drives growth   │
│ student in        │  │ education.        │  │ • Community over   │
│ student.          │  │                   │  │   isolation       │
│                   │  │                   │  │                   │
└──────────────────┘  └──────────────────┘  └──────────────────┘
```

**Card Style:** White background, 16px border-radius, subtle shadow, 32px padding
**Icon:** 48px, gradient background circle
**Title:** H3, Inter 600
**Body:** Inter 400, 16px, #64748B

---

## Section 4: Meet the Founders

**Layout:** Two-column cards, centered
**Background:** White
**Padding:** 120px top/bottom

### Header
- Eyebrow: "THE TEAM"
- Heading: "Meet the Founders"

```
┌─────────────────────────────┐  ┌─────────────────────────────┐
│                              │  │                              │
│   [Circular Photo            │  │   [Circular Photo            │
│    Placeholder]              │  │    Placeholder]              │
│                              │  │                              │
│   Matthew                    │  │   Sam                        │
│   Co-Founder & CEO           │  │   Co-Founder & CTO           │
│                              │  │                              │
│   Passionate about making    │  │   Engineer and educator       │
│   technology education       │  │   with a love for building    │
│   accessible to all.         │  │   things from scratch.        │
│   Leads business strategy    │  │   Leads product design        │
│   and school partnerships.   │  │   and curriculum development. │
│                              │  │                              │
│   [LinkedIn] [Email]         │  │   [LinkedIn] [Email]         │
└─────────────────────────────┘  └─────────────────────────────┘
```

**Photo placeholder:** 160px circle, gradient border (`#2563EB` → `#8B5CF6`), with initials as fallback (M, S)
**Name:** H3, Inter 600, #0F172A
**Role:** Inter 500, 14px, #2563EB
**Bio:** Inter 400, 16px, #64748B
**Social links:** Small icon buttons (24px)

---

## Section 5: Our Impact (Numbers)

**Layout:** Full-width dark section
**Background:** `#0F172A`
**Padding:** 80px top/bottom

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│    7              500+           15+           3            │
│  STEM Kits      Students       Partner       Competition   │
│  Designed       Reached        Schools       Disciplines   │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Numbers:** Animated count-up on scroll, Inter 800, 48px, #FFFFFF
**Labels:** Inter 500, 14px, rgba(255,255,255,0.6), uppercase

---

## Section 6: Timeline / Milestones

**Layout:** Vertical timeline, centered
**Background:** White
**Padding:** 120px top/bottom

### Header
- Eyebrow: "OUR JOURNEY"
- Heading: "From Idea to Impact"

### Timeline Items

```
        Feb 2026 ──●── CodingInABox founded by Matthew & Sam
                   │
        Mar 2026 ──●── First 7 STEM kits designed and sourced
                   │
        Q2 2026  ──●── Launch of online course platform (10+ courses)
                   │
        Q3 2026  ──●── First school partnerships established
                   │
        Q4 2026  ──●── Inaugural CodingInABox Robotics Competition
                   │
        2027     ──●── Global expansion
```

**Timeline Style:**
- Vertical line: 2px, `#2563EB`
- Dot: 16px circle, `#2563EB` fill, white border
- Active/latest: Pulsing animation
- Cards alternate left/right on desktop, stack on mobile
- Each card: white background, shadow, 24px padding

---

## Section 7: CTA — Join Us

**Layout:** Full-width gradient section
**Background:** `linear-gradient(135deg, #2563EB, #8B5CF6)`

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│        Ready to Bring STEM to Your School?                 │
│                                                            │
│    Whether you're a parent, teacher, or administrator      │
│    — we'd love to hear from you.                           │
│                                                            │
│    [Contact Us →]        [View Our Kits]                   │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## Developer Notes

- **Animations:** Each section fades in on scroll
- **Timeline:** Consider using a lightweight timeline library or custom CSS
- **Founder photos:** Use gradient circle placeholders with initials until real photos are provided
- **Responsive:** Two-column layouts collapse to single column on mobile
