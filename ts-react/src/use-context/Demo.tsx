import React from 'react';
import { useState } from 'react';
import Dashboard from './Dashboard';
import { DashboardContext } from './context';

export interface User {
  isSubscribed: boolean;
  name: string;
}

const Demo = () => {
  const [user] = useState<User>({
    isSubscribed: true,
    name: 'Jafar Sadik',
  });
  return (
    <div>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
};

export default Demo;
