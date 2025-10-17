import React from 'react';
import './Guide.css'

const Guide = () => {
  return (
    <section className="guide-section">
 <div className="guide-card">
        <h3>Need a guide?</h3>
        <p>
          Visit our instructions page to find helpful tips, FAQs, and instructions on how to use 
          the site.
        </p>
        <button className="help-button">
          Help
        </button>
      </div>
    </section>
  );
};

export default Guide;