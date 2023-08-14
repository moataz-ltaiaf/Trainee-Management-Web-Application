import React, { useState } from 'react';
import '../profileform.css'
import Navbar from '../Navbar';
import Footer from '../Footer';

const ProfileForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, bio, image });
  };

  return (
    <div>
      <Navbar/>
        <div className='profileForm'>
     <form onSubmit={handleSubmit}>
  <label htmlFor="name">Name:</label>
  <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required /><br /><br />
  <label htmlFor="email">Email:</label>
  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br /><br />
  <label htmlFor="bio">Bio:</label>
  <textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)}></textarea><br /><br />
  <label htmlFor="image">Profile Image:</label>
  <input type="file" id="image" onChange={(e) => setImage(e.target.files[0])} accept="image/*" /><br /><br />
  <button type="submit">Create Profile</button>
</form>
</div>
<Footer/>
    </div>
  
   
  );
};

export default ProfileForm;