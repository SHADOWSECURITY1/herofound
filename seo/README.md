# SEO and AI-readiness specs for herofound.org

One Markdown file per page. Each file is the source of truth for that page's search, social, accessibility, and AI-assistant presentation: title and description, canonical, Open Graph and Twitter tags, heading outline, alt text for every image, structured data, an FAQ written for answer engines, and an audit of what is live versus the target.

The site is currently a single page, so there is one page spec. Add a new spec from `_template.md` whenever a new HTML page is added, and add the page to `sitemap.xml` and `llms.txt` in the same pull request.

## Files

| File | Covers | Status |
|---|---|---|
| [`index.md`](index.md) | `index.html` (https://herofound.org/) | Applied 2026-10-14 (PR #22); logo and icons PR #24. Open: EIN, founding year, city |
| [`_template.md`](_template.md) | Blank spec for future pages | |

## Site-level files the specs depend on

These live at the repo root and are served by Netlify. `robots.txt`, `sitemap.xml`, and `llms.txt` were added in PR #22; the icon set and logo in PR #24. Their exact contents are in `index.md` section 7.

| File | Purpose |
|---|---|
| `robots.txt` | Allows search engines and names each AI crawler explicitly (named groups do not inherit the wildcard group) |
| `sitemap.xml` | One entry per real URL with `lastmod`. Anchors are not URLs |
| `llms.txt` | Plain-text summary of the organization and pages for AI assistants |
| `favicon.svg`, `favicon.ico`, `favicon-*.png`, `apple-touch-icon.png`, `site.webmanifest` | Browser and home-screen icons, cut from the goggles in the HERO badge |

## How to use a spec

1. Read the audit table near the end of the file. Anything marked FAIL or WARN is work.
2. Apply the target values from sections 2 to 7 to the HTML. Copy strings exactly; lengths were measured.
3. Where the spec says text must match between the page and the schema (FAQ answers, program names, the organization description), copy from one place to the other. Do not paraphrase.
4. Run the verification commands at the end of the spec, then the Rich Results Test and the Schema Markup Validator.
5. Update the audit table's status column and the spec status line at the top.

## Rules that apply to every page

- Exactly one H1. H2 per section, H3 for items within a section, no skipped levels.
- Every `<img>` has `alt`, `width`, `height`, and `loading="lazy"` when below the fold. Decorative background video is `aria-hidden="true"`.
- Title tag 50 to 62 characters, brand plus topic. Meta description 140 to 155 characters, ending in a call to action.
- Self-referencing canonical on every page.
- One `Organization` definition per site, shared by `@id` (`https://herofound.org/#organization`). Pages reference it; they do not redefine it.
- Visible copy is the source of truth. Schema mirrors visible text word-for-word and never adds claims the page does not make.
- No hidden text for crawlers.
- Facts that are not yet confirmed (EIN, founding year, city) are marked as placeholders in the spec and must not be guessed.

## Facts still needed from Mike

- EIN (for the FAQ answer on tax-deductibility and `taxID` in schema).
- Founding year.
- Whether "Las Vegas" may be used in copy and schema (the Instagram handle implies it).
- Google Search Console and Bing Webmaster Tools domain verification, then sitemap submission.
