# Implementation Plan: Portfolio Website with Blog & Projects

**Created:** 2025-12-26
**Updated:** 2025-12-27 (Load More Implementation)
**Status:** Phase 1-5 ✅ Complete
**Branch:** `add-blog-feature`

---

## Quick Links

- **Phase 1 Completed Work:** See [logs/2025-12-26-blog-projects-implementation.md](logs/2025-12-26-blog-projects-implementation.md)
- **Planning Session:** See [logs/2025-12-26-create-planning-documentation.md](logs/2025-12-26-create-planning-documentation.md)
- **Initial Commit:** `9d10172`

---

## Phase 1: Blog & Projects - ✅ COMPLETE

Successfully implemented:
- ✅ Blog system with posts, archive page, and post layout
- ✅ Projects showcase with card-based grid
- ✅ Featured sections on landing page
- ✅ Fixed desktop header overlap issue
- ✅ Responsive design (mobile/tablet/desktop)

**Details:** See implementation log for full details, file list, and technical decisions.

---

## Phase 2: Top Navigation Layout - ✅ COMPLETE

Successfully implemented:
- ✅ Top navigation bar with sticky positioning
- ✅ Page layout (`_layouts/page.html`) for blog/projects pages
- ✅ Navigation component (`_includes/nav.html`)
- ✅ Mobile hamburger menu with JavaScript
- ✅ Full-width content on blog and project pages
- ✅ Responsive navigation (desktop/tablet/mobile)

**Key Achievement:** Eliminated sidebar on content pages while keeping it on home page.

---

## Phase 3: UI/UX Refinements - ✅ COMPLETE

Successfully implemented:
- ✅ Fixed horizontal scrollbar issues (overflow-x, box-sizing)
- ✅ Left-aligned navigation (Name → Home → Blog → Projects → Social links)
- ✅ Navigation alignment matches content width (1200px max-width)
- ✅ Removed duplicate social links from config
- ✅ Moved photo credit to footer
- ✅ Removed redundant "Read more" and arrow symbols
- ✅ Inline "View all posts/projects" links in section headers
- ✅ Increased project card font sizes for better readability
- ✅ Moved name/photo/title from config to default.html
- ✅ Updated blog post date (web-based cognitive tasks: 2019-01-01 → 2020-04-26)
- ✅ Removed example blog post
- ✅ Added `title: Kyoung Whan Choe` to _config.yml

**Key Achievements:**
- Clean, minimal UI with no visual clutter
- Perfect alignment across all screen sizes
- Better content hierarchy and scannability

---

## Phase 4: Navigation Polish - ✅ COMPLETE

**Date:** 2025-12-27
**Status:** ✅ COMPLETED

Successfully implemented:
- ✅ Removed page headings from blog.md and projects.md
- ✅ Added active state highlighting to navigation links (blue + bold)
- ✅ Reduced spacing between nav bar and content by 50% (3rem → 1.5rem desktop, 2rem → 1rem mobile)
- ✅ Updated blog post navigation format with bullets (• Previous:, • Next:, • Back to all posts)
- ✅ Fixed blog post header display on desktop (position static, no float)
- ✅ Made footer full-width and properly centered (100vw with calc margin)
- ✅ Added 16 blog posts spanning 2023-2025

**Key Achievements:**
- Clean page headers without redundant titles
- Clear visual feedback for current page in navigation
- Tighter, more compact layout
- Professional bullet-point navigation in posts
- Proper full-width footer alignment

**Commits:**
- `4a5132f` - Improve navigation and blog layout UX
- `e081d4c` - Add blog posts and images

---

## Phase 5: Blog Load More - ✅ COMPLETE

**Date:** 2025-12-27
**Status:** ✅ COMPLETE

**Goal:** Improve blog archive scalability for growing number of posts (currently 18 posts).

### Investigation & Decision

**Explored jekyll-paginate:**
- ❌ **Critical limitation:** Only works with `index.html` in site **root directory**
- ❌ Cannot paginate subdirectories like `/blog/`
- ❌ `paginate_path` only controls URLs for pages 2+, page 1 MUST be at root
- ❌ Alternative `jekyll-paginate-v2` not in GitHub Pages whitelist

**Chosen Solution: Client-Side "Load More"**
- ✅ All posts in HTML (SEO-friendly)
- ✅ Shows 10 posts initially
- ✅ Button reveals 10 more per click
- ✅ No server-side pagination needed
- ✅ Perfect for current scale (18 posts)
- ✅ GitHub Pages compatible
- ✅ Instant reveal (no HTTP requests)

