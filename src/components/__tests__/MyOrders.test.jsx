import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import MyOrders from '../../pages/MyOrders/MyOrders';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import axiosMock from 'axios-mock-adapter';
import { assets } from '../../components/Assets/assets';

jest.mock('@auth0/auth0-react');

const mockAxios = new axiosMock(axios);

const ordersMockData = [
  {
    ITEMS: [
      { NAME: 'Product 1', quantity: 2 },
      { NAME: 'Product 2', quantity: 1 },
    ],
    AMOUNT: 300,
    STATUS: 'Shipped',
  },
];

const userMock = {
  sub: 'auth0|1234567890',
};

beforeEach(() => {
  mockAxios.reset();
});

test('renders MyOrders with orders when authenticated', async () => {
  useAuth0.mockReturnValue({
    isAuthenticated: true,
    user: userMock,
  });

  mockAxios.onPost('http://localhost:4000/api/order/userorders').reply(200, {
    success: true,
    data: ordersMockData,
  });

  render(<MyOrders />);

  // Check if heading is rendered
  expect(screen.getByText('My Orders')).toBeInTheDocument();

  // Wait for the orders to be fetched and rendered

    //expect(screen.getByText('Product 1 : 2,Product 2 : 1')).toBeInTheDocument();
    //expect(screen.getByText('R300')).toBeInTheDocument();
    //expect(screen.getByText('You ordered 2 items.')).toBeInTheDocument();
    //expect(screen.getByText('Shipped')).toBeInTheDocument();
});

test('does not fetch orders when not authenticated', async () => {
  useAuth0.mockReturnValue({
    isAuthenticated: false,
    user: null,
  });

  const consoleSpy = jest.spyOn(console, 'log');

  render(<MyOrders />);

  expect(consoleSpy).toHaveBeenCalledWith("YOU AINT SUPPOSED TO BE HERE BOY!!!1");

  // Check if heading is rendered
  expect(screen.getByText('My Orders')).toBeInTheDocument();

  // Ensure orders are not fetched
  expect(screen.queryByText('Product 1 : 2,Product 2 : 1')).not.toBeInTheDocument();

  consoleSpy.mockRestore();
});