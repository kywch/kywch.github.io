# Implementation Log: Blog + Projects Features

**Date:** 2025-12-26
**Branch:** `add-blog-feature`
**Status:** ✅ Completed - Phase 1
**Next:** Implement top navigation layout (Option 4)

---

## Summary

Successfully implemented blog and projects functionality for the portfolio website. All core features are working with the sidebar layout. Next phase will convert to a top navigation bar layout.

---

## What Was Implemented

### ✅ Phase 1: Core Blog and Projects (COMPLETED)

#### Files Created (9 new files)

1. **`_layouts/post.html`** - Blog post layout with metadata, navigation, and back link
2. **`_includes/post-list.html`** - Reusable component for displaying recent posts
3. **`_includes/project-card.html`** - Reusable component for project cards with thumbnails
4. **`blog.md`** - Blog archive page organized by year
5. **`projects.md`** - Projects showcase page
6. **`_data/projects.yml`** - Centralized project data (6 projects)
7. **`_posts/2025-01-15-example-post.md`** - Example blog post template
8. **`_posts/2019-11-24-math-anxiety-avoidance.md`** - Math anxiety research blog post
9. **`_posts/2019-01-01-web-based-cognitive-tasks.md`** - Cognitive tasks blog post (converted from index.md section)

#### Supporting Files

10. **`.gitignore`** - Ignore Jekyll build artifacts
11. **`Gemfile`** - Ruby dependencies for local development
12. **`Gemfile.lock`** - Locked dependency versions

#### Files Modified (3 files)

1. **`_config.yml`** - Added blog permalink structure, excerpt separator, and site metadata
2. **`index.md`** - Updated with featured projects section and recent blog posts, removed web-based cognitive tasks section
3. **`_layouts/default.html`** - Added comprehensive CSS for:
   - Blog post lists and individual posts
   - Project card grid (2x3 grid on desktop, 1 column on mobile)
   - Post navigation and metadata
   - **Fixed desktop blog post header overlap issue** with proper margins and positioning

---

## Key Features Implemented

### Blog Functionality
- ✅ Individual blog post layout with metadata (date, categories, tags)
- ✅ Blog archive page organized by year
- ✅ Recent posts component for landing page (shows 3 most recent)
- ✅ Post navigation (previous/next links)
- ✅ Excerpt support with `<!--more-->` separator
- ✅ Clean URL structure: `/blog/YYYY/MM/title/`
- ✅ **Fixed header overlap issue** - Post headers no longer overlap content in desktop mode

### Project Showcase
- ✅ Centralized project data in `_data/projects.yml`
- ✅ Project card component with thumbnails, descriptions, and links
- ✅ Responsive grid layout (2 columns x 3 rows on desktop, 1 column on mobile)
- ✅ Featured projects on landing page (6 projects)
- ✅ Dedicated projects page at `/projects/`
- ✅ Multiple link types per project (GitHub, blog post, external site)

### Landing Page Updates
- ✅ Featured Projects section with 6 project cards
- ✅ Recent Blog Posts section showing 3 latest posts
- ✅ Web-based Cognitive Tasks section converted to blog post
- ✅ Cleaner layout with links to full pages

---

## Technical Details

### Layout Fix: Desktop Blog Post Header Overlap

**Problem:** In desktop mode, blog post headers were overlapping with post content due to the theme's fixed sidebar layout and float-based positioning.

**Solution Applied:**
1. Added `!important` flags to force spacing on `.post-header` and `.post-header h1`
2. Set `position: relative` and `z-index: 1` on post header
3. Added `float: none` to section on desktop to prevent float interference
4. Set `margin-left: 310px` on section to account for fixed sidebar (280px + 30px gap)
5. Made wrapper width flexible with `max-width: 860px`

**CSS Added to `_layouts/default.html`:**
```css
/* Ensure section doesn't overlap with fixed sidebar on desktop */
@media print, screen and (min-width: 961px) {
  section {
    float: none; /* Remove float to prevent overlap */
    margin-left: 310px; /* sidebar width (280px) + gap (30px) */
  }

  .wrapper {
    width: auto;
    max-width: 860px;
  }
}

/* Post header with forced spacing */
.post-header {
  margin-bottom: 2em !important;
  padding-bottom: 1em !important;
  position: relative;
  z-index: 1;
}

.post-header h1 {
  margin: 0 0 0.5em 0 !important;
  line-height: 1.3 !important;
  position: relative;
}
```

### Project Card Design

**Features:**
- Square aspect ratio cards (1:1)
- 50% thumbnail, 50% content area
- Responsive: 2 columns on desktop, 1 column on mobile
- Hover effects: shadow and subtle lift
- Multiple action buttons per card
- Clickable entire card area (optional)

