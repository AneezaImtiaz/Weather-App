import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { TextInputField } from '../src/components';
import { TYPE_HERE } from '../src/utils/Constants';

describe('TextInputField', () => {

    const mockOnChangeText = jest.fn();

    it('renders correctly with initial text and placeholder', () => {
        const { getByPlaceholderText } = render(
            <TextInputField text="Initial Text" onChangeText={mockOnChangeText} placeholder={"Enter your name"} />
        );
        const input = getByPlaceholderText("Enter your name");
        expect(input.props.value).toBe("Initial Text");
    });

    it('renders correctly with default placeholder when none is provided', () => {
        const { getByPlaceholderText } = render(
            <TextInputField text="" onChangeText={mockOnChangeText} />
        );
        expect(getByPlaceholderText(TYPE_HERE)).toBeTruthy();
    });

    it('calls onChangeText when text changes', () => {
        const { getByPlaceholderText } = render(
            <TextInputField text="" placeholder="Enter your name" onChangeText={mockOnChangeText} />
        );

        const input = getByPlaceholderText('Enter your name');
        fireEvent.changeText(input, 'New text');

        expect(mockOnChangeText).toHaveBeenCalledWith('New text');
        expect("New text").toBeTruthy();
    });
});