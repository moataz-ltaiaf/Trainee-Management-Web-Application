import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="left-section">
        <img src="draxlmaier-logo.png" alt="Logo" />
      </div>
      <div className="right-section">
        © {new Date().getFullYear()} ENSI. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
