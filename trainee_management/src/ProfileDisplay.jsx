import React from 'react';
import './profile.css'
import Navbar from './Navbar';
import Footer from './Footer';

const ProfileDisplay = ({ profile, onEdit }) => {
  return (
    <div> 
      <div className="logost">
        <img src="draxlmaier-logo.png" alt="Logo" />
        <a href="/login">Log Out</a>
      </div>
      <Navbar/>
      <div className='display'>
    <h1>Profile</h1>
    {profile.image && (
      <div className='profileim'>
        <p><strong>Profile Image:</strong></p>
        <img src={profile.image} alt="Profile" style={{ maxWidth: '200px' }} />
      </div>
    )}
    <p><strong>Name:</strong> {profile.name}</p>
    <p><strong>Email:</strong> {profile.email}</p>
    <p><strong>Bio:</strong> {profile.bio}</p>
    
    
    <button onClick={onEdit}>Edit Profile</button>
  </div>
  <Footer/>
  </div>
   
  );
};

export default ProfileDisplay;