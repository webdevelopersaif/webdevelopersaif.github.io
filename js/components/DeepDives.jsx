// DeepDives Component (Capabilities & System Challenges)
function DeepDives({ deepDives }) {
    return (
        <section id="capabilities" className="capabilities-section container section-padding">
            <div className="section-header fade-in visible">
                <span className="sub-title">Engineering Deep Dives</span>
                <h3 className="section-title">Capabilities &amp; System Challenges</h3>
                <div className="title-divider"></div>
            </div>

            <div className="deepdive-grid">
                {deepDives.map(card => (
                    <div key={card.id} className="deepdive-card glass-panel fade-in visible">
                        <div className="deepdive-header">
                            <span className={`deepdive-num ${card.colorClass}`}>{card.num}</span>
                            <div className="deepdive-title-wrap">
                                <span className="deepdive-domain">{card.domain}</span>
                                <h4>{card.title}</h4>
                            </div>
                        </div>

                        <div className="deepdive-block challenge-block">
                            <div className="block-label">The Challenge</div>
                            <p>{card.challenge}</p>
                        </div>

                        <div className="deepdive-block solution-block">
                            <div className="block-label">Architectural Solution</div>
                            <p>{card.solution}</p>
                        </div>

                        <div className="deepdive-tech-stack">
                            {card.techStack.map((tech, idx) => (
                                <span key={idx} className="dtech-tag">{tech}</span>
                            ))}
                        </div>

                        <div className={`deepdive-impact ${card.glowClass}`}>
                            <span className="impact-label">Production Impact:</span>
                            <span className="impact-val">{card.impact}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
