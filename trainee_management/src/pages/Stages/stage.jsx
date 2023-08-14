import React, { useState } from 'react';
import './stage.css';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const StagesComponent = () => {
  const [stagesData, setStagesData] = useState([
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
  ]);

  const addStage = () => {
    const newStage = {
      title: '',
      description: '',
    };
    setStagesData([...stagesData, newStage]);
  };

  const handleTitleChange = (index, event) => {
    const updatedStages = [...stagesData];
    updatedStages[index].title = event.target.value;
    setStagesData(updatedStages);
  };

  const handleDescriptionChange = (index, event) => {
    const updatedStages = [...stagesData];
    updatedStages[index].description = event.target.value;
    setStagesData(updatedStages);
  };

  return (
    <div className="stages-page">
      <Navbar/>
      <button className="add-stage-button" onClick={addStage}>Ajouter un stage</button>
      {stagesData.map((stage, index) => (
        <div className="stage-block" key={index}>
          <input
            type="text"
            placeholder="Titre du Sujet"
            value={stage.title}
            onChange={(event) => handleTitleChange(index, event)}
          />
          <textarea
            placeholder="Description du Sujet"
            value={stage.description}
            onChange={(event) => handleDescriptionChange(index, event)}
          />
          <button className="apply-button">Apply</button>
        </div>
      ))}
      <Footer/>
    </div>
  );
};

export default StagesComponent;