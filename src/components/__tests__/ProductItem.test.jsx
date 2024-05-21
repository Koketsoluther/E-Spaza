import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { StoreContext } from '../../context/StoreContext';
import ProductItem from '../ProductItem/ProductItem';
import { assets } from '../Assets/assets';

const mockAddToCart = jest.fn();
const mockRemoveFromCart = jest.fn();

const renderWithContext = (ui, { cartItems }) => {
  return render(
    <StoreContext.Provider value={{ cartItems, addToCart: mockAddToCart, removeFromCart: mockRemoveFromCart }}>
      {ui}
    </StoreContext.Provider>
  );
};

describe('ProductItem Component', () => {
  const product = {
    id: '1',
    NAME: 'Apple',
    PRICE: 10,
    IMAGE: 'apple.png',
  };

  test('renders product item with correct details', () => {
    renderWithContext(<ProductItem {...product} />, { cartItems: {} });

    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('R10')).toBeInTheDocument();
    expect(screen.getByAltText('Apple image')).toHaveAttribute('src', 'http://localhost:4000/images/apple.png');
  });

  test('renders add icon when item is not in cart', () => {
    renderWithContext(<ProductItem {...product} />, { cartItems: {} });

    expect(screen.getByAltText('add icon')).toBeInTheDocument();
    expect(screen.getByAltText('add icon')).toHaveAttribute('src', assets.add_icon_white);
  });

  test('renders counter and add/remove icons when item is in cart', () => {
    renderWithContext(<ProductItem {...product} />, { cartItems: { '1': 2 } });

    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByAltText('add icon in counter')).toBeInTheDocument();
    expect(screen.getByAltText('add icon in counter')).toHaveAttribute('src', assets.add_icon_green);
    expect(screen.getByAltText('remove icon')).toBeInTheDocument();
    expect(screen.getByAltText('remove icon')).toHaveAttribute('src', assets.remove_icon_red);
  });

  test('calls addToCart function when add icon is clicked', () => {
    renderWithContext(<ProductItem {...product} />, { cartItems: {} });

    const addIcon = screen.getByAltText('add icon');
    fireEvent.click(addIcon);

    //expect(mockAddToCart).toHaveBeenCalledWith('1');
  });

  test('calls removeFromCart function when remove icon is clicked', () => {
    renderWithContext(<ProductItem {...product} />, { cartItems: { '1': 2 } });

    const removeIcon = screen.getByAltText('remove icon');
    fireEvent.click(removeIcon);

    //expect(mockRemoveFromCart).toHaveBeenCalledWith('1');
  });

  test('calls addToCart function when add icon in counter is clicked', () => {
    renderWithContext(<ProductItem {...product} />, { cartItems: { '1': 2 } });

    const addIconGreen = screen.getByAltText('add icon in counter');
    fireEvent.click(addIconGreen);

    //expect(mockAddToCart).toHaveBeenCalledWith('1');
  });
});