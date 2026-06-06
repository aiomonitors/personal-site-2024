# Spec: Hidden MDX Notes Section

## Summary

Add a hidden writing section to the personal site at `/notes`. Notes are authored as MDX files stored in the repo and rendered as React pages. The section includes a notes index page listing published notes and individual note pages for each MDX file.

The section is intentionally hidden for now: it will not be linked from the homepage/navigation and should opt out of search indexing with `noindex` metadata. Direct access to `/notes` and `/notes/[slug]` should still work.

## Goals

- Add a `/notes` index route.
- Add individual note routes at `/notes/[slug]`.
- Store note content in the repo as MDX.
- Render MDX content as React.
- Support frontmatter metadata:
  - `title`
  - `date`
  - `subtitle` optional
  - `published`
- Show only `published: true` notes on the `/notes` index.
- Allow unpublished notes to be accessible directly by slug.
- Keep the section hidden by not linking to it from the homepage.
- Add `noindex` metadata for notes routes.
- Use Tailwind Typography for readable article body styling.
- Do not add syntax highlighting initially.

## Non-goals

- No homepage link to `/notes` yet.
- No RSS feed initially.
- No CMS or external content source.
- No auth/private preview system.
- No syntax highlighting for code blocks in the first version.
- No comments, tags, categories, or search in the first version.

## Design Decisions

### Route name

Use `/notes` instead of `/blog`, `/writing`, or another route.

Rationale: the section can feel informal and flexible, allowing both polished articles and shorter notes.

### Hidden behavior

Use “unlinked + noindex.”

Behavior:

- `/notes` exists and works.
- `/notes/[slug]` exists and works.
- The homepage does not link to `/notes`.
- Notes routes include metadata instructing search engines not to index them.

Rationale: simple hidden launch state without adding feature flag complexity.

### Content format

Use MDX.

Rationale: MDX supports normal Markdown writing while allowing React components in future posts if needed.

Example note:

```mdx
---
title: "Example Note"
subtitle: "A short description of the note"
date: "2026-06-03"
published: false
---

This is the note body.

## Section heading

Markdown works normally here.
```

### Draft/publish workflow

Use `published: true | false` in frontmatter.

Behavior:

- `published: true` notes appear on `/notes`.
- `published: false` notes do not appear on `/notes`.
- `published: false` notes are still accessible directly at `/notes/[slug]`.

Rationale: drafts can live in the repo and be direct-previewed without appearing in the list.

### Slugs

Use filename-based slugs.

Example:

```txt
src/content/notes/my-first-note.mdx
```

URL:

```txt
/notes/my-first-note
```

Rationale: simple, predictable, and avoids slug/frontmatter mismatch.

### Notes index styling

Match the current homepage list/card style.

Each note row/card should show:

- title
- optional subtitle
- date

The layout should feel consistent with the existing work/projects sections in `src/app/page.tsx` and components like `WorkExperienceItem` / `SideProjectItem`.

### Article page styling

Use Tailwind Typography via `@tailwindcss/typography` for the MDX body.

Customize the prose styles to match existing site colors and fonts where practical.

Suggested article layout:

- same background as homepage
- centered content container, similar max width
- top metadata block with title, subtitle, date
- MDX body using `prose` classes
- optional back link to `/notes`

### Code blocks

No syntax highlighting initially.

Code blocks should still be readable via Tailwind Typography defaults/customization.

## Technical Design

### Dependencies

Add MDX and typography support.

Expected packages:

```txt
@next/mdx
@mdx-js/loader
@mdx-js/react
@tailwindcss/typography
remark-frontmatter or gray-matter/frontmatter tooling, depending on implementation approach
```

The exact MDX implementation can be chosen during planning/implementation. The preferred direction is a static build-time content pipeline that reads MDX files from the repo.

### Suggested file structure

```txt
src/app/notes/page.tsx
src/app/notes/[slug]/page.tsx
src/content/notes/example-note.mdx
src/lib/notes.ts
src/components/NoteListItem.tsx
```

Potentially also:

```txt
src/mdx-components.tsx
```

if using Next.js App Router MDX component customization.

### Content model

Define a note metadata type similar to:

```ts
export interface NoteMetadata {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  published: boolean;
}
```

### Content utility module

Create `src/lib/notes.ts` to own content loading and sorting.

Responsibilities:

- read notes from `src/content/notes`
- derive slug from filename
- parse frontmatter
- validate required fields
- return all notes metadata
- return published notes for the index
- return a note by slug for detail pages
- sort notes by date descending

### `/notes` index route

Create `src/app/notes/page.tsx`.

Responsibilities:

- export metadata with `robots.index = false`
- get published notes only
- render page using existing visual style
- render note rows/cards with title, optional subtitle, and formatted date
- link each row to `/notes/[slug]`

### `/notes/[slug]` route

Create `src/app/notes/[slug]/page.tsx`.

Responsibilities:

- export/generate metadata with `robots.index = false`
- statically generate params for all notes, including unpublished notes
- load note by filename slug
- render title, subtitle, date, and MDX content
- return `notFound()` if slug does not exist
- do not block unpublished notes

### Tailwind Typography setup

Update `tailwind.config.ts`:

- add `@tailwindcss/typography` plugin
- ensure MDX content files are included in Tailwind `content` globs if needed

Potential update:

```ts
content: [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/content/**/*.{md,mdx}",
]
```

### Next.js MDX setup

Update `next.config.mjs` to support MDX page/content imports if the implementation imports MDX modules directly.

Alternative implementation: compile MDX from files in a content utility. The plan should choose one implementation path before coding.

### Metadata and SEO

Both `/notes` and `/notes/[slug]` should set noindex metadata.

Example intent:

```ts
export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};
```

Article pages may still use title/description metadata for browser titles/social previews, but should remain noindexed.

## Open Implementation Choice

The main remaining technical choice is the exact MDX pipeline:

1. Next-native MDX imports with `@next/mdx`.
2. File-system content pipeline with frontmatter parsing and MDX compilation.
3. A content-layer library such as Contentlayer/source plugins.

Recommended for this repo: keep it lightweight with a local file-system content utility and minimal MDX dependencies rather than adopting a full content framework.

## Acceptance Criteria

- Visiting `/notes` renders a notes index page.
- `/notes` is not linked from the homepage.
- `/notes` includes noindex metadata.
- Published notes appear on `/notes` sorted newest-first.
- Unpublished notes do not appear on `/notes`.
- Visiting `/notes/[slug]` renders the corresponding MDX note.
- Unpublished notes are accessible directly by slug.
- Missing slugs return 404.
- Article body content is styled with Tailwind Typography.
- Code blocks render readably without syntax highlighting.
- Note slugs are derived from filenames.
