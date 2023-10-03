// Function to toggle the mobile menu
function toggleMobileMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

// Function to close the mobile menu when a menu item is clicked
function closeMobileMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.remove('show');
}

// Add click event listeners for the mobile menu
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', toggleMobileMenu);

// Add click event listeners for menu items to close the mobile menu
const menuItems = document.querySelectorAll('nav ul li a');
menuItems.forEach((item) => {
    item.addEventListener('click', closeMobileMenu);
});

// You can add more JavaScript functionality here as needed.
