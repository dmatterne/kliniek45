# UX & Content Strategy — Senior Perspective

## FAQ Placement

**Recommendation:** FAQ content belongs on the dedicated `/faq` page — not repeated on every treatment page.

**Why:** Repeating a full FAQ accordion on every page creates maintenance overhead (updates need to happen in 20+ places), bloats page size, and actually *dilutes* the page's focused conversion goal. Users who want FAQs will find the dedicated page via navigation or internal links.

**What I did instead:** Each treatment page ends with a simple call-to-action linking to the FAQ page:
> "Nog vragen? Bekijk onze veelgestelde vragen →"

---

## "500+ Tevreden Patiënten" Stats Section

**Recommendation:** Removed. We don't have those numbers yet and showing false social proof is both dishonest and legally risky in Belgium (VOC-wetgeving).

**What I did instead:** The results gallery (voor/na photos) speaks louder than unverifiable numbers. Real photos are more persuasive.

---

## "Bekijk alle resultaten" Button

**Recommendation:** Removed from the home page results gallery. The voor/na photos themselves are the evidence. A button to "see all results" when you have limited results invites disappointment. Add it back once you have 10+ results on the /resultaten page.

---

## Logos / Trust Badges Design

**Recommendation:** Replaced the 3-card icon grid with a scrolling badge ticker (CSS-only, no JS dependency).

**Why:** The old cards felt like placeholder content ("icon + heading + 2 lines of text" × 3 is a well-known low-effort web pattern that users have learned to skip). The scrolling ticker communicates the *volume* of trust signals ("we have 11 reasons to trust us, not just 3"), looks more polished, and is the same pattern Wolf uses effectively.

---

## Scroll-to-Top on Navigation

**Fix applied:** Added `withInMemoryScrolling({ scrollPositionRestoration: 'top' })` to the Angular router config. This is the standard Angular solution — when any route changes, the viewport scrolls to the top.

---

## Content Strategy for Treatment Pages

**Approach taken:** Scrape hairclinicwolf.be for full content, adapt to our brand (HaarKliniek 45, Grazen, Belgium), remove: Turkey references, app calculator, star reviews, customer quotes.

**Structure used on each treatment page:**
1. Page hero (title + subtitle + CTAs)
2. Medical/informational content (what is it, causes, how it works)
3. Voor & Na images where available
4. Techniques / methods explained
5. Consultation CTA (`<app-consultation />` — the redesigned two-column version)
6. Advantages / why DHI (where applicable)
7. Costs section
8. Trust badges ticker
