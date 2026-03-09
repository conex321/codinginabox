# Page: Contact Us

> **URL:** `/contact`
> **Template:** Contact page with form + info
> **SEO Title:** Contact CodingInABox — Get in Touch | Schools, Orders & Support
> **Meta Description:** Reach out to CodingInABox for STEM kit orders, school partnerships, competition inquiries, course enrollment, or sponsorship opportunities.

---

## Section 1: Page Hero

**Layout:** Full-width, 40vh
**Background:** Dark gradient

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│       📬                                                   │
│       Get in Touch                                         │
│                                                            │
│       We'd love to hear from you. Whether you're a         │
│       student, parent, teacher, or potential partner.       │
│                                                            │
└──────────────────────────────────/─────────────────────────┘
```

---

## Section 2: Contact Form + Info (Two-Column)

**Layout:** Two-column (form left 60%, info right 40%)
**Background:** White
**Padding:** 100px top/bottom

### Left Column — Contact Form

```
┌─────────────────────────────────────────────┐
│                                              │
│  Send Us a Message                           │
│                                              │
│  I am a:  [Student/Parent ▾]                │  ← Dropdown
│           Options: Student/Parent,           │
│           Teacher/School, Business/Sponsor,  │
│           Other                              │
│                                              │
│  Full Name *                                 │
│  ┌─────────────────────────────────────┐    │
│  │                                      │    │
│  └─────────────────────────────────────┘    │
│                                              │
│  Email Address *                             │
│  ┌─────────────────────────────────────┐    │
│  │                                      │    │
│  └─────────────────────────────────────┘    │
│                                              │
│  Phone Number (optional)                     │
│  ┌─────────────────────────────────────┐    │
│  │                                      │    │
│  └─────────────────────────────────────┘    │
│                                              │
│  School / Organization (optional)            │
│  ┌─────────────────────────────────────┐    │
│  │                                      │    │
│  └─────────────────────────────────────┘    │
│                                              │
│  Subject *                                   │
│  ┌─────────────────────────────────────┐    │
│  │                                      │    │
│  └─────────────────────────────────────┘    │
│                                              │
│  Message *                                   │
│  ┌─────────────────────────────────────┐    │
│  │                                      │    │
│  │                                      │    │
│  │                                      │    │
│  └─────────────────────────────────────┘    │
│                                              │
│  [Send Message →]                            │
│                                              │
│  We typically respond within 24 hours.       │
│                                              │
└─────────────────────────────────────────────┘
```

**Form Validation:**
- Required fields marked with *
- Email validation (format check)
- Minimum message length: 20 characters
- Submit button disabled until all required fields are valid
- Success state: Replace form with "Thank you! We'll be in touch within 24 hours." message with checkmark icon

**Form Styling:**
- Input fields: 48px height, border: 2px solid `#E2E8F0`, border-radius: 12px
- Focus: Border color `#2563EB`, subtle blue glow
- Textarea: Min-height 120px, resizable vertically
- Submit button: Primary gradient, full-width on mobile
- Error states: Red border `#EF4444`, error text below field

### Right Column — Contact Information

```
┌─────────────────────────────────────────┐
│                                          │
│  Contact Information                     │
│                                          │
│  📧 Email                                │
│  info@codinginabox.com                   │
│                                          │
│  📧 School Partnerships                  │
│  schools@codinginabox.com                │
│                                          │
│  📧 Sponsorship                          │
│  sponsorship@codinginabox.com            │
│                                          │
│  📞 Phone                                │
│  [Phone number TBD]                      │
│                                          │
│  📍 Location                             │
│  Remote — Global Operations              │
│  (Full address TBD)                      │
│                                          │
│  ──────────────────────────              │
│                                          │
│  Follow Us                               │
│                                          │
│  [Instagram] [Facebook] [Twitter/X]      │
│  [LinkedIn] [YouTube] [TikTok]           │
│                                          │
│  ──────────────────────────              │
│                                          │
│  Business Hours                          │
│  Monday – Friday: 8:00 AM – 5:00 PM     │
│  Saturday: 9:00 AM – 1:00 PM            │
│  Sunday: Closed                          │
│  (UTC+2)                                │
│                                          │
└─────────────────────────────────────────┘
```

