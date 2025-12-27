---
layout: default
title: Blog
permalink: /blog/
---

# Blog

All my blog posts about robotics, machine learning, and research.

---

{% assign postsByYear = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}

{% for year in postsByYear %}
## {{ year.name }}

{% for post in year.items %}
<article class="blog-archive-item">
  <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
  <p class="post-meta">
    {{ post.date | date: "%B %d, %Y" }}
    {% if post.categories.size > 0 %}
      • {{ post.categories | join: ", " }}
    {% endif %}
  </p>
  {% if post.excerpt %}
  <p>{{ post.excerpt | strip_html | truncatewords: 40 }}</p>
  {% endif %}
</article>
{% endfor %}

---
{% endfor %}

{% if site.posts.size == 0 %}
<p><em>No blog posts yet. Check back soon!</em></p>
{% endif %}
