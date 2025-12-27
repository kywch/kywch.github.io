// Blog Load More functionality
(function() {
  'use strict';

  const POSTS_PER_PAGE = 10;
  let visiblePosts = POSTS_PER_PAGE;

  function initLoadMore() {
    const allPosts = document.querySelectorAll('.blog-archive-item');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const postsInfo = document.getElementById('posts-info');
    const loadMoreContainer = document.getElementById('load-more-container');
    const yearSections = document.querySelectorAll('.year-section');

    if (!allPosts.length) return;

    const totalPosts = allPosts.length;

    // Initially hide posts beyond POSTS_PER_PAGE
    function updateVisibility() {
      let visibleCount = 0;

      allPosts.forEach((post, index) => {
        if (index < visiblePosts) {
          post.style.display = '';
          visibleCount++;
        } else {
          post.style.display = 'none';
        }
      });

      // Hide year sections that have no visible posts
      yearSections.forEach(section => {
        const visiblePostsInSection = section.querySelectorAll('.blog-archive-item[style=""], .blog-archive-item:not([style*="display: none"])').length;
        if (visiblePostsInSection === 0) {
          section.style.display = 'none';
        } else {
          section.style.display = '';
        }
      });

      // Update button and info text
      if (visiblePosts >= totalPosts) {
        loadMoreBtn.style.display = 'none';
        postsInfo.textContent = `Showing all ${totalPosts} posts`;
      } else {
        loadMoreBtn.style.display = 'inline-block';
        postsInfo.textContent = `Showing ${visibleCount} of ${totalPosts} posts`;
      }

      // Hide entire container if all posts are visible
      if (visiblePosts >= totalPosts) {
        loadMoreContainer.style.display = 'none';
      }
    }

    // Load more button click handler
    loadMoreBtn.addEventListener('click', function() {
      visiblePosts += POSTS_PER_PAGE;
      updateVisibility();

      // Smooth scroll to first newly revealed post
      const firstNewPost = allPosts[visiblePosts - POSTS_PER_PAGE];
      if (firstNewPost && visiblePosts <= totalPosts) {
        setTimeout(() => {
          firstNewPost.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      }
    });

    // Initial visibility update
    updateVisibility();
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLoadMore);
  } else {
    initLoadMore();
  }
})();
