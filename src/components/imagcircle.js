// src/components/ImageCircle.js
import React from 'react';
// Adjust the path if necessary

const ImageCircle = () => {
  return (
    <div style={{
      position: 'absolute',
      bottom: '300px', // Adjust this to control the overlap with the info circle
      left: '54%', // Center horizontally
      transform: 'translateX(-50%)', // Center the image circle
      width: '300px', // Circle width
      height: '300px', // Circle height
      borderRadius: '50%', // Make it circular
      overflow: 'hidden', // Clip the image to the circle
      zIndex: -1, // Send it behind the info circle
      backgroundColor: 'rgba(255, 0, 0, 0.1)', // Light red background with transparency
    }}>
      <img
        src="https://img.freepik.com/premium-photo/minded-smart-clever-little-girl-study-laptop-think-thoughts_274222-26660.jpg?w=2000" // Use the imported image
        alt="Circular Background"
        style={{
          width: '100%', // Cover the circle area
          height: '100%',
          objectFit: 'cover', // Cover the circle without stretching
          position: 'absolute', // Position the image absolutely within the div
          top: '50%', // Center vertically
          left: '50%', // Center horizontally
          transform: 'translate(-50%, -50%)', // Adjust for centering
          opacity: 0.8, // Adjust the opacity of the image
        }}
      />
    </div>
  );
};

export default ImageCircle;
