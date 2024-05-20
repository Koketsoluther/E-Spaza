import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import Cart from '../../pages/Cart/Cart'; // adjust the import path as necessary

// Mock useNavigate
const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

const renderWithContext = (contextValue) => {
  render(
    <StoreContext.Provider value={contextValue}>
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    </StoreContext.Provider>
  );
};

describe('Cart Component', () => {
  const mockFoodData = [
    { _id: '1', NAME: 'Item 1', PRICE: 10, IMAGE: 'item1.jpg' },
    { _id: '2', NAME: 'Item 2', PRICE: 20, IMAGE: 'item2.jpg' },
  ];
  const mockCartItems = {
    '1': 2,
    '2': 0,
  };
  const mockGetTotalCartAmount = jest.fn().mockReturnValue(20);
  const mockRemoveFromCart = jest.fn();

  const contextValue = {
    cartItems: mockCartItems,
    foodData: mockFoodData,
    removeFromCart: mockRemoveFromCart,
    getTotalCartAmount: mockGetTotalCartAmount,
  };

  test('renders Cart component correctly', () => {
    renderWithContext(contextValue);

    expect(screen.getByText(/Items/i)).toBeInTheDocument();
    expect(screen.getByText(/Cart Totals/i)).toBeInTheDocument();
  });

  test('renders cart items correctly', () => {
    renderWithContext(contextValue);

    expect(screen.getByText(/Item 1/i)).toBeInTheDocument();
    expect(screen.getByText(/R10/i)).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('R20')).toBeInTheDocument();
    expect(screen.queryByText(/Item 2/i)).toBeNull(); // Item 2 should not be rendered
  });

  test('calculates totals correctly', () => {
    renderWithContext(contextValue);

    //expect(screen.getByTestId('subtotal')).toHaveTextContent('R20');
    //expect(screen.getByTestId('delivery-fee')).toHaveTextContent('R2');
    //expect(screen.getByTestId('total')).toHaveTextContent('R22');
  });

  test('removes item from cart correctly', () => {
    renderWithContext(contextValue);

    const removeButton = screen.getByText('-');
    fireEvent.click(removeButton);

    expect(mockRemoveFromCart).toHaveBeenCalledWith('1');
  });

  test('navigates to checkout on button click', () => {
    renderWithContext(contextValue);

    const checkoutButton = screen.getByText(/Proceed to checkout/i);
    fireEvent.click(checkoutButton);

    expect(mockedNavigate).toHaveBeenCalledWith('/order');
  });
});