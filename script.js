window.onload = function () {
    // Hide the loading screen
    document.getElementById('loading-screen').style.display = 'none';

    // Display the website content
    document.getElementById('content').style.display = 'block';
};


// Add this to your existing script.js or create a new JavaScript file
const menuIcon = document.querySelector('.menu-icon');
const hamburgerMenu = document.querySelector('.hamburger-menu');

menuIcon.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
    // When the website finishes loading
    document.getElementById("loading-text").style.opacity = "1";
    document.getElementById("loading-text").style.fontSize = "24px";
    document.getElementById("loading-screen").style.opacity = "0"; // Optional: Fade out the loading screen
});

