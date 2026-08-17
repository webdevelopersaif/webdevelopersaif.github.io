// About Component
function About({ personal }) {
    return (
        <section id="about" className="about-section container section-padding">
            <div className="section-header fade-in visible">
                <span className="sub-title">Overview</span>
                <h3 className="section-title">Professional Summary</h3>
                <div className="title-divider"></div>
            </div>

            <div className="summary-card glass-panel fade-in visible">
                <div className="summary-icon-box">
                    <svg className="quote-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 .75 1 2 1Z" />
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 .75 1 2 1Z" />
                    </svg>
                </div>
                <div className="summary-text">
                    {personal.summaryParagraphs.map((paragraph, index) => (
                        <p key={index} style={{ marginBottom: index < personal.summaryParagraphs.length - 1 ? '16px' : '0' }}>
                            {paragraph}
                        </p>
                    ))}
                </div>
                <div className="experience-counter">
                    {personal.stats.map((stat, idx) => (
                        <div key={idx} className="counter-item">
                            <span className="counter-num">{stat.num}</span>
                            <span className="counter-label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
