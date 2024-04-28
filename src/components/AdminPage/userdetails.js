import React from 'react';

const StaffDetails = ({ staffId }) => {
  // Fetch shop details based on shopId from API or data source
  // For simplicity, we'll just display the shop ID here
  return (
    <div>
      <h2>Staff Details</h2>
      <p>staff ID: {staffId}</p>
    </div>
  );
};

export default StaffDetails;