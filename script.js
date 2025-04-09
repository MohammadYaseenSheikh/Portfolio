// Typing Effect
document.addEventListener('DOMContentLoaded', function() {
    const typingName = document.querySelector('.typing-name');
    const typingRole = document.querySelector('.typing-role');
    const typingLocation = document.querySelector('.typing-location');
    const socialLinksContainer = document.querySelector('.social-links-container');
    
    function startTypingAnimation() {
        // Reset text content and classes
        typingName.textContent = '';
        typingRole.textContent = '';
        typingLocation.textContent = '';
        
        const texts = {
            name: 'Yaseen Sheikh',
            role: 'Software Engineer',
            location: 'Hyderabad, India'
        };
        
        let nameIndex = 0;
        let roleIndex = 0;
        let locationIndex = 0;
        
        // Type name
        function typeName() {
            if (nameIndex < texts.name.length) {
                typingName.textContent += texts.name.charAt(nameIndex);
                nameIndex++;
                setTimeout(typeName, 70);
            } else {
                setTimeout(typeRole, 500);
            }
        }
        
        // Type role
        function typeRole() {
            if (roleIndex < texts.role.length) {
                typingRole.textContent += texts.role.charAt(roleIndex);
                roleIndex++;
                setTimeout(typeRole, 70);
            } else {
                setTimeout(typeLocation, 500);
            }
        }
        
        // Type location
        function typeLocation() {
            if (locationIndex < texts.location.length) {
                typingLocation.textContent += texts.location.charAt(locationIndex);
                locationIndex++;
                setTimeout(typeLocation, 70);
            } else {
                // Show social links
                socialLinksContainer.classList.remove('d-none');
                socialLinksContainer.classList.add('show');
                
                // Wait before starting over
                setTimeout(() => {
                    // Hide text with fade effect
                    typingName.style.opacity = '0';
                    typingRole.style.opacity = '0';
                    typingLocation.style.opacity = '0';
                    
                    setTimeout(() => {
                        // Reset and start over
                        typingName.style.opacity = '1';
                        typingRole.style.opacity = '1';
                        typingLocation.style.opacity = '1';
                        startTypingAnimation();
                    }, 500);
                }, 4000); // Wait 4 seconds before restarting
            }
        }
        
        // Start the sequence
        setTimeout(typeName, 500);
    }
    
    // Initial start
    startTypingAnimation();
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