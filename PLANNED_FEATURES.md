# Planned Features

## Internationalization & Localization

*   **Geo-Redirection for Turkish Speakers (Cloudflare Pages Functions):** Implement an Edge Function (`functions/_middleware.js`) to detect the user's country based on `request.cf.country`. If the country is Turkey ("TR"), automatically redirect the user to the `/tr/` version of the site. This should be implemented with consideration for user preference (e.g., if a user explicitly selects English, a cookie should prevent automatic redirection).