**Social Icons:** Lucide icons or brand SVGs, 32px, color `#64748B`, hover: brand colors
**Email links:** Clickable `mailto:` links

---

## Section 3: Quick Help Cards

**Layout:** 4-column cards
**Background:** `#F8FAFC`
**Padding:** 80px top/bottom

### Header
- Heading: "Looking for Something Specific?"

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ 📦            │  │ 🏫            │  │ 🏆            │  │ 🤝            │
│ Order a Kit   │  │ School        │  │ Competition   │  │ Become a     │
│               │  │ Partnership   │  │ Info          │  │ Sponsor      │
│               │  │               │  │               │  │               │
│ Browse our    │  │ Bring STEM    │  │ Learn about   │  │ Support STEM │
│ STEM kits     │  │ to your       │  │ our upcoming  │  │ education    │
│ and order     │  │ classroom.    │  │ events.       │  │ through      │
│ online.       │  │               │  │               │  │ sponsorship. │
│               │  │               │  │               │  │               │
│ [View Kits →] │  │ [Learn More →]│  │ [Events →]    │  │ [Sponsor →]  │
└──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘
```

**Card links:**
- View Kits → `/products`
- Learn More → `/courses` (or dedicated schools page)
- Events → `/competitions`
- Sponsor → `/sponsorship`

---

## Section 4: FAQ (Accordion)

**Layout:** Max-width 800px, centered
**Background:** White
**Padding:** 80px top/bottom

### Header
- Heading: "Frequently Asked Questions"

### FAQ Items

**Q: How do I order STEM kits?**
A: Visit our [Products page](/products) to browse all 7 kits. You can order individual kits online or contact us for bulk school orders at schools@codinginabox.com.

**Q: Do you ship internationally?**
A: Yes! We offer worldwide shipping. Contact us for shipping rates to your region.

**Q: What ages are your kits suitable for?**
A: Most kits are designed for ages 10+. Our Mini Drone kit is recommended for ages 12+ due to its complexity. Our beginner courses start from age 8.

**Q: Can I use CodingInABox kits without taking a course?**
A: Absolutely! Every kit comes with a step-by-step build guide and code download card. Courses are optional but recommended for deeper learning.

**Q: How do school partnerships work?**
A: We work with schools to provide bulk-priced kits, teacher training, and curriculum integration support. Contact schools@codinginabox.com to get started.

**Q: What if a part in my kit is missing or damaged?**
A: Contact us at info@codinginabox.com with your order number and we'll send a replacement part at no charge.

**Q: Do you offer teacher training?**
A: Yes! Our "STEM Teaching Methods" course (Course 10) is specifically designed for educators. It covers curriculum integration, facilitation, and competition hosting.

**Q: How do competition registrations work?**
A: Visit our [Competitions page](/competitions) for event dates and registration details. Schools can register teams; individuals can also enter independently.

**Accordion Style:**
- Closed: Question text + chevron-right icon
- Open: Question text + chevron-down icon, answer slides down
- Only one open at a time
- Subtle border-bottom between items
- 16px padding on answers

---

## Section 5: Map (Optional)

**Layout:** Full-width embedded map
**Height:** 400px

**Developer Note:** If a physical address is available, embed a Google Maps iframe showing the location. If no fixed address yet, skip this section or show a stylized illustrated map with a marker.

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│   [Google Maps embed or illustrated map]                   │
│                                                            │
│   📍 CodingInABox Headquarters                             │
│   [Address TBD]                                            │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## Developer Notes

- **Form Submission:** Can use Formspree, Netlify Forms, or a custom API endpoint. Should send email notifications to the team.
- **Spam Protection:** Add honeypot field or reCAPTCHA v3 (invisible)
- **Conditional Form Fields:** When "I am a" dropdown changes to "Business/Sponsor", show additional field for "Company Name" and change subject placeholder to "Sponsorship Inquiry"
- **Success Animation:** After successful form submission, show a brief confetti animation or checkmark animation
- **Responsive:** Two-column layout becomes stacked on mobile (form on top, info below). Quick help cards go 2x2 on tablet, single column on mobile.
- **Schema.org:** Add LocalBusiness or Organization structured data with contact info
