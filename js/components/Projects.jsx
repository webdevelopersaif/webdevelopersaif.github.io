// Projects Component (Filterable Showcase)
function Projects({ projects }) {
    const [activeFilter, setActiveFilter] = React.useState('all');

    const filterButtons = [
        { filter: 'all', label: 'All Projects' },
        { filter: 'laravel', label: 'Laravel' },
        { filter: 'saas', label: 'SaaS Platforms' },
        { filter: 'supporting', label: 'Supporting Stack / WP' }
    ];

    const filteredProjects = projects.filter(project => {
        if (activeFilter === 'all') return true;
        return project.category.includes(activeFilter);
    });

    return (
        <section id="projects" className="projects-section container section-padding">
            <div className="section-header fade-in visible">
                <span className="sub-title">Portfolio</span>
                <h3 className="section-title">Selected Engineering Projects</h3>
                <div className="title-divider"></div>
            </div>

            <div className="project-filters fade-in visible" role="tablist">
                {filterButtons.map(btn => (
                    <button
                        key={btn.filter}
                        className={`filter-btn ${activeFilter === btn.filter ? 'active' : ''}`}
                        onClick={() => setActiveFilter(btn.filter)}
                    >
                        {btn.label}
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {filteredProjects.map(project => (
                    <div key={project.id} className="project-card glass-panel fade-in visible" id={`project-${project.id}`}>
                        <div className="project-info">
                            <h4 className="project-title">{project.title}</h4>
                            <p className="project-subtitle">{project.subtitle}</p>
                            <p className="project-desc">{project.description}</p>

                            <div className="project-meta">
                                {project.badges.map((badge, idx) => (
                                    <span key={idx} className="project-tag">{badge}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
