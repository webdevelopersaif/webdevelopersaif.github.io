// Hero Component
function Hero({ personal }) {
    return (
        <section id="hero" className="hero-section">
            <div className="container hero-container">
                <div className="hero-content fade-in visible">
                    <div className="badge-container">
                        <span className="hero-badge">
                            <span className="badge-dot"></span> Available for Backend Leadership &amp; Engineering Roles
                        </span>
                    </div>
                    <h1 className="hero-title">{personal.name}</h1>
                    <h2 className="hero-role-title">{personal.roleTitle}</h2>
                    <p className="hero-positioning-line">{personal.positioningLine}</p>
                    <p className="hero-desc">{personal.description}</p>

                    <div className="hero-contacts">
                        <a href={`tel:${personal.phone.replace(/\s+/g, '')}`} className="contact-badge" id="contactPhone">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 9.24Z" />
                            </svg>
                            <span>{personal.phone}</span>
                        </a>

                        <a href={`mailto:${personal.email}`} className="contact-badge" id="contactEmail">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            <span>{personal.email}</span>
                        </a>

                        <span className="contact-badge">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span>{personal.location}</span>
                        </span>
                    </div>

                    <div className="hero-actions">
                        <a href="#experience" className="btn btn-primary">
                            <span>View Engineering Experience</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </a>
                        <a href={personal.resumeUrl} download className="btn btn-secondary" id="btnDownloadResume">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" x2="12" y1="15" y2="3" />
                            </svg>
                            <span>Download Resume</span>
                        </a>
                    </div>
                </div>

                <div className="hero-illustration fade-in visible">
                    <div className="tech-stack-card glass-panel">
                        <div className="tech-card-header">
                            <span className="card-dot red"></span>
                            <span className="card-dot yellow"></span>
                            <span className="card-dot green"></span>
                            <span className="card-title-code">backend-architecture.config.ts</span>
                        </div>
                        <div className="code-snippet-body">
                            <pre><code><span className="code-keyword">interface</span> <span className="code-type">BackendLeadProfile</span> {'{\n'}
  <span className="code-prop">engineer</span>: <span className="code-str">"Saif Ansari"</span>;{'\n'}
  <span className="code-prop">role</span>: <span className="code-str">"Backend Technical Lead"</span>;{'\n'}
  <span className="code-prop">experience</span>: <span className="code-str">"10+ Years"</span>;{'\n'}
  <span className="code-prop">coreStack</span>: [<span className="code-str">"Laravel"</span>, <span class="code-str">"Python"</span>, <span className="code-str">"PHP"</span>, <span className="code-str">"REST APIs"</span>];{'\n'}
  <span className="code-prop">databases</span>: [<span class="code-str">"MySQL"</span>, <span class="code-str">"PostgreSQL"</span>, <span className="code-str">"Redis"</span>];{'\n'}
  <span className="code-prop">cloudDevOps</span>: [<span class="code-str">"AWS (EC2, S3, RDS)"</span>, <span className="code-str">"Docker"</span>, <span className="code-str">"CI/CD"</span>];{'\n'}
  <span className="code-prop">aiCapabilities</span>: [<span class="code-str">"LLM APIs (OpenAI/Claude)"</span>, <span class="code-str">"RAG Pipelines"</span>, <span class="code-str">"AI Automation"</span>];{'\n'}
  <span className="code-prop">architecture</span>: <span className="code-str">"Microservices, Event Queues &amp; Leadership"</span>;{'\n'}
{'}'}</code></pre>
                        </div>
                        <div className="tech-node-bar">
                            <span className="node-pill">
                                <span className="node-dot red"></span>
                                <span>Laravel</span>
                            </span>
                            <span className="node-pill">
                                <span className="node-dot blue"></span>
                                <span>Python</span>
                            </span>
                            <span className="node-pill">
                                <span className="node-dot orange"></span>
                                <span>AWS</span>
                            </span>
                            <span className="node-pill">
                                <span className="node-dot cyan"></span>
                                <span>RAG</span>
                            </span>
                            <span className="node-pill">
                                <span className="node-dot purple"></span>
                                <span>AI Automation</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
