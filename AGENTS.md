# AI Agent Instructions for Website Maintenance

**Website:** kywch.github.io
**Owner:** Kyoung Whan Choe
**Tech Stack:** Jekyll + GitHub Pages (jekyll-theme-minimal)
**Last Updated:** 2025-12-26

---

## 🎯 Purpose of This Document

This file contains instructions for AI agents (Claude, GPT, etc.) to help maintain and update this portfolio/blog website. If you're an AI assistant helping with this website, **read this file first** before making changes.

---

## 📋 Quick Reference

**Current Site Structure:**
- **Portfolio/Landing Page:** `index.md`
- **Blog Posts:** `_posts/YYYY-MM-DD-title.md`
- **Blog Archive:** `blog.md`
- **Layouts:** `_layouts/` (default.html, post.html)
- **Components:** `_includes/` (post-list.html, project-card.html)
- **Config:** `_config.yml`
- **Images:** `images/` and `images/projects/`
- **Agent Work Logs:** `logs/` (YYYY-MM-DD-agent-session.md)

**GitHub Pages Build:**
- **Publishing Branch:** `master`
- **Build Time:** 1-2 minutes after push
- **Live URL:** https://kywch.github.io

---

## 🚨 Critical Rules - ALWAYS Follow

### 1. Branch Workflow
```bash
# NEVER commit directly to master for new features
# ALWAYS use feature branches for WIP

git checkout -b feature/descriptive-name
# ... make changes ...
git commit -m "Description"
git push -u origin feature/descriptive-name

# Only merge to master when ready to publish
git checkout master
git merge feature/descriptive-name
git push origin master
```

**Exception:** Small fixes (typos, broken links) can go directly to master.

