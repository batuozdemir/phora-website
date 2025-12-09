# Phora A.Ş. Website Optimization Plan (Astro + Tailwind)

## 1. Design System & Global Styles
**Objective:** Shift from "Startup Minimalist" to "Established Biotech Authority."
*   **Color Palette Update:**
    *   Primary: Deep Green (Keep existing `#004d40` or similar).
    *   Secondary: Add a "Metallic Silver/Grey" for borders and technical accents (e.g., `border-gray-300`, `bg-gray-50`).
    *   Text: Use `text-gray-900` for headings, `text-gray-700` for body. Avoid pure black.
*   **Typography:**
    *   Ensure font family is a clean, authoritative sans-serif (e.g., Inter, Roboto, or system-ui).
    *   **Crucial:** Increase font weight for Headings. `font-bold` for H1/H2. `font-medium` for navigation.

## 2. Component: Homepage Hero Section
**Refactor the Main Hero Block.**
*   **Background:** Use the image located at `./src/assets/chicken_fur.jpg`.
*   **Overlay Strategy:**
    *   Apply an absolute position overlay over the image.
    *   Color: Primary Deep Green.
    *   Opacity: **85%** (Tailwind: `bg-primary/85` or `bg-[#004d40]/85`).
    *   *Goal:* The texture of the feathers should be barely visible, acting as a "living texture" rather than a distinct photo.
*   **Content Alignment:** Center text relative to the container.
*   **New Copy (Replace existing):**
    *   **H1:** "Total Control in Animal Production" (Keep, but make `text-4xl md:text-6xl font-bold text-white`).
    *   **Sub-headline:** "Advanced biotechnology solutions for gut welfare, antibiotic reduction, and performance optimization."
    *   **Buttons:**
        *   Primary: "Our Technologies" (Background Orange/Gold `bg-orange-500 hover:bg-orange-600`).
        *   Secondary: "Contact Specialists" (Transparent with White Border `border border-white text-white hover:bg-white/10`).

## 3. Component: Global Partners Bar (New)
**Insert immediately below Hero Section.**
*   **Objective:** Visually validate global reach and corporate structure.
*   **Layout:** Full-width container, light gray background (`bg-gray-50` or `bg-gray-100`), vertical padding (`py-8`).
*   **Content:**
    *   **Label (Optional):** A small, uppercase, tracking-wide text centered above logos: "Our Global Network".
    *   **Logo Grid:** A responsive flex-row (`flex flex-wrap justify-center gap-8 md:gap-16 items-center`) containing logos for:
        1.  **Arm & Hammer Animal Nutrition**
        2.  **Opticon GmbH** (Switzerland)
        3.  **Reffco** (EU)
        4.  **Saife Vetmed** (India)
*   **Styling:**
    *   Apply `grayscale` filter and `opacity-70` to all logos to maintain visual harmony and avoid color clashing.
    *   **Interaction:** On Hover: `grayscale-0`, `opacity-100`, `transition-all duration-300`.
    *   **Sizing:** Ensure all logos are constrained by height (e.g., `h-8 md:h-12`) rather than width to keep them aligned.
*   The Logos are in ./src/assets

## 4. Component: Value Proposition Grid (The "Three Pillars")
**Refactor the "Why Us" or "Solutions" cards on the homepage.**
*   **Style:** Remove generic shadow cards. Use "Technical Borders."
    *   White background, thin gray border (`border-gray-200`).
    *   On Hover: Border color changes to Primary Green (`hover:border-primary`).
*   **Content Updates:**
    1.  **Card 1 Title:** "Biosecurity & Pathogen Control"
        *   *Text:* "Preventing colonization of E. coli and Salmonella without antibiotics using RFC™ technology."
    2.  **Card 2 Title:** "Gut Integrity"
        *   *Text:* "Strengthening tight junctions to prevent Leaky Gut Syndrome and improve nutrient absorption."
    3.  **Card 3 Title:** "Performance ROI"
        *   *Text:* "Optimizing Feed Conversion Rates (FCR) and metabolic efficiency for measurable profitability."

## 5. Page: Solutions (Architecture Update)
**Refactor the Species Pages (Ruminant, Poultry, Aqua).**
*   **Hybrid Branding:** Ensure the "Official Distributor: Arm & Hammer" badge is visible at the top of these pages.
*   **The "Technical Detail" Toggle:**
    *   Add a section below the main description called "Mechanism of Action."
    *   **UI:** Use a Disclosure/Accordion component.
    *   **State:** Closed by default.
    *   **Label:** "View Technical Specification +".
    *   *Note:* This allows us to hide dense scientific text while keeping the page clean.

## 6. Page: Contact (Lead Gen Optimization)
**Refactor the Form Fields.**
*   **Add Dropdown:** "I am a..."
    *   *Options:* Veterinarian, Nutritionist, Farm Manager, Feed Mill, Distributor.
*   **Add Dropdown:** "Inquiry Type"
    *   *Options:* Request Technical Data, Request Quote, Distributor Inquiry.
*   **Button Text:** Change "Send Message" to "Connect with a Specialist."

## 7. Component: Footer

*   **Layout:** Ensure "Quick Links" are categorized clearly.