---
layout: default
---

**I work in robotics, developing software to teach robots.** I also train gaming agents as a hobby, where the principles are similar and iteration is much faster. Many aspects of cognitive neuroscience training seem to transfer - designing evaluation tasks is similar, perception and action "networks" are comparable, and both involve extensive debugging.

During my PhD and postdoc, I used web-based cognitive tasks, brain imaging, eye-tracking, and machine learning to study human decision-making. For example, I developed [The Choose-And-Solve Task](https://kywch.github.io/CAST_jsPsych/choose-and-solve-task.html) to show how some individuals with math anxiety choose to avoid math and published my work in [*Science Advances* (Choe et al., 2019)](https://www.science.org/doi/10.1126/sciadv.aay1062). 

See my [Google Scholar](https://scholar.google.com/citations?user=Smql8gkAAAAJ&hl=en) page for other cognition works.

---

<div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1em;">
  <h2 style="margin: 0;">Recent Blog Posts</h2>
  <a href="/blog/" style="font-size: 0.9em;">View all posts</a>
</div>

{% include post-list.html limit=3 %}

---

<div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1em;">
  <h2 style="margin: 0;">Featured Projects</h2>
  <a href="/projects/" style="font-size: 0.9em;">View all projects</a>
</div>

{% assign featured = site.data.projects | where_exp: "project", "project.featured_order > 0" | sort: "featured_order" %}
{% include project-card.html projects=featured %}

---
<p><small>Hosted on GitHub Pages &mdash; Theme by <a href="https://github.com/orderedlist" target="_blank">orderedlist</a>,
 page template forked from <a href="https://github.com/evanca/quick-portfolio" target="_blank">evanca</a>.<br>
 Photo by <a href="https://www.eriellebakkumphotography.com/" target="_blank">Erielle Bakkum</a>.</small></p>
