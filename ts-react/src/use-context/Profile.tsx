import React, { useContext } from 'react';
import { DashboardContext } from './context';

const Profile = () => {
  const user = useContext(DashboardContext);
  return <div>
    <h2>User Profile:</h2>
    <ul>
        <li>User name: {user.name}</li>
        <li>Subscription Status: {user.isSubscribed}</li>
    </ul>
  </div>;
};

export default Profile;
