document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality (if needed)
    const mobileMenuButton = document.querySelector('[data-mobile-menu]');
    const mobileMenu = document.querySelector('[data-mobile-menu-items]');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Contact form handling (only on contact page)
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted');
            // Add your form submission logic here
        });
    }

    // Add any additional functionality here
    console.log('Page loaded successfully');
}); 