# HaarKliniek 45 — Front-End UX & Design Review

> Assessed by: GitHub Copilot (senior UX / front-end lens)  
> Scope: Angular 21 app in `src/` — all 12 section components, all page stubs, header, footer

---

## Summary

The structural foundation is solid: clean standalone Angular components, a consistent design-token system, a well-chosen brand palette (deep green + gold), and a functional responsive layout. The primary gap is between the *scaffolded* state and a *production-ready* state — placeholder content, missing real images, and scattered trust signals that risk looking synthetic.

---

## 🔴 Critical (affects credibility / accuracy)

### 1. `lang="en"` on a Dutch-language site
**File:** `src/index.html`  
The root HTML element declares `lang="en"` but the entire site is in Dutch. This breaks screen-reader pronunciation, harms SEO, and fails WCAG 3.1.1.  
**Fix:** `<html lang="nl">`

### 2. Placeholder before/after images in Results Gallery
**File:** `components/results-gallery/results-gallery.html`  
All three result cards use emoji placeholders (📷 / ✨) inside grey boxes. For a medical-aesthetic clinic this is the single biggest trust killer — visitors cannot evaluate outcomes.  
**Fix:** Replace with real patient photos (properly consented). Until then, hide the section or replace placeholders with a "Binnenkort beschikbaar" message.

### 3. About section has no real team photo
**File:** `components/about-section/about-section.html`  
The left column shows an emoji placeholder (`🏥 HaarKliniek 45 Team`). A real clinic photo or portrait of the lead specialist is a primary trust anchor for a healthcare site.  
**Fix:** Add a real team/clinic image. The `about-img-frame` div is already there — just add an `<img>`.

### 4. Placeholder contact data throughout
Multiple components contain clearly fake data that must be replaced before going live:
- **Process timeline CTA banner** (`process-timeline.html`): phone `+3200000000`
- **Footer address**: only says "België" with no actual address
- **Social media links**: generic `instagram.com`, `facebook.com`, `wa.me/32476000000`
- **WhatsApp FAB**: `wa.me/32476000000` — any visitor who taps this gets a wrong number
- **Google Maps links**: point to `https://www.google.com/maps` (no location), used as review badge destinations

---

## 🟠 Important (UX quality / professionalism)

### 5. Rating / review mentions appear 5+ times
**Files:** hero, about-section, results-gallery, consultation, footer  
`4,9 / 5,0` and Google Review references appear on nearly every section. Repetition of the same trust signal causes the opposite effect — it starts to look fabricated. With the dedicated `<app-reviews>` section now removed, these scattered mentions should be consolidated to one location (e.g. a real Google Reviews widget in the footer, or a single trust-bar near the consultation CTA).

### 6. Emoji icons in treatment cards
**File:** `components/treatments/treatments.html`  
Using 👨, 👩, 🧔, 🎨, 💉, 💎 as icons is visually inconsistent and looks amateurish on a medical site. Emojis render differently across operating systems and have no brand cohesion.  
**Fix:** Replace with a small set of consistent SVG icons or a medical icon library (e.g. Phosphor, Lucide, or custom illustrated icons that match the green/gold palette).

### 7. Emoji icons in Why-Choose and Consultation sections
**Files:** `why-choose.html`, `consultation.html`  
Same issue — 🤝, 💎, 🎁, 🏆, 🛡️. These sections are primary CTA areas and deserve proper iconography.

### 8. Inline styles in process-timeline
**File:** `components/process-timeline/process-timeline.html`  
```html
<a ... style="background:white;color:#1a4d47;border-color:white;">
```
This overrides the design system and will be invisible if the color scheme ever changes.  
**Fix:** Create a `.btn-white` or `.btn-on-dark` variant in `styles.scss`.

### 9. `scrollToTreatments()` is dead code
**File:** `components/hero/hero.ts`  
`scrollToTreatments()` is defined but never called in `hero.html`. Remove or wire up.

### 10. Footer legal links all point to `/contact`
**File:** `components/footer/footer.html`  
"Privacybeleid", "Cookiebeleid", and "Algemene voorwaarden" all route to `/contact`. Placeholder routes should either point to dedicated pages or be temporarily hidden.

### 11. No GDPR / Cookie consent in Angular app
The old static `index.html` had a cookie consent banner — the Angular app has none. As a Belgian site collecting any analytics or third-party embeds (Google Fonts are already loaded), a GDPR-compliant consent mechanism is legally required.

### 12. No Google Analytics / Tag Manager in Angular app
GA was in the old static site but not in `src/index.html`. If tracking is needed, add it properly (GTM recommended) with consent-gating.

---

## 🟡 Moderate (polish & accessibility)

### 13. Missing meta description and OG tags in Angular `src/index.html`
The Angular app's `<head>` has no `<meta name="description">`, no `<meta property="og:image">`, and no OG tags. These matter for SEO and social sharing. Use Angular's `Meta` service to set them per-page, or add baseline tags to `src/index.html`.

### 14. No skip-navigation link
Screen-reader and keyboard users cannot bypass the large navigation to reach main content.  
**Fix:** Add as the first element in `app.html`:
```html
<a class="skip-link" href="#main-content">Ga naar inhoud</a>
```
With supporting CSS (visually hidden until focused).

### 15. Navigation active state doesn't work for exact root path
`routerLinkActive="active"` on `/` will match every route (since every URL starts with `/`). Add `[routerLinkActiveOptions]="{exact: true}"` on the home link if one is added.

