import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../LoginForm/LoginButton';

jest.mock('@auth0/auth0-react');

describe('LoginButton component', () => {
  test('renders Sign In button when not authenticated', () => {
    //Mocking isAuthenticated as false
    useAuth0.mockReturnValue({ isAuthenticated: false });

    const { getByTestId } = render(<LoginButton />);
    const signInButton = getByTestId('signinTest');

    expect(signInButton).toBeInTheDocument();
    expect(signInButton.textContent).toBe('Sign In');
  });

  test('does not render Sign In button when authenticated', () => {
    // Mocking isAuthenticated as true
    useAuth0.mockReturnValue({ isAuthenticated: true });

    const { queryByTestId } = render(<LoginButton />);
    const signInButton = queryByTestId('signinTest');
    expect(signInButton).toBeNull();
  });

  test('calls loginWithRedirect when Sign In button is clicked', () => {
    const loginWithRedirectMock = jest.fn();
    //mocking loginWithRedirect and isAuthenticated

    useAuth0.mockReturnValue({ isAuthenticated: false, loginWithRedirect: loginWithRedirectMock });
    const { getByTestId } = render(<LoginButton />);
    const signInButton = getByTestId('signinTest');
    fireEvent.click(signInButton);
    expect(loginWithRedirectMock).toHaveBeenCalled();
  });
});
