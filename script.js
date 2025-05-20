// 1. Highlight Navigation Links on Hover
// This code changes the background and text color of navigation links when you hover over them.
document.querySelectorAll('nav a').forEach(link => {
    // When the mouse enters the link area
    link.addEventListener('mouseenter', () => {
        link.style.backgroundColor = 'yellow'; // Highlight background
        link.style.color = 'black';            // Change text color
    });
    // When the mouse leaves the link area
    link.addEventListener('mouseleave', () => {
        link.style.backgroundColor = '';       // Reset background
        link.style.color = 'red';              // Reset text color (matches your CSS)
    });
});

// 2. Show a Welcome Alert When the Page Loads
// This code displays a popup alert welcoming the user when they first visit the page.
window.addEventListener('DOMContentLoaded', () => {
    alert('Welcome to Junior Aji\'s Portfolio!');
});

// 3. Toggle Dark Mode with a Button
// This code allows users to switch between light and dark mode by clicking a button.
const darkModeBtn = document.getElementById('darkModeBtn');
if (darkModeBtn) { // Check if the button exists on the page
    darkModeBtn.addEventListener('click', () => {
        // Toggle the 'dark-mode' class on the body element
        document.body.classList.toggle('dark-mode');
    });
}