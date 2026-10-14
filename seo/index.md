# Page spec: Home (`index.html`)

| | |
|---|---|
| **URL** | https://herofound.org/ |
| **Canonical** | https://herofound.org/ (www and http already 301 here) |
| **Page type** | Single-page site. Sections: hero, mission, `#origin`, `#contact` (Get Involved), `#programs`, `#donate`, footer |
| **Spec status** | DRAFT, not yet applied to `index.html` |
| **Audit date** | 2026-10-14 |
| **Owner** | Mike |

This file is the source of truth for how the home page should present itself to search engines, social previews, screen readers, and AI answer engines. Section 9 lists what is live today versus this target. Section 10 is the implementation order.

---

## 1. Purpose and search intent

**Job of the page.** Tell a searcher or an AI assistant who HERO Foundation is, prove it is a Nevada 501(c)(3), and convert to a donation, a volunteer inquiry, or a corporate partnership.

**Audiences, in priority order.**
1. Donors (individuals scanning for a credible veteran cause).
2. Veterans, first responders, nurses, and teachers looking for dive-based programs.
3. Corporate partners and matching-gift programs.
4. The dive community (NAUI, dive shops, instructors).
5. AI answer engines and journalists building an entity profile.

**Query targets.** Brand first, then topic.

| Intent | Queries |
|---|---|
| Brand | `HERO Foundation`, `HERO Foundation Nevada`, `Help Everyone Remain Operational`, `herofound` |
| Topic | `scuba diving therapy for veterans`, `veteran dive therapy Nevada`, `first responder scuba program`, `dive certification for veterans`, `Lake Mead veteran diving nonprofit` |
| Action | `donate veteran scuba nonprofit`, `volunteer veteran nonprofit Nevada` |

**Open fact (confirm with Mike before use):** the Instagram handle is `herofoundationlv`, which implies Las Vegas, but the page only says Nevada and Lake Mead. Do not add "Las Vegas" to copy, title, or schema until confirmed.

---

## 2. Head metadata: target values

| Tag | Current | Target | Notes |
|---|---|---|---|
| `<title>` | `HERO Foundation` (15 chars) | `HERO Foundation \| Dive Therapy for Veterans & First Responders` (62 chars) | Fallback if truncation shows in Search Console: `HERO Foundation \| Dive Therapy for Veterans, Nevada` (51 chars) |
| `meta description` | 202 chars, truncates | `Nevada 501(c)(3) helping veterans, first responders, nurses, and teachers heal through scuba diving and dive certification. Donate or volunteer today.` (150 chars) | Alternative, 159 chars: `Nevada 501(c)(3) helping veterans, first responders, nurses, and teachers heal through scuba diving, dive certification, and community. Donate or get involved.` |
| `link rel=canonical` | missing | `https://herofound.org/` | Self-referencing. Prevents `?utm` and anchor variants from splitting signals |
| `meta robots` | missing (defaults to index) | `index, follow, max-image-preview:large` | Explicit, and the image hint helps Discover and image search |
| `meta theme-color` | missing | `#0A0A0F` | Matches `--fund-dark` |
| `html lang` | `en` | `en` | Keep |

### Open Graph and Twitter

| Tag | Current | Target |
|---|---|---|
| `og:type` | `website` | `website` |
| `og:site_name` | `HERO Foundation` | `HERO Foundation` |
| `og:title` | `HERO Foundation` | `HERO Foundation: Help Everyone Remain Operational` |
| `og:description` | long | `A Nevada 501(c)(3) using scuba diving, dive certification, and community to help veterans, first responders, nurses, and teachers stay operational.` (147 chars) |
| `og:url` | `https://herofound.org/` | keep |
| `og:locale` | missing | `en_US` |
| `og:image` | `hero-diver-flag-1200.jpg` (1200x1200) | `https://herofound.org/og-image.jpg`, a **1200x630** crop of the hero poster with the diver and flag right of centre. Square images get cropped unpredictably by LinkedIn and X |
| `og:image:width` / `height` | missing | `1200` / `630` |
| `og:image:alt` | missing | `Scuba diver carrying an American flag underwater, lit by sunlight from the surface` |
| `twitter:card` | `summary_large_image` | keep |
| `twitter:title` | `HERO Foundation` | same as `og:title` |
| `twitter:description` | missing | same as `og:description` |
| `twitter:image` | missing | same as `og:image` |
| `twitter:image:alt` | missing | same as `og:image:alt` |

