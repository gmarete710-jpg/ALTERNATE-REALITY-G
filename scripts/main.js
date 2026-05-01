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

    const heroTagline = document.getElementById('heroTagline');
    if (heroTagline) {
        typeEffect(heroTagline, heroTagline.textContent, 40);
    }

    // ============================================
    // THEME TOGGLE
    // ============================================
    initThemeToggle();

    // ============================================
    // HOME PAGE DASHBOARD
    // ============================================
    initHomeDashboard();

    // ============================================
    // ABOUT PAGE INTERACTIONS
    // ============================================
    initAboutInteractions();

    // ============================================
    // CONTACT PAGE PREVIEW
    // ============================================
    initContactPreview();

    // ============================================
    // CONTACT FORM
    // ============================================
    initContactForm();
    initContactPrefill();
    initCopyEmail();

    // ============================================
    // PROJECT SEARCH AND FILTER
    // ============================================
    initProjectSearch();

    // ============================================
    // PROJECT FEATURED SELECTION
    // ============================================
    initProjectsFeatured();

    // ============================================
    // LIVE STATISTICS ON HOMEPAGE
    // ============================================
    initDynamicStats();

    // ============================================
    // BACK TO TOP BUTTON
    // ============================================
    initBackToTop();

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
    const currentPage = window.location.pathname.split('/').pop();
    const normalizedPage = currentPage === '' ? 'index.html' : currentPage;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (
            href === normalizedPage ||
            (normalizedPage === 'index.html' && href === 'home.html') ||
            (normalizedPage === 'home.html' && href === 'index.html')
        ) {
            link.classList.add('active');
        }
    });
}

// ============================================
// THEME TOGGLE
// ============================================
const availableThemes = ['dark', 'light', 'cyberpunk', 'solar'];
const themeLabels = {
    dark: 'Dark',
    light: 'Light',
    cyberpunk: 'Cyberpunk',
    solar: 'Solar'
};

function initThemeToggle() {
    const button = document.getElementById('themeToggle');
    if (!button) return;

    const savedTheme = localStorage.getItem('garethTheme');
    const initialTheme = availableThemes.includes(savedTheme) ? savedTheme : 'dark';
    applyTheme(initialTheme, button);

    button.addEventListener('click', () => cycleTheme(button));

    button.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        cycleTheme(button, true);
    });

    document.addEventListener('keydown', (event) => {
        const targetTag = event.target && event.target.tagName ? event.target.tagName.toLowerCase() : '';
        if (targetTag === 'input' || targetTag === 'textarea' || event.target.isContentEditable) {
            return;
        }

        if (event.key.toLowerCase() === 't' && !event.ctrlKey && !event.metaKey && !event.altKey) {
            event.preventDefault();
            cycleTheme(button);
        }
    });
}

function cycleTheme(button, reverse = false) {
    const currentTheme = button.dataset.theme || localStorage.getItem('garethTheme') || 'dark';
    const currentIndex = availableThemes.indexOf(currentTheme);
    const nextIndex = (currentIndex + (reverse ? -1 : 1) + availableThemes.length) % availableThemes.length;
    applyTheme(availableThemes[nextIndex], button);
}

function applyTheme(theme, button) {
    document.body.classList.remove(...availableThemes.map(t => `theme-${t}`));
    document.body.classList.add(`theme-${theme}`);

    if (button) {
        const label = themeLabels[theme] || themeLabels.dark;
        button.textContent = `Theme: ${label}`;
        button.dataset.theme = theme;
        button.setAttribute('aria-label', `Current theme: ${label}. Click to cycle themes, right-click to reverse.`);
        button.setAttribute('title', 'Click to cycle themes. Right-click to reverse. Press T to cycle.');
    }

    localStorage.setItem('garethTheme', theme);
}

// ============================================
// HOME PAGE DASHBOARD
// ============================================
function initHomeDashboard() {
    const statusButton = document.getElementById('statusCycleButton');
    const missionStatus = document.getElementById('missionStatus');
    const launchCountdown = document.getElementById('launchCountdown');
    const activeProtocol = document.getElementById('activeProtocol');

    if (!missionStatus && !launchCountdown && !activeProtocol) return;

    const statuses = ['Orbiting', 'Analyzing', 'Syncing', 'Hyperlight'];
    const protocols = ['Neural Synthesis', 'Quantum Inference', 'Astral Mapping', 'Signal Optimization'];
    let currentIndex = 0;

    const setMissionState = (index) => {
        currentIndex = index;
        if (missionStatus) missionStatus.textContent = statuses[index];
        if (activeProtocol) activeProtocol.textContent = protocols[index];
    };

    const updateCountdown = () => {
        if (!launchCountdown) return;
        const nextLaunch = new Date(Date.UTC(2089, 7, 30, 12, 0, 0));
        const now = new Date();
        const diff = nextLaunch - now;

        if (diff <= 0) {
            launchCountdown.textContent = 'Launch underway';
            return;
        }

        const days = Math.floor(diff / 86400000);
        const hours = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0');
        const minutes = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
        const seconds = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');

        launchCountdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    if (statusButton) {
        statusButton.addEventListener('click', () => {
            setMissionState((currentIndex + 1) % statuses.length);
        });
    }

    setMissionState(currentIndex);
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ============================================
// ABOUT PAGE INTERACTIONS
// ============================================
function initAboutInteractions() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    if (timelineItems.length === 0) return;

    timelineItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            timelineItems.forEach(el => el.classList.remove('active'));
            item.classList.add('active');
        });

        if (index === 0) {
            item.classList.add('active');
        }
    });
}

// ============================================
// CONTACT PAGE LIVE PREVIEW
// ============================================
function initContactPreview() {
    const preview = document.getElementById('contactPreview');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    if (!preview || !nameInput || !emailInput || !subjectInput || !messageInput) return;

    const renderPreview = () => {
        preview.innerHTML = `
            <h3>Draft Preview</h3>
            <p><strong>From:</strong> ${nameInput.value || 'Anonymous'}</p>
            <p><strong>Email:</strong> ${emailInput.value || 'no-email@domain.com'}</p>
            <p><strong>Subject:</strong> ${subjectInput.value || 'No subject yet'}</p>
            <p>${messageInput.value ? messageInput.value : 'Your message preview will appear here as you type.'}</p>
        `;
    };

    [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
        input.addEventListener('input', renderPreview);
    });

    renderPreview();
}

// ============================================
// PROJECTS FEATURED SELECTION
// ============================================
function initProjectsFeatured() {
    const featuredSection = document.getElementById('featuredProject');
    const featuredImage = document.getElementById('featuredImage');
    const featuredTitle = document.getElementById('featuredTitle');
    const featuredYear = document.getElementById('featuredYear');
    const featuredDescription = document.getElementById('featuredDescription');
    const featuredTags = document.getElementById('featuredTags');
    const featuredLink = document.getElementById('featuredLink');
    const cycleButton = document.getElementById('cycleFeaturedButton');
    const sortButton = document.getElementById('sortButton');
    const cards = document.querySelectorAll('.project-card');
    const grid = document.querySelector('.projects-grid');

    if (!featuredSection || !grid || cards.length === 0) return;

    const projects = Array.from(cards).map(card => ({
        title: card.querySelector('.project-title')?.textContent || 'Unknown Project',
        year: card.querySelector('.project-year')?.textContent || '',
        description: card.querySelector('.project-description')?.textContent || '',
        tags: Array.from(card.querySelectorAll('.tech-tag')).map(tag => tag.textContent),
        url: card.querySelector('.project-link')?.getAttribute('href') || '#',
        cover: card.dataset.cover || card.querySelector('img.project-cover')?.src || '',
        element: card
    }));

    let currentIndex = 0;
    let sortAscending = false;

    const updateFeatured = (index) => {
        const project = projects[index];
        if (!project) return;

        if (featuredTitle) featuredTitle.textContent = project.title;
        if (featuredYear) featuredYear.textContent = project.year;
        if (featuredDescription) featuredDescription.textContent = project.description;
        if (featuredLink) featuredLink.setAttribute('href', project.url);
        if (featuredImage && project.cover) {
            featuredImage.src = project.cover;
            featuredImage.alt = `${project.title} cover image`;
        }
        if (featuredTags) {
            featuredTags.innerHTML = project.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join(' ');
        }

        projects.forEach((projectItem, itemIndex) => {
            projectItem.element.classList.toggle('featured', itemIndex === index);
        });

        currentIndex = index;
    };

    const sortProjectsByYear = (ascending) => {
        const sorted = [...projects].sort((a, b) => {
            const yearA = parseInt(a.year.slice(0, 4), 10) || 0;
            const yearB = parseInt(b.year.slice(0, 4), 10) || 0;
            return ascending ? yearA - yearB : yearB - yearA;
        });

        sorted.forEach(project => {
            grid.appendChild(project.element);
        });
    };

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            updateFeatured(index);
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });

    if (cycleButton) {
        cycleButton.addEventListener('click', () => {
            updateFeatured((currentIndex + 1) % projects.length);
        });
    }

    if (sortButton) {
        sortButton.addEventListener('click', () => {
            sortAscending = !sortAscending;
            sortProjectsByYear(sortAscending);
            sortButton.textContent = sortAscending ? 'Sort by Year ↑' : 'Sort by Year ↓';
        });
    }

    updateFeatured(currentIndex);
}

function initDynamicStats() {
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

function initDynamicStats() {
    const stardateValue = document.getElementById('stardateValue');
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');

    if (stardateValue) {
        stardateValue.textContent = getStardate();
        setInterval(() => {
            stardateValue.textContent = getStardate();
        }, 10000);
    }

    statNumbers.forEach(stat => {
        const target = Number(stat.dataset.target);
        if (isNaN(target)) return;

        let start = 0;
        const duration = 1200;
        const stepTime = Math.max(Math.floor(duration / target), 20);

        const interval = setInterval(() => {
            start += Math.max(1, Math.floor(target / 20));
            if (start >= target) {
                start = target;
                clearInterval(interval);
            }
            stat.textContent = target >= 1000 ? formatLargeNumber(start) : start;
        }, stepTime);
    });
}

function getStardate() {
    const now = new Date();
    const year = now.getUTCFullYear();
    const startOfYear = Date.UTC(year, 0, 1);
    const dayOfYear = Math.floor((now.getTime() - startOfYear) / 86400000) + 1;
    const dayFraction = ((now.getTime() - startOfYear) % 86400000) / 86400000;
    const stardate = `${year}.${String(dayOfYear).padStart(3, '0')}${Math.floor(dayFraction * 100)}`;
    return stardate;
}

function formatLargeNumber(value) {
    if (value >= 1000000) {
        return `${(value / 1000000).toFixed(1)}M`;
    }
    if (value >= 1000) {
        return `${(value / 1000).toFixed(1)}K`;
    }
    return value;
}

function initProjectSearch() {
    const searchInput = document.getElementById('projectSearch');
    const filterSelect = document.getElementById('projectFilter');
    const countLabel = document.getElementById('filterCount');
    const resetButton = document.getElementById('resetFilterButton');
    const cards = document.querySelectorAll('.project-card');

    if (!searchInput || !filterSelect || !countLabel || cards.length === 0) return;

    const updateFilter = () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const selectedTopic = filterSelect.value.trim().toLowerCase();
        let visibleCount = 0;

        cards.forEach(card => {
            const title = card.querySelector('.project-title')?.textContent.toLowerCase() || '';
            const description = card.querySelector('.project-description')?.textContent.toLowerCase() || '';
            const tags = Array.from(card.querySelectorAll('.tech-tag')).map(tag => tag.textContent.toLowerCase()).join(' ');
            const matchesSearch = !searchTerm || title.includes(searchTerm) || description.includes(searchTerm) || tags.includes(searchTerm);
            const matchesTopic = !selectedTopic || tags.includes(selectedTopic);

            const isVisible = matchesSearch && matchesTopic;
            card.style.display = isVisible ? 'flex' : 'none';
            if (isVisible) visibleCount += 1;
        });

        countLabel.textContent = `${visibleCount} project${visibleCount === 1 ? '' : 's'} found`;
    };

    const resetFilters = () => {
        searchInput.value = '';
        filterSelect.value = '';
        updateFilter();
    };

    searchInput.addEventListener('input', updateFilter);
    filterSelect.addEventListener('change', updateFilter);
    if (resetButton) {
        resetButton.addEventListener('click', resetFilters);
    }
    updateFilter();
}

function initContactPrefill() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const formStatus = document.getElementById('formStatus');

    if (!nameInput || !emailInput) return;

    const savedName = localStorage.getItem('garethContactName');
    const savedEmail = localStorage.getItem('garethContactEmail');

    if (savedName) {
        nameInput.value = savedName;
    }
    if (savedEmail) {
        emailInput.value = savedEmail;
    }

    if (formStatus && (savedName || savedEmail)) {
        formStatus.textContent = 'Previous contact details loaded for faster transmission.';
    }
}

function initCopyEmail() {
    const copyButton = document.getElementById('copyEmailButton');
    const statusNote = document.getElementById('emailCopyStatus');
    const emailAddress = 'contact@gareth.ai';

    if (!copyButton) return;

    copyButton.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(emailAddress);
            if (statusNote) {
                statusNote.textContent = 'Email address copied to clipboard.';
            }
        } catch (error) {
            if (statusNote) {
                statusNote.textContent = 'Unable to copy automatically. Please copy manually.';
            }
        }
    });
}

function initBackToTop() {
    const button = document.createElement('button');
    button.className = 'back-to-top';
    button.type = 'button';
    button.innerText = '↑ Top';
    button.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(button);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    };

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility();
}

// ============================================
//  FORM AND CONTACT BEHAVIOR
// ============================================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            const formStatus = document.getElementById('formStatus');

            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }

            localStorage.setItem('garethContactName', name);
            localStorage.setItem('garethContactEmail', email);

            const mailtoLink = `mailto:contact@gareth.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;
            const button = contactForm.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            button.textContent = 'Message queued for transmission!';
            button.style.background = '#00ff88';
            button.style.color = '#0a0e27';

            if (formStatus) {
                formStatus.textContent = 'Your message draft has been saved locally and the email client will open shortly.';
            }

            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
                button.style.color = '';
                contactForm.reset();
            }, 2200);

            setTimeout(() => {
                window.location.href = mailtoLink;
            }, 500);
        });
    }
}

console.log('🚀 GARETH.AI Neural Systems Online');
console.log('📡 Awaiting transmissions from across the cosmos...');
