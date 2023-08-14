import React from 'react';
import './Encadrant.css';

import Footer from '../../Footer';

const EncadrantComponent = () => {
  return (
    <div>
      <div className="encadrant-page">
    <nav className="navbar">
      <h1>Encadrant Dashboard</h1>
      <ul className="nav-list">
        <li><a href="#">Ajouter Stagiaire</a></li>
        <li><a href="#">Supprimer Stagiaire</a></li>
        <li><a href="#">Stagiaires</a></li>
        <li><a href="#">Modifier</a></li>
        {/* Add more menu items as needed */}
      </ul>
    </nav>
   
  </div>
  <Footer/>
  </div>
    

  );
};

export default EncadrantComponent;