/* ============================================
   GARETH.AI CYBERPUNK PORTFOLIO - JAVASCRIPT
   Interactivity & Animations
   ============================================ */

// ============================================
// HAMBURGER MENU
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // ============================================
    // ACTIVE NAVIGATION LINK
    // ============================================
    updateActiveNavLink();

    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ============================================
    // SCROLL ANIMATIONS
    // ============================================
    observeElements();

    // ============================================
    // GLITCH TEXT EFFECT
    // ============================================
    addGlitchEffect();

    // ============================================
    // CONTACT FORM
    // ============================================
    initContactForm();

    // ============================================
    // PROJECT CARDS MOUSE TRACKING
    // ============================================
    trackProjectCardMouse();

    // ============================================
    // ANIMATED BACKGROUND STARS
    // ============================================
    createStars();
});

// ============================================
// UPDATE ACTIVE NAV LINK BASED ON PAGE
// ============================================
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ============================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ============================================
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe project cards, expertise cards, stats
    document.querySelectorAll('.project-card, .expertise-card, .stat, .timeline-item').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// GLITCH TEXT EFFECT ON HOVER
// ============================================
function addGlitchEffect() {
    const glitchElements = document.querySelectorAll('.glitch');

    glitchElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.animation = 'glitch 0.3s ease infinite';
        });

        element.addEventListener('mouseleave', () => {
            element.style.animation = 'none';
        });
    });
}

// ============================================
// CONTACT FORM HANDLING
// ============================================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Validate
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }

            // Create mailto link (for static site, redirect to email client)
            const mailtoLink = `mailto:contact@gareth.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;

            // Show success message
            const button = contactForm.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            button.textContent = 'Message queued for transmission!';
            button.style.background = '#00ff88';
            button.style.color = '#0a0e27';

            // Reset after 2 seconds
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
                button.style.color = '';
                contactForm.reset();
            }, 2000);

            // Open email client
            setTimeout(() => {
                window.location.href = mailtoLink;
            }, 500);
        });
    }
}

// ============================================
// PROJECT CARD MOUSE TRACKING
// ============================================
function trackProjectCardMouse() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--mouse-x', '50%');
            card.style.setProperty('--mouse-y', '50%');
        });
    });
}

// ============================================
// CREATE ANIMATED STARS IN HERO SECTION
// ============================================
function createStars() {
    const starsContainer = document.querySelector('.stars');

    if (starsContainer) {
        const starCount = 50;

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            starsContainer.appendChild(star);
        }
    }
}

// ============================================
// SCROLL TO TOP ON PAGE LOAD
// ============================================
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// ============================================
// KEYBOARD NAVIGATION
// ============================================
document.addEventListener('keydown', (e) => {
    // Escape key to close mobile menu
    if (e.key === 'Escape') {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// ============================================
// PERFORMANCE: REQUEST ANIMATION FRAME FOR SCROLL
// ============================================
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        // Scroll complete
    }, 150);
});

// ============================================
// TYPING EFFECT FOR TITLES (Optional)
// ============================================
function typeEffect(element, text, speed = 50) {
    if (!element) return;

    let index = 0;
    element.textContent = '';

    const typeInterval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(typeInterval);
        }
    }, speed);
}

// ============================================
// COPY TO CLIPBOARD FOR CONTACT INFO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const contactLinks = document.querySelectorAll('.contact-link');

    contactLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.textContent.includes('@')) {
                // For email, don't prevent default
                return;
            }
        });
    });
});

console.log('🚀 GARETH.AI Neural Systems Online');
console.log('📡 Awaiting transmissions from across the cosmos...');