### Implementation Details

**Files Created:**
1. ✅ `assets/js/blog.js` - Load More functionality

**Files Modified:**
2. ✅ `blog.md` - Added post indexing, Load More button, container div
3. ✅ `assets/css/page-layout.css` - Load More button and blog styles
4. ✅ `_layouts/page.html` - Included blog.js script

### How It Works

**Page Load:**
- All 18 posts sent in HTML (good for SEO)
- JavaScript hides posts 11-18
- Shows "Showing 10 of 18 posts"

**User Clicks "Load More":**
- Reveals next 10 posts (11-18 in this case)
- Updates counter: "Showing all 18 posts"
- Button disappears
- Smooth scroll to newly revealed content

**Technical:**
```javascript
const POSTS_PER_PAGE = 10;  // Easily configurable
```

### Key Features

- ✅ Shows 10 posts initially, button reveals 10 more
- ✅ Post counter (e.g., "Showing 10 of 18 posts")
- ✅ Button auto-hides when all posts visible
- ✅ Smooth scroll to newly revealed posts
- ✅ Year sections auto-hide if no visible posts
- ✅ Progressive enhancement (works without JS)
- ✅ Mobile responsive
- ✅ Maintains year grouping

### Testing Results

- ✅ All 18 posts load in HTML
- ✅ First 10 posts visible initially
- ✅ Load More button shows correct count
- ✅ Click reveals remaining 8 posts (total 18)
- ✅ Button disappears when all shown
- ✅ Year grouping maintained
- ✅ Smooth scroll works
- ✅ Mobile responsive

### Future Scalability Options

**If blog grows to 50+ posts:**
1. **Adjust posts per page** - Change `POSTS_PER_PAGE` in blog.js
2. **True infinite scroll** - Auto-load on scroll detection
3. **Jekyll Paginate V2** - Requires GitHub Actions custom build workflow
4. **Archive pages by year** - Separate static pages for each year
5. **Client-side filtering** - JavaScript-based category/tag filters

---

## Next Steps

Future enhancements could include:
- Search functionality
- Categories/tags filtering
- RSS feed
- Comments system
- Analytics integration for Load More tracking

---

## Implementation Reference (Archive)

<details>
<summary>Click to view detailed implementation steps for Phase 2</summary>

### Phase 2: Top Navigation Layout - ✅ IMPLEMENTED

#### Problem
Current layout uses fixed sidebar with photo:
- ✅ Works well on **home page** (visual impact, branding)
- ❌ Too intrusive on **blog/project pages** (wastes horizontal space)
- ❌ Content area feels cramped for long posts

#### Solution: Top Navigation Bar
Create a consistent top nav that gives full width to content pages.

**Layout Structure:**
- **Home page:** Keep sidebar with photo
- **Blog/Projects/Posts:** Top navigation bar, full-width content

### Implementation Steps

### 1. Create Top Navigation Component

**File:** `_includes/nav.html`

```html
<nav class="top-nav">
  <div class="nav-container">
    <div class="nav-brand">
      <a href="{{ "/" | relative_url }}">{{ site.title | default: "Kyoung Whan Choe" }}</a>
    </div>

    <button class="nav-toggle" aria-label="Toggle navigation">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div class="nav-menu">
      <a href="{{ "/" | relative_url }}" class="nav-link">Home</a>
      <a href="{{ "/blog/" | relative_url }}" class="nav-link">Blog</a>
      <a href="{{ "/projects/" | relative_url }}" class="nav-link">Projects</a>

      <div class="nav-social">
        <a href="https://x.com/kywch500" target="_blank" aria-label="X">𝕏</a>
        <a href="https://github.com/kywch" target="_blank" aria-label="GitHub">GitHub</a>
        <a href="https://linkedin.com/in/kywch" target="_blank" aria-label="LinkedIn">in</a>
      </div>
    </div>
  </div>
</nav>
```

---

### 2. Create Page Layout

**File:** `_layouts/page.html`

