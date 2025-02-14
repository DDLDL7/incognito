// script.js
// JavaScript for smooth scrolling (optional, but enhances UX)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth' // For smooth scrolling
            });
        }
    });
});

// Add a class to trigger animations on scroll (example)
window.addEventListener('scroll', () => {
    const featuresSection = document.querySelector('.features');
    const featuresPosition = featuresSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.8; // Trigger when 80% of the section is visible

    if (featuresPosition < triggerPoint) {
        featuresSection.querySelectorAll('.feature').forEach(feature => {
            feature.style.opacity = 1; // Make features visible
        });
    }
});

// Hero image parallax effect (example)
const heroImage = document.querySelector('.hero-image img');
window.addEventListener('scroll', () => {
    let scrollPosition = window.pageYOffset;
    heroImage.style.transform = `translateY(${scrollPosition * 0.2}px)`; // Adjust the multiplier for the parallax effect
});