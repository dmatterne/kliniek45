aarKliniek 45 Rebuild Plan

## Purpose

Recreate the *business value* and *content coverage* of [hairclinicwolf.nl](https://hairclinicwolf.nl/) in this repository without cloning its protected visual expression.

This plan is written so Codex CLI or Copilot can execute the rebuild in steps.

This is a practical implementation guide, not legal advice.

## What Was Observed On The Reference Site

The homepage currently appears to contain these major content blocks:

1. A top contact bar and large navigation with many treatment links.
2. A hero focused on a cost calculator / consultation CTA.
3. Trust signals such as ratings and review summaries.
4. Introductory cards explaining treatments, process, and knowledge content.
5. An "about us" section with team positioning and credibility messaging.
6. A free consult section with a few reassurance points.
7. A treatments overview.
8. A three-step process section: consult, treatment, aftercare.
9. Results and testimonials.
10. Informational sections about why clients choose the clinic and what techniques exist.

The *ideas* above are safe to reuse at a high level. The exact layout, card styling, imagery, iconography, microcopy, and visual hierarchy should not be copied.

## Copyright-Safe Guardrails

### Allowed

- Reuse factual business information that belongs to HaarKliniek 45.
- Reuse or adapt text if you have permission to do so.
- Reuse owned brand assets such as the existing logo files in this repo.
- Build similar page types and conversion flows if the implementation is original.

### Avoid

- Copying the reference site's HTML, CSS, JS, DOM structure, or class naming.
- Reproducing the same section order one-for-one with matching visual composition.
- Reusing screenshots, treatment photos, before/after photos, icons, badges, or illustrations from the reference site unless separately licensed.
- Mimicking distinctive design choices too closely: same hero composition, same card patterns, same icon set, same CTA wording clusters, same testimonial presentation, same spacing rhythm.

### Treat As High Risk

- Any image downloaded from the reference site.
- Any "before and after" photography unless provided by the client with usage rights.
- Review snippets copied from third-party platforms without confirming permission and attribution requirements.

## Safer Rebuild Strategy

Build a new site around the same business goals:

- Explain treatments clearly.
- Build trust.
- Drive consultation bookings.
- Support SEO with treatment and knowledge pages.

But use a new expression:

- New page structure and section sequencing.
- New typography pairing.
- New grid and spacing system.
- New component shapes and states.
- New illustration/icon approach or none at all.
- Original photography only, or temporary placeholders with replacement tasks.

## Design Direction

### Brand Foundation

Keep the overall tone premium, medical, calm, and trustworthy.

Use the logo as the anchor for color selection instead of sampling the reference site. A safe initial palette:

- Deep pine: `#16352f`
- Forest: `#21473f`
- Moss accent: `#2f6254`
- Warm ivory: `#f1ede3`
- Soft sand: `#cbbd98`
- Clean white: `#fbfaf7`

### Styling Principles

- Dark green should be dominant, but balanced with warm neutrals so the site does not feel generic or heavy.
- Use generous whitespace and clear editorial typography rather than busy marketing blocks.
- Prefer large image panels, quiet dividers, and asymmetric layouts over template-like repeated cards.
- Keep interaction subtle: fades, gentle parallax, restrained hover states.

### Explicitly Do Not Copy

- The visual layout of the hero from the reference site.
- The exact arrangement of reviews/results.
- The reference site's menu taxonomy and mega-menu presentation.
- The same icon-card trio used for intro sections.

## Recommended Information Architecture

Start with a smaller, cleaner site map than the reference site.

### Phase 1

- Home
- Behandelingen
- Haartransplantatie
- Baardtransplantatie
- Werkwijze
- Resultaten
- FAQ
- Contact / Consultatie

### Phase 2

- Knowledge hub / blog
- Separate pages per treatment subtype
- Cost estimator or intake wizard
- Team page
- Aftercare page

This reduces copy risk because the first build is driven by business goals, not by reproducing the full competitor structure.

## Homepage Content Plan

Use this sequence, which is intentionally different from the reference homepage:

1. Hero with brand statement, short trust message, and one primary CTA.
2. "Why choose us" section with three to five concise differentiators.
3. Treatments overview in a custom grid or split-layout format.
4. Clinic process timeline with consultation, procedure, recovery, follow-up.
5. Results section using approved media only.
6. FAQ teaser.
7. Contact / booking section with form and direct contact methods.

Optional:

- A founder or clinic-introduction block.
- A compliance / expectations section explaining candidacy and realistic outcomes.

## Images Policy

Use only one of these categories:

1. Owned assets from HaarKliniek 45.
2. Properly licensed stock imagery.
3. Newly created custom illustrations.
4. Temporary neutral placeholders until rights are confirmed.

Do not scrape or reuse:

- Clinic photos from the reference site.
- Review profile images.
- Before/after results from the reference site.
- Decorative icons copied from the reference site.

## Technical Build Recommendation

Because this repo is currently a simple static site workspace, the lowest-friction rebuild is:

- `index.html`
- `styles.css`
- `script.js`
- `images/`
- `docs/`

If a larger content site is expected soon, consider moving to Astro or Next.js later. For now, static HTML/CSS/JS is enough for a first pass that AI tools can edit quickly.

## Suggested Build Phases For AI Tools

### Phase 0: Reset

- Keep logo assets and favicon.
- Remove existing landing page implementation.
- Add this planning document.

### Phase 1: New Design System

- Create CSS custom properties for the new green/neutral palette.
- Define typography, spacing, radius, shadows, and motion tokens.
- Implement a fresh page shell with header, footer, and mobile navigation.

### Phase 2: New Homepage

- Build a completely new homepage layout.
- Use original component names and structure.
- Include temporary placeholder image blocks where rights are unclear.

### Phase 3: Content Expansion

- Add treatment detail pages.
- Add FAQ page.
- Add contact/consult page.

### Phase 4: Conversion Features

- Add consultation form.
- Add WhatsApp / phone CTA.
- Add optional intake questionnaire or calculator designed from scratch.

### Phase 5: Compliance Review

- Replace placeholders with approved imagery.
- Review cookie/privacy needs.
- Verify review usage rights.

## Definition Of Done

The rebuild is acceptable when:

- The site clearly serves the same business purpose as the reference site.
- The look and feel are recognizably original.
- No third-party images or copied visual components remain.
- Text is either approved, owned, or intentionally rewritten.
- All pages use the new dark-green brand system consistently.

## Prompt Pack For Codex CLI / Copilot

### Prompt 1: Rebuild Foundation

```text
Reset this repo into a fresh static website foundation for HaarKliniek 45. Keep existing logo image assets and favicon, but create a completely new homepage implementation from scratch. Do not reuse any previous HTML/CSS/JS structure. Use a premium dark green and warm neutral palette that fits the logo. Create a modern responsive header, footer, and homepage sections for hero, differentiators, treatments, process, results placeholders, FAQ teaser, and contact CTA.
```

### Prompt 2: Copyright Guardrails

```text
When implementing the new website, do not copy the layout, class names, CSS patterns, imagery, iconography, or section composition from hairclinicwolf.be. You may preserve factual business goals and approved text, but all design expression must be original. If image ownership is unclear, use placeholders with TODO notes.
```

### Prompt 3: Content Expansion

```text
Add secondary pages for treatments, process, results, FAQ, and contact using the same design system. Keep the navigation compact and original rather than duplicating the reference site's information architecture. Use reusable components and responsive layouts.
```

### Prompt 4: Final QA

```text
Review the generated website for accidental similarity to the reference site. Flag anything that feels too close in layout, hierarchy, imagery usage, testimonial presentation, or CTA wording. Adjust the implementation toward a more original expression while keeping the dark green premium brand direction.
```

## Open Questions To Resolve Before Production

- Which exact text is approved for reuse?
- Which clinic photos and before/after images are owned and cleared?
- Is there an existing booking tool or CRM integration?
- Should the initial site be Dutch-only, or multilingual?
- Are there legal/privacy page requirements already prepared?
