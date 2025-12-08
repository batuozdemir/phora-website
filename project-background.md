# Project Background: Phora Corporate Website

## 1. Project Overview
**Client:** Phora (Phora TMC)
**Industry:** Animal Health & Nutrition (Feed Additives)
**Type:** B2B Corporate Website
**Key Function:** Official Distributor for **Arm & Hammer Animal Health** in Turkey.
**Core Markets:** Turkey, with global partners in USA and India.

**Mission:**
[cite_start]To develop solutions to control major challenges of animal producers ("Total Control")[cite: 3, 114]. [cite_start]We focus on gut welfare, antibiotic-free production, and performance optimization[cite: 19, 72].

---

## 2. Tech Stack & Architecture
* **Framework:** Astro (Latest version) - Chosen for static site performance and SEO.
* **Styling:** Tailwind CSS - For rapid, utility-first styling.
* **Content Management:** Astro Content Collections (Markdown/MDX) for products and blog/news.
* **State Management:** Minimal (Nano Stores if absolutely necessary, otherwise static).
* **Deployment Target:** Netlify/Vercel (Static).

---

## 3. Brand Identity & Design System
* **Tone:** Scientific, Authoritative, Professional, Clean.
* **Visual Style:** "Clinical/Medical" rather than "Rustic Farm."
* **Color Palette (Suggested):**
    * *Primary:* Deep Teal/Medical Blue (Trust, Science).
    * *Secondary:* Clean White/Light Gray backgrounds.
    * *Accent:* Alert Orange or Green (used sparingly for calls to action).
* **Typography:** Clean Sans-Serif (e.g., Inter, Roboto, or Lato).

---

## 4. Core Content & Sitemap

### A. Home (`/`)
* **Hero Section:** High-impact visual. [cite_start]Headline: "Total Control in Animal Production"[cite: 2].
* [cite_start]**Key Value Prop:** "Solutions for Gut Welfare & Performance"[cite: 19].
* **Authority Badge:** Prominently display "Official Distributor: Arm & Hammer Animal Health."
* **Segment Navigation:** Quick links to Ruminant, Poultry, Aquaculture.

### B. About Us (`/about`)
* [cite_start]**History:** Established in 2015. 30+ years of experience in animal health/nutrition[cite: 109].
* [cite_start]**Mission:** "Total Control" of key health/performance challenges[cite: 114].
* [cite_start]**Technology:** Focus on **RFC (Refined Functional Carbohydrates)** technology to suppress pathogens and prevent cell destruction[cite: 111].

### C. Solutions (Product Pages)
**1. Ruminant (`/solutions/ruminant`)**
* [cite_start]**Focus:** Gut Health, Feed Efficiency, Milk Yield[cite: 26].
* **Key Challenges Solved:**
    * [cite_start]**Calf Diarrhea:** Control without antibiotics[cite: 46, 56].
    * [cite_start]**Mycotoxins:** Broad-spectrum control in feed[cite: 36].
    * [cite_start]**Pathogen Control:** Reducing *E. coli* and endotoxins[cite: 51, 52].

**2. Poultry (`/solutions/poultry`)**
* [cite_start]**Focus:** Antibiotic-free production trends[cite: 72].
* **Key Challenges Solved:**
    * [cite_start]**Gut Integrity:** Tight junction protection[cite: 41].
    * [cite_start]**Pathogen Control:** Suppression of *Salmonella* and *E. coli*[cite: 95].
    * [cite_start]**Mycotoxin Control:** Binding agents for feed safety[cite: 82].

**3. Aquaculture (`/solutions/aquaculture`)**
* *Note: Content currently missing in source. Create placeholder structure.*

### D. Contact (`/contact`)
* **Address:** Soğanlık Esentepe Mah. [cite_start]Cevizli D100 Guney Yanyol No: 25/141 Kartal/ISTANBUL, TURKEY[cite: 18].
* [cite_start]**Phone:** +90 216 652 26 30[cite: 17].
* [cite_start]**Email:** info@phoratmc.com[cite: 17].

---

## 5. Functional Requirements (PoC Phase)
1.  **Responsive Navigation:** Mobile-friendly hamburger menu.
2.  [cite_start]**i18n Readiness:** Structure the project to support English (EN) and Turkish (TR) toggle (content in EN for PoC)[cite: 10].
3.  **SEO Fundamentals:** Proper meta tags, semantic HTML5 structure.
4.  **Performance:** 100/100 Lighthouse score (Astro default).

---

## 6. Key Terminologies to Use
* [cite_start]**RFCs:** Refined Functional Carbohydrates[cite: 53].
* [cite_start]**Tight Junctions:** Crucial for gut integrity[cite: 41].
* [cite_start]**Leaky Gut:** The breakdown of the intestinal barrier[cite: 42].
* [cite_start]**Antibiotic-Free:** A major selling point[cite: 72].
* [cite_start]**Total Control:** The company tagline[cite: 2].