### 16. Mobile nav: dropdowns are always expanded when menu is open
**File:** `header.html` / `header.scss`  
On mobile, all dropdown items appear immediately when the hamburger menu opens (`display: block` unconditionally in the `.open` state). For a menu with 40+ items this creates a very long scroll.  
**Fix:** Add accordion toggle logic per dropdown group on mobile. The `toggleDropdown(name)` method already exists in `header.ts` — wire it up for mobile.

### 17. Sticky nav creates scroll-offset issues for anchor links
`<a href="#consultation">` in the process-timeline CTA and similar hash links do not account for the sticky nav height (~65px). The target element will be obscured by the nav bar.  
**Fix:** Use `scroll-margin-top` on anchored elements:
```scss
#consultation { scroll-margin-top: 80px; }
```

### 18. Results gallery stats and hero trust bar are duplicated
The "4,9/5" stat block appears both in the hero `.hero-trust` bar and in `.results-stats`. Pick one location per page section.

### 19. `section-eyebrow` naming inconsistency
Some sections use `.section-eyebrow`, others `.about-eyebrow`, `.reviews-eyebrow`, `.hero-eyebrow`. These all produce identical styling. Standardise on `.section-eyebrow` and remove the component-specific variants.

### 20. About section benefit list uses raw ✓ characters
**File:** `components/about-section/about-section.html`  
The checkmark (`✓`) is a Unicode character inserted as text. Rendering varies across fonts. Use an SVG checkmark or a CSS pseudo-element with a proper icon for consistent display.

### 21. Many page routes serve stub components with no content
Most treatment pages (e.g. Baardtransplantatie, Micro Haarpigmentatie, DHI, etc.) have only a `.ts` and `.scss` — no `.html` template or real content. These routes are listed in the nav, meaning users can navigate there and find nothing.  
**Fix:** Either add a "coming soon / in ontwikkeling" placeholder page, or remove those routes and links from the nav until content is ready.

### 22. Footer copyright year is hard-coded to 2025
**File:** `components/footer/footer.html`  
```html
<p>&copy; 2025 HaarKliniek 45 ...
```
**Fix:** Render the current year dynamically: add `currentYear = new Date().getFullYear()` to `FooterComponent` and use `{{ currentYear }}` in the template.

---

## 🟢 Minor / Nice-to-have

### 23. Initial JS bundle is 585 kB (above the 500 kB warning budget)
The `angular.json` budget warns at 500 kB. Current raw size is 585 kB. Investigate lazy-loading page components via `loadComponent` in `app.routes.ts` to reduce the initial chunk. Each route is a good candidate for lazy loading.

### 24. Component SCSS files exceed the 4 kB per-file budget
Several page SCSS files exceed the 4 kB budget warning (e.g. `werkwijze-page.scss` at 5.93 kB). Consider extracting shared patterns into utility classes in `styles.scss`.

### 25. `favicon.ico` is linked but may not exist in `src/assets`
`src/index.html` links `favicon.ico` but no favicon was observed in the asset inventory. The browser console will show a 404 on first load.  
**Fix:** Export the logo as a 32×32 `.ico` or `.png` and place it at `src/favicon.ico`.

### 26. Font loading is render-blocking
Google Fonts are loaded synchronously. For a site with a hero section, this can delay LCP (Largest Contentful Paint).  
**Fix:** Add `<link rel="preload">` for the critical font weights:
```html
<link rel="preload" href="https://fonts.gstatic.com/..." as="font" crossorigin>
```
Or self-host fonts via `@font-face` in `styles.scss` to avoid the external round-trip entirely.

### 27. WhatsApp FAB label "Hoe kan ik je helpen?" on all pages
**File:** `components/footer/footer.html`  
This label is customer-service language and sets an expectation of live chat. If WhatsApp responses are not guaranteed within reasonable time, the label misleads users. Consider a simpler "WhatsApp ons" label.

### 28. Process timeline CTA banner uses `<section>` inside another `<section>`
**File:** `components/process-timeline/process-timeline.html`  
The CTA banner and the actual timeline are wrapped in a single component but the CTA could logically be its own component, or at minimum be a `<div>` rather than a `<section>`, to keep the document outline clean.

---

## ✅ What's working well

- **Design tokens** (`_colors.scss`, `_typography.scss`, `_spacing.scss`) are well-structured and consistently applied
- **Standalone Angular components** — correct modern architecture, no NgModule overhead
- **Mobile navigation** — hamburger menu, sticky nav, and breakpoint handling are solid
- **Responsive layout** — mobile-first with clear breakpoints
- **WhatsApp FAB** — high-visibility CTA for the Belgian market where WhatsApp is primary
- **Button system** — consistent `.btn`, `.btn-primary`, `.btn-gold`, `.btn-outline-white` variants
- **Scroll behaviour** — `scrollToConsultation()` smooth-scroll from hero works well
- **Logo transparency** — `drop-shadow` filter on `.nav-logo-img` correctly handles transparent PNG logos without needing a background
- **`lang="nl"`** on the root static `index.html` ✓ (needs to be replicated in `src/index.html`)
- **Google Fonts preconnect** hints in `src/index.html` ✓

---

## Recommended Priority Order

1. Fix `lang="en"` → `lang="nl"` (2 mins, zero risk)
2. Replace all placeholder contact/social data with real values
3. Add real team/clinic photo to About section
4. Replace emoji icons with SVG icons in Treatments, Why Choose, Consultation
5. Add real before/after photos (or hide gallery until ready)
6. Add GDPR cookie consent
7. Consolidate rating mentions to one location
8. Implement lazy loading for page routes
9. Add OG/meta tags (use Angular `Meta` service per page)
10. Wire up mobile dropdown accordion for the nav
