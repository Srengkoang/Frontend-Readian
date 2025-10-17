import React from 'react';
import './BrowsingTags.css';

const LayeredImages = () => {

  const tags = [
    "Romance", "Horror", "Sci-fi", "Fantasy",
    "Mystery", "Thriller", "Supernatural", "Poetry"
  ];

  return (
      <div className="tags-section">
        <h2>Browse through various tags</h2>
        <div className="tag-grid">
          {tags.map(tag => (
            <button key={tag} className="tag-button">
              <div className="tag-dot"></div>
              {tag}
            </button>
          ))}
        </div>
      </div>
  );
};

export default LayeredImages;
