# Page spec: Accessibility Statement (`accessibility.html`)

| | |
|---|---|
| **URL** | https://herofound.org/accessibility (clean URL; `/accessibility.html` redirects to it with a 301 via `_redirects`) |
| **Canonical** | https://herofound.org/accessibility |
| **Page type** | legal |
| **Spec status** | APPLIED 2026-10-14 (PR #29), written from the page as built |
| **Audit date** | 2026-10-14 |
| **Owner** | Mike (content should be reviewed by counsel before being relied on) |

## 1. Purpose and search intent

**Job of the page.** Publish the Accessibility Statement that the footer of every page links to, in the site's own voice and design, so donors, participants, platforms, and reviewers can find it.

**Audiences.** People who rely on assistive technology or reduced motion; anyone who hits a barrier and wants to report it; procurement or grant reviewers checking for an accessibility statement.

**Query targets.** Brand only: "hero foundation accessibility", "herofound.org accessibility statement". Legal pages are not topic-ranking pages; they exist for trust and compliance.

## 2. Head metadata (applied)

| Tag | Value | Length |
|---|---|---|
| `<title>` | `Accessibility Statement | HERO Foundation, Nevada 501(c)(3)` | 59 |
| `meta description` | `HERO Foundation's accessible website: WCAG 2.1 AA target, reduced motion, keyboard access, and how to report a barrier. Tell us if anything is hard to use.` | 155 |
| `canonical` | `https://herofound.org/accessibility` | |
| `robots` | `index, follow` | |
| OG / Twitter | Same title and description; `og-image.jpg` shared with the home page | |

## 3. Heading outline (applied)

- H1: Accessibility Statement
- H2: Our commitment
- H2: The standard we work to
- H2: What we have done
- H2: Motion and video
- H2: Known limitations
- H2: Browsers and assistive technology
- H2: Tell us about a barrier
- H2: Contact

Each H2 has an `id` and the on-page table of contents links to it.

## 4. Schema (applied)

One `@graph` with `WebPage` (`@id` `https://herofound.org/accessibility#webpage`, `isPartOf` the site `#website`, `about` and `publisher` the shared `#organization`, `dateModified`) and `BreadcrumbList` (Home > Accessibility Statement). The Organization is referenced by `@id`, never redefined.

## 5. Shared shell

Each legal page opens with the home page's flag-diver hero (badge, eyebrow, H1, "Back to the site"), carries its text in a dark card over the water column, and closes with the home page's B-29 Donate block. `legal.css` reuses the home page's class names; the hero, water-column, Donate, and button rules are copied in by `tools/sync_legal_css.py` (run it after editing those rules in `index.html`). The footer markup lives in `index.html` and in each legal page; change them together.

## 6. Facts the copy relies on

- No accounts, forms, cookies, analytics, or trackers on the site (verified 2026-10-14 by grepping `index.html`).
- Hosting: Netlify (request logs). Fonts: Google Fonts (IP sent to Google). Donations: Clover (Fiserv) hosted checkout.
- Nevada nonprofit, 501(c)(3), contact info@herofound.org. Governing law Nevada; no county named because the city is still unconfirmed.
- "Help Everyone Remain Operational" is shown with the registered mark on the home page, so the Terms call it a registered trademark.

## 7. Audit

| Check | Status |
|---|---|
| Title 50 to 62 chars | PASS (59) |
| Description 140 to 155 chars, ends in a CTA | PASS (155) |
| Self-referencing canonical | PASS |
| One H1, H2 per section | PASS |
| Skip link, landmarks, visible focus | PASS |
| In sitemap.xml and llms.txt | PASS |
| Clean URL serves 200; `.html` redirects 301 | Verify on the deploy preview |
| Counsel review | OPEN (Mike) |
