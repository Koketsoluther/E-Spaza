import React from 'react';
import { render } from '@testing-library/react';
import UserProfile from '../UserProfile';
import { useAuth0 } from '@auth0/auth0-react';

// Mocking useAuth0 hook
jest.mock('@auth0/auth0-react');

describe('UserProfile component', () => {
  
  test('does not render user profile when not authenticated', () => {
    // Mock isAuthenticated as false
    useAuth0.mockReturnValue({ isAuthenticated: false });
    const { queryByTestId } = render(<UserProfile />);
    // Check if user profile elements are not rendered
    expect(queryByTestId('user-profile')).toBeNull();
  });
});