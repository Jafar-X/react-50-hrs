import React from 'react';

const ProfileCard = () => {
  const style = {
    backgroundColor: 'lightgrey',
    padding: '15px',
    borderRadius: '8px',
    color: 'black',
  };
  return (
    <div style={style}>
      <h1>This is css object</h1>
      <p>Here style object defined previously then called inside component</p>
    </div>
  );
};

export default ProfileCard;
