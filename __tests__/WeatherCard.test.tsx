import React from 'react';
import { render } from '@testing-library/react-native';
import { WeatherCard } from '../src/components';
import { HourForecast } from '../weatherTypes';
import moment from 'moment';

const weatherItemMock = {
  location: {
    name: 'London', country: 'UK',
    localtime: '2021-01-01 01:14'
  },
  current: {
    temp_c: 10,
    condition: { text: 'Cloudy', icon: '//cdn.weatherapi.com/weather/64x64/day/116.png' }
  },
  nextFiveHoursForecast: [
    { time: '2021-01-01 01:00', temp_c: 21, condition: { icon: '//cdn.weatherapi.com/weather/64x64/night/116.png', text: 'Partly cloudy' } },
    { time: '2021-01-01 02:00', temp_c: 12, condition: { icon: '//cdn.weatherapi.com/weather/64x64/night/116.png', text: 'Heavy rain' } },
    { time: '2021-01-01 03:00', temp_c: 20, condition: { icon: '//cdn.weatherapi.com/weather/64x64/day/116.png', text: 'Cloudy' } },
    { time: '2021-01-01 04:00', temp_c: 17.2, condition: { icon: '//cdn.weatherapi.com/weather/64x64/night/116.png', text: 'Snow' } },
    { time: '2021-01-01 05:00', temp_c: 14, condition: { icon: '//cdn.weatherapi.com/weather/64x64/day/116.png', text: 'Partly cloudy' } },
  ],
};

describe('WeatherCard', () => {

  it('renders correctly location and current temperature', () => {
    const { getByText, getByTestId } = render(
      <WeatherCard weatherItem={weatherItemMock} />
    );
    expect(getByText('LONDON, UK')).toBeTruthy();
    const tempText = getByTestId('currentTemp');
    expect(tempText.props.children).toBe('10°');
  });

  it('renders correctly weather condition', () => {
    const { getByTestId } = render(
      <WeatherCard weatherItem={weatherItemMock} />
    );
    const conditionText = getByTestId('currentCondition');
    expect(conditionText.props.children).toBe('Cloudy');
  });

  it('renders correctly hourly forecasts', () => {
    const { getAllByText } = render(
      <WeatherCard weatherItem={weatherItemMock} />
    );

    weatherItemMock.nextFiveHoursForecast.forEach((hour: HourForecast) => {
      const formattedTime = moment(hour.time).format('h A'); // Formats to 12-hour time with AM/PM
      expect(getAllByText(formattedTime).length).toBe(1);

      const tempString = `${hour?.temp_c}°`;
      expect(getAllByText(tempString).length).toBe(1);
    });
  });
});