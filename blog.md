---
layout: page
title: Blog
permalink: /blog/
---

<div id="blog-archive">
{% assign postsByYear = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% assign postIndex = 0 %}

{% for year in postsByYear %}
<div class="year-section" data-year="{{ year.name }}">
  <h2>{{ year.name }}</h2>

  {% for post in year.items %}
  <article class="blog-archive-item" data-post-index="{{ postIndex }}">
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
  {% assign postIndex = postIndex | plus: 1 %}
  {% endfor %}

  <hr>
</div>
{% endfor %}

{% if site.posts.size == 0 %}
<p><em>No blog posts yet. Check back soon!</em></p>
{% endif %}
</div>

<div id="load-more-container" style="text-align: center; margin-top: 2rem;">
  <button id="load-more-btn" class="load-more-btn">
    Load More Posts
  </button>
  <p id="posts-info" class="posts-info"></p>
</div>
