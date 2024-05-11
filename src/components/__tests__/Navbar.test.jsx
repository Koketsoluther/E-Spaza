import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { StoreContext } from '../../context/StoreContext';

// Mocking StoreContext functions
const mockGetTotalCartAmount = jest.fn().mockReturnValue(0);

const mockedContextValue = {
  getTotalCartAmount: mockGetTotalCartAmount
};

describe('Navbar component', () => {
  beforeEach(() => {
    mockGetTotalCartAmount.mockClear();
  });

  it('renders Navbar correctly', () => {
    const { getByText } = render(
      <Router>
        <StoreContext.Provider value={mockedContextValue}>
          <Navbar />
        </StoreContext.Provider>
      </Router>
    );
    expect(getByText('E-spaza')).toBeInTheDocument();
    expect(getByText('home')).toBeInTheDocument();
    expect(getByText('orders')).toBeInTheDocument();
    expect(getByText('about Us')).toBeInTheDocument();
    expect(getByText('contact us')).toBeInTheDocument();
  });

  it('activates menu items correctly', () => {
    const { getByText } = render(
      <Router>
        <StoreContext.Provider value={mockedContextValue}>
          <Navbar />
        </StoreContext.Provider>
      </Router>
    );
    fireEvent.click(getByText('orders'));
    expect(getByText('orders')).toHaveClass('active');
  });

  it('renders cart dot when there are items in the cart', () => {
    mockGetTotalCartAmount.mockReturnValue(1);
    const { getByTestId } = render(
      <Router>
        <StoreContext.Provider value={mockedContextValue}>
          <Navbar />
        </StoreContext.Provider>
      </Router>
    );
    expect(getByTestId('cart-dot')).toHaveClass('dot');
  });

//   it('does not render cart dot when there are no items in the cart', () => {
//     const { getByTestId } = render(
//       <Router>
//         <StoreContext.Provider value={mockedContextValue}>
//           <Navbar />
//         </StoreContext.Provider>
//       </Router>
//     );
//     expect(getByTestId('cart-dot')).not.toHaveClass('dot');
//   });
});