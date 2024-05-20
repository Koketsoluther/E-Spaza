import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import PlaceOrder from '../../pages/PlaceOrder/PlaceOrder';
import { StoreContext } from '../../context/StoreContext';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

jest.mock('@auth0/auth0-react');
jest.mock('axios');

describe('PlaceOrder', () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      user: { sub: 'user123' },
      isAuthenticated: true,
    });

    axios.post.mockResolvedValueOnce({ data: 'Order placed successfully' });
  });

  it('updates form data on input change', () => {
    const { getByPlaceholderText } = render(
      <StoreContext.Provider value={{ getTotalCartAmount: jest.fn(), cartItems: {}, foodData: [] }}>
        <PlaceOrder />
      </StoreContext.Provider>
    );
    const firstNameInput = getByPlaceholderText('First Name');

    fireEvent.change(firstNameInput, { target: { value: 'John' } });

    expect(firstNameInput.value).toBe('John');
  });

  it('submits form with correct data', async () => {
    const getTotalCartAmount = jest.fn().mockReturnValue(20);
    const cartItems = { '1': 2 };
    const foodData = [{ _id: '1', PRICE: 10 }];

    const { getByPlaceholderText, getByText } = render(
      <StoreContext.Provider value={{ getTotalCartAmount, cartItems, foodData }}>
        <PlaceOrder />
      </StoreContext.Provider>
    );

    const firstNameInput = getByPlaceholderText('First Name');
    const lastNameInput = getByPlaceholderText('Last Name');
    const emailInput = getByPlaceholderText('Email');
    const streetInput = getByPlaceholderText('Street');
    const cityInput = getByPlaceholderText('City');
    const provinceInput = getByPlaceholderText('Province');
    const postalcodeInput = getByPlaceholderText('Postal code');
    const countryInput = getByPlaceholderText('Country');
    const phoneInput = getByPlaceholderText('Phone');
    const placeOrderButton = getByText('PLACE ORDER');

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(streetInput, { target: { value: '123 Main St' } });
    fireEvent.change(cityInput, { target: { value: 'New York' } });
    fireEvent.change(provinceInput, { target: { value: 'NY' } });
    fireEvent.change(postalcodeInput, { target: { value: '12345' } });
    fireEvent.change(countryInput, { target: { value: 'USA' } });
    fireEvent.change(phoneInput, { target: { value: '123-456-7890' } });

    fireEvent.click(placeOrderButton);

    
      expect(axios.post).toHaveBeenCalledWith('http://localhost:4000/api/order/place', {
        ADDRESS: {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@example.com',
          street: '123 Main St',
          city: 'New York',
          province: 'NY',
          postalcode: '12345',
          country: 'USA',
          phone: '123-456-7890',
        },
        ITEMS: [{ _id: '1', PRICE: 10, quantity: 2 }],
        AMOUNT: 22,
        userId: 'user123',
      });
    
  });
});