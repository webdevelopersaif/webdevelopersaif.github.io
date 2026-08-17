// Contact Component
function Contact({ personal }) {
    return (
        <section id="contact" className="contact-section container section-padding">
            <div className="section-header fade-in visible">
                <span className="sub-title">Get In Touch</span>
                <h3 className="section-title">Open to Backend Opportunities</h3>
                <div className="title-divider"></div>
            </div>

            <div className="contact-grid">
                <div className="contact-info-panel glass-panel fade-in visible">
                    <h4>Open to Backend Engineering &amp; Technical Leadership Opportunities</h4>
                    <p>Currently exploring Backend Technical Lead, Senior Backend Engineer and engineering leadership opportunities with product companies, SaaS businesses and technology-driven organizations. Open to Remote and Hybrid roles.</p>

                    <div className="contact-details-list">
                        <div className="detail-item">
                            <div className="detail-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 9.24Z" />
                                </svg>
                            </div>
                            <div>
                                <h5>Phone / WhatsApp</h5>
                                <a href={`tel:${personal.phone.replace(/\s+/g, '')}`}>{personal.phone}</a>
                            </div>
                        </div>
                        <div className="detail-item">
                            <div className="detail-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                            </div>
                            <div>
                                <h5>Email</h5>
                                <a href={`mailto:${personal.email}`}>{personal.email}</a>
                            </div>
                        </div>
                        <div className="detail-item">
                            <div className="detail-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <div>
                                <h5>Location &amp; Availability</h5>
                                <span>{personal.location} (Open to Remote / Hybrid)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-panel glass-panel fade-in visible">
                    <form id="contactForm" action={`https://formsubmit.co/${personal.email}`} method="POST">
                        <input type="hidden" name="_captcha" value="false" />

                        <div className="form-group">
                            <label htmlFor="formName">Your Name</label>
                            <input type="text" id="formName" name="name" placeholder="John Doe" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formEmail">Your Email</label>
                            <input type="email" id="formEmail" name="email" placeholder="john@example.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formMessage">Message</label>
                            <textarea id="formMessage" name="message" rows="5" placeholder="Hi Saif, I'd like to discuss a Backend Technical Lead / Senior Backend role..." required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-submit">
                            <span>Send Message</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
