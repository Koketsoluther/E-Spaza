import React from 'react';

const ShopDetails = ({ shopId }) => {
  // Fetch shop details based on shopId from API or data source
  // For simplicity, we'll just display the shop ID here
  return (
    <div>
      <h2>Shop Details</h2>
      <p>Shop ID: {shopId}</p>
    </div>
  );
};

export default ShopDetails;
