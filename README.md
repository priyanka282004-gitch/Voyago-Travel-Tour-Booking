# 🌍 VOYAGO — Travel & Tour Booking Platform
> **"Discover More. Travel Better."**

VOYAGO is a modern, responsive travel discovery and tour booking web platform built with HTML5, Bootstrap 5.3, Bootstrap Icons, custom CSS design tokens, and modular Vanilla JavaScript.

This project was designed as a **frontend portfolio demonstration project for job interviews and GitHub**. It showcases clean frontend architecture, regional & global destination catalogs, responsive layouts, accessible UI components, client-side form validations, and interactive Bootstrap modals without relying on heavy frameworks or backend infrastructure.

---

## ⚠️ Important Portfolio Disclaimer

> **VOYAGO is a fictional travel platform created for portfolio and educational demonstration purposes. It does not process real bookings, payments, user authentication, or customer data.**

---

## 🎨 Visual Identity & Design System

- **Primary Brand Color**: Deep Forest Green (`#1B4332`)
- **Accent Color**: Muted Warm Amber / Golden (`#D4A373`)
- **Background Surface**: Warm Off-White / Ivory (`#FAFAF7`)
- **Typography**: Google Fonts — *Playfair Display* (Display Titles & Serifs) + *Plus Jakarta Sans* (Body Text & UI Labels)
- **Imagery**: Curated Unsplash HD travel photo collection maintaining consistent aspect ratios (16:9, 4:3, 1:1) and descriptive `alt` tags.

---

## 🛠️ Tech Stack

- **Markup**: HTML5 (Semantic elements)
- **Styling**: CSS3, CSS Custom Properties (`:root` variables)
- **CSS Framework**: Bootstrap 5.3.2 (CDN)
- **Icons**: Bootstrap Icons v1.11.2 (CDN)
- **Scripting**: Vanilla JavaScript (ES6+)
- **Fonts**: Google Fonts API

*(100% frontend-only. No React, Vue, Angular, Node.js, Express, PHP, Python, Database, or Auth backends).*

---

## 🚀 Key Features & Highlights

1. **Sticky Glassmorphism Navbar**: Transparent navbar over cinematic hero images that smoothly transitions into a solid glassmorphism state with backdrop blur upon scrolling.
2. **Hero & Floating Search Panel**: Cinematic hero banner with dual CTAs and an overlapping search card filtering trips by destination, date, guests, and category.
3. **Discover South India & Tamil Nadu Spotlight**: Expanded destination catalog highlighting South India (Tamil Nadu: Chennai, Madurai, Ooty, Kodaikanal, Thanjavur, Rameswaram; Kerala: Munnar, Wayanad, Alappuzha, Kovalam, Varkala) alongside international hot spots.
4. **Interactive Destination Filtering & Live Search**: Dynamic category filter buttons (`All`, `Tamil Nadu`, `Kerala`, `Beach`, `Mountain`, `Cultural`, `Luxury`) and real-time text search.
5. **Day-by-Day Accordion Itinerary**: Accordion-based schedule component (`#tourItineraryAccordion`) detailing multi-day travel plans.
6. **Abstract Avatar Testimonial UI**: Transparent user feedback component using Bootstrap Icon avatars and demo labels (`Sample Traveler`, `Demo Traveler`, `Portfolio Reviewer`).
7. **Interactive Booking Enquiry & Success Modal**: Client-side validated form (`booking.html`) with instant feedback modal (`#bookingSuccessModal`) previewing the traveler's submitted request.
8. **Contact Form Validation & Modal**: Responsive contact interface (`contact.html`) featuring real-time client validation and interactive modal notification.
9. **100% Mobile Responsive Layout**: Tested across 360px, 576px, 768px, 992px, and 1200px viewports with zero horizontal overflow.

---

## 📁 Project Folder Structure

```
voyago/
├── index.html                # Home page (Hero, Categories, South India Spotlight, Packages, Inspiration, Footer)
├── destinations.html         # Destinations listing page with Tamil Nadu / Kerala filters & search
├── destination-details.html  # Destination overview, highlights, gallery & quick facts
├── tours.html                # Tour packages listing with filter sidebar
├── tour-details.html         # Detailed tour view with accordion itinerary & booking CTA
├── experiences.html          # Experience category breakdown page
├── about.html                # Design philosophy, vision, guidelines & "The VOYAGO Approach"
├── contact.html              # Demo contact form, "Connect With VOYAGO" cards & FAQ accordion
├── booking.html              # Tour enquiry form & Bootstrap confirmation modal
├── README.md                 # Project documentation & portfolio guide
├── css/
│   └── style.css             # Custom CSS variables, typography, cards & responsive styles
└── js/
    └── script.js             # Sticky navbar, form validations, filters & modals controller
```

---

## 💻 How to Run Locally

1. Clone or download this project repository:
   ```bash
   git clone https://github.com/your-username/voyago-travel.git
   ```
2. Navigate to the project directory:
   ```bash
   cd voyago-travel
   ```
3. Open `index.html` directly in any web browser (Chrome, Edge, Firefox, Safari) or launch via VS Code **Live Server** extension.

---

## 🎙️ Interview Talking Points for Fresher Developers

When discussing VOYAGO during technical interviews, highlight the following:

- **Why Bootstrap 5.3 Was Chosen**: Provides a robust 12-column flexbox grid system, rapid responsive breakpoint utilities (`col-lg-*`, `g-4`), and accessible JS components (Modals, Accordions, Offcanvas).
- **Custom CSS Architecture**: CSS Custom Properties (`:root`) were used for brand tokens (`--vy-primary`, `--vy-accent`), allowing site-wide color and theme adjustments without changing inline code.
- **Vanilla JavaScript Filtering Logic**: Native JS handles live text search across titles, descriptions, and location tags, as well as preset category filtering via URL query parameters (`URLSearchParams`).
- **Accessible & Transparent Design**: Replaced stock photographs in testimonials with icon-based abstract avatars and demo tags to ensure authentic presentation of portfolio UI components.
- **Responsive Layout Audits**: Every card, grid, form, and banner was tested across desktop, tablet, and mobile breakpoints to prevent horizontal overflow.

---

## 🌐 Live Demo & Preview

- **Live Demo**: `https://your-username.github.io/voyago/` *(Replace with actual GitHub Pages or Netlify URL)*
- **Repository**: `https://github.com/your-username/voyago`

---

*Designed & Developed for Portfolio Excellence.*
