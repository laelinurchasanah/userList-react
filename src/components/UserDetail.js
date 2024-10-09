// src/components/UserDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { userId } = useParams();

  // Dummy user data for demonstration
  const user = { id: userId, name: `User ${userId}`, email: `user${userId}@example.com` };

  return (
    <div>
      <h2>User Detail</h2>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetail;
