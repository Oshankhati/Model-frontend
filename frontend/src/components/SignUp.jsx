
import React, { useState } from 'react';
import './SignUp.css';
import backgroundImage from '../assets/background-image.jpg'; // Full background image
import knightIcon from '../assets/knight-chess-piece.png';    // ♞ knight icon

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div
      className="page-wrapper"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="signup-box">
        <div className="logo">
          <img src={knightIcon} alt="Knight" />
          <span>InSureAi</span>
        </div>

        <p className="tagline">The Smartest Move in Insurance Tech</p>

        <form className="form" onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter a password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm the password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit" className="signup-button">Create an account</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
