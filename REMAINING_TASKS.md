# Remaining Website Updates

This document outlines the pending tasks to complete the Phora website modernization, consolidating previous plans and current state.

## 1. Technical Content & Copywriting (High Priority)
**Goal:** Add scientific depth to solution pages without cluttering the UI.
*   **Source Material:** User needs to provide the "Mechanism of Action" text (Tight Junctions, Endotoxins, RFCs) from the old website or new copy.
*   **Action:**
    *   Create a `TechnicalAccordion.astro` component.
    *   Update `src/pages/solutions/[slug].astro` (and `tr` equivalent) to include this accordion below the main description.
    *   Add "Official Distributor: Arm & Hammer" badge to solution pages.

## 2. Contact Page Optimization
**Goal:** Improve lead generation segmentation.
*   **Refactor `src/pages/contact.astro`:**
    *   **Dropdown 1:** "I am a..." (Veterinarian, Nutritionist, Farm Manager, Feed Mill, Distributor).
    *   **Dropdown 2:** "Inquiry Type" (Request Technical Data, Request Quote, Distributor Inquiry).
    *   **Button Text:** Change "Send Message" to "Connect with a Specialist" (or "Partner with us now" per notes, need to confirm consistency).
*   **Assets:** Check for `team-photo.jpg` or office photo availability for this page.

## 3. Footer Updates
**Goal:** Enhance B2B networking and navigation.
*   **Update `src/components/Footer.astro`:**

    *   Ensure "Quick Links" are categorized clearly.

## 4. Mobile Navigation Fix
**Goal:** Fix layout alignment issues on mobile.
*   **Issue:** In mobile view, the language switcher `| EN | TR` is centered.
*   **Fix:** Move it to the right, adjacent to the hamburger menu icon in `src/components/Header.astro`.

## 5. Global Button Text Update
**Goal:** Align call-to-action with business goals.
*   **Change:** Verify and update instances of "Contact Phora" to "Partner with us now" where appropriate (specifically noted in `batu-notes.md`).

## 6. SEO & Final Polish
**Goal:** Prepare for launch.
*   **Metadata:** Update `<title>` and `<meta name="description">` for all pages (`index`, `solutions/*`, `contact`, `about`).
*   **Visual Review:** Confirm hero image opacity and text readability.
*   **Map Graphic:** (Future/Optional) Create/Commission connection map for About page.

## Summary of Completed Tasks
*   [x] Global Design System (Deep Green, Fonts).
*   [x] Homepage Hero Section (Chicken Fur background + Overlay).
*   [x] Global Partners Component.
*   [x] Homepage "Core Technologies" Cards (Design & Icons).
*   [x] Solutions Page Icons (Design & Icons).
*   [x] SVG Asset Optimization (Responsiveness & CurrentColor).
