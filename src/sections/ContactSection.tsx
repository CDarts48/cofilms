'use client';

import React, { useState, ChangeEvent, FormEvent, CSSProperties } from 'react';
import { Mail, User, MessageSquare, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface Styles {
    [key: string]: CSSProperties;
}

function ContactSection(): React.ReactElement {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });
    const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Send email using EmailJS
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: 'info@coloradofilms.com',
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            // Show confirmation message
            setShowConfirmation(true);
            // Clear form
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section style={styles.section}>
            <div style={styles.wrapper}>
                <div style={styles.container}>
                    <div style={styles.content}>
                        <div style={styles.infoSide}>
                            <h2 style={styles.title}>Get in Touch</h2>
                            <p style={styles.description}>
                                Have a question about Colorado films? Want to feature your production?
                                We'd love to hear from you and help showcase Colorado's incredible
                                film heritage.
                            </p>

                            <div style={styles.features}>
                                <div style={styles.featureItem}>
                                    <div style={styles.featureIcon}>
                                        <Mail size={24} color="#5C4033" />
                                    </div>
                                    <div>
                                        <h3 style={styles.featureTitle}>Email Us</h3>
                                        <a
                                            href="mailto:info@coloradofilms.com"
                                            style={styles.emailLink}
                                        >
                                            info@coloradofilms.com
                                        </a>
                                    </div>
                                </div>

                                <div style={styles.featureItem}>
                                    <div style={styles.featureIcon}>
                                        <MessageSquare size={24} color="#5C4033" />
                                    </div>
                                    <div>
                                        <h3 style={styles.featureTitle}>Quick Response</h3>
                                        <p style={styles.featureText}>We respond within 24 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={styles.formSide}>
                            <form onSubmit={handleSubmit} style={styles.form}>
                                <div style={styles.inputGroup}>
                                    <label style={styles.label}>
                                        <User size={18} />
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        style={styles.input}
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div style={styles.inputGroup}>
                                    <label style={styles.label}>
                                        <Mail size={18} />
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="your.email@example.com"
                                        style={styles.input}
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div style={styles.inputGroup}>
                                    <label style={styles.label}>
                                        <MessageSquare size={18} />
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        placeholder="Tell us about your inquiry..."
                                        style={styles.textarea as CSSProperties}
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    style={styles.submitButton}
                                    disabled={isSubmitting}
                                >
                                    <Send size={20} />
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>

                                {showConfirmation && (
                                    <div style={styles.confirmationMessage}>
                                        ✓ Message sent successfully! We'll get back to you soon.
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const styles: Styles = {
    section: {
        padding: '8rem 0',
        background: 'linear-gradient(180deg, #E8D5C4 0%, #F5E6D3 100%)',
        position: 'relative',
        width: '100%',
        overflowX: 'hidden',
    },
    wrapper: {
        width: '100%',
        maxWidth: '100vw',
        overflowX: 'hidden',
        boxSizing: 'border-box',
    },
    container: {
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 1rem',
        width: '100%',
        boxSizing: 'border-box',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
        alignItems: 'stretch',
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
    },
    infoSide: {
        padding: '2rem 0',
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
    },
    title: {
        fontSize: 'clamp(2rem, 8vw, 3.5rem)',
        fontWeight: '700',
        color: '#5C4033',
        marginBottom: '1.5rem',
        letterSpacing: '0.02em',
        fontFamily: 'Georgia, serif',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
    },
    description: {
        fontSize: '1.2rem',
        color: '#8B7355',
        lineHeight: '1.7',
        marginBottom: '3rem',
    },
    features: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
    },
    featureItem: {
        display: 'flex',
        gap: '1.5rem',
        alignItems: 'flex-start',
    },
    featureIcon: {
        width: '60px',
        height: '60px',
        background: '#C19A6B',
        border: '2px solid #8B7355',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    },
    featureTitle: {
        fontSize: '1.25rem',
        fontWeight: '700',
        color: '#5C4033',
        marginBottom: '0.5rem',
        fontFamily: 'Georgia, serif',
    },
    featureText: {
        color: '#8B7355',
        fontSize: '1rem',
    },
    emailLink: {
        color: '#8B7355',
        fontSize: '1rem',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
        cursor: 'pointer',
    },
    formSide: {
        background: 'rgba(245, 230, 211, 0.8)',
        backdropFilter: 'blur(10px)',
        border: '3px solid #8B7355',
        borderRadius: '12px',
        padding: 'clamp(1.5rem, 5vw, 3rem)',
        boxShadow: '0 8px 24px rgba(92, 64, 51, 0.2)',
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
    },
    label: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: '#5C4033',
        fontSize: '0.95rem',
        fontWeight: '700',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        fontFamily: 'Arial, sans-serif',
    },
    input: {
        padding: '1rem 1.25rem',
        background: '#FFFFFF',
        border: '2px solid #C19A6B',
        borderRadius: '6px',
        color: '#2C1810',
        fontSize: '1rem',
        transition: 'all 0.3s ease',
        outline: 'none',
        width: '100%',
        boxSizing: 'border-box',
    },
    textarea: {
        padding: '1rem 1.25rem',
        background: '#FFFFFF',
        border: '2px solid #C19A6B',
        borderRadius: '6px',
        color: '#2C1810',
        fontSize: '1rem',
        transition: 'all 0.3s ease',
        outline: 'none',
        resize: 'vertical',
        fontFamily: 'inherit',
        width: '100%',
        boxSizing: 'border-box',
    },
    submitButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        padding: '1.25rem 2rem',
        background: 'linear-gradient(135deg, #C19A6B 0%, #A0522D 100%)',
        color: '#2C1810',
        border: '2px solid #A0522D',
        borderRadius: '4px',
        fontSize: '1.1rem',
        fontWeight: '700',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 4px 12px rgba(139, 115, 85, 0.4)',
        marginTop: '1rem',
        width: '100%',
        boxSizing: 'border-box',
    },
    confirmationMessage: {
        marginTop: '1.5rem',
        padding: '1rem 1.5rem',
        background: 'linear-gradient(135deg, #2d5016 0%, #3d6b1f 100%)',
        color: '#FFFFFF',
        borderRadius: '6px',
        fontSize: '1rem',
        textAlign: 'center',
        fontWeight: '600',
        border: '2px solid #4a7f26',
        boxShadow: '0 4px 12px rgba(45, 80, 22, 0.3)',
        animation: 'slideIn 0.3s ease-out',
    },
};

export default ContactSection;
