import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { MessageDialog } from '../src/components';

describe('MessageDialog', () => {

    it('renders the title and description correctly', () => {
        const { getByText } = render(
            <MessageDialog title="Test Title" description="Test Description" />
        );
        expect(getByText('Test Title')).toBeTruthy();
        expect(getByText('Test Description')).toBeTruthy();
    });

    it('does not render description when none is provided', () => {
        const { queryByText } = render(
            <MessageDialog title="Test Title" />
        );
        expect(queryByText('Test Description')).toBeNull();
    });

    it('calls onButtonClick when the button is pressed', () => {
        const mockOnButtonClick = jest.fn();
        const { getByText } = render(
            <MessageDialog title="Test Title" button="Click Me" onButtonClick={mockOnButtonClick} />
        );
        fireEvent.press(getByText('Click Me'));
        expect(mockOnButtonClick).toHaveBeenCalled();
    });

    it('calls onClose when the close button is pressed', () => {
        const mockOnClose = jest.fn();
        const { getByText } = render(
            <MessageDialog title="Test Title" closeButton="Close" onClose={mockOnClose} />
        );
        fireEvent.press(getByText('Close'));
        expect(mockOnClose).toHaveBeenCalled();
    });

    it('renders buttons conditionally based on props', () => {
        const { queryByText, rerender } = render(
            <MessageDialog title="Test Title" />
        );

        expect(queryByText('Click Me')).toBeNull();
        expect(queryByText('Close')).toBeNull();

        rerender(
            <MessageDialog title="Test Title" button="Click Me" closeButton="Close" />
        );

        expect(queryByText('Click Me')).not.toBeNull();
        expect(queryByText('Close')).not.toBeNull();
    });
});