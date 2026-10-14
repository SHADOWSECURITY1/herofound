# Page spec: PAGE NAME (`file.html`)

| | |
|---|---|
| **URL** | https://herofound.org/PATH |
| **Canonical** | https://herofound.org/PATH |
| **Page type** | landing / story / program / legal |
| **Spec status** | DRAFT, not yet applied |
| **Audit date** | YYYY-MM-DD |
| **Owner** | |

## 1. Purpose and search intent

**Job of the page.**

**Audiences, in priority order.**
1.
2.

**Query targets.**

| Intent | Queries |
|---|---|
| Brand | |
| Topic | |
| Action | |

## 2. Head metadata: target values

| Tag | Current | Target | Notes |
|---|---|---|---|
| `<title>` | | (50 to 62 chars) | |
| `meta description` | | (140 to 155 chars) | |
| `link rel=canonical` | | self-referencing | |
| `meta robots` | | `index, follow, max-image-preview:large` | |

### Open Graph and Twitter

| Tag | Current | Target |
|---|---|---|
| `og:title` | | |
| `og:description` | | |
| `og:image` (1200x630) | | |
| `og:image:alt` | | |
| `twitter:card` | | `summary_large_image` |
| `twitter:title` / `description` / `image` / `image:alt` | | same as OG |

## 3. Heading structure

| Level | Current text | Keep or change | Why |
|---|---|---|---|
| H1 | | | |
| H2 | | | |
| H3 | | | |

## 4. Images, video, and alternative text

| Asset | Where | Current alt / role | Target | Notes |
|---|---|---|---|---|
| | | | | |

## 5. Structured data: target JSON-LD

Reference the shared organization by `@id` (`https://herofound.org/#organization`). Add a `WebPage` node for this page and any page-specific types (`Article`, `Event`, `FAQPage`, `Service`).

```json
{ "@context": "https://schema.org", "@graph": [] }
```

## 6. AI and LLM optimization

### 6.1 Canonical answer paragraph

>

### 6.2 Fact sheet

| Fact | Value | Source on page |
|---|---|---|
| | | |

### 6.3 FAQ (visible on page, mirrored in schema)

1. **Question?**
   Answer.

## 7. Site-level updates for this page

- Add to `sitemap.xml` with `lastmod`.
- Add to `llms.txt` under Pages.
- Link to it from at least one existing page.

## 8. Audit: live page versus this spec

| Check | Live today | Target | Status |
|---|---|---|---|
| One H1 | | | |
| Title tag | | | |
| Meta description | | | |
| Canonical | | | |
| OG and Twitter block | | | |
| Image alt text | | | |
| Structured data | | | |
| FAQ | | | |
| In sitemap and llms.txt | | | |

## 9. Implementation order

1.
2.
