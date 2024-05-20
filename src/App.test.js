import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { StoreContext } from './context/StoreContext'; // Adjust the import path as needed
import { useAuth0 } from '@auth0/auth0-react';

// Mock useAuth0
jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    user: { sub: 'user123' },
    isAuthenticated: true,
  }),
}));

// Mock StoreContext values
const mockStoreContextValue = {
  getTotalCartAmount: jest.fn().mockReturnValue(100),
  cartItems: { '1': 2 },
  foodData: [{ _id: '1', PRICE: 50 }],
};

test('renders Navbar, PlaceOrder, and Footer components', async () => {
  render(
    <MemoryRouter initialEntries={['/order']}>
      <StoreContext.Provider value={mockStoreContextValue}>
        <App />
      </StoreContext.Provider>
    </MemoryRouter>
  );

  
    expect(screen.getByTestId('navbar')).toBeInTheDocument();


  
    expect(screen.getByTestId('place-order')).toBeInTheDocument();
 

  
    expect(screen.getByTestId('footer')).toBeInTheDocument();

});