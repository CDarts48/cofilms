import React from 'react';
import './code.css';

function NewsletterForm() {
    return (
        <form>
            <h2>Subscribe to our newsletter</h2>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
        </form>
    );
}

export default NewsletterForm;