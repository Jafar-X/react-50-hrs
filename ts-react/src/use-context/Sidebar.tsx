import React, { useContext } from 'react';
import { DashboardContext, useUserContext } from './context';

const Sidebar = () => {
  const user = useUserContext();
  return (
    <div>
      <h2>Sidebar:</h2>
      <li>User Name: {user?.name}</li>
    </div>
  );
};

export default Sidebar;
