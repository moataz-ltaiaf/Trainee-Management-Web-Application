import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      
      <ul>
        <li><a href="/stagiaire">Home</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/stages">Stage</a></li>
        <li><a href="/about">about</a></li>
        <li><a href="/contact">contactez nous</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;