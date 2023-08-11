import React, { useState } from 'react';
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="logincontainer">
      <form className="signupForm" onSubmit={handleSubmit}>
        
        <fieldset className="signupEmail">
          <legend>Email:</legend>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </fieldset>
        <fieldset className="signupPassword">
          <legend>Password:</legend>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </fieldset>
        <button type="submit">Continue</button>
        <p>Don't have an account?<Link to="/">Sign up</Link></p>
        
      </form>
    </div>
  );
};

export default LoginForm;