### Icons and manifest (all currently 404)

| File | Spec |
|---|---|
| `favicon.svg` | Mark from the HERO logo (the badge on the diver's tank). Single colour gold `#D4A843` on transparent |
| `favicon.ico` | 32x32 and 16x16 from the same mark |
| `apple-touch-icon.png` | 180x180, gold mark on `#0A0A0F` |
| `site.webmanifest` | `name` "HERO Foundation", `short_name` "HERO", `theme_color` `#0A0A0F`, `background_color` `#0A0A0F`, 192 and 512 icons |

**Blocker:** the repo has no logo file. Mike to supply the HERO badge as SVG or a 1024px PNG. The same asset feeds `logo` in the schema below.

---

## 3. Heading structure

Rule: exactly one H1, H2 per section, H3 for items inside a section, no skipped levels, and the visible words of every heading stay identical to anything repeated in schema.

| Level | Current text | Keep or change | Why |
|---|---|---|---|
| H1 | Built for Those Who Served. | **Keep** | Brand voice. Keyword coverage comes from the hero paragraph directly under it, which already names every audience and "water-based healing, education, and vocational training". Do not add hidden keyword text to the H1 |
| H2 | Help Everyone Remain Operational® | Keep | It is the registered slogan and the acronym expansion, which is exactly what an entity profile needs |
| H2 | It Started With a Single Dive. | Keep | Story heading; the body carries the facts |
| H2 | Three Ways to Join the Mission | Keep | |
| H3 | Donate / Volunteer / Corporate Partnership | Keep | |
| H2 | Where Your Support Goes | Keep | The eyebrow label "Core Programs" sits above it and the five H3s below are keyword-bearing |
| H3 | Therapeutic Dive Sessions / Peer-Support Dives / Dive Apprenticeship & Certification / Educational Workshops / Community Outreach | Keep | These are the program entities. Match them word-for-word in the `ItemList` schema |
| H3 | Scan to Donate | Keep | Carousel card |
| H2 | Fuel the Next Dive. | Keep | |
| H2 | **Frequently Asked Questions** | **Add** | New section between Programs and Donate. Six questions in section 6. This is the single biggest AI-visibility gain available on the page |

Note: the hero and mission paragraphs are the first two places the full name, the acronym expansion, "Nevada", and "501(c)(3)" appear. Keep that order; answer engines weight the first 100 words heavily.

---

## 4. Images, video, and alternative text

| Asset | Where | Current alt / role | Target | Notes |
|---|---|---|---|---|
| `hero-diver-flag.mp4` + `hero-diver-flag-poster.jpg` | Hero background | `aria-hidden`, decorative | Keep decorative. Describe it once via `og:image:alt` and the `ImageObject` caption in schema | Looping background video should never be announced by a screen reader |
| `donate-wreck.mp4` + `donate-wreck-poster.jpg` | Donate background | `aria-hidden`, decorative | Keep decorative. Caption in schema: "Diver with a torch exploring a sunken B-29 bomber wreck" | Clip is mirrored; the caption does not mention orientation |
| `origin-recovery.jpg` | Origin story | "Two divers on a boat, one holding up a recovered anchor chain and the other giving a shaka sign" | Keep | Good, specific |
| `origin-dive-100.jpg` | Origin story | "Two divers on a boat at Lake Mead holding homemade sourdough Pop-Tarts to celebrate a 100th dive" | Keep | Good, and it ties to the story copy |
| `donate-qr-gold.png` (3 instances) | Carousel card, floating button, footer | "QR code linking to the HERO Foundation donation page" | Keep | Three instances is fine; the floating one is hidden on phones |
| `programs-bg.jpg` | CSS background | decorative | Keep | |
| `hero-diver-flag-1200.jpg` | `og:image` only | none | Replace with `og-image.jpg` 1200x630 | Keep the file; schema `image` can still reference it |
| Logo | none exists | | Add `logo.png` (1024px, transparent) and `logo.svg` | Needed for schema `logo`, favicons, and Google's knowledge panel |

Rules going forward: every `<img>` gets `alt`, `width`, `height`, and `loading="lazy"` when below the fold. Alt text describes what is in the image for someone who cannot see it; it does not repeat the caption or stuff keywords. Decorative video stays `aria-hidden="true"`.

---

## 5. Structured data: target JSON-LD

Replace the current single `NonprofitOrganization` block with one `@graph`. Shared `@id` values let the nodes reference each other. Text that also appears on the page (FAQ answers, program names) must stay word-for-word identical to the visible copy.

Placeholders in `ALL_CAPS` need a real value from Mike before this ships. Remove any key you cannot fill rather than guessing.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NonprofitOrganization",
      "@id": "https://herofound.org/#organization",
      "name": "HERO Foundation",
      "alternateName": "Help Everyone Remain Operational",
      "slogan": "Help Everyone Remain Operational",
      "url": "https://herofound.org/",
      "logo": "https://herofound.org/logo.png",
      "image": "https://herofound.org/og-image.jpg",
      "email": "info@herofound.org",
      "description": "HERO Foundation (Help Everyone Remain Operational) is a Nevada 501(c)(3) nonprofit that uses scuba diving, dive certification, and peer community to support the mental health, resilience, and career pathways of veterans, first responders, nurses, teachers, EMTs, police officers, and firefighters.",
      "nonprofitStatus": "https://schema.org/Nonprofit501c3",
      "taxID": "EIN_FROM_MIKE",
      "foundingDate": "YYYY_FROM_MIKE",
      "address": { "@type": "PostalAddress", "addressRegion": "NV", "addressCountry": "US" },
      "areaServed": { "@type": "State", "name": "Nevada" },
      "knowsAbout": ["Scuba diving therapy", "Veteran mental health", "First responder wellness", "Dive certification", "NAUI training"],
      "sameAs": [
        "https://www.instagram.com/herofoundationlv/",
        "https://www.linkedin.com/company/hero-foundation"
      ],
      "contactPoint": { "@type": "ContactPoint", "email": "info@herofound.org", "contactType": "general inquiries", "availableLanguage": "English" },
      "potentialAction": { "@type": "DonateAction", "name": "Donate to HERO Foundation", "target": "https://link.clover.com/urlshortener/wZVcKj" }
    },
    {
      "@type": "WebSite",
      "@id": "https://herofound.org/#website",
      "url": "https://herofound.org/",
      "name": "HERO Foundation",
      "publisher": { "@id": "https://herofound.org/#organization" },
      "inLanguage": "en-US"
    },
    {
      "@type": "WebPage",
      "@id": "https://herofound.org/#webpage",
      "url": "https://herofound.org/",
      "name": "HERO Foundation | Dive Therapy for Veterans & First Responders",
      "isPartOf": { "@id": "https://herofound.org/#website" },
      "about": { "@id": "https://herofound.org/#organization" },
      "primaryImageOfPage": { "@type": "ImageObject", "url": "https://herofound.org/og-image.jpg", "caption": "Scuba diver carrying an American flag underwater, lit by sunlight from the surface" },
      "inLanguage": "en-US"
    },
    {
      "@type": "ItemList",
      "@id": "https://herofound.org/#programs",
      "name": "HERO Foundation core programs",
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "item": { "@type": "Service", "name": "Therapeutic Dive Sessions", "description": "Therapeutic scuba sessions designed to improve mental health, reduce stress, and restore resilience for veterans, first responders, and service personnel.", "provider": { "@id": "https://herofound.org/#organization" } } },
        { "@type": "ListItem", "position": 2, "item": { "@type": "Service", "name": "Peer-Support Dives", "description": "Structured peer-support and mentorship dives that build community, trust, and connection among those who have served, because healing is better together.", "provider": { "@id": "https://herofound.org/#organization" } } },
        { "@type": "ListItem", "position": 3, "item": { "@type": "Service", "name": "Dive Apprenticeship & Certification", "description": "Dive apprenticeship and certification programs that open vocational pathways, turning a therapeutic experience into a career opportunity or lifelong skill.", "provider": { "@id": "https://herofound.org/#organization" } } },
        { "@type": "ListItem", "position": 4, "item": { "@type": "Service", "name": "Educational Workshops", "description": "Workshops focused on stress recovery, ocean awareness, and personal development, providing tools that extend well beyond the water.", "provider": { "@id": "https://herofound.org/#organization" } } },
        { "@type": "ListItem", "position": 5, "item": { "@type": "Service", "name": "Community Outreach", "description": "Outreach opportunities connecting heroes with a network of peers who understand the mission because they lived it.", "provider": { "@id": "https://herofound.org/#organization" } } }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://herofound.org/#faq",
      "mainEntity": "SEE_SECTION_6_QUESTIONS_AS_Question_Answer_PAIRS"
    }
  ]
}
```

Notes.
- `taxID` (the EIN) is the strongest trust signal for a nonprofit and is what Google and AI engines use to match the entity to IRS records, Candid/GuideStar, and Charity Navigator. Ship it as soon as Mike confirms it.
- `foundingDate` can be year-only (`2025`).
- Do not add board members as `Person` nodes without their consent. Zach is referenced by first name only in the story; keep it that way in schema (omit).
- Google restricts FAQ rich results to government and health sites, so do not expect a visible FAQ dropdown in Google. The schema still feeds AI engines and Bing.
- Validate with the Schema Markup Validator and Google's Rich Results Test after every change.

---

## 6. AI and LLM optimization

### 6.1 Canonical answer paragraph

Use this exact sentence set as the organization `description` in schema and as the opening of `llms.txt`. It is the text an assistant should be able to lift verbatim.

> HERO Foundation (Help Everyone Remain Operational) is a Nevada 501(c)(3) nonprofit that uses scuba diving, dive certification, and peer community to support the mental health, resilience, and career pathways of veterans, first responders, nurses, teachers, EMTs, police officers, and firefighters.

### 6.2 Fact sheet (entity facts an engine should be able to state)

| Fact | Value | Source on page |
|---|---|---|
| Legal name | HERO Foundation | footer |
| Acronym | Help Everyone Remain Operational (registered) | mission H2 |
| Type | Nonprofit, 501(c)(3) | hero badge, footer |
| State | Nevada | hero paragraph |
| Who it serves | veterans, first responders, nurses, teachers, EMTs, police officers, firefighters | hero paragraph |
| How | scuba diving therapy, peer-support dives, dive apprenticeship and certification, educational workshops, community outreach | programs |
| Where the story started | 3rd Reef Divers dive shop; Lake Mead; NAUI GI Bill program | origin story |
| Contact | info@herofound.org | donate section, footer |
| Donate | Clover checkout link, QR code | donate section |
| Social | Instagram @herofoundationlv, LinkedIn hero-foundation | footer |
| EIN | TODO Mike | not on page yet |
| Founded | TODO Mike | not on page yet |

### 6.3 FAQ section (add to the page, then mirror in FAQPage schema)

Place as a new section with H2 "Frequently Asked Questions" between Programs and Donate. Plain language, each answer self-contained, no marketing filler. Keep visible text and schema text identical.

1. **What is HERO Foundation?**
   HERO Foundation is a Nevada 501(c)(3) nonprofit that helps veterans, first responders, nurses, teachers, EMTs, police officers, and firefighters through scuba diving, dive certification, and a peer community. HERO stands for Help Everyone Remain Operational.

2. **What does HERO stand for?**
   Help Everyone Remain Operational. Help means direct assistance to those in crisis. Everyone means veterans, first responders, and underserved families. Remain means long-term stability rather than short-term fixes. Operational means resources and pathways that keep heroes moving forward.

3. **Who can take part in HERO Foundation programs?**
   Veterans, first responders, nurses, teachers, EMTs, police officers, and firefighters. Email info@herofound.org to ask about joining a program.

4. **Is HERO Foundation a registered charity, and are donations tax-deductible?**
   HERO Foundation is a Nevada 501(c)(3) nonprofit organization. Donations are tax-deductible to the extent allowed by law. Confirm with your tax advisor. `[Add EIN here once confirmed: "Our EIN is XX-XXXXXXX."]`

5. **How do I donate?**
   Use the Donate Now button on this page, which opens a secure Clover checkout, or scan the QR code. To give another way, email info@herofound.org.

6. **How can I volunteer or partner with HERO Foundation?**
   Volunteers share legal, financial, marketing, or mentorship skills with participants. Corporate partners can set up sponsorships, matching-gift programs, and co-branded initiatives. Email info@herofound.org to start.

### 6.4 Writing rules for AI readability

- Full name plus acronym expansion in the first 100 words (already true in the hero and mission).
- One idea per sentence. Plain nouns over slogans in body copy; slogans are fine in headings.
- Numbers and names stay consistent everywhere: "501(c)(3)", "Nevada", "info@herofound.org", "Lake Mead".
- Visible copy is the source of truth; schema mirrors it, never extends it.
- No text hidden with CSS for crawlers. Engines treat it as spam.

---

## 7. Site-level files (all new, all currently 404)

### `robots.txt`

```
# Search engines
User-agent: *
Allow: /
Sitemap: https://herofound.org/sitemap.xml

