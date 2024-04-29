import React, { useState } from 'react';

const StaffForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const permissions = [];
    if (isAdmin) {
      permissions.push('admin');
    }
    if (isUser) {
      permissions.push('user');
    }
    const newStaffMember = {
      name: name,
      email: email,
      permissions: permissions
    };
    console.log('New Staff Member:', newStaffMember);
    // You can send this data to a server or perform any other action here
    // For simplicity, we are just logging the new staff member object
  };

  return (
    <div>
      <h1>Add New Staff Member</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />

        <label htmlFor="isAdmin">Admin Permission:</label>
        <input
          type="checkbox"
          id="isAdmin"
          name="isAdmin"
          checked={isAdmin}
          onChange={(e) => setIsAdmin(e.target.checked)}
        /><br />

        <label htmlFor="isUser">User Permission:</label>
        <input
          type="checkbox"
          id="isUser"
          name="isUser"
          checked={isUser}
          onChange={(e) => setIsUser(e.target.checked)}
        /><br />

        <button type="submit">Add Staff Member</button>
      </form>
    </div>
  );
};

export default StaffForm;