# Website Update Execution Plan

This document outlines the step-by-step execution plan to modernize the Phora A.Ş. website. We will proceed phase by phase.

## Phase 1: Design System & Global Styles
**Goal:** Shift from "Startup Minimalist" to "Established Biotech Authority" by updating the core design tokens.

### Needs from User:
*   [ ] None. I will use the existing configuration and the requirements from `WEBSITE_UPDATE.md`.

### Implementation Plan:
1.  **Update `src/styles/global.css`:**
    *   Refine `--color-primary` to the deeper green (`#004d40`).
    *   Add "Metallic Silver" palette variables (for borders/accents).
    *   Ensure Font Family is set to a clean sans-serif (Inter/Roboto) and increase default heading weights.

---

## Phase 2: Homepage Hero & Partners Bar
**Goal:** Create a visually striking "living texture" hero section and establish immediate trust with global partner logos.

### Needs from User:
*   [ ] **Asset Check:** Confirm `chicken_fur.jpg` is in `src/assets/`. (Already confirmed)
*   [ ] **Asset Check:** Confirm partner logos (`ah-logo.svg`, `opticon-logo.png`, `reffco-logo.png`, `saife-logo.png`) are in `src/assets/`. (Already confirmed)

### Implementation Plan:
1.  **Refactor `src/pages/index.astro` (Hero Section):**
    *   Implement the `chicken_fur.jpg` background with `bg-primary/85` overlay.
    *   Update Headline to "Total Control in Animal Production" (Text-4xl/6xl, Bold).
    *   Update Sub-headline and Buttons (Primary: Orange, Secondary: Transparent/White).
2.  **Create `GlobalPartners.astro` Component:**
    *   Build the responsive logo grid.
    *   Apply grayscale/opacity styling with hover effects.
    *   Insert into `index.astro` and `tr/index.astro`.

---

## Phase 3: Value Proposition (The "Three Pillars")
**Goal:** Replace generic cards with "Technical" looking components that emphasize science.

### Needs from User:
*   [ ] **Icons:** Provide "Line Art" icons for Biosecurity, Gut Integrity, and ROI. (If not provided, I will use placeholder SVGs or text-based icons temporarily).

### Implementation Plan:
1.  **Refactor "Why Us" section in `index.astro`:**
    *   Remove shadow card styles.
    *   Implement "Technical Border" style (White bg, thin gray border, green hover border).
    *   Update copy for "Biosecurity", "Gut Integrity", and "Performance ROI".

---

## Phase 4: Solutions Pages & Technical Data
**Goal:** Add depth to the product pages without cluttering them, using the "Accordion" pattern.

### Needs from User:
*   [ ] **Copywriting:** Provide the specific "Mechanism of Action" text (Tight Junctions, Endotoxins, RFCs) as requested in `HUMAN_TASKS.md`. *I will pause here until you paste this text into the chat.*

### Implementation Plan:
1.  **Create `TechnicalAccordion.astro` Component:**
    *   A reusable accessible disclosure component.
2.  **Update `src/pages/solutions/[slug].astro` (and `tr` equivalent):**
    *   Insert the Accordion below the main description.
    *   Add the "Official Distributor" badge.
    *   Update content collections or page templates with the new scientific text.

---

## Phase 5: Contact Page & Footer
**Goal:** Optimize for lead generation and finalize brand consistency.

### Needs from User:
*   [ ] **Office Photo:** Provide the office/team photo for the contact page (if available).

### Implementation Plan:
1.  **Refactor `src/pages/contact.astro`:**
    *   Update form fields (Drop-downs for "I am a..." and "Inquiry Type").
    *   Update Submit button text.
2.  **Update `src/components/Footer.astro`:**
    *   Add LinkedIn icon.
    *   Organize Quick Links.

---

## Phase 6: Final Review & SEO
**Goal:** Polish and Launch.

### Needs from User:
*   [ ] **Review:** Final visual check of the "Vibe" (especially the chicken feather opacity).

### Implementation Plan:
1.  **SEO Metadata:** Update titles and descriptions in `src/layouts/Layout.astro` and individual pages.
2.  **Lint & Build:** Run full build check.
