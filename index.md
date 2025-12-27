---
layout: default
---

**Currently, I work in robotics, developing software to teach robots.** Many aspects of cognitive neuroscience training seem to transfer to robotics - designing evaluation tasks is similar, perception and action "networks" are comparable, and both involve extensive debugging.

During my PhD and postdoc, I used web-based cognitive tasks, brain imaging, eye-tracking, and machine learning to study human decision-making. For example, I developed [The Choose-And-Solve Task](https://kywch.github.io/CAST_jsPsych/choose-and-solve-task.html) to show how some individuals with math anxiety choose to avoid math and published my work in [*Science Advances* (Choe et al., 2019)](https://www.science.org/doi/10.1126/sciadv.aay1062). See my [Google Scholar](https://scholar.google.com/citations?user=Smql8gkAAAAJ&hl=en) page for other cognition works.

---

## Featured Projects
{% assign featured = site.data.projects | where_exp: "project", "project.featured_order > 0" | sort: "featured_order" %}
{% include project-card.html projects=featured %}

<p style="text-align: right;"><a href="/projects/">View all projects →</a></p>

---

## Recent Blog Posts
{% include post-list.html limit=3 %}

<p style="text-align: right;"><a href="/blog/">View all posts →</a></p>

---
<p><small>Hosted on GitHub Pages &mdash; Theme by <a href="https://github.com/orderedlist" target="_blank">orderedlist</a>, 
 page template forked from <a href="https://github.com/evanca/quick-portfolio" target="_blank">evanca</a>.</small></p>
