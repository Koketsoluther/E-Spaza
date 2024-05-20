import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import StoreContextProvider, { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

jest.mock('@auth0/auth0-react', () => ({
    useAuth0: () => ({
      user: { sub: 'user123' },
      isAuthenticated: true,
    }),
  }));
  
  // Mock axios post
  jest.mock('axios');
  
  describe('StoreContextProvider', () => {
    it('fetches food data and loads cart data on mount', async () => {
        // Mock fetch response for food data
        global.fetch = jest.fn(() =>
          Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ data: [{ _id: '1', PRICE: 10 }] }),
          })
        );
      
        // Mock axios response for cart data
        axios.post.mockResolvedValueOnce({
          data: { cartData: { '1': 2 } },
        });
      
        await act(async () => {
          const { container, getByText } = render(
            <StoreContextProvider>
              <StoreContext.Consumer>
                {(value) => (
                  <div>
                    <div>{JSON.stringify(value.foodData)}</div>
                    <div>{JSON.stringify(value.cartItems)}</div>
                  </div>
                )}
              </StoreContext.Consumer>
            </StoreContextProvider>
          );
      
          // Log the rendered component to the console
          console.log(container.innerHTML);
      
          // Add your assertions based on the rendered component
        });
      });
  
    it('adds item to cart correctly', async () => {
      axios.post.mockResolvedValueOnce({ data: { success: true } });
  
      await act(async () => { // Wrap test logic inside act
        const { getByText } = render(
          <StoreContextProvider>
            <StoreContext.Consumer>
              {(value) => (
                <button onClick={() => value.addToCart('1')}>Add to Cart</button>
              )}
            </StoreContext.Consumer>
          </StoreContextProvider>
        );
  
        fireEvent.click(getByText('Add to Cart'));
  
      
          expect(axios.post).toHaveBeenCalledWith('http://localhost:4000/api/cart/add', {
            itemId: '1',
            userId: 'user123',
          });
       
      });
    });
  
    // Similar tests can be written for removeFromCart, getTotalCartAmount, etc.
  });