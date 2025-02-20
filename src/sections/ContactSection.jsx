import React from 'react';

function ContactSection() {
    return (
        <section className="contact-section">
            <div className="container">
                <h2 className="contact-title">Contact Us</h2>
                <div className="contact-form-container">
                    <p className="contact-description">Drop us a line!</p>
                    <form className="contact-form">
                        <input type="text" placeholder="Name" className="form-input" />
                        <input type="email" placeholder="Email" className="form-input" />
                        <button type="submit" className="button button-submit">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;