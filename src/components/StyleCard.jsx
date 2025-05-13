import React from 'react';

const StyleCard = () => {
  return (
    <div
      style={{
        backgroundColor: 'lightblue',
        padding: '20px',
        borderRadius: '10px',
        color: 'darkblue',
      }}
    >
      <h1>Inline CSS example</h1>
      <p>This is component styled with inline css</p>
    </div>
  );
};

export default StyleCard;
