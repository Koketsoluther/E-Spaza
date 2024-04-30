import React, { useState } from 'react';
import userDetails from './userdetails';

const UserManagement = () => {
  const [selecteduserId, setSelecteduserId] = useState(null);

  const users = [
    { id: 1, name: 'Staff member 1' },
    { id: 2, name: 'Staff member 2' },
    { id: 3, name: 'Staff member 3' },
    // Add more shop data as needed
  ];

  const handleSelectuser = (userId) => {
    setSelecteduserId(userId);
  };

  return (
    <div>
      {selecteduserId ? (
        <userDetails userId={selecteduserId} />
      ) : (
        <div>
          <h2>Staff list</h2>
          <ul>
            {users.map((user) => (
              <li key={user.id} onClick={() => handleSelectuser(user.id)}>
                {user.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
