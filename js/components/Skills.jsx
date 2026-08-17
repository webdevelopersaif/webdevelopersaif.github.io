// Skills Component (Technical Expertise)
function Skills({ skills }) {
    const renderIcon = (iconName) => {
        switch (iconName) {
            case 'server':
                return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>;
            case 'database':
                return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;
            case 'cloud':
                return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.48-1.95-2.04-3.5-4-3.5a5 5 0 0 0-5 5c0 .58.08 1.15.23 1.68A3.49 3.49 0 0 0 2 17.5 3.5 3.5 0 0 0 5.5 21h12Z"/></svg>;
            case 'cpu':
                return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M20 15h2"/><path d="M9 2v2"/><path d="M9 20v2"/><path d="M2 9h2"/><path d="M20 9h2"/></svg>;
            case 'users':
                return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>;
            default:
                return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg>;
        }
    };

    return (
        <section id="skills" className="skills-section container section-padding">
            <div className="section-header fade-in visible">
                <span className="sub-title">Tech Stack &amp; Tools</span>
                <h3 className="section-title">Technical Expertise</h3>
                <div className="title-divider"></div>
            </div>

            <div className="compact-tech-grid">
                {skills.map((cat, idx) => (
                    <div key={idx} className="tech-category-box glass-panel fade-in visible">
                        <div className="tech-cat-header">
                            <span className={`tech-cat-icon ${cat.iconBg}`}>
                                {renderIcon(cat.icon)}
                            </span>
                            <h4>{cat.title}</h4>
                        </div>
                        <div className="tech-chips-wrap">
                            {cat.chips.map((chip, cIdx) => (
                                <span key={cIdx} className="tech-chip">{chip}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
