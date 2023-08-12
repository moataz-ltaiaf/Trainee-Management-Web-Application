import React from 'react';
import './EncadrantComponent.css';

const EncadrantComponent = () => {
  return (
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
      <div className="content">
        {/* Content of the page */}
      </div>
    </div>
  );
};

export default EncadrantComponent;