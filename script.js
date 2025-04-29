
// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {

  // Get the menu toggle button and the navigation menu
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  // Check if both elements exist to avoid errors
  if (menuToggle && mainNav) {
      // Add a click event listener to the menu toggle button
      menuToggle.addEventListener('click', function() {
          // Toggle the 'active' class on the navigation menu
          // This class will be used in CSS to show/hide the menu
          mainNav.classList.toggle('active');

          // Optional: Add accessibility features - toggle aria-expanded attribute
          const isExpanded = mainNav.classList.contains('active');
          menuToggle.setAttribute('aria-expanded', isExpanded);
      });
  } else {
      // Log an error if elements are not found (useful for debugging)
      if (!menuToggle) console.error("Menu toggle button not found.");
      if (!mainNav) console.error("Main navigation element not found.");
  }

});