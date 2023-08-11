import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      
      <ul>
        <li><a href="/stagiaire">Home</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/stage">Stage</a></li>
        <li><a href="/stage">about</a></li>
        <li><a href="/stage">contactez nous</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;