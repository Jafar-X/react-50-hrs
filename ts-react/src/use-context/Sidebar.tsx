import React, { useContext } from 'react';
import { DashboardContext } from './context';

const Sidebar = () => {
  const user = useContext(DashboardContext);
  return (
    <div>
      <h2>Sidebar:</h2>
      <li>User Name: {user?.name}</li>
    </div>
  );
};

export default Sidebar;
