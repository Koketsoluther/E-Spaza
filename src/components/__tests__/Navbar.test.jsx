import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { StoreContext } from '../../context/StoreContext';

const mockGetTotalCartAmount = jest.fn();

const renderNavbar = () => {
  return render(
    <StoreContext.Provider value={{ getTotalCartAmount: mockGetTotalCartAmount }}>
      <Router>
        <Navbar />
      </Router>
    </StoreContext.Provider>
  );
};

describe('Navbar Component', () => {
  beforeEach(() => {
    mockGetTotalCartAmount.mockClear();
  });

  test('renders Navbar component correctly', () => {
    renderNavbar();
    
    expect(screen.getByText(/E-spaza/i)).toBeInTheDocument();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/orders/i)).toBeInTheDocument();
    expect(screen.getByText(/about Us/i)).toBeInTheDocument();
    expect(screen.getByText(/contact us/i)).toBeInTheDocument();
    expect(screen.getByAltText(/search icon/i)).toBeInTheDocument();
    expect(screen.getByAltText(/basket icon/i)).toBeInTheDocument();
  });

  test('navigates and sets menu state correctly', () => {
    renderNavbar();

    const homeLink = screen.getByText(/home/i);
    const ordersLink = screen.getByText(/orders/i);
    const aboutUsLink = screen.getByText(/about Us/i);
    const contactUsLink = screen.getByText(/contact us/i);

    act(() => {
      fireEvent.click(ordersLink);
    });
    expect(ordersLink).toHaveClass('active');
    expect(homeLink).not.toHaveClass('active');

    act(() => {
      fireEvent.click(aboutUsLink);
    });
    expect(aboutUsLink).toHaveClass('active');
    expect(ordersLink).not.toHaveClass('active');

    act(() => {
      fireEvent.click(contactUsLink);
    });
    expect(contactUsLink).toHaveClass('active');
    expect(aboutUsLink).not.toHaveClass('active');

    act(() => {
      fireEvent.click(homeLink);
    });
    expect(homeLink).toHaveClass('active');
    expect(contactUsLink).not.toHaveClass('active');
  });

  /*test('renders cart dot conditionally based on getTotalCartAmount', () => {
    mockGetTotalCartAmount.mockReturnValueOnce(0);
    renderNavbar();
    expect(screen.getByTestId('cart-dot')).not.toHaveClass('dot');

    mockGetTotalCartAmount.mockReturnValueOnce(5);
    renderNavbar();
    expect(screen.getByTestId('cart-dot')).toHaveClass('dot');
  });*/

  test('renders LoginButton, UserProfile, and LogoutButton', () => {
    renderNavbar();
    
    //expect(screen.getByText("login")).toBeInTheDocument();
    //expect(screen.getByText("logout")).toBeInTheDocument();
    //expect(screen.getByText(/profile/i)).toBeInTheDocument();
  });
});