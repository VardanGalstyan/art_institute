import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QueryInput from '../QueryInput.jsx';

const mockedSetQuery = jest.fn();

describe('QueryInput', () => {
    test('should render input element', async () => {
        render(
            <QueryInput
                query={''}
                setQuery={mockedSetQuery}
            />
        );
        const inputElement = screen.getByPlaceholderText('Search');
        expect(inputElement).toBeInTheDocument();
    });

    test('should allow typing into the input field', async () => {
        render(
            <QueryInput
                setQuery={mockedSetQuery}
            />
        );
        const inputElement = screen.getByPlaceholderText('Search');
        fireEvent.change(inputElement, { target: { value: 'Give me something...' } });
        expect(inputElement.value).toBe('Give me something...');
    });

});