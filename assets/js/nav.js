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
