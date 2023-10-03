// Add this script at the end of your HTML body or in a separate JavaScript file
const progressBars = document.querySelectorAll('.progress-bar');

progressBars.forEach((bar) => {
    const progressValue = bar.getAttribute('data-progress');
    bar.style.width = progressValue;
});







