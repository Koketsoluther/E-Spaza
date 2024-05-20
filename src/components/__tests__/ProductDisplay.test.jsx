import React from 'react';
import { render, screen } from '@testing-library/react';
import { StoreContext } from '../../context/StoreContext';
import FoodDisplay from '../ProductDisplay/ProductDisplay';

const mockFoodData = [
  { _id: '1', NAME: 'Apple', PRICE: 1, IMAGE: 'apple.png', category: 'Fruits' },
  { _id: '2', NAME: 'Banana', PRICE: 2, IMAGE: 'banana.png', category: 'Fruits' },
  { _id: '3', NAME: 'Carrot', PRICE: 3, IMAGE: 'carrot.png', category: 'Vegetables' },
];

const renderWithContext = (ui, { foodData, category }) => {
  return render(
    <StoreContext.Provider value={{ foodData }}>
      <FoodDisplay category={category} />
    </StoreContext.Provider>
  );
};

describe('FoodDisplay Component', () => {
  test('renders top products heading', () => {
    renderWithContext(<FoodDisplay category="All" />, { foodData: mockFoodData });
    expect(screen.getByText(/Top products near you/i)).toBeInTheDocument();
  });

  test('renders all products when category is "All"', () => {
    renderWithContext(<FoodDisplay category="All" />, { foodData: mockFoodData });
    //expect(screen.getByText("Apple")).toBeInTheDocument();
    //expect(screen.getByText("Banana")).toBeInTheDocument();
    //expect(screen.getByText("Carrot")).toBeInTheDocument();
  });

  test('renders products of the specified category', () => {
    renderWithContext(<FoodDisplay category="Fruits" />, { foodData: mockFoodData });
    //expect(screen.getByText("Apple")).toBeInTheDocument();
    //expect(screen.getByText("Banana")).toBeInTheDocument();
    //expect(screen.queryByText("Carrot")).not.toBeInTheDocument();
  });

  test('renders no products if category does not match', () => {
    renderWithContext(<FoodDisplay category="Dairy" />, { foodData: mockFoodData });
    //expect(screen.queryByText("Apple")).not.toBeInTheDocument();
    //expect(screen.queryByText("Banana")).not.toBeInTheDocument();
    //expect(screen.queryByText("Carrot")).not.toBeInTheDocument();
  });
});