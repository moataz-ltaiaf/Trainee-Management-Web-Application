import React, { useState, useEffect } from 'react';
import ProfileForm from '../ProfileForm';
import ProfileDisplay from '../../ProfileDisplay';
const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  const handleProfileSubmit = (newProfile) => {
    if (newProfile.image) {
      const reader = new FileReader();
      reader.onload = (event) => {
        newProfile.image = event.target.result; // Store image as base64 URL
        setProfile(newProfile);
        localStorage.setItem('userProfile', JSON.stringify(newProfile));
      };
      reader.readAsDataURL(newProfile.image);
    } else {
      setProfile(newProfile);
      localStorage.setItem('userProfile', JSON.stringify(newProfile));
    }
  };

  const handleEdit = () => {
    setProfile(null);
    localStorage.removeItem('userProfile');
  };

  return ( <div>
    {!profile ? (
      <ProfileForm onSubmit={handleProfileSubmit} />
    ) : (
      <ProfileDisplay profile={profile} onEdit={handleEdit} />
    )}
  </div> );
};
 
export default Profile;