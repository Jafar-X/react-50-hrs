import React, { useContext } from 'react';
import { DashboardContext, useUserContext } from './context';

const Profile = () => {
  const user = useUserContext();
  return (
    <div>
      <h2>User Profile:</h2>
      <ul>
        <li>User name: {user.name}</li>
        <li>Subscription Status: {user.isSubscribed}</li>
      </ul>
    </div>
  );
};

export default Profile;