**CSS Grid Layout:**
```css
.project-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5em;
}

@media screen and (max-width: 768px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## Git Commit

```bash
commit 9d10172
Add blog and projects features with layout fixes

- Add blog functionality with post layout and blog archive page
- Add projects page with card-based grid layout
- Convert web-based cognitive tasks section to blog post
- Create reusable includes for post lists and project cards
- Fix desktop blog post header overlap issue with proper spacing and positioning
- Update config with site metadata and Jekyll settings
```

**Files Changed:** 15 files, 1107 insertions(+), 52 deletions(-)

---

## Testing Checklist

### ✅ Verified Working

- [x] Blog archive page loads at `/blog/`
- [x] Individual blog posts load with correct URLs
- [x] Projects page loads at `/projects/`
- [x] Landing page shows featured projects and recent posts
- [x] Project cards display correctly with thumbnails
- [x] Responsive layout works (desktop and mobile)
- [x] Post navigation links work
- [x] Desktop blog post header no longer overlaps content
- [x] Mobile layout displays correctly

### Known Issues

- ⚠️ **Sidebar Layout Issue (TO BE ADDRESSED):** The fixed sidebar with large photo takes up too much space on blog posts and project pages. Works well on home page, but intrusive on content pages.

---

## Phase 1 Implementation Details

### Step-by-Step What Was Done

#### 1. Setup
- Created feature branch `add-blog-feature`
- Created directories: `_posts/`, `_layouts/`, `_includes/`, `_data/`

#### 2. Blog System Files

**`_layouts/post.html`** (38 lines)
- Layout for individual blog posts
- Shows title, date, categories, tags
- Post navigation (previous/next)
- Back to blog link

**`_includes/post-list.html`** (22 lines)
- Reusable component for recent posts
- Configurable limit (e.g., `{% include post-list.html limit=3 %}`)
- Shows title, date, excerpt, read more link

**`blog.md`** (38 lines)
- Blog archive page at `/blog/`
- Groups posts by year
- Shows all published posts

#### 3. Projects System Files

**`_data/projects.yml`** (90 lines)
- Centralized project data
- 6 featured projects with thumbnails, descriptions, links
- Single source of truth for project information

**`_includes/project-card.html`** (53 lines)
- Reusable project card component
- Square cards with 50% thumbnail, 50% content
- Multiple link types (blog, GitHub, external)
- Responsive grid layout

**`projects.md`** (11 lines)
- Projects showcase page at `/projects/`
- Uses `_data/projects.yml` for data

#### 4. Content Files

**Blog Posts Created:**
1. `_posts/2025-01-15-example-post.md` - Template/example post
2. `_posts/2019-11-24-math-anxiety-avoidance.md` - Science Advances research post
3. `_posts/2019-01-01-web-based-cognitive-tasks.md` - Cognitive tasks collection (converted from index.md)

#### 5. Configuration Updates

**`_config.yml`** - Added:
```yaml
permalink: /blog/:year/:month/:title/
excerpt_separator: "<!--more-->"
```

**`index.md`** - Changes:
- Added featured projects section (6 projects from `_data/projects.yml`)
- Added recent blog posts section (3 most recent)
- Removed web-based cognitive tasks section (moved to blog post)

#### 6. Layout and Styling

**`_layouts/default.html`** - Added CSS (~325 lines):

**Blog Styles:**
- Post list styling
- Individual post layout
- Post header, content, navigation
- Archive page styling

**Project Card Styles:**
- Grid layout: `grid-template-columns: repeat(2, 1fr)`
- Square aspect ratio cards
- Hover effects (shadow, lift)
- Responsive: 2 cols desktop → 1 col mobile

**Desktop Header Overlap Fix:**
```css
@media print, screen and (min-width: 961px) {
  section {
    float: none;
    margin-left: 310px;
  }
}

.post-header {
  margin-bottom: 2em !important;
  padding-bottom: 1em !important;
  position: relative;
  z-index: 1;
}
```

#### 7. Supporting Files

**`.gitignore`** - Ignore Jekyll build artifacts
**`Gemfile`** - Ruby dependencies for local dev
**`Gemfile.lock`** - Locked versions

---

## Design Decisions Made

### Project Cards
- **Square aspect ratio** (1:1) for consistency
- **2-column grid** on desktop (not 3) to give more space per project
- **Card-based design** with hover effects for better UX
- **Centralized data** in YAML file for easy maintenance

### Blog Layout
- **Year-based archive** for organization
- **Excerpt support** with `<!--more-->` separator
- **Clean URLs**: `/blog/YYYY/MM/title/`
- **Navigation between posts** for better discoverability

### CSS Architecture
- **Inline styles** in `_layouts/default.html` for simplicity
- **Mobile-first responsive** design
- **GitHub Pages compatible** - no custom plugins needed

---

## Issues Encountered and Fixed

### Issue 1: Desktop Blog Post Header Overlap

**Problem:** Post title and header were overlapping content on desktop due to theme's fixed sidebar and float-based layout.

**Root Cause:**
- Theme uses `position: fixed` on sidebar
- Theme uses `float: right` on section
- Section was floating next to fixed sidebar, causing overlap

**Solution:**
1. Added `float: none` to section on desktop
2. Added `margin-left: 310px` to push content away from sidebar
3. Made wrapper width flexible with `max-width: 860px`
4. Added `!important` flags on post header spacing to override theme
5. Added `position: relative` and `z-index: 1` to ensure proper stacking

**Result:** Clean separation between sidebar and content on desktop, no overlap.

### Issue 2: Mobile Layout

**No Issues** - Theme's existing media queries handled mobile well. Our responsive grid adapted correctly.

---

## Testing Results

### ✅ All Features Working

- Blog archive page renders correctly
- Individual posts display with proper formatting
- Post navigation links work
- Projects page shows all projects
- Project cards display with thumbnails
- Featured projects appear on home page
- Recent posts appear on home page
- Responsive layout works on all screen sizes
- Desktop header overlap is fixed

### Known Limitation

**Sidebar Layout Issue:**
- Fixed sidebar works well on home page
- Too intrusive on blog/project pages (wastes horizontal space)
- **Next Phase:** Implement top navigation layout (Option 4)

---

## Next Phase: Top Navigation Layout (Option 4)

**See PLAN.md for detailed implementation plan**

### Quick Summary
- Create `_layouts/page.html` with top navigation
- Create `_includes/nav.html` component
- Add `assets/css/page-layout.css`
- Add `assets/js/nav.js` for mobile menu
- Update blog/projects pages to use new layout
- Keep sidebar on home page (optional)

---

## References

- **Current Plan:** `PLAN.md`
- **Planning Session Log:** `logs/2025-12-26-create-planning-documentation.md`
- **Branch:** `add-blog-feature`
- **Commit:** `9d10172`

---

**Phase 1 Status:** ✅ COMPLETE
**Phase 2 Status:** ✅ COMPLETE
**Phase 3 Status:** ✅ COMPLETE

---

## Phase 2: Top Navigation Layout (Evening Session)

**Date:** 2025-12-26 (Evening)
**Status:** ✅ COMPLETED

### Implementation Summary

Successfully implemented top navigation bar for blog and projects pages, eliminating the sidebar on content pages while keeping it on the home page.

#### Files Created (4 new files)

1. **`_layouts/page.html`** - New full-width content layout with top navigation
2. **`_includes/nav.html`** - Top navigation component with mobile hamburger menu
3. **`assets/css/page-layout.css`** - Styling for navigation and page layout (~320 lines)
4. **`assets/js/nav.js`** - Mobile menu toggle functionality

#### Files Modified (3 files)

1. **`_layouts/post.html`** - Changed from `layout: default` to `layout: page`
2. **`blog.md`** - Changed from `layout: default` to `layout: page`
3. **`projects.md`** - Changed from `layout: default` to `layout: page`

### Key Features Implemented

- ✅ Sticky top navigation bar
- ✅ Left-aligned navigation flow: Name → Home → Blog → Projects → Social links
- ✅ Mobile responsive hamburger menu
- ✅ Full-width content area on blog/projects pages (max 900px centered)
- ✅ Consistent navigation across all content pages
- ✅ Home page retains sidebar layout for visual impact

---

## Phase 3: UI/UX Refinements (Evening Session)

**Date:** 2025-12-26 (Evening)
**Status:** ✅ COMPLETED

### Implementation Summary

Polished the user interface by fixing scrollbar issues, improving alignment, removing visual clutter, and enhancing typography.

#### Files Modified

1. **`_layouts/default.html`** - Horizontal scrollbar fixes, social link cleanup, font size increases, content migration from config
2. **`assets/css/page-layout.css`** - Horizontal scrollbar fixes, navigation alignment, font size increases
3. **`_config.yml`** - Removed duplicate social links, removed logo/description, added site title
4. **`index.md`** - Photo credit moved to footer, inline section headers with "View all" links, removed arrows
5. **`_includes/post-list.html`** - Removed "Read more →" links
6. **`_includes/project-card.html`** - Removed trailing arrows from buttons
7. **`_posts/2020-04-26-web-based-cognitive-tasks.md`** - Renamed from 2019-01-01 date, updated frontmatter
8. **`_posts/2025-01-15-example-post.md`** - Deleted (example content)

### Issues Fixed

#### Issue 1: Horizontal Scrollbar

**Problem:** Extra horizontal scrollbar appearing on both desktop and mobile views.

**Root Cause:**
- Fixed width on `.wrapper` (830px) without max-width constraint
- Body padding (40px) not included in width calculations (no box-sizing: border-box)
- No overflow-x control on html/body

**Solution Applied:**
```css
/* Both default.html and page-layout.css */
html, body {
  overflow-x: hidden;
  max-width: 100%;
}

