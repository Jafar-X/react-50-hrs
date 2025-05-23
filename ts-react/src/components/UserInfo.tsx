import React from 'react';
import type { Info } from '../types/types';

const UserInfo = ({ user }: { user: Info }) => {
  return (
    <div>
      <h2>User Information</h2>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>email:{user.email}</p>
    </div>
  );
};

export default UserInfo;
