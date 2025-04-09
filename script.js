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

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');

// Function to set theme
function setTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
}

// Initialize theme
if (currentTheme === 'dark') {
    setTheme('dark');
} else if (currentTheme === 'light') {
    setTheme('light');
} else if (prefersDarkScheme.matches) {
    setTheme('dark');
} else {
    setTheme('light');
}

// Toggle theme on button click
darkModeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});