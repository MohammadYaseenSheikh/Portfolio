// Typing Effect
document.addEventListener('DOMContentLoaded', function() {
    const typingName = document.querySelector('.typing-name');
    const typingRole = document.querySelector('.typing-role');
    const typingLocation = document.querySelector('.typing-location');
    const socialLinksContainer = document.querySelector('.social-links-container');
    
    // Set the text content
    typingName.textContent = 'MohammadYaseen Sheikh';
    typingRole.textContent = 'Software Engineer';
    typingLocation.textContent = 'Hyderabad, India';
    
    // Show social links after typing animation completes
    setTimeout(() => {
        socialLinksContainer.classList.remove('d-none');
        setTimeout(() => {
            socialLinksContainer.classList.add('show');
        }, 100);
    }, 5000); // Wait for all typing animations to complete
});

// Intersection Observer for section animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation classes to elements when they come into view
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            animateOnScroll.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

// Observe elements to animate
document.querySelectorAll('.skill-category, .project-card, .experience-item, .education-item').forEach(element => {
    animateOnScroll.observe(element);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});