// Typing Effect
document.addEventListener('DOMContentLoaded', function() {
    const typingText = document.querySelector('.typing-text');
    const socialLinksContainer = document.querySelector('.social-links-container');
    
    const lines = [
        { text: 'MohammadYaseen Sheikh', class: 'line1' },
        { text: 'Software Engineer', class: 'line2' },
        { text: 'Hyderabad, India', class: 'line3' }
    ];
    
    let currentLine = 0;
    let currentChar = 0;
    
    function type() {
        if (currentLine < lines.length) {
            // Create new line element if it doesn't exist
            if (currentChar === 0) {
                const lineElement = document.createElement('span');
                lineElement.className = lines[currentLine].class;
                typingText.appendChild(lineElement);
            }
            
            const lineElement = typingText.lastElementChild;
            lineElement.textContent = lines[currentLine].text.substring(0, currentChar + 1);
            currentChar++;
            
            if (currentChar === lines[currentLine].text.length) {
                currentLine++;
                currentChar = 0;
                if (currentLine === lines.length) {
                    // Show social links after all typing is complete
                    setTimeout(() => {
                        socialLinksContainer.classList.remove('d-none');
                        setTimeout(() => {
                            socialLinksContainer.classList.add('show');
                        }, 100);
                    }, 500);
                    return;
                }
            }
            
            // Adjust typing speed based on the line
            const speed = currentLine === 0 ? 100 : 70;
            setTimeout(type, speed);
        }
    }
    
    // Start typing after a short delay
    setTimeout(type, 500);
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