# AI assistants and answer engines are welcome
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: anthropic-ai
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /
User-agent: Bytespider
Allow: /
User-agent: CCBot
Allow: /
```

Named user-agent groups do not inherit the wildcard group's rules, so every group needs its own `Allow`. There is nothing to disallow on a one-page site.

### `sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://herofound.org/</loc>
    <lastmod>2026-10-14</lastmod>
  </url>
</urlset>
```

Update `lastmod` on every content change. Anchors (`#programs`) are not separate URLs and do not go in the sitemap.

### `llms.txt`

```
# HERO Foundation

> HERO Foundation (Help Everyone Remain Operational) is a Nevada 501(c)(3) nonprofit that uses scuba diving, dive certification, and peer community to support the mental health, resilience, and career pathways of veterans, first responders, nurses, teachers, EMTs, police officers, and firefighters.

Contact: info@herofound.org. Donate: https://link.clover.com/urlshortener/wZVcKj

## Programs
- Therapeutic Dive Sessions: scuba sessions that improve mental health, reduce stress, and restore resilience.
- Peer-Support Dives: mentorship dives that build community, trust, and connection among those who have served.
- Dive Apprenticeship & Certification: certification programs that open vocational pathways in diving.
- Educational Workshops: stress recovery, ocean awareness, and personal development.
- Community Outreach: connecting heroes with a network of peers who have lived the mission.

## Get involved
- Donate: https://herofound.org/#donate
- Volunteer or partner: https://herofound.org/#contact

## Pages
- [Home](https://herofound.org/): mission, origin story, programs, ways to help, donate.

## Social
- Instagram: https://www.instagram.com/herofoundationlv/
- LinkedIn: https://www.linkedin.com/company/hero-foundation
```

