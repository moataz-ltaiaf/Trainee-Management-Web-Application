import React, { useEffect, useRef } from 'react';
import './accueil.css';
import { Link } from 'react-router-dom';
const Homepage = () => {
  const welcomeTextRef = useRef(null);
  const welcomeMessage = "Draexlmaeir welcomes you to its staff";
  const intervalDelay = 100; // Délai entre chaque apparition de lettre (en millisecondes)

  useEffect(() => {
    animateWelcomeMessage();
  }, []);

  const animateWelcomeMessage = () => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex === welcomeMessage.length) {
        clearInterval(intervalId);
      } else {
        const currentText = welcomeMessage.substring(0, currentIndex + 1);
        welcomeTextRef.current.innerHTML = currentText;
        currentIndex++;
      }
    }, intervalDelay);
  };

  return (
    <div className="homepage">
      <div className="left-part">
        <div className="welcome-message" ref={welcomeTextRef}></div>
      </div>
      <div className="right-part">
        <div className="get-started">GET STARTED</div>
        <div className="button-container">
      <a href="/login">
        <button className="login-btn">Log in</button>
      </a>
      <a href="/">
        <button className="signup-btn">Sign up</button>
      </a>
      
    </div>
      </div>
    </div>
  );
};

export default Homepage;