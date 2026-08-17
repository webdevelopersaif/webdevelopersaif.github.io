// Experience Component (Work Experience Timeline)
function Experience({ experience }) {
    return (
        <section id="experience" className="experience-section container section-padding">
            <div className="section-header fade-in visible">
                <span className="sub-title">Career Progression</span>
                <h3 className="section-title">Engineering Leadership &amp; Work Experience</h3>
                <div className="title-divider"></div>
            </div>

            <div className="timeline">
                {experience.map((item, idx) => {
                    const isLeft = idx % 2 === 0;
                    return (
                        <div key={idx} className={`timeline-item ${isLeft ? 'left' : 'right'} fade-in visible`}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-content glass-panel">
                                <span className="timeline-date">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                    {item.period}
                                </span>
                                <h4 className="timeline-role">{item.role}</h4>
                                <span className="timeline-company">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                                        <line x1="9" y1="22" x2="9" y2="16" />
                                        <line x1="15" y1="22" x2="15" y2="16" />
                                        <line x1="9" y1="16" x2="15" y2="16" />
                                    </svg>
                                    {item.company} <span className="timeline-loc"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> {item.location}</span>
                                </span>
                                <ul className="experience-details">
                                    {item.details.map((detail, dIdx) => (
                                        <li key={dIdx} dangerouslySetInnerHTML={{ __html: detail }}></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