### 2. GitHub Pages Compatibility
- ✅ **USE ONLY:** Standard Jekyll features and [whitelisted plugins](https://pages.github.com/versions/)
- ❌ **NEVER USE:** Custom Ruby plugins, unsupported gems, Node.js build processes
- ✅ **Whitelisted plugins:** jekyll-paginate, jekyll-seo-tag, jekyll-feed, jekyll-sitemap
- ❌ **Do NOT use:** jekyll-paginate-v2, custom Liquid filters, external build tools

**Before adding ANY plugin:**
1. Check https://pages.github.com/versions/
2. Verify it's in the supported list
3. Document why it's needed

### 3. File Organization
```
✅ DO:
- Blog posts → _posts/YYYY-MM-DD-title.md
- Layouts → _layouts/name.html
- Reusable components → _includes/name.html
- Images → images/ or images/projects/
- Configuration → _config.yml
- Agent work logs → logs/YYYY-MM-DD-description.md

❌ DON'T:
- Create files in _site/ (auto-generated, git-ignored)
- Put posts outside _posts/
- Store images in _layouts/ or _includes/
- Create multiple config files
- Add session logs to AGENTS.md directly (use logs/ instead)
```

### 4. Preserve Existing Content
- **NEVER delete** existing projects, publications, or content without explicit permission
- When updating `index.md`, **preserve all sections** unless asked to remove them
- Keep existing links, Google Analytics, social profiles intact
- Maintain current design aesthetic (minimal, clean, professional)

---

## 📝 Common Maintenance Tasks

### Task 1: Add a New Blog Post

**When to do:** User asks to "write a blog post about X" or "create a post on Y"

**Steps:**
1. Create feature branch: `git checkout -b post/short-title`
2. Create file: `_posts/YYYY-MM-DD-descriptive-title.md`
3. Use this template:
   ```markdown
   ---
   layout: post
   title: "Clear, Descriptive Title"
   date: YYYY-MM-DD
   categories: [primary-category, secondary-category]
   tags: [tag1, tag2, tag3]
   excerpt: "One sentence that hooks readers and works for SEO."
   ---

   Opening paragraph that expands on the excerpt.

   <!--more-->

   ## Main Content

   Body of the post with clear headings...

   ### Subsection

   More details...

   ## Conclusion

   Wrap up with key takeaways.
   ```

4. **Date format:** Use actual date (not future dates unless scheduling)
5. **Categories:** Choose from: `[robotics, machine-learning, research, neuroscience, web-development, tutorial]`
6. **Excerpt:** Write for both humans and SEO - appears in listings and meta descriptions
7. **Images:** If adding images, save to `images/posts/YYYY-MM-DD-post-name/` directory
8. Commit: `git commit -m "Add blog post: [Title]"`
9. Push and ask user if they want to review before merging to master
10. **Document work:** Create log file in `logs/YYYY-MM-DD-add-blog-post-title.md`

**Example filename:** `_posts/2025-12-26-training-robots-with-mimicgen.md`

---

### Task 2: Update Featured Projects on Landing Page

**When to do:** User wants to highlight different projects

**Steps:**
1. Create feature branch: `git checkout -b update/featured-projects`
2. Edit `index.md` front matter:
   ```yaml
   featured_projects:
     - title: "Project Name"
       image: "/images/projects/project-slug.jpg"
       excerpt: "One-line compelling description"
       url: "https://github.com/user/repo"  # or internal page
   ```
3. **Best practices:**
   - Keep 2-4 featured projects (avoid overwhelming)
   - Use high-quality images (at least 600x400px)
   - Write excerpts that explain impact, not just features
   - Order by recency or importance
4. If adding new images, save to `images/projects/`
5. Commit and push

---

### Task 3: Update Portfolio Content

**When to do:** User has new publications, projects, or achievements

**Location:** `index.md`

**Steps:**
1. Create feature branch: `git checkout -b update/portfolio-content`
2. Find the relevant section in `index.md`
3. Follow existing formatting patterns:
   - **Projects:** Bullet points with `[Title](url): Description`
   - **Publications:** Citation format with links
   - **Keep chronological order** (newest first usually)
4. **Preserve:**
   - Existing Google Analytics code
   - Social media links
   - Photo credits
   - All sections unless explicitly asked to remove
5. Commit with clear message: `git commit -m "Add new project: [Project Name]"`

---

### Task 4: Fix Broken Links or Typos

**When to do:** User reports issues or you notice problems

**Steps:**
1. **For minor fixes (1-2 files):** Can commit directly to master
   ```bash
   git checkout master
   # fix issue
   git commit -m "Fix: broken link to X"
   git push origin master
   ```

2. **For larger fixes:** Use feature branch

3. **Testing links:**
   - Internal links: `/blog/`, `/page-name/`, `/images/file.jpg`
   - External links: Use full URLs with `https://`
   - Check for case sensitivity (important on Linux/GitHub Pages)

---

### Task 5: Add Images

**When to do:** User provides images or you need to add visuals

**Directory structure:**
```
images/
├── Kyoung_Whan_Choe.jpg          # Profile photo (existing)
├── Choose_And_Solve_Task.jpg      # Existing content
├── projects/                       # Featured project images
│   ├── mg2hfbot.jpg
│   ├── meta-mmo.jpg
│   └── ...
└── posts/                          # Blog post images
    ├── 2025-12-26-post-name/
    │   ├── header.jpg
    │   └── diagram.png
    └── ...
```

**Best practices:**
- Optimize images before uploading (use tools like ImageOptim, TinyPNG)
- Use descriptive filenames: `robot-learning-setup.jpg` not `IMG_1234.jpg`
- Provide alt text: `![Robot learning environment setup](path.jpg)`
- Keep images under 500KB when possible
- Use web-friendly formats: JPG (photos), PNG (diagrams/screenshots), SVG (icons)

---

### Task 6: Update Site Configuration

**When to do:** Rarely - only when changing site-wide settings

**File:** `_config.yml`

**Common updates:**
```yaml
# Update personal info
title: Kyoung Whan Choe
description: >
  Robot Learning Engineer...

# Update social links (in description)
# Update Google Analytics ID
google_analytics: UA-XXXXX-X

# Blog settings (already configured)
permalink: /blog/:year/:month/:title/
excerpt_separator: "<!--more-->"
```

**⚠️ Warning:**
- Changes to `_config.yml` require full site rebuild
- Test locally if possible: `bundle exec jekyll serve --livereload`
- Incorrect YAML indentation will break the site
- Always commit to feature branch first, test, then merge

---

### Task 7: Improve SEO

**When asked:** "Make the site rank better" or "improve SEO"

**Steps:**
1. Add `jekyll-seo-tag` plugin (already whitelisted):
   ```yaml
   # In _config.yml
   plugins:
     - jekyll-seo-tag
   ```

2. Add to `_layouts/default.html` in `<head>`:
   ```html
   {% seo %}
   ```

3. Enhance front matter in posts:
   ```yaml
   title: "Clear, Keyword-Rich Title"
   description: "Custom meta description under 160 chars"
   image: "/images/posts/featured-image.jpg"  # For social sharing
   ```

4. Add `sitemap.xml`:
   ```yaml
   # In _config.yml
   plugins:
     - jekyll-sitemap
   ```

5. Add `robots.txt` to root:
   ```
   User-agent: *
   Allow: /
   Sitemap: https://kywch.github.io/sitemap.xml
   ```

6. Ensure all images have alt text
7. Use descriptive link text (avoid "click here")

---

### Task 8: Add RSS Feed

**When asked:** "Add RSS feed" or "enable subscriptions"

**Steps:**
1. Add plugin to `_config.yml`:
   ```yaml
   plugins:
     - jekyll-feed
   ```

2. Add to `_layouts/default.html` in `<head>`:
   ```html
   {% feed_meta %}
   ```

3. Verify feed appears at: `https://kywch.github.io/feed.xml`

4. Add link in footer or blog page:
   ```html
   <a href="/feed.xml">RSS Feed</a>
   ```

---

## 🎨 Design Guidelines

### Visual Aesthetic
- **Current theme:** Minimal, clean, academic/professional
- **Colors:** Simple (blues for links, black text, white/light gray backgrounds)
- **Typography:** Clear, readable, professional
- **DO NOT:** Add flashy animations, complex JavaScript, heavy frameworks
- **DO:** Keep it fast, accessible, mobile-friendly

### CSS Changes
- Edit styles in `_layouts/default.html` within `<style>` tags
- Follow existing patterns (check current styles first)
- Test on mobile (responsive design required)
- Keep CSS simple and maintainable

### Component Design
When creating new components in `_includes/`:
```html
<!-- Good: Clean, semantic HTML -->
<article class="post-item">
  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
  <time datetime="{{ post.date | date_to_xmlschema }}">
    {{ post.date | date: "%b %d, %Y" }}
  </time>
</article>

<!-- Bad: Complex, inaccessible -->
<div class="item" onclick="navigate()">
  <span class="title-text">{{ post.title }}</span>
  <div class="date">{{ post.date }}</div>
</div>
```

---

## 🧪 Testing Checklist

Before merging to master, verify:

### Local Testing (if possible)
```bash
bundle install
bundle exec jekyll serve --livereload
# Visit http://localhost:4000
# Changes will auto-reload in browser
```

- [ ] Site builds without errors
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Images load
- [ ] Links work (internal and external)
- [ ] Mobile responsive
- [ ] No console errors

### GitHub Pages Testing
- [ ] Check Actions tab after push (green checkmark = successful build)
- [ ] Wait 1-2 minutes for deployment
- [ ] Visit live site and verify changes
- [ ] Test in different browsers if major changes

### Content Quality
- [ ] No typos or grammar errors
- [ ] Links work and go to correct destinations
- [ ] Images have alt text
- [ ] Dates are correct
- [ ] Front matter is valid YAML
- [ ] Code blocks have language specified: ` ```python `

---

## 🐛 Troubleshooting Guide

### Issue: Site doesn't build after push

**Check:**
1. GitHub Actions tab for build errors
2. YAML syntax in front matter (use YAML validator)
3. Liquid syntax errors (unclosed tags, undefined variables)
4. File naming conventions (`_posts/YYYY-MM-DD-title.md`)

**Common fixes:**
```yaml
# Bad YAML (wrong indentation)
categories:
- robotics
  - machine-learning  # ❌ Wrong indent

# Good YAML
categories:
  - robotics
  - machine-learning  # ✅ Correct
```

### Issue: Post doesn't appear

**Check:**
1. Filename format: `YYYY-MM-DD-title.md` in `_posts/` directory
2. Front matter has `layout: post`
3. Date is not in the future
4. File is committed and pushed
5. Wait 1-2 minutes for GitHub Pages rebuild

### Issue: Images don't load

**Check:**
1. Image path starts with `/` (e.g., `/images/photo.jpg`)
2. File exists in repository
3. Filename case matches exactly (case-sensitive)
4. Image file was committed and pushed
5. Clear browser cache (Ctrl+Shift+R)

### Issue: Styling is broken

**Check:**
1. CSS added to correct location (`_layouts/default.html`)
2. No unclosed HTML tags
3. Valid CSS syntax
4. Browser cache cleared

### Issue: 404 Page Not Found

**Check:**
1. Correct permalink in front matter
2. File in correct directory
3. Filename matches URL expectation
4. Site rebuilt after adding page

---

## 📚 Content Strategy Guidance

---

## 🤖 AI Agent Best Practices

### When User Asks for Changes

1. **Clarify first:**
   - "Do you want this on the landing page or blog?"
   - "Should I create a new post or update existing content?"
   - "Any specific categories/tags to use?"

2. **Show before committing:**
   - Provide preview of changes
   - Explain what files will be modified
   - Give the user a chance to review

3. **Use descriptive commit messages:**
   ```bash
   # Good
   git commit -m "Add blog post: Training Robots with MimicGen

   - Add tutorial post with code examples
   - Include images and diagrams
   - Add to robotics and machine-learning categories"

   # Bad
   git commit -m "update"
   git commit -m "changes"
   git commit -m "fix stuff"
   ```

4. **Provide next steps:**
   - "I've created the post on branch X. Review and I'll merge to master?"
   - "The changes are live. Here's the URL: ..."
   - "I noticed X while working on this. Should I also...?"

### Knowledge Boundaries

**You should know:**
- Jekyll basics (layouts, includes, Liquid)
- Markdown syntax
- Git workflow
- GitHub Pages limitations
- Web development (HTML/CSS)

**Ask for help with:**
- Advanced Ruby/Jekyll plugins
- Complex build configurations
- Design decisions (user's preference)
- Content decisions (what to publish)

---

## 📖 Key Resources

**Essential Reading:**
- [PLAN.md](PLAN.md) - Implementation plan for blog feature
- [README.md](README.md) - General site information
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Liquid Template Language](https://shopify.github.io/liquid/)

**Reference:**
- [Supported Plugins](https://pages.github.com/versions/)
- [Markdown Guide](https://www.markdownguide.org/)
- [YAML Validator](https://www.yamllint.com/)

**Testing:**
- [W3C HTML Validator](https://validator.w3.org/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- [Broken Link Checker](https://www.deadlinkchecker.com/)

---

## 🎯 Success Metrics

A good maintenance job means:

✅ **Site stays live** - No broken builds, fast load times
✅ **Content is accurate** - No broken links, current information
✅ **Professional appearance** - Clean design, good typography, responsive
✅ **Good SEO** - Proper meta tags, sitemap, semantic HTML
✅ **Easy to update** - Clear structure, well-documented, maintainable code
✅ **User satisfaction** - Owner is happy with suggestions and execution

---

## 🚀 Quick Start for New Agents

If you're a new AI agent helping with this site:

1. **Read this file** (you're doing it! ✓)
2. **Review [PLAN.md](PLAN.md)** to understand recent changes
3. **Check recent logs** in `logs/` directory to see what's been done
4. **Check `index.md`** to see current content
5. **Look at recent commits** to understand update patterns
6. **Ask the user** what they need help with
7. **Create feature branch** before making changes
8. **Follow the guidelines** above
9. **Test before merging** to master
10. **Be proactive** but not pushy
11. **Document your work** in `logs/` directory

---

## 🤝 Working with Multiple Agents

If multiple AI agents work on this site:

**Communication:**
- Check recent branches before creating new ones
- Review recent commits to avoid duplicate work
- Check `logs/` directory for recent agent work
- Use descriptive branch names: `agent-name/feature-description`
- Leave comments in commits for context

**Coordination:**
- Don't merge conflicting changes
- When in doubt, create an issue for discussion
- Respect work in progress
- Update this file if you discover new patterns
- Document your work in `logs/` directory

---

## 📝 Agent Work Logs

**IMPORTANT:** After completing any work session, create a log file in the `logs/` directory.

### Log File Format

**Location:** `logs/YYYY-MM-DD-brief-description.md`

**Filename examples:**
- `logs/2025-12-26-initial-blog-setup.md`
- `logs/2025-12-27-add-seo-features.md`
- `logs/2026-01-15-update-featured-projects.md`

**Template:**
```markdown
# Agent Work Log: [Brief Description]

**Date:** YYYY-MM-DD
**Agent:** [Agent Name/ID - e.g., Claude Sonnet 4.5, GPT-4, etc.]
**Session Duration:** ~X hours
**Task Type:** [Feature Addition / Bug Fix / Content Update / Maintenance]

---

## 🎯 Task Summary

Brief 1-2 sentence description of what was accomplished.

---

## 📋 Work Details

**Branch:** `feature/branch-name` or `master` (for small fixes)

**Files Changed:**
- `path/to/file1.md` - Description of changes
- `path/to/file2.html` - Description of changes
- `path/to/file3.css` - Description of changes

**New Files Created:**
- `path/to/new-file.md` - Purpose

**Files Deleted:**
- `path/to/old-file.md` - Reason

---

## ✅ Changes Made

### Main Changes
1. Added X feature
2. Updated Y section
3. Fixed Z issue

### Details
- Specific change 1 with context
- Specific change 2 with context
- etc.

---

## 🧪 Testing

**Local Testing:**
- [ ] Tested locally with `bundle exec jekyll serve --livereload`
- [ ] All pages load correctly
- [ ] No build errors
- [ ] Mobile responsive

**GitHub Pages:**
- [ ] Pushed to branch
- [ ] GitHub Actions build successful
- [ ] Live site verified (if merged to master)
- [ ] All links work

---

## 📊 Status

**Current Status:** [Completed & Merged / Awaiting Review / WIP / Blocked]

**If WIP/Blocked:**
- What's left to do
- Why it's blocked
- Next steps

---

## 💡 Notes for Future Agents

Any important context, decisions made, or things to be aware of:
- Decision rationale
- Trade-offs considered
- Patterns established
- Future enhancement ideas

---

## ⚠️ Issues Encountered

**Problems faced:**
1. Issue description
   - How it was resolved
   - Or: Still unresolved (needs attention)

**Warnings:**
- Any gotchas for future work
- Things that almost went wrong

---

## 🔗 Related

**Related Issues/PRs:** #123, #456
**Related Logs:**
- `logs/YYYY-MM-DD-previous-related-work.md`

**Documentation Updated:**
- [ ] AGENTS.md (if added new patterns)
- [ ] PLAN.md (if changed implementation plan)
- [ ] README.md (if changed user-facing features)

---

## 📸 Screenshots (if applicable)

Before/after screenshots or relevant visual changes.

---

**Log Created:** YYYY-MM-DD HH:MM
**Last Updated:** YYYY-MM-DD HH:MM
```

### Quick Log Template (for minor changes)

For small fixes that don't need full documentation:

```markdown
# Quick Fix: [Description]

**Date:** YYYY-MM-DD
**Agent:** [Agent Name]
**Files:** `path/to/file.md`
**Change:** Fixed typo in X section
**Status:** Merged to master
```

---

## 📂 Logs Directory Structure

```
logs/
├── 2025-12-26-initial-blog-setup.md
├── 2025-12-27-add-seo-features.md
├── 2026-01-15-update-featured-projects.md
├── 2026-01-20-fix-broken-links.md
└── README.md  # Index of all logs (optional)
```

**Best Practices:**
- One log file per work session
- Use descriptive filenames
- Keep logs concise but informative
- Include enough context for future agents
- Update status if returning to WIP work
- Cross-reference related logs

**When to Create a Log:**
- ✅ After any feature addition
- ✅ After significant content updates
- ✅ After fixing complex bugs
- ✅ After configuration changes
- ⚠️ Optional for typo fixes (can use quick template)
- ⚠️ Optional for minor content tweaks

---

## 🎓 Learning from This Site

This site is a good example of:
- Minimal, clean Jekyll setup
- GitHub Pages best practices
- Portfolio + blog hybrid structure
- Academic/professional web presence

Use it as a reference for similar projects!

---

**Last Updated:** 2025-12-26
**Maintained By:** AI Agents helping Kyoung Whan Choe
**Questions?** Check PLAN.md, README.md, or ask the user!
