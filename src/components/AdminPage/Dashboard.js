//import React from 'react';

/*const ShopDetails = ({ shopId }) => {
  let link = 'https://us-central-e-spazadb.cloudfunctions.net/app/api/shops'
  fetch(link)
  .then(response => response.json())
  .then(data => {

  })
  // Fetch shop details based on shopId from API or data source
  // For simplicity, we'll just display the shop ID here
  return (
    <div>
      <h2>Shop Details</h2>
      <p>Shop ID: {shopId}</p>
    </div>
  );
};*/
import { useEffect, useState } from 'react';

const ShopDetails = ({ shopId }) => {
  const [shopNames, setShopNames] = useState([]);

  useEffect(() => {
    const fetchShopNames = async () => {
      try {
        const response = await fetch('https://us-central-e-spazadb.cloudfunctions.net/app/api/shops');
        const data = await response.json();
        // Assuming data is an array of shop objects with a 'name' property
        const names = data.map(shop => shop.name);
        setShopNames(names);
      } catch (error) {
        console.error('Error fetching shop names:', error);
      }
    };

    fetchShopNames();
  }, []);

  return (
    <div>
      <h2>Shop Details</h2>
      <p>Shop Names:</p>
      <ul>
        {shopNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
export default ShopDetails;
