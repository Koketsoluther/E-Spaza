import React from 'react';
import { render } from '@testing-library/react';
import UserProfile from '../UserProfile';
import { useAuth0 } from '@auth0/auth0-react';

// Mocking useAuth0 hook
jest.mock('@auth0/auth0-react');

describe('UserProfile component', () => {
  test('renders user profile when authenticated', () => {
    // Mock user data and isAuthenticated flag
    const testUser = {
      name: 'Koketso',
      picture: 'https://example.com/test.jpg',
      'https://my-app.example.com/roles': 'Admin',
    };
    useAuth0.mockReturnValue({ user: testUser, isAuthenticated: true });

    const { getByText, getByAltText } = render(<UserProfile />);

    // Check if user data is rendered
    expect(getByAltText(testUser.name)).toBeInTheDocument();
    expect(getByText(`name:${testUser.name}`)).toBeInTheDocument();
    expect(getByText(testUser['https://my-app.example.com/roles'])).toBeInTheDocument();
  });

  test('does not render user profile when not authenticated', () => {
    // Mock isAuthenticated as false
    useAuth0.mockReturnValue({ isAuthenticated: false });

    const { queryByTestId } = render(<UserProfile />);

    // Check if user profile elements are not rendered
    expect(queryByTestId('user-profile')).toBeNull();
  });
});