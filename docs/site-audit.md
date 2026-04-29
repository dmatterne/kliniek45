# HaarKliniek45 Website Audit

Date: 2026-04-29  
Role used: senior healthcare business analyst, medical-service content reviewer, brand color systems designer, and UX/UI designer.

## Executive Summary

The demo site has the right overall direction, but it still borrows too much of Hair Clinic Wolf's information architecture and sometimes speaks as if HaarKliniek45 performs the surgical transplant itself. The most important correction is to make the partnership model visible everywhere: HaarKliniek45 is the Belgian intake, advice, non-surgical treatment, local guidance, and aftercare point; Hair Clinic Wolf performs surgical hair transplants and owns the surgical medical execution.

Design-wise, the dark green and gold identity is appropriate for a premium clinical brand, but gold should be used more selectively and with better contrast. The current palette can be refined by using a deeper green, a slightly more muted gold, warm off-white backgrounds, and neutral text tones that support the green/gold system without turning the site beige or muddy.

## Source Comparison

Hair Clinic Wolf presents itself as the hair transplant specialist and lists surgical services such as hair transplants for men and women, hairline/inhammen, crown, Long Hair, beard transplantation, DHI, and FUE Saffier. Their site also owns the Hair Clinic Wolf team, locations in the Netherlands/Belgium, reviews, before/after results, calculator, and surgical workflow.

HaarKliniek45 should not duplicate that provider voice. The site should instead explain why a Belgian patient would start locally: free intake, suitability discussion, preparation, non-surgical support, coordination with Hair Clinic Wolf, and accessible follow-up/nazorg in Grazen.

## Business And Content Findings

| Area | Current risk | Recommended direction |
| --- | --- | --- |
| Homepage hero | Mostly clear, but the promise focuses on "hair back" before the role split. | Keep the consult-first message and explicitly mention Belgian intake plus Hair Clinic Wolf for surgical execution. |
| Treatments overview | "Onze behandelingen" can imply HaarKliniek45 owns every surgical treatment. | Rename/reframe to "Advies, behandelingen en partnertrajecten" or clearly split "Bij ons in Grazen" from "Via Hair Clinic Wolf". |
| Surgical pages | DHI and FUE pages contained wording such as treatment in HaarKliniek45's clinic in Grazen and "wij behandelen". | Reframe as information/referral pages: HaarKliniek45 explains, screens, prepares, and follows up; Hair Clinic Wolf performs the procedure. |
| Results and reviews | Hair Clinic Wolf results/reviews are valuable but sensitive. | Attribute all surgical results to Hair Clinic Wolf and do not imply HaarKliniek45 produced them. Do not reuse reviews unless approved. |
| Trust badges | "Gecertificeerde specialisten", "Garantiecertificaat", "100% expertise", "Hoogwaardige faciliteiten", and "Gediplomeerd" are risky without proof. | Use safer trust signals: Belgian adviescentrum, partner Hair Clinic Wolf, persoonlijke begeleiding, lokale opvolging, duidelijke rolverdeling, discrete aanpak. |
| Claims | Phrases like permanent, guaranteed, no scars, painless, maximum density, no recovery, and best results need caution. | Use qualified language: "kan", "doorgaans", "afhankelijk van jouw situatie", and "wordt beoordeeld tijdens consult". |
| Routing | Some non-surgical treatment links point to `/behandelingen/...` even though the Angular routes are under `/haargroei-stimuleren/...`. | Update links to the actual route paths. |

## Design And Brand Findings

The dark green and gold combination suits a premium hair clinic brand when the green does most of the structural work and gold is reserved for accents. The design should avoid large fields of saturated gold and avoid low-contrast gold text on white.

Recommended color system:

| Role | Color | Use |
| --- | --- | --- |
| Primary dark green | `#123f39` | Header, hero, footer, primary brand surfaces |
| Deep green | `#0b2f2a` | Dark overlays, hover states, strong contrast |
| Refined green | `#27685d` | Secondary accents, icons, cards |
| Refined gold | `#b88a2c` | CTA backgrounds, section rules, premium highlights |
| Dark gold | `#8f681d` | Gold text/link hover on light backgrounds |
| Pale gold | `#f4ead2` | Soft callouts and hover backgrounds |
| Warm white | `#fffdf9` | Main page background |
| Soft neutral | `#f7f4ee` | Alternating sections |
| Text | `#302f2a` / `#625f55` | Body and muted copy |

Designer recommendations:

- Use gold sparingly for CTAs, thin dividers, icons, and small badges, not as large decorative blocks.
- Use dark green as the authority color; pair gold buttons with dark green text for contrast.
- Add a small "Partnertraject met Hair Clinic Wolf" label on surgical cards/pages.
- Reduce the navigation's clone-like feeling by grouping surgery under "Haartransplantatie via partner" and keeping local services under "Bij ons in Grazen".
- Replace placeholder/team imagery when real approved HaarKliniek45 photos are available. Until then, avoid inventing team proof.
- Keep the homepage first viewport focused on intake, local guidance, and the partner relationship instead of listing every procedure.

## Implementation Changes Applied

- Adjusted brand color tokens and gold button contrast.
- Reframed key homepage and treatment overview copy around intake, local non-surgical services, and partner surgery.
- Rewrote high-risk DHI and FUE copy so treatment execution is attributed to Hair Clinic Wolf.
- Replaced risky repeated trust badge labels with safer partnership and guidance claims.
- Corrected non-surgical internal links to the existing `/haargroei-stimuleren/...` route structure.

## Follow-Up Recommendations

- Confirm which non-surgical treatments HaarKliniek45 is legally and operationally ready to perform in Grazen: PRP, Hairegen, Regenera Activa, micro hair pigmentation, and TrichoTest.
- Confirm written permission for any Hair Clinic Wolf logo, review, before/after image, treatment claim, or partner badge reuse.
- Add real legal pages for privacy, cookies, and terms instead of routing footer legal links to contact.
- Add medical/legal review before publishing claims about recovery time, pain, results, graft survival, prices, and suitability.
