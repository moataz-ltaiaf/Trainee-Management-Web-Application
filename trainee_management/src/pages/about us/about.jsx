import React from 'react';
import './about.css';
import Navbar from '../../Navbar';

const AboutUsComponent = () => {
  return (
    <div className="about-us-page">
      <div className="video-background">
        <iframe
          src="https://www.youtube.com/embed/A0GTD5l6u7M?autoplay=1&mute=1"  // Lien YouTube avec autoplay et mute
          title="Notre Histoire Video"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div className='aboutnav'> <Navbar/></div>
     
      <div className="content">
        
     
        <h2>Notre Histoire</h2>
        <p>
          C'est en 1974, que DRÄXLMAIER choisit la Tunisie pour établir à Sousse son premier site de production hors de l'Allemagne.
          Du petit atelier d'assemblage de composants électriques avec une toute petite équipe de 10 ouvriers, sa présence en Tunisie
          a évolué au fil des 45 années passées pour culminer vers une activité foisonnante autour d'une large équipe de quelques 10 000
          employés répartie sur 5 sites de production.
        </p>
      </div>
    </div>
  );
};

export default AboutUsComponent;