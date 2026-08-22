// Root App Component
function App() {
    const [theme, setTheme] = React.useState(() => {
        return localStorage.getItem('theme') || 'light';
    });
    const [activeNav, setActiveNav] = React.useState('about');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    // Synchronize body theme class and localStorage
    React.useEffect(() => {
        if (theme === 'light') {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
        } else {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    // Real-time scroll spy for active navigation header link
    React.useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
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
                setActiveNav(currentSectionId);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // GSAP + ScrollTrigger Animations Initialization
    React.useEffect(() => {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
            document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
            return;
        }

        gsap.registerPlugin(ScrollTrigger);
        document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));

        const ctx = gsap.context(() => {
            // 1. Hero Entrance Animation
            gsap.from('.hero-badge, .hero-title, .hero-role-title, .hero-positioning-line, .hero-desc', {
                y: 25,
                opacity: 0,
                stagger: 0.08,
                duration: 0.7,
                ease: 'power3.out'
            });

            gsap.from('.hero-contacts .contact-badge, .hero-actions .btn', {
                opacity: 0,
                scale: 0.95,
                y: 15,
                stagger: 0.05,
                duration: 0.5,
                ease: 'power2.out',
                delay: 0.2
            });

            gsap.from('.tech-stack-card', {
                opacity: 0,
                x: 30,
                duration: 0.8,
                ease: 'power3.out',
                delay: 0.2
            });

            // 2. Ambient Code Card Floating Motion
            gsap.to('.tech-stack-card', {
                y: -8,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });

            // 3. Animated Section Title Dividers
            document.querySelectorAll('.section-header').forEach(header => {
                const divider = header.querySelector('.title-divider');
                if (divider) {
                    gsap.fromTo(divider, 
                        { width: 0 },
                        {
                            width: '80px',
                            duration: 0.6,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: header,
                                start: 'top 90%',
                                once: true
                            }
                        }
                    );
                }
            });

            // Helper function for stagger scroll triggers with automatic clearProps
            const animateBatch = (selector, triggerSelector, yOffset = 30) => {
                const items = document.querySelectorAll(selector);
                if (!items.length) return;

                gsap.fromTo(items,
                    { opacity: 0, y: yOffset },
                    {
                        opacity: 1,
                        y: 0,
                        stagger: 0.1,
                        duration: 0.6,
                        ease: 'power2.out',
                        clearProps: 'transform,opacity',
                        scrollTrigger: {
                            trigger: triggerSelector || selector,
                            start: 'top 92%',
                            once: true
                        }
                    }
                );
            };

            animateBatch('.deepdive-card', '.deepdive-grid');
            animateBatch('.tech-category-box', '.compact-tech-grid');
            animateBatch('.gsap-experience-card', '.timeline');
            animateBatch('.project-card', '.projects-grid');
            animateBatch('.focus-card', '.focus-grid');
            animateBatch('.contact-info-panel, .contact-form-panel', '.contact-grid');

            // Refresh ScrollTrigger calculations after React layout finishes
            setTimeout(() => {
                ScrollTrigger.refresh();
            }, 300);
        });

        return () => ctx.revert();
    }, []);

    return (
        <React.Fragment>
            {/* Ambient Background Decorative Grid & Blobs */}
            <div className="grid-bg"></div>
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>

            {/* Application Components */}
            <Header
                theme={theme}
                toggleTheme={toggleTheme}
                activeNav={activeNav}
                isMobileMenuOpen={isMobileMenuOpen}
                toggleMobileMenu={toggleMobileMenu}
            />

            <main>
                <Hero personal={portfolioData.personal} />
                <About personal={portfolioData.personal} />
                <DeepDives deepDives={portfolioData.deepDives} />
                <Skills skills={portfolioData.skills} />
                <Experience experience={portfolioData.experience} />
                <Projects projects={portfolioData.projects} />
                <Focus focus={portfolioData.focus} />
                <Contact personal={portfolioData.personal} />
            </main>

            <Footer personal={portfolioData.personal} />
        </React.Fragment>
    );
}

// Mount Root React Component
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
