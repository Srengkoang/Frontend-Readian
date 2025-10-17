import React from "react";
import "./Trending.css";

function Trending() {
  return (
    <section className="trending-section">
    <h2>See <span>Trending</span> Stories</h2>
      <div className="trending-cards">
        <div className="card">Story 1</div>
        <div className="card">Story 2</div>
        <div className="card">Story 3</div>
        <div className="card">Story 4</div>
        <div className="card">Story 5</div>
      </div>
    </section>
  );
}

export default Trending;
