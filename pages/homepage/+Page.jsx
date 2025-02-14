import React from 'react';
import Content from './Content';
import NewsletterForm from './NewsletterForm';
import './code.css';

function Page() {
    return (
        <div id="react-root">
            <div className="top-half">
                <Content />
            </div>
            <div className="bottom-half">
                <NewsletterForm />
            </div>
        </div>
    );
}

export { Page };