```html
<!DOCTYPE html>
<html lang="{{ site.lang | default: "en-US" }}">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{% if page.title %}{{ page.title }} | {% endif %}{{ site.title | default: "Kyoung Whan Choe" }}</title>

    <link rel="stylesheet" href="{{ "/assets/css/style.css?v=" | append: site.github.build_revision | relative_url }}">
    <link rel="stylesheet" href="{{ "/assets/css/page-layout.css" | relative_url }}">

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-D3RPWB8SEL"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-D3RPWB8SEL');
    </script>
  </head>

  <body class="page-layout">
    {% include nav.html %}

    <main class="page-content">
      <div class="content-wrapper">
        {{ content }}
      </div>
    </main>

    <footer class="page-footer">
      <p><small>
        © {{ 'now' | date: "%Y" }} Kyoung Whan Choe
        • <a href="https://github.com/kywch" target="_blank">GitHub</a>
        • <a href="https://scholar.google.com/citations?user=Smql8gkAAAAJ" target="_blank">Google Scholar</a>
      </small></p>
    </footer>

    <script src="{{ "/assets/js/nav.js" | relative_url }}"></script>
  </body>
</html>
```

---

### 3. Add CSS for Top Navigation

**File:** `assets/css/page-layout.css` (new file)

```css
/* Top Navigation Bar */
.top-nav {
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand a {
  font-size: 1.25rem;
  font-weight: 600;
  color: #222;
  text-decoration: none;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: #586069;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #0366d6;
}

.nav-social {
  display: flex;
  gap: 1rem;
  margin-left: 1rem;
  padding-left: 1rem;
  border-left: 1px solid #e8e8e8;
}

.nav-social a {
  color: #586069;
  text-decoration: none;
  font-size: 0.9rem;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.nav-toggle span {
  width: 24px;
  height: 2px;
  background: #222;
  transition: all 0.3s;
}

/* Content Area */
.page-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 2rem;
  min-height: calc(100vh - 200px);
}

.content-wrapper {
  width: 100%;
}

/* Footer */
.page-footer {
  background: #f6f8fa;
  border-top: 1px solid #e8e8e8;
  padding: 2rem;
  text-align: center;
  color: #586069;
}

/* Mobile Responsive */
@media screen and (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: #fff;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 1rem 0;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
  }

  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-link {
    padding: 1rem 2rem;
    border-bottom: 1px solid #e8e8e8;
  }

  .nav-social {
    margin: 1rem 2rem 0;
    padding: 1rem 0 0;
    border-left: none;
    border-top: 1px solid #e8e8e8;
  }

  .page-content {
    padding: 2rem 1rem;
  }
}
```

---

### 4. Add Navigation Toggle Script

**File:** `assets/js/nav.js` (new file)

```javascript
// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      this.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.nav-container')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      }
    });
  }
});
```

---

### 5. Update Layouts to Use Page Layout

**File:** `_layouts/post.html` - Change line 2:

```html
---
layout: page  # Changed from 'default'
---
```

**File:** `blog.md` - Change line 2:

```markdown
---
layout: page  # Changed from 'default'
```

**File:** `projects.md` - Change line 2:

```markdown
---
layout: page  # Changed from 'default'
```

---

## Files to Create/Modify

### New Files (4)
- [ ] `_layouts/page.html` - New full-width content layout
- [ ] `_includes/nav.html` - Top navigation component
- [ ] `assets/css/page-layout.css` - Styling for new layout
- [ ] `assets/js/nav.js` - Mobile menu toggle

### Modified Files (3)
- [ ] `_layouts/post.html` - Change to `layout: page`
- [ ] `blog.md` - Change to `layout: page`
- [ ] `projects.md` - Change to `layout: page`

---

## Testing Checklist

- [ ] Top navigation displays on all content pages
- [ ] Mobile menu toggle works
- [ ] Blog posts use full width
- [ ] Projects page uses full width
- [ ] Home page keeps sidebar (or uses top nav - user choice)
- [ ] All navigation links work
- [ ] Social media links work
- [ ] Responsive layout works on mobile/tablet/desktop
- [ ] Google Analytics still tracks

---

## Alternative: Top Nav on ALL Pages

If user wants top nav on home page too:

1. Update `index.md` to use `layout: page`
2. Move photo to content area on home page
3. Consistent navigation everywhere
4. Simpler overall structure

**Trade-off:** Lose visual impact of sidebar photo on home page.

### Deployment

After implementing and testing:

```bash
# Commit changes
git add .
git commit -m "Add top navigation layout for content pages"

# Merge to master when ready
git checkout master
git merge add-blog-feature
git push origin master

# GitHub Pages will rebuild in 1-2 minutes
```

### Resources

- **Jekyll Docs:** https://jekyllrb.com/docs/
- **GitHub Pages:** https://docs.github.com/en/pages
- **Liquid Templates:** https://shopify.github.io/liquid/

</details>

---

**All phases complete!** The portfolio website now has a clean, professional design with blog and projects features, including a scalable Load More system for the blog archive.
