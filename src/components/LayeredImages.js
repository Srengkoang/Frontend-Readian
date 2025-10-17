import React from 'react';
import "./LayeredImages.css";

const LayeredImages = () => {
  return (
      <div className="image-section">
        
        <div className="content-area">
          <h1>
            Discover Your New <span className="highlight">Favorite</span> Stories!
          </h1>
          <p>
            Read and explore our vast catalog of works! Find literary works that interest you!
            Or start writing your own!
          </p>
          <button className="browse-button">
            Browse
          </button>
        </div>

        <div className="image-stack-Layer">
            <div className="image-card card1">
            <img 
                src="image1.jpg" 
                alt="First" 
            />
            </div>
            <div className="image-card card2">
            <img 
                src="image2.jpg" 
                alt="Second" 
            />
            </div>
            <div className="image-card card3">
            <img 
                src="image3.jpg" 
                alt="Third" 
            />
            </div>
        </div>
      </div>
  );
};

export default LayeredImages;
