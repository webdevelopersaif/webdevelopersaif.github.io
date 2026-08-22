// Header Component
function Header({ theme, toggleTheme, activeNav, isMobileMenuOpen, toggleMobileMenu }) {
    const navItems = [
        { id: "about", label: "About" },
        { id: "capabilities", label: "Capabilities" },
        { id: "skills", label: "Skills" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "focus", label: "Focus" },
        { id: "contact", label: "Contact" }
    ];

    return (
        <header className="site-header">
            <div className="container header-container">
                <a href="#hero" className="brand-logo">
                    <div className="logo-icon-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m18 16 4-4-4-4" />
                            <path d="m6 8-4 4 4 4" />
                            <path d="m14.5 4-5 16" />
                        </svg>
                    </div>
                    <span className="logo-text">
                        <span className="logo-main">Saif</span><span className="logo-accent">.Ansari</span>
                    </span>
                </a>

                <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`} id="mainNav">
                    <ul>
                        {navItems.map(item => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className={`nav-link ${activeNav === item.id ? 'active' : ''}`}
                                    onClick={() => isMobileMenuOpen && toggleMobileMenu()}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-actions">
                    <button
                        className="theme-toggle-btn"
                        id="themeToggleBtn"
                        aria-label="Toggle Color Theme"
                        onClick={toggleTheme}
                    >
                        {theme === 'dark' ? (
                            <svg className="sun-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="4" />
                                <path d="M12 2v2" /><path d="M12 20v2" />
                                <path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" />
                                <path d="M2 12h2" /><path d="M20 12h2" />
                                <path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
                            </svg>
                        ) : (
                            <svg className="moon-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                            </svg>
                        )}
                    </button>

                    <button
                        className={`menu-toggle-btn ${isMobileMenuOpen ? 'open' : ''}`}
                        id="menuToggleBtn"
                        aria-label="Toggle Mobile Menu"
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? (
                            <svg className="close-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        ) : (
                            <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="4" x2="20" y1="12" y2="12" />
                                <line x1="4" x2="20" y1="6" y2="6" />
                                <line x1="4" x2="20" y1="18" y2="18" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}
