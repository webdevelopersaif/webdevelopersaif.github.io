// Focus Component (Current Technical Focus)
function Focus({ focus }) {
    return (
        <section id="focus" className="focus-section container section-padding">
            <div className="section-header fade-in visible">
                <span className="sub-title">Career Direction</span>
                <h3 className="section-title">Current Technical Focus</h3>
                <div className="title-divider"></div>
            </div>

            <div className="focus-intro-text fade-in visible">
                <p>To support my trajectory toward Backend Architecture and Lead roles, I am actively deepening my technical mastery in the following core disciplines:</p>
            </div>

            <div className="focus-grid">
                {focus.map(item => (
                    <div key={item.num} className="focus-card glass-panel fade-in visible">
                        <div className="focus-num">{item.num}</div>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
