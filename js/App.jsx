// Root App Component
function App() {
    const [theme, setTheme] = React.useState(() => {
        return localStorage.getItem('theme') || 'dark';
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

    // IntersectionObserver for reveal fade-in animations on scroll
    React.useEffect(() => {
        const fadeElements = document.querySelectorAll('.fade-in');
        const fadeObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        fadeElements.forEach(el => fadeObserver.observe(el));
        return () => fadeObserver.disconnect();
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
