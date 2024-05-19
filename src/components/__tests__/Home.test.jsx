import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../pages/Home/Home';

jest.mock('../../components/Header/Header', () => () => <div data-testid="header">Header</div>);
jest.mock('../../components/ExploreFood/ExploreFood', () => ({ category, setCategory }) => (
  <div data-testid="explore-food">
    ExploreFood
    <div>Category: {category}</div>
    <button onClick={() => setCategory('New Category')}>Set Category</button>
  </div>
));
jest.mock('../../components/ProductDisplay/ProductDisplay', () => ({ category }) => (
  <div data-testid="food-display">FoodDisplay - {category}</div>
));

describe('Home Component', () => {
  test('renders Header, ExploreFood, and FoodDisplay components', () => {
    render(<Home />);
    
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('explore-food')).toBeInTheDocument();
    expect(screen.getByTestId('food-display')).toBeInTheDocument();
  });

  test('passes the correct category prop to ExploreFood and FoodDisplay', () => {
    render(<Home />);
    
    expect(screen.getByText('Category: All')).toBeInTheDocument();
    expect(screen.getByText('FoodDisplay - All')).toBeInTheDocument();
  });

  test('updates category state when setCategory is called', () => {
    render(<Home />);
    
    const button = screen.getByText('Set Category');
    fireEvent.click(button);
    
    expect(screen.getByText('Category: New Category')).toBeInTheDocument();
    expect(screen.getByText('FoodDisplay - New Category')).toBeInTheDocument();
  });
});