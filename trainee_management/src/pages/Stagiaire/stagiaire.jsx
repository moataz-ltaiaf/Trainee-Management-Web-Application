import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import './stagiaire.css'

const Stagiaire = () => {
  return (
    <div>
      <div>
      <div className="logost">
        <img src="draxlmaier-logo.png" alt="Logo" />
        <a href="/login">Log Out</a>
      </div>
     
      </div>
      <Navbar/>
      <div className="imagehome">
        <img src="./homeim.jpg"></img>
      </div>
      
   
    </div>
    );
}
 
export default Stagiaire ;