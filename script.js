document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       THEME TOGGLER
       ========================================================================== */
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Default to light theme for clean portfolio aesthetic
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    if (savedTheme === 'light') {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (body.classList.contains('dark-theme')) {
                body.classList.remove('dark-theme');
                body.classList.add('light-theme');
                localStorage.setItem('theme', 'light');
            } else {
                body.classList.remove('light-theme');
                body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    /* ==========================================================================
       MOBILE MENU
       ========================================================================== */
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');

    const toggleMenu = () => {
        if (menuToggle && mainNav) {
            menuToggle.classList.toggle('open');
            mainNav.classList.toggle('open');
        }
    };

    const closeMenu = () => {
        if (menuToggle && mainNav) {
            menuToggle.classList.remove('open');
            mainNav.classList.remove('open');
        }
    };

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // Close menu when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside of header
    document.addEventListener('click', (e) => {
        const header = document.querySelector('.site-header');
        if (header && !header.contains(e.target)) {
            closeMenu();
        }
    });

    /* ==========================================================================
       SCROLL ANIMATIONS & NAVIGATION HIGHLIGHTING
       ========================================================================== */
    const fadeElements = document.querySelectorAll('.fade-in');
    const sections = document.querySelectorAll('section[id]');

    // IntersectionObserver for elements fading in on scroll
    const fadeObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, fadeObserverOptions);

    fadeElements.forEach(el => fadeObserver.observe(el));

    // Scroll position spy for active navigation link
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 160;
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        if (currentSectionId) {
            navLinks.forEach(link => {
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    }

    window.addEventListener('scroll', updateActiveNavLink, { passive: true });
    updateActiveNavLink();

    /* ==========================================================================
       PROJECTS FILTERING
       ========================================================================== */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category').split(' ');

                if (filterValue === 'all' || categories.includes(filterValue)) {
                    card.classList.remove('hide');
                    card.style.animation = 'none';
                    void card.offsetWidth;
                    card.style.animation = 'fadeInUp 0.4s ease-out forwards';
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });

    /* ==========================================================================
       CASE STUDY EXPANSION TOGGLE
       ========================================================================== */
    const csToggleBtns = document.querySelectorAll('.cs-toggle-btn');

    csToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const drawer = document.getElementById(targetId);
            const spanText = btn.querySelector('span');

            if (drawer) {
                const isOpen = drawer.classList.contains('open');

                if (isOpen) {
                    drawer.classList.remove('open');
                    btn.classList.remove('open');
                    if (spanText) spanText.textContent = 'View Architecture Breakdown';
                } else {
                    drawer.classList.add('open');
                    btn.classList.add('open');
                    if (spanText) spanText.textContent = 'Hide Architecture Breakdown';
                }
            }
        });
    });

});

// Keyframe fallback helper for filter transition animation
const styleSheet = document.createElement("style");
styleSheet.textContent = `
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(15px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`;
document.head.appendChild(styleSheet);