body, .wrapper, header, section {
  box-sizing: border-box;
}
```

**Result:** Scrollbar eliminated on all screen sizes.

#### Issue 2: Navigation Alignment

**Problem:** "Kyoung Whan Choe" header not left-aligned with content, moving around.

**Root Cause:**
- nav-container had max-width: 900px but content had 1200px (misalignment)
- Navigation used justify-content: space-between causing items to spread

**Solution Applied:**
```css
.nav-container {
  max-width: 1200px; /* changed from 900px to match content */
  justify-content: flex-start; /* changed from space-between */
  gap: 2rem; /* added for consistent spacing */
}

.nav-menu {
  flex: 1; /* allow expansion */
}

.nav-social {
  margin-left: auto; /* auto-align to right */
}
```

**Result:** Navigation perfectly aligned with content, flows left to right with social links at the end.

#### Issue 3: Duplicate Social Links

**Problem:** Social links appearing twice in sidebar.

**Root Cause:** Links were in both _config.yml description field AND hardcoded in default.html.

**Solution:** Removed social links from _config.yml description, kept only in default.html header.

**Result:** Clean, single set of social links.

#### Issue 4: Visual Clutter

**Problem:** Too many arrows (→) and "Read more" links creating visual noise.

**Solution:**
- Removed "Read more →" from post-list.html
- Removed arrows from "View all posts →" and "View all projects →"
- Removed arrows from project card buttons
- Implemented inline section headers: "Recent Blog Posts" with "View all posts" on same line

**Result:** Cleaner, more minimal interface with better visual hierarchy.

### Enhancements Made

#### Typography Improvements

**Project Card Font Sizes (both layouts):**
- Title: 1.1em → 1.2em
- Description: 0.85em → 0.95em, line-height: 1.4 → 1.5
- Buttons: 0.85em → 0.9em

**Result:** Better readability and visual hierarchy.

#### Content Organization

**Moved from _config.yml to default.html:**
- Site title, logo, description
- Name, photo, job title now hardcoded in template
- _config.yml now contains only settings (title, theme, analytics, blog config)

**Photo Credit Placement:**
- Moved from sidebar to footer
- Placed alongside theme credits and GitHub Pages attribution
- More appropriate context and less distracting

**Inline Section Headers:**
```html
<div style="display: flex; justify-content: space-between; align-items: baseline;">
  <h2 style="margin: 0;">Recent Blog Posts</h2>
  <a href="/blog/" style="font-size: 0.9em;">View all posts</a>
</div>
```

**Result:** Clear hierarchy, action links where users expect them.

### Content Updates

- **Blog Post Date Update:** Web-based cognitive tasks post date changed from 2019-01-01 to 2020-04-26 (accurate publication date)
- **Example Post Removed:** Deleted _posts/2025-01-15-example-post.md
- **Config Title Added:** Added `title: Kyoung Whan Choe` to _config.yml

### Testing Results

✅ **All Issues Resolved:**
- No horizontal scrollbar on any screen size
- Navigation perfectly aligned with content
- Clean, minimal UI with no redundant elements
- Improved typography and readability
- Responsive design works flawlessly on mobile/tablet/desktop

---

## Final Status

### All Phases Complete

**Phase 1:** ✅ Blog & Projects Core Features
**Phase 2:** ✅ Top Navigation Layout
**Phase 3:** ✅ UI/UX Refinements

### Summary Statistics

**Total Files Created:** 13
- 9 files in Phase 1 (blog posts, layouts, includes, data)
- 4 files in Phase 2 (navigation layout and components)

**Total Files Modified:** 8
- 3 files in Phase 1 (config, index, default layout)
- 3 files in Phase 2 (post/blog/projects layouts)
- 8 files in Phase 3 (various refinements)

**Total Files Deleted:** 1
- Example blog post removed

### Git Commits

**Phase 1 Commit:**
```
9d10172 Add blog and projects features with layout fixes
```

**Phases 2 & 3:** Ready for commit (all changes tested and verified)

### Next Steps

All planned features complete! The portfolio website now has:
- Professional blog system
- Project showcase
- Clean, minimal UI
- Responsive design
- Top navigation on content pages
- Sidebar on home page for visual impact

Future enhancements could include:
- Blog pagination (when post count grows)
- Search functionality
- Categories/tags filtering
- RSS feed
- Comments system

---

**Implementation Complete!** 🚀
