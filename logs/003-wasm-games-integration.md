# WASM Games Integration Plan

**Date:** 2025-12-27
**Purpose:** Integrate 2048 and Tetris WebAssembly games as interactive project cards on kywch.github.io
**Source:** `tmp/puffer-games/` directory

---

## 🎯 Goals

1. **Add 2048 and Tetris as featured project cards** on the landing page and projects page
2. **Create dedicated game pages** where users can play the games
3. **Maintain Jekyll/GitHub Pages compatibility** (no custom plugins, static files only)
4. **Keep file sizes manageable** (total ~20MB for both games)
5. **Preserve existing site structure** and design aesthetic

---

## 📊 Current State Analysis

### Source Files (tmp/puffer-games/)
```
2048 Game:
- game.data: 16MB
- game.js: 252KB
- game.wasm: 176KB
- game.html: 4KB
- Thumbnail: assets/2048_thumbnail.png

Tetris Game:
- game.data: 3.7MB
- game.js: 252KB
- game.wasm: 180KB
- game.html: 4KB
- Thumbnail: assets/tetris_thumbnail.png

Total size: ~20.5MB
```

### Current Portfolio Structure
```
kywch.github.io/
├── index.md                    # Landing page with featured projects
├── projects.md                 # All projects page
├── _data/projects.yml          # Single source of truth for projects
├── _includes/project-card.html # Reusable project card component
├── images/projects/            # Project thumbnails
└── _layouts/                   # Page layouts
```

### Current Projects System
- **Data-driven**: All projects defined in `_data/projects.yml`
- **Featured system**: `featured_order: 1-6` shows on landing page
- **Metadata**: title, description, thumbnail, github, url, url_label, blog_post
- **Responsive cards**: 3x2 grid on desktop, stacks on mobile

---

## 🎨 Design Approach: Two Options

### Option 1: Standalone Game Pages (Recommended)

**Pros:**
- Clean separation of game runtime from portfolio
- No iframe complexity on main pages
- Fast page loads (games load only when visited)
- Easy to maintain and update
- Similar to existing "Try Demo" links pattern

**Cons:**
- Users must navigate to separate page
- One extra click to play

**Implementation:**
```
kywch.github.io/
├── games/
│   ├── 2048.html          # Dedicated game page
│   ├── tetris.html        # Dedicated game page
│   └── assets/
│       ├── 2048/
│       │   ├── game.html
│       │   ├── game.js
│       │   ├── game.wasm
│       │   └── game.data
│       └── tetris/
│           ├── game.html
│           ├── game.js
│           ├── game.wasm
│           └── game.data
└── images/projects/
    ├── 2048_thumbnail.png
    └── tetris_thumbnail.png
```

**Project Card Pattern:**
```yaml
- title: "2048 Game"
  thumbnail: "/images/projects/2048_thumbnail.png"
  description: "Classic sliding puzzle game. Combine tiles to reach 2048!"
  url: "/games/2048.html"
  url_label: "Play Game"
  github: "https://github.com/original-author/2048"  # Credit original
  featured_order: 7  # Add to projects page, not landing
```

---

### Option 2: Embedded Iframes on Project Cards

**Pros:**
- Instant gameplay directly on projects page
- Interactive, engaging UX
- Novel approach for portfolio

**Cons:**
- Heavy page load (~20MB assets)
- Slower initial page render
- Complex responsive design for iframes
- May impact SEO and performance scores
- All games load even if user doesn't play

**Implementation:**
- Modify project-card component to support iframe embedding
- Add JavaScript to lazy-load games on interaction
- More complex, higher maintenance

---

## ✅ Recommended Plan: Option 1 (Standalone Pages)

### Phase 1: File Setup

1. **Create directory structure:**
   ```bash
   mkdir -p games/assets/2048
   mkdir -p games/assets/tetris
   ```

2. **Copy game files:**
   ```bash
   # 2048
   cp tmp/puffer-games/docs/assets/2048/* games/assets/2048/
   cp tmp/puffer-games/docs/assets/2048_thumbnail.png images/projects/

   # Tetris
   cp tmp/puffer-games/docs/assets/tetris/* games/assets/tetris/
   cp tmp/puffer-games/docs/assets/tetris_thumbnail.png images/projects/
   ```

