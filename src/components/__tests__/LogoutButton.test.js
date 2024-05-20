import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../LoginForm/LogoutButton';

jest.mock('@auth0/auth0-react');

describe('LogoutButton component', () => {
  /*test('does not renders log out button when not authenticated', () => {
    //Mocking isAuthenticated as false
    useAuth0.mockReturnValue({ isAuthenticated: false });

    const { getByTestId } = render(<LogoutButton />);
    const logOutButton = getByTestId('signoutTest');

    expect(logOutButton).toBeNull();
  });*/

  test('render logout button when authenticated', () => {
    // Mocking isAuthenticated as true
    useAuth0.mockReturnValue({ isAuthenticated: true });

    const { getByTestId } = render(<LogoutButton/>);
    const logOutButton = getByTestId('signoutTest');
    expect(logOutButton).toBeInTheDocument();
    expect(logOutButton.textContent).toBe('Sign Out');

  });

  
});