### `_headers` (Netlify, optional)

```
/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
/*.mp4
  Cache-Control: public, max-age=31536000, immutable
/*.jpg
  Cache-Control: public, max-age=31536000, immutable
```

Only add the long cache lines if asset filenames change when the asset changes (they have so far: `donate-wreck-2.jpg`, `-poster`, and so on).

---

## 8. Performance notes that affect ranking

- Two autoplay videos total about 1.7 MB. Both use `preload="auto"`. Switching the Donate video (below the fold) to `preload="metadata"` saves roughly 0.5 MB on first paint; Chrome still starts it when it scrolls into view.
- Fonts load from Google Fonts with `display=swap`; keep.
- The hero poster is preloaded; keep.
- Images already carry `width` and `height`, so there is no layout shift.
- Run Lighthouse (mobile) after applying this spec and record the four scores in section 9.

---

## 9. Audit: live page versus this spec

| Check | Live today | Target | Status |
|---|---|---|---|
| One H1 | Yes | Yes | PASS |
| Title tag | 15 chars, brand only | 62 chars with topic | FAIL |
| Meta description | 202 chars, truncated | 150 chars | FAIL |
| Canonical | Missing | Self-referencing | FAIL |
| Robots meta | Missing | Explicit index, follow | WARN |
| OG image | 1200x1200 | 1200x630 with alt, width, height | WARN |
| Twitter description and image | Missing | Present | FAIL |
| `og:locale` | Missing | `en_US` | WARN |
| Image alt text | 3 of 3 | 3 of 3 | PASS |
| Decorative video hidden from AT | Yes | Yes | PASS |
| Organization schema | Thin (no logo, status, EIN, address) | Full `@graph` | FAIL |
| Program schema | None | `ItemList` of 5 `Service` | FAIL |
| FAQ (visible + schema) | None | 6 questions | FAIL |
| `robots.txt` | 404 | Present with AI allowlist | FAIL |
| `sitemap.xml` | 404 | Present | FAIL |
| `llms.txt` | 404 | Present | FAIL |
| Favicons and manifest | 404 | Present | FAIL |
| Logo asset | None in repo | `logo.png` and `logo.svg` | BLOCKED on Mike |
| HTTPS, HSTS, www redirect | Yes | Yes | PASS |
| `lang` attribute | `en` | `en` | PASS |
| Lighthouse SEO / Perf / A11y / BP | not run | record here | TODO |

---

## 10. Implementation order

Things only Mike can supply are marked. Everything else can ship in one pull request.

1. **Mike:** EIN, founding year, city confirmation, and the HERO logo file (SVG or 1024px PNG).
2. Head: title, description, canonical, robots, theme-color, full OG and Twitter block.
3. Create `og-image.jpg` (1200x630) from `hero-diver-flag-poster.jpg`; point `og:image` and `twitter:image` at it.
4. Replace the JSON-LD block with the `@graph` in section 5, filling placeholders or removing them.
5. Add the FAQ section (section 6.3) to the page and the matching `FAQPage` entries to the graph.
6. Add `robots.txt`, `sitemap.xml`, `llms.txt`.
7. Favicons and `site.webmanifest` once the logo exists.
8. Donate video `preload="metadata"`.
9. Validate: Rich Results Test, Schema Markup Validator, Facebook Sharing Debugger, LinkedIn Post Inspector, Lighthouse mobile.
10. **Mike:** verify the domain in Google Search Console and Bing Webmaster Tools, submit `https://herofound.org/sitemap.xml` (full URL, domain properties reject relative paths), request indexing. Apply for Google for Nonprofits (Ad Grants) once the EIN is public on the page.
11. Re-run section 9 and update the status column.

---

## 11. Verification commands

```bash
# head tags
curl -s https://herofound.org/ | grep -o '<title>[^<]*</title>\|<meta name="description"[^>]*>\|<link rel="canonical"[^>]*>'
# site files
for p in robots.txt sitemap.xml llms.txt favicon.ico; do printf "%-12s %s\n" "$p" "$(curl -s -o /dev/null -w '%{http_code}' https://herofound.org/$p)"; done
# structured data (paste into https://validator.schema.org and https://search.google.com/test/rich-results)
curl -s https://herofound.org/ | sed -n '/application\/ld+json/,/<\/script>/p'
```