3. **File size considerations:**
   - Total: ~20.5MB (within GitHub's 100MB file limit)
   - Individual files all <25MB (GitHub's per-file limit)
   - Should work fine with GitHub Pages

---

### Phase 2: Create Game Pages

Create two standalone HTML pages that load the games.

**Template: `games/2048.html`**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2048 Game - Kyoung Whan Choe</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            background: #0a0a0a;
            color: #f1f1f1;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
        }
        .header {
            width: 100%;
            max-width: 1000px;
            padding: 2rem 1rem 1rem 1rem;
            text-align: center;
        }
        .header h1 {
            margin: 0 0 0.5rem 0;
            color: #00bbbb;
        }
        .header p {
            margin: 0.5rem 0;
            opacity: 0.8;
        }
        .nav-links {
            margin-top: 1rem;
        }
        .nav-links a {
            color: #00bbbb;
            text-decoration: none;
            margin: 0 1rem;
            font-size: 0.9rem;
        }
        .nav-links a:hover {
            text-decoration: underline;
        }
        .game-container {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            flex: 1;
        }
        iframe {
            border: 2px solid #00bbbb;
            border-radius: 8px;
            box-shadow: 0 0 20px rgba(0, 187, 187, 0.3);
        }
        .footer {
            width: 100%;
            max-width: 1000px;
            padding: 2rem 1rem;
            text-align: center;
            font-size: 0.85rem;
            opacity: 0.6;
        }
        .footer a {
            color: #00bbbb;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>2048</h1>
        <p><strong>Controls:</strong> WASD or Arrow keys to slide tiles</p>
        <p>Combine tiles to reach 2048!</p>
        <div class="nav-links">
            <a href="/">← Back to Portfolio</a>
            <a href="/projects/">All Projects</a>
            <a href="tetris.html">Play Tetris →</a>
        </div>
    </div>

    <div class="game-container">
        <iframe
            src="assets/2048/game.html"
            width="400"
            height="450"
            title="2048 Game"
            frameborder="0">
        </iframe>
    </div>

    <div class="footer">
        <p>Original game by Yannik | Hosted by <a href="/">Kyoung Whan Choe</a></p>
    </div>
</body>
</html>
```

**Template: `games/tetris.html`**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tetris Game - Kyoung Whan Choe</title>
    <style>
        /* Same styles as 2048.html */
        body {
            margin: 0;
            padding: 0;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            background: #0a0a0a;
            color: #f1f1f1;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
        }
        .header {
            width: 100%;
            max-width: 1000px;
            padding: 2rem 1rem 1rem 1rem;
            text-align: center;
        }
        .header h1 {
            margin: 0 0 0.5rem 0;
            color: #00bbbb;
        }
        .header p {
            margin: 0.5rem 0;
            opacity: 0.8;
        }
        .nav-links {
            margin-top: 1rem;
        }
        .nav-links a {
            color: #00bbbb;
            text-decoration: none;
            margin: 0 1rem;
            font-size: 0.9rem;
        }
        .nav-links a:hover {
            text-decoration: underline;
        }
        .game-container {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            flex: 1;
        }
        iframe {
            border: 2px solid #00bbbb;
            border-radius: 8px;
            box-shadow: 0 0 20px rgba(0, 187, 187, 0.3);
        }
        .footer {
            width: 100%;
            max-width: 1000px;
            padding: 2rem 1rem;
            text-align: center;
            font-size: 0.85rem;
            opacity: 0.6;
        }
        .footer a {
            color: #00bbbb;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Tetris</h1>
        <p><strong>Controls:</strong> Move: A/D or Arrow keys | Rotate: W/Up | Soft drop: S/Down | Hard drop: Space | Stash: C</p>
        <p>Clear lines and don't let the blocks reach the top!</p>
        <div class="nav-links">
            <a href="/">← Back to Portfolio</a>
            <a href="/projects/">All Projects</a>
            <a href="2048.html">Play 2048 →</a>
        </div>
    </div>

    <div class="game-container">
        <iframe
            src="assets/tetris/game.html"
            width="384"
            height="928"
            title="Tetris Game"
            frameborder="0">
        </iframe>
    </div>

    <div class="footer">
        <p>Original game by Hadrien Crassous | Hosted by <a href="/">Kyoung Whan Choe</a></p>
    </div>
</body>
</html>
```

---

### Phase 3: Update Projects Data

Add to `_data/projects.yml`:

```yaml
# Browser Games (WebAssembly)

- title: "2048 Game"
  thumbnail: "/images/projects/2048_thumbnail.png"
  description: "Classic sliding puzzle game built with WebAssembly. Combine tiles to reach 2048!"
  url: "/games/2048.html"
  url_label: "Play Game"
  github: "https://github.com/raysan5/raylib"  # Raylib engine credit
  featured_order: 0  # Not on landing page, but on projects page

- title: "Tetris Game"
  thumbnail: "/images/projects/tetris_thumbnail.png"
  description: "Classic block-stacking puzzle game built with WebAssembly. Clear lines and challenge yourself!"
  url: "/games/tetris.html"
  url_label: "Play Game"
  github: "https://github.com/raysan5/raylib"  # Raylib engine credit
  featured_order: 0  # Not on landing page, but on projects page
```

**Placement Strategy:**
- `featured_order: 0` → Shows on `/projects/` page but NOT on landing page
- Landing page stays focused on your core robotics/research work
- Games are discoverable in "All Projects" section
- If you want them featured: Set to `7` and `8` (after jsPsych project)

---

### Phase 4: Testing Checklist

**Local Testing (HTTP Server Required):**
```bash
cd /workspace/hobby/kywch.github.io
bundle exec jekyll serve --livereload

# Or simple HTTP server for games directory only
cd games
python3 -m http.server 8000
# Test: http://localhost:8000/2048.html
```

**Verify:**
- [ ] 2048 game loads and is playable
- [ ] Tetris game loads and is playable
- [ ] Games work with keyboard controls
- [ ] Navigation links work correctly
- [ ] Project cards appear on `/projects/` page
- [ ] Thumbnails load correctly
- [ ] Mobile responsive (games may need scrolling on small screens)
- [ ] No console errors (F12)

**GitHub Pages Testing:**
- [ ] Push to feature branch first
- [ ] Verify build succeeds in Actions tab
- [ ] Test live URLs after deployment
- [ ] Check file sizes (all under 100MB total)

---

## 🔧 Alternative Approaches

### If File Size is a Concern

**Approach: External Hosting**
- Host game files on separate domain/CDN
- Keep only thumbnails and landing pages in repo
- Update iframe src to external URLs
- **Pros:** Smaller repo, faster clones
- **Cons:** External dependency, may break if hosting goes down

**Approach: Git LFS (Large File Storage)**
- Use Git LFS for `.wasm` and `.data` files
- **Pros:** Cleaner git history
- **Cons:** GitHub LFS has bandwidth limits (1GB/month free)
- **Not recommended** for this use case

---

## 📝 Documentation Updates Needed

After implementation:

1. **Update AGENTS.md:**
   - Add section on WebAssembly games
   - Document how to add new games
   - Note HTTP server requirement for local testing

2. **Update README.md:**
   - Mention interactive games in portfolio
   - Credit original game authors

3. **Create work log:**
   - `logs/2025-12-27-add-wasm-games.md`

---

## ⚠️ Potential Issues & Solutions

### Issue: Games don't load (black screen)

**Cause:** CORS restrictions with `file://` protocol
**Solution:** Use HTTP server (required for WebAssembly)

```bash
# Development
bundle exec jekyll serve

# Or for games only
cd games && python3 -m http.server 8000
```

### Issue: Slow page load on `/projects/` page

**Cause:** 20MB of assets loading
**Solution:** Games only load when you click to dedicated page (not embedded)

### Issue: Mobile experience

**Cause:** Games have fixed dimensions (400x450px, 384x928px)
**Solution:**
- Games are playable on mobile with scrolling
- Consider adding mobile warning message
- Could add media queries to scale iframe on small screens

### Issue: GitHub Pages build time

**Cause:** Large binary files
**Solution:**
- Binary files don't slow Jekyll build (not processed)
- Just increases push time slightly
- Not a significant concern

---

## 🎯 Success Criteria

✅ **Functionality:**
- Both games load and are fully playable
- All controls work (keyboard input)
- No JavaScript errors

✅ **Integration:**
- Games appear on projects page
- Thumbnails match site design
- Navigation works smoothly

✅ **Performance:**
- Page load time acceptable (<3s on projects page)
- Games load within 5s on dedicated pages
- Mobile responsive

✅ **Maintainability:**
- Clear file structure
- Documented in AGENTS.md
- Easy to add more games later

---

## 🚀 Next Steps

**If proceeding with Option 1 (Recommended):**

1. Continue working on `feature/add-wasm-games` branch
2. Create directories and copy files (Phase 1)
3. Create game pages (Phase 2)
4. Update projects.yml (Phase 3)
5. Test locally with HTTP server
6. Push and verify GitHub Pages build
7. Merge to master when satisfied

**Estimated time:** 1-2 hours for implementation + testing

---

## ✅ User Decisions (2025-12-27)

1. **Placement preference:** Projects page only (`featured_order: 0`)
   - Keep landing page focused on core robotics/research work
   - Games discoverable in "All Projects" section

2. **Attribution:** Will be edited later by user
   - Current plan: Footer credits + GitHub links (placeholder)

3. **Future additions:** No dedicated `/games/` index page for now
   - Simple two-game setup sufficient
   - Can add later if collection grows

4. **Mobile strategy:** Games are desktop-only
   - Accept that mobile experience may not be optimal
   - No special mobile warnings needed
   - Users can scroll if needed

---

## 🚀 Implementation Status

- [x] Phase 1: File Setup (copy game files, create directories) ✅
  - Created `games/assets/2048/` and `games/assets/tetris/` directories
  - Copied all game files from `tmp/puffer-games/docs/assets/`
  - Copied thumbnails to `images/projects/`
  - Total size: ~21MB (within GitHub limits)

- [x] Phase 2: Create Game Pages (2048.html, tetris.html) ✅
  - Created `games/2048.html` with navigation and styling
  - Created `games/tetris.html` with navigation and styling
  - Both pages use iframe to embed the game assets
  - Design matches portfolio theme (dark background, cyan accents)

- [x] Phase 3: Update Projects Data (_data/projects.yml) ✅
  - Added both games to projects.yml
  - User reorganized: Games now featured (order 1 & 2) on landing page
  - Updated descriptions and titles per user preference

- [x] Phase 4: Testing (local + GitHub Pages) ✅
  - Local testing complete with Jekyll server
  - ✅ 2048 game page accessible and playable
  - ✅ Tetris game page accessible and playable
  - ✅ Game assets loading correctly
  - ✅ Projects page shows game cards
  - GitHub Pages testing: Pending (after push)

- [x] Phase 5: Additional Improvements ✅
  - **Refactored project card schema** for clarity:
    - `blog_post` - Internal blog posts (priority 1 for card clicks)
    - `site_url` - External sites/papers (priority 2 for card clicks)
    - `github` - GitHub repos (priority 3 for card clicks)
    - `demo_url` - Demo/game URL (button only, not card click)
    - `demo_label` - Button text (defaults to "Demo")
  - **Updated project-card.html** to use new schema
  - **Fixed thumbnail display**:
    - Changed `object-fit: cover` to `contain` to show full images
    - Applied to both landing page and projects page
  - **Improved card layout**:
    - Changed aspect ratio from 1:1 to 1:1.1 for better proportions
    - Adjusted thumbnail/body split from 50/50 to 40/60
    - Increased vertical padding from 1.2em to 1.4em
    - Limited descriptions to 2 lines with proper CSS clamping
    - Added `max-height: 3em` as fallback
  - **Updated all projects** to new schema in projects.yml

- [x] Phase 6: UX/UI Polish ✅
  - **Mobile Optimization:**
    - Increased project card font sizes on mobile:
      - Title: 1em → 1.3em
      - Description: 0.8em → 1em
      - Extended description to 3 lines (from 2)
    - Changed mobile card aspect ratio from 4:3 to 3:2 for better proportions
    - Increased thumbnail height from 40% to 50% on mobile
    - Hidden demo buttons on mobile (entire card is clickable)
  - **Project Card Styling:**
    - Created shared `project-cards.css` file to eliminate duplication
    - Consolidated styles between landing page and projects page
    - Mobile cards now more readable and user-friendly
  - **Game Page Improvements:**
    - Added auto-focus to game iframes (keyboard controls work immediately)
    - Implemented viewport-based zoom for Tetris page to prevent scrolling issues:
      - Screens > 1100px tall: 100% zoom
      - Screens 950-1100px: 85% zoom
      - Screens 850-950px: 75% zoom
      - Screens < 850px: 65% zoom
    - Fixed spacebar scroll interference by scaling page to fit viewport
    - Added responsive mobile optimizations for game pages

- [x] Phase 7: Game Page UX Redesign ✅
  - **Dual Sidebar Layout:**
    - Replaced single right sidebar with dual sidebars (left + right)
    - Left panel (220px): Home/Projects navigation, Games list, Credits
    - Right panel (220px): Detailed game controls, AI explanation, blog placeholder
    - Center: Game title and iframe with minimal spacing
    - Removed mobile responsive code (desktop-only experience)
  - **AI/Human Control Feature:**
    - Added prominent "Controls" section explaining Left Shift for human control
    - Noted that trained RL agents play by default (unique feature)
    - Game-specific control details:
      - 2048: WASD/Arrow keys for movement
      - Tetris: Full control scheme (A/D, W, S, Space, C)
    - Encouragement to "Release Shift to watch trained agents play!"
  - **Credits & Attribution:**
    - Original game authors: Yannik (2048), Hadrien Crassous (Tetris)
    - PufferLib framework linked
    - AI agent training by Kyoung Whan Choe
    - Blog placeholder: "Coming soon: Training these agents"
  - **Visual Improvements:**
    - Header text increased: 1.5rem → 2rem (2048), 2rem → 3rem (Tetris)
    - Tighter spacing between header and game
    - Larger sidebar fonts (1.1rem) for better readability
    - Tetris-specific: Larger sidebars and text to compensate for viewport zoom
    - Removed "Navigate" header in left panel for cleaner look
  - **Technical Fixes:**
    - Fixed sidebar height issues on Tetris page
    - Zoom now applies only to `.main-area`, not `.container`
    - Sidebars maintain full viewport height even when zoomed

- [x] Phase 8: Credits & Attribution Updates ✅
  - **Credits Section Improvements:**
    - Condensed credits from 3 lines to 2 lines using bullet separators (·)
    - Line 1: Original author + PufferLib link
    - Line 2: Enhanced implementation & AI agents + blog link placeholder
    - Removed redundant "About AI" section from right panel
  - Applied consistent credits to both game pages
  - Blog link placeholder ready for future post (`href="#"`)

- [x] Phase 9: Git Commits ✅
  - **Commit 3b98bb2:** "Add interactive WASM games with AI agents (2048 and Tetris)"
    - Added games directory with all WASM assets (~21MB)
    - Created 2048.html and tetris.html with dual sidebar layout
    - 12 files changed, 427 insertions
  - **Commit 4091cc0:** "Update project showcase with new projects and improved layout"
    - Updated projects.yml with new games and schema refactor
    - Added 14 project thumbnail images
    - Extracted project-cards.css, improved mobile UX
    - Updated index.md intro
    - 19 files changed, 251 insertions, 191 deletions

- [ ] Phase 10: Final Documentation & Merge
  - [ ] Update AGENTS.md with WASM games section
  - [ ] Archive this plan file as `logs/2025-12-27-wasm-games-integration.md`
  - [ ] Merge feature/add-wasm-games → master
  - [ ] Test on live GitHub Pages
  - [ ] Clean up any remaining WIP files

---

## 📊 Final Statistics

**Total Files Added:**
- Games: 12 files (2 HTML pages + 10 WASM assets)
- Images: 14 project thumbnails
- CSS: 1 new stylesheet (project-cards.css)
- Total: 27 new files

**Total Size:**
- 2048 game assets: ~16.5MB
- Tetris game assets: ~4.2MB
- Thumbnails: ~2MB
- Total: ~22.7MB

**Commits Made:**
- 3b98bb2: WASM games implementation
- 4091cc0: Project showcase updates

**Branch Status:**
- Current: feature/add-wasm-games
- Ready to merge to: master
- Remaining uncommitted: AGENTS.md, web-based-cognitive-tasks post, this plan file

---

## 📚 References

- **Jekyll Documentation:** https://jekyllrb.com/docs/
- **GitHub Pages:** https://docs.github.com/en/pages
- **WebAssembly:** https://webassembly.org/
- **Raylib:** https://www.raylib.com/ (game engine used)
- **Emscripten:** https://emscripten.org/ (WebAssembly compiler)
- **PufferLib:** https://github.com/PufferAI/PufferLib (RL framework & game environments)

---

**Created:** 2025-12-27
**Updated:** 2025-12-27 (Final sync)
**Status:** ✅ IMPLEMENTATION COMPLETE - 2 commits made, ready for final docs & merge
**Approach:** Option 1 (Standalone Pages) + Project Card Schema Refactor + Credits Polish
