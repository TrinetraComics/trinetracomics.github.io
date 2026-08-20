# Trinetra Comics Phase 2 — Comic Publishing System

### Implemented
- Brahmansh hero page Part 9 now automatically shows up to 3 latest Brahmansh issues, newest first.
- Individual issue-post pages for Brahmansh Issue #1 and Issue #2.
- Each issue page contains title, description area, protagonist/antagonist profile area, publisher, store links, other issues, four free-preview slots, and rating/community area.
- Comics dropdown: All Comics, Latest Issues, Hindi Comics, English Comics, Where to Read.
- `previews.html` is now a hero-wise free-preview hub.
- `comics.html`: Latest 5, All Comics 10/page, Hindi, English, Where to Read.
- Homepage latest-comics feed continues to read `data/comics.json` automatically.

### Covers to provide
Place:
`images/comics/brahmansh-01-cover.jpg`
`images/comics/brahmansh-02-cover.jpg`

### Important
Issue #2 store links, detailed description, protagonist/antagonist information and preview images are intentionally not invented. They are ready to be filled when you provide them.

The star rating is local to the visitor's browser. GitHub Pages cannot store global ratings/comments by itself. A real shared comment system can be connected later with free Giscus/GitHub Discussions.

### Ordering
The catalogue uses an `order` field for publication sequence, so no publication date is invented. Add the actual date later if desired.

## Update notes
- Homepage Latest Comics now shows cover on the left and issue/title/details + short description on the right.
- Comics dropdown now opens five separate pages: All Comics, Latest Issues, Hindi Comics, English Comics, Where to Read.
- Brahmansh Issue #2 is categorized as Hindi using the source document's Language field.
- Tags from the supplied issue documents are displayed on issue pages.
- The supplied documents do not state original publication dates; the site therefore displays **Posted 20 August 2026** as the website post date rather than inventing an original publication date.


## Latest performance update
All website artwork has been converted to optimized WebP assets and HTML references updated. The homepage now uses the supplied Trinetra logo and supplied cosmic Trinetra artwork, with a single non-overlapping Latest Comics section and a visible News & Updates section.
