import React, { useState } from 'react';
import './BlurImage.css';

const BlurImage = ({ src, alt }) => {
  const [isBlurred, setIsBlurred] = useState(true);

  const handleClick = () => {
    setIsBlurred(!isBlurred);
  };

  return (
    <div className="image-container">
      <img
        src={src}
        alt={alt}
        className={`image ${isBlurred ? 'blurred' : 'clear'}`}
       
      />
      {isBlurred && (
        <button  onClick={handleClick}  className="blurred-button">Pay 40$ to see</button>
      )}
    </div>
  );
};

export default BlurImage;
