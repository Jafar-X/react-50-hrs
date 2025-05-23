import React from 'react';
import type { AdminInfoList } from '../types/types';

const AdminInfo = ({ admin }: { admin: AdminInfoList }) => {
  return (
    <div>
      <h2>Admin Information</h2>
      <p>ID: {admin.id}</p>
      <p>Name: {admin.name}</p>
      <p>Email: {admin.email}</p>
      <p>Role(s): {admin.role}</p>
      <p>Last Login: {admin.lastLogin.toLocaleDateString()}</p>
    </div>
  );
};

export default AdminInfo;
