import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from '../Home.jsx';
import userEvent from '@testing-library/user-event';



describe('Home', () => {

    test('should clear the query, after refresh button is clicked', async () => {
        render(<Home />);
        const inputElement = screen.getByPlaceholderText(/Search/i);
        const refreshButton = screen.getByRole('button', { name: /refresh/i });
        fireEvent.change(inputElement, { target: { value: 'Give me something...' } });
        fireEvent.click(refreshButton);
        expect(inputElement.value).toBe('');
    });


    test('shows the length of rendered artworks', async () => {
        render(<Home />);
        await waitFor(() => expect(screen.getAllByTestId(/card-item/i)).toHaveLength(10));
    });


    test('show the length of rendered artworks after changing result value', async () => {
        render(<Home />);
        userEvent.selectOptions(screen.getByTestId('select'), '10');
        await waitFor(() => expect(screen.getAllByTestId(/card-item/i)).toHaveLength(10));
    });

});





