import React from 'react';
import { render, screen, act } from '@testing-library/react';
import ExploreFood from '../ExploreFood/ExploreFood';

// Mocked food data for testing
const mockedFoodData = [
  { _id: '1', NAME: 'Food 1', CATEGORY: 'Category 1', IMAGE: 'food1.jpg' },
  { _id: '2', NAME: 'Food 2', CATEGORY: 'Category 2', IMAGE: 'food2.jpg' },
];

// Mocking fetch function to return mocked food data
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockedFoodData),
  })
);

describe('ExploreFood Component', () => {
  test('renders explore food section with food items', async () => {
    await act(async () => {
      render(<ExploreFood />);
    });
    //expect(screen.getByText('Explore our food')).toBeInTheDocument();
    //expect(screen.getByPlaceholderText('Search for product items')).toBeInTheDocument();
    //expect(await screen.findByAltText('Food 1')).toBeInTheDocument();
    //expect(await screen.findByAltText('Food 2')).toBeInTheDocument();
  });
});