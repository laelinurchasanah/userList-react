// src/components/UserList.js
import React from 'react';
import { Link } from 'react-router-dom';

const users = [
  { id: 1, name: 'Laeli Nurchasanah' },
  { id: 2, name: 'Minatozaki Sana' },
  { id: 3, name: 'Myoi Mina' },
];

const UserList = () => {
  return (
    <div>
      <h2>List of Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user-detail/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
