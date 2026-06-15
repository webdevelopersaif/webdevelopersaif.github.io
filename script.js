document.addEventListener('DOMContentLoaded', () => {
    

    /* ==========================================================================
       THEME TOGGLER
       ========================================================================== */
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Check for saved theme preference or default to light-theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    if (savedTheme === 'dark') {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }

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

    /* ==========================================================================
       MOBILE MENU
       ========================================================================== */
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');

    const toggleMenu = () => {
        menuToggle.classList.toggle('open');
        mainNav.classList.toggle('open');
    };

    const closeMenu = () => {
        menuToggle.classList.remove('open');
        mainNav.classList.remove('open');
    };

    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside of header
    document.addEventListener('click', (e) => {
        const header = document.querySelector('.site-header');
        if (!header.contains(e.target)) {
            closeMenu();
        }
    });

    /* ==========================================================================
       SCROLL ANIMATIONS & NAVIGATION HIGHLIGHTING
       ========================================================================== */
    const fadeElements = document.querySelectorAll('.fade-in');
    const sections = document.querySelectorAll('section');
    const skillsCards = document.querySelectorAll('.skills-card');

    // IntersectionObserver for elements fading in on scroll
    const fadeObserverOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // If the element is a skills card, also trigger the skill bar progress animation
                if (entry.target.classList.contains('skills-card')) {
                    entry.target.classList.add('animate');
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, fadeObserverOptions);

    fadeElements.forEach(el => fadeObserver.observe(el));
    skillsCards.forEach(card => fadeObserver.observe(card));

    // IntersectionObserver for highlighting active section in nav menu
    const navObserverOptions = {
        threshold: 0.3,
        rootMargin: '-80px 0px -20% 0px' // adjust for header height
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, navObserverOptions);

    sections.forEach(section => navObserver.observe(section));

    /* ==========================================================================
       PROJECTS FILTERING
       ========================================================================== */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Set active state on button
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                // Read classes from data-category attribute
                const categories = card.getAttribute('data-category').split(' ');

                if (filterValue === 'all' || categories.includes(filterValue)) {
                    card.classList.remove('hide');
                    // Add micro-animation effect when reappearing
                    card.style.animation = 'none';
                    // trigger reflow
                    void card.offsetWidth;
                    card.style.animation = 'fadeInUp 0.4s ease-out forwards';
                } else {
                    card.classList.add('hide');
                }
            });
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
