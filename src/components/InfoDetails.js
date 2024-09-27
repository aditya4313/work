// src/components/InfoDisplay.js
import React, { useState } from 'react';
import { buttonInfo } from '../Info/ButtonData';
import ImageCircle from './imagcircle'; // Import the ImageCircle component


const InfoDisplay = () => {
  const [activeKey, setActiveKey] = useState('');

  const handleClick = (key) => {
    setActiveKey(key);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', padding: '20px', position: 'relative' }}>
   
      
      {/* Image Circle Behind */}
      <ImageCircle />

     

      {/* Information Section */}
      <div style={{ textAlign: 'center', marginRight: '0px', padding: '400px' , marginTop: -200}}>
        {/* <h2 style={{ fontSize: '24px' }}>Information</h2> */}
        <div
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            backgroundColor: '#cb4163', // Light red background with transparency
            borderRadius: '50%', // Make it circular
            width: '300px', // Increased width
            height: '300px', // Increased height
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto', // Center the circle
            position: 'relative', // Position relative for the z-index
            zIndex: 1, // Bring this above the image circle
            opacity: 0.8, // Adjust opacity for transparency
          }}
        >
          <p style={{ color: 'black', margin: 0, textAlign: 'center', fontSize: '16px' }}>
            {activeKey ? buttonInfo[activeKey] : 'Click an item to see the information'}
          </p>
        </div>
      </div>

      {/* Container for the options */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 'auto' }}>
        {/* <h2 style={{ fontSize: '24px' }}>Options</h2> */}
        <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center' , marginTop: -200}}>
          {Object.keys(buttonInfo).map((key) => (
            <li
              key={key}
              style={{
                margin: '15px 0', // Increased margin
                cursor: 'pointer',
                color: activeKey === key ? 'white' : 'black',
                backgroundColor: activeKey === key ? '#cb4163' : 'transparent',
                padding: '15px', // Increased padding
                borderRadius: '30px 0 0 30px', // Border radius adjustments
                width: '250px', // Fixed width
                textAlign: 'right', // Align text to the right
                fontSize: '18px', // Increased font size
                transition: 'background-color 0.3s ease',
                display: 'flex', // Flex to position elements
                alignItems: 'center', // Center items vertically
              }}
              onClick={() => handleClick(key)}
            >
              <span>{'<'}</span>
              <span style={{ marginLeft: '10px' }}> {/* Add margin for spacing */}
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfoDisplay;
