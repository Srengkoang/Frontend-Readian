import React from 'react';
import "./ReadianInformation.css";

const ReadianInformation = () => {
    return (
 <div className="readian-section">
                <div className="readian-content">
                    <h2>
                        What is <span className="brand-highlight">Readian</span>?
                    </h2>
                    <p>
                        Readian is a platform made for public users to read, write, and share stories amongst each other.
                        Let your creativity flow unbounded into your works. Write about anything you can think of, from 
                        magic wielding warlocks, to your average Jim working the local bar.
                    </p>
                </div>
                <div className="book-stack-container">
                    <img className="book-stack-image"
                     src="image 1.svg"  
                     alt="Stack of colorful books" 
                    />
                </div>
            </div>
    );
};

export default ReadianInformation