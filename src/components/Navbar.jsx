import React from 'react';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/src/assets/India-logo.png" alt="India Flag logo" />
      </div>
      <ul className="navlinks">
        <li className="link">
          <a href="#">Home</a>
        </li>
        <li className="link">
          <a href="#">About</a>
        </li>
        <li className="link">
          <a href="#">Places</a>
        </li>
        <li className="link">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
