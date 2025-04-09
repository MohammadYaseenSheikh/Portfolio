// Typing Effect
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const typingText = document.querySelector('.typing-text');
    const typingText2 = document.querySelector('.typing-text-2');
    const socialLinksContainer = document.querySelector('.social-links-container');
    
    // Text to type
    const text1 = "Software Engineer";
    const text2 = "Hyderabad, India";
    
    // Function to type text
    function typeText(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                // If this is the second text, show social links after a delay
                if (element === typingText2) {
                    setTimeout(() => {
                        socialLinksContainer.classList.remove('d-none');
                        setTimeout(() => {
                            socialLinksContainer.classList.add('show');
                        }, 100);
                    }, 500);
                }
            }
        }
        
        type();
    }
    
    // Start typing animations
    setTimeout(() => {
        typeText(typingText, text1);
    }, 500);
    
    setTimeout(() => {
        typeText(typingText2, text2);
    }, 2500);
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