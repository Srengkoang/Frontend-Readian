import React from 'react';
import './Header.css';

const Header = () => {
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 40px',
    backgroundColor: '#C0FFB3',
  };

  return (
    <header style={headerStyle}>
      <div className="logo">
        <a href="/">
          <img src="/logo png.svg" alt="Readian Logo" width="50" />
        </a>
      </div>

      <div className="search-container">
        <input type="text" placeholder="Search" name="search" />
      </div>

      <nav>
        <ul className="nav-list">
          <li>Home</li>
          <li>Browse</li>
          <li>Help</li>
          <li>Subscribe</li>
          <li>Sign Up</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

