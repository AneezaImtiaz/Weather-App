import React from 'react';
import { render } from '@testing-library/react-native';
import { WeatherCard } from '../src/components';
import { WeatherItem } from '../weatherTypes';
import styles from '../src/components/cards/WeatherCardStyles';

const mockWeatherItem: WeatherItem = {
    city: 'San Francisco',
    current: {
        temp: 20,
        condition: {
            text: 'Sunny',
            icon: 'https://example.com/icon.png',
        },
    },
};

const incompleteWeatherItem: WeatherItem = {
    city: 'San Francisco',
    current: {
        temp: 20,
        condition: {
            text: '',
            icon: '',
        },
    },
};

describe('WeatherCard', () => {
    it('renders correctly with given weather item', () => {
        const { getByText, getByTestId } = render(<WeatherCard weatherItem={mockWeatherItem} />);

        expect(getByText('San Francisco')).toBeTruthy();
        expect(getByText('20°')).toBeTruthy();
        expect(getByText('Sunny')).toBeTruthy();
        expect(getByTestId('conditionIcon').props.source).toMatchObject({ uri: 'https://example.com/icon.png' });

    });

    it('renders correctly with incomplete weather item', () => {
        const { getByText, queryByText, getByTestId } = render(<WeatherCard weatherItem={incompleteWeatherItem} />);

        expect(getByText('San Francisco')).toBeTruthy();
        expect(getByText('20°')).toBeTruthy();
        expect(queryByText('Sunny')).toBeNull();
        expect(getByTestId('conditionIcon').props.source).toMatchObject({ uri: '' });
    });

    it('applies correct styles to elements', () => {
        const { getByText, getByTestId } = render(<WeatherCard weatherItem={mockWeatherItem} />);

        const locationText = getByText('San Francisco');
        const tempText = getByText('20°');
        const conditionText = getByText('Sunny');
        const image = getByTestId('conditionIcon');

        expect(locationText.props.style).toEqual(styles.location);
        expect(tempText.props.style).toEqual(styles.temp);
        expect(conditionText.props.style).toEqual(styles.text);
        expect(image.props.style).toEqual(styles.currentIcon);
    });
});