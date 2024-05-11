import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ExploreFood from '../ExploreFood/ExploreFood';

describe('ExploreFood component', () => {
    test('renders loading state initially', () => {
        render(<ExploreFood />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    test('renders error message if fetching data fails', async () => {
        jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('Failed to fetch data'));
        
        render(<ExploreFood />);
        
        await waitFor(() => {
            expect(screen.getByText('Error: Failed to fetch data')).toBeInTheDocument();
        });
    });

    test('renders food items after data is fetched', async () => {
        const mockFoodData = [
            { NAME: 'Food 1', CATEGORY: 'Category 1', IMAGE: 'image1.jpg' },
            { NAME: 'Food 2', CATEGORY: 'Category 2', IMAGE: 'image2.jpg' }
        ];
        jest.spyOn(global, 'fetch').mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(mockFoodData)
        });

        render(<ExploreFood />);

        
        expect(screen.getByTestId('explore-food-component')).toBeInTheDocument();
        expect(screen.queryByText('Loading...')).toBeNull();
        expect(screen.queryByText('Error: Failed to fetch data')).toBeNull();
        expect(screen.getAllByRole('listitem')).toHaveLength(2);
        
    });

    test('filters food items based on search query', async () => {
        const mockFoodData = [
            { NAME: 'Apple', CATEGORY: 'Fruit', IMAGE: 'apple.jpg' },
            { NAME: 'Banana', CATEGORY: 'Fruit', IMAGE: 'banana.jpg' },
            { NAME: 'Pizza', CATEGORY: 'Fast Food', IMAGE: 'pizza.jpg' }
        ];
        jest.spyOn(global, 'fetch').mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(mockFoodData)
        });

        render(<ExploreFood />);

        
        expect(screen.getAllByRole('listitem')).toHaveLength(3);
        

        fireEvent.change(screen.getByPlaceholderText('Search for product items'), { target: { value: 'Apple' } });

      
        expect(screen.getAllByRole('listitem')).toHaveLength(1);
        expect(screen.getByText('Apple')).toBeInTheDocument();
        

        fireEvent.change(screen.getByPlaceholderText('Search for product items'), { target: { value: 'Food' } });
        expect(screen.getAllByRole('listitem')).toHaveLength(2);
        expect(screen.getByText('Apple')).toBeInTheDocument();
        expect(screen.getByText('Banana')).toBeInTheDocument();
        
    });
});