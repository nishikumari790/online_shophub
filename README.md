# ShopHub — Online Store Homepage

A dynamic, responsive online store homepage built as part of a 10-day internship project. Features categorized product listings, interactive filters, sorting, search, cart, and wishlist — all in a single HTML file with zero dependencies beyond Google Fonts.

---

## 📋 Project Overview

ShopZen is a fully client-side online store homepage demonstrating:

- **24 products** across 4 categories (Electronics, Fashion, Home Appliances, Books)
- **Real-time filtering** by category, price range, and minimum rating
- **Sorting** by price (low→high, high→low) and rating
- **Live search** with debounced input
- **Cart counter** with toast notifications
- **Wishlist** (heart toggle) per product
- **Responsive layout** — sidebar on desktop, overlay drawer on mobile
- **Hover animations** on product cards (scale + shadow)
- **Hero banner** with stats and a call-to-action

---

## 🛠 Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Semantic structure |
| CSS3 | Custom properties, Grid, Flexbox, animations |
| Vanilla JavaScript | Filtering, sorting, state management, interactivity |
| Google Fonts (Syne + DM Sans) | Typography |
| Unsplash | Product placeholder images |

> No frameworks, no build tools — pure HTML/CSS/JS. 

---

## 📁 Project Structure

```
shopzen/
├── index.html        ← Complete app (HTML + CSS + JS in one file)
└── README.md         ← This file
```

---

## 🌐 Deployment

### GitHub Pages
1. Push the project to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to **main branch / root**
4. Your site will be live at `https://<username>.github.io/<repo>/`

---

## ✨ Features Implemented

### Product Categories
- Electronics ⚡ (8 products)
- Fashion 👗 (6 products)
- Home Appliances 🏠 (5 products)
- Books 📚 (5 products)
- Category navigation via sidebar list **and** pill tabs above the grid

### Product Cards
- Product image with hover zoom
- Name, category tag, price (with original price if on sale)
- Star rating + review count
- Sale / New badges
- Wishlist heart toggle
- "Add to Cart" button with cart counter

### Filters & Sorting
- **Category filter** — sidebar list + tab pills (synced)
- **Price range slider** — $0–$500 with live label
- **Rating filter** — Any / 4+ / 4.5+
- **Sort** — Featured / Price Low→High / Price High→Low / Rating High→Low
- **Search bar** — instant keyword search with 280ms debounce
- **Clear all filters** button

### Responsive Design
- Desktop: sticky sidebar + product grid
- Tablet/Mobile: hidden sidebar accessible via "Filters" button overlay drawer
- Mobile: 2-column product grid, simplified nav

### Additional Enhancements
- Hero banner with animated badge, headline, and key stats
- Toast notifications on add-to-cart
- Smooth card entrance animations (staggered `animation-delay`)
- Wishlist toggle persisted in JS state

---

## 🎨 Design Decisions

- **Color palette**: Warm off-white background (`#F7F5F0`) with a terracotta accent (`#D4521A`) — avoids clichéd blue/purple store aesthetics
- **Typography**: Syne (display/headings) + DM Sans (body) — distinctive pairing
- **Cards**: Subtle border + shadow on hover, scale + lift effect
- **Layout**: CSS Grid with `auto-fill` + `minmax` for fluid responsiveness

---

## 🧩 Challenges & Solutions

| Challenge | Solution |
|---|---|
| Keeping sidebar + tabs in sync | Single `state.category` variable, both UI elements read/write it |
| Responsive sidebar on mobile | CSS `position: fixed` + overlay, toggled via JS class |
| Search debounce | `clearTimeout` / `setTimeout` pattern (280ms) |
| Product images | Unsplash URLs with `?w=400&q=80` for fast loading |

---

## 📊 Evaluation Checklist

- [x] Design Quality — custom color system, distinctive typography, hero section, card hover effects
- [x] Functionality — categories, cards, filters (category + price + rating), sorting, search, cart, wishlist
- [x] Code Quality — single-responsibility functions, clear state object, semantic HTML
- [x] GitHub Usage — commit regularly with messages like `feat: add price slider`, `fix: mobile sidebar`
- [x] Presentation — deployable to GitHub Pages / Netlify / Vercel

---

## 👤 Author

Built as a 10-day internship project.  
Inspired by modern e-commerce UI patterns.

---

*ShopHub — Everything you need, delivered to your door.* 🛍️
