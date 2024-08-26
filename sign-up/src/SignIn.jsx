import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css'; // Assuming you have a separate CSS file for styling
import logo from '../src/assets/logo.png'

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Sign-In Form submitted:', formData);
    // Navigate to the main page after successful sign in
    navigate('/home');
  };

  return (
    <div className="signin-page">
      <div className="signin-image">
        <img
          src={logo}
          alt="Sign In Illustration"
        />
      </div>
      <div className="signin-form-container">
        <form className="signin-form" onSubmit={handleSubmit}>
          <h2>Sign In</h2>

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="signin-btn">Sign In</button>

          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
