import React from 'react';
import './stage.css';

const StagesComponent = () => {
  const stagesData = [
    {
      title: 'Titre du Sujet 1',
      description: 'Description du Sujet 1...',
    },
    {
      title: 'Titre du Sujet 2',
      description: 'Description du Sujet 2...',
    },
    {
      title: 'Titre du Sujet 3',
      description: 'Description du Sujet 3...',
    },
    // Ajoutez plus d'objets de données pour plus de blocs
  ];

  return (
    <div className="stages-page">
      <button className="add-stage-button">Ajouter un stage</button> 
      {stagesData.map((stage, index) => (
        <div className="stage-block" key={index}>
          <h2>{stage.title}</h2>
          <p>{stage.description}</p>
          <button className="apply-button">Apply</button>
        </div>
      ))}
    </div>
  );
};

export default StagesComponent;