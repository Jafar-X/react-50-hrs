import React from 'react';

const UserStatus = ({ loggedIn, isAdmin }) => {
  return loggedIn && isAdmin ? 'Welcom Admin!' : loggedIn && 'Welcome User';
};

export default UserStatus;
