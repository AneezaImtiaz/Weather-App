import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ToggleSwitch } from '../src/components';
import Theme from '../Theme';

const mockOptions = ['Option 1', 'Option 2'];

describe('ToggleSwitch', () => {

    const onToggleMock = jest.fn();

    it('renders correctly with given options', () => {
        const { getByText } = render(
            <ToggleSwitch
                activeOption="Option 1"
                options={mockOptions}
                onToggle={() => { }}
            />
        );

        expect(getByText('Option 1')).toBeTruthy();
        expect(getByText('Option 2')).toBeTruthy();
    });

    it('calls onToggle with the correct option when pressed', () => {
        const onToggleMock = jest.fn();
        const { getByText } = render(
            <ToggleSwitch
                activeOption="Option 1"
                options={mockOptions}
                onToggle={onToggleMock}
            />
        );

        fireEvent.press(getByText('Option 2'));
        expect(onToggleMock).toHaveBeenCalledWith('Option 2');
    });

    it('applies correct styles to active and inactive options', () => {
        const { getByText } = render(
            <ToggleSwitch
                activeOption="Option 1"
                options={mockOptions}
                onToggle={() => { }}
            />
        );

        const activeOption = getByText('Option 1');
        const inactiveOption = getByText('Option 2');

        expect(activeOption.props.style).toContainEqual(expect.objectContaining({ color: Theme.colors.background.default }));
        expect(inactiveOption.props.style).toContainEqual(expect.objectContaining({ color: Theme.colors.primary.default }));
    });

    it('disables the toggle when disabled prop is true', () => {
        const { getByText } = render(
            <ToggleSwitch
                activeOption="Option 1"
                options={mockOptions}
                onToggle={onToggleMock}
                disabled={true}
            />
        );

        fireEvent.press(getByText('Option 2'));
        expect(onToggleMock).not.toHaveBeenCalled();
    });

    it('applies correct styles when disabled', () => {
        const { getByText, getByTestId } = render(
            <ToggleSwitch
                activeOption="Option 1"
                options={mockOptions}
                onToggle={() => { }}
                disabled={true}
            />
        );

        const activeOption = getByTestId('toggle-Option 1');
        const inactiveOption = getByText('Option 2');

        expect(activeOption.props.style).toMatchObject({ backgroundColor: Theme.colors.background.disabled, opacity: 0.6 });
        expect(inactiveOption.props.style).toContainEqual(expect.objectContaining({ color: Theme.colors.background.disabled }));
    });
});