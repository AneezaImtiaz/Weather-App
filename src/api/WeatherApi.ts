import axios from 'axios';
import { WeatherItem } from '../../weatherTypes';

export async function fetchWeatherData(url: string): Promise<WeatherItem | null> {
  try {
    const response = await axios.get(url);
    const weatherItem = response?.data;

    if (!weatherItem) {
      throw new Error('No data returned from the API');
    }

    const city = weatherItem?.name || weatherItem?.location?.name;
    const temp = weatherItem?.main?.temp || weatherItem?.current?.temp_c;
    const conditionText = weatherItem?.weather?.[0]?.description || weatherItem?.current?.condition?.text;
    const conditionIcon = weatherItem?.weather?.[0]?.icon
      ? `https://openweathermap.org/img/w/${weatherItem.weather[0].icon}.png`
      : `https:${weatherItem?.current?.condition?.icon}`;

    if (!city || !temp || !conditionText || !conditionIcon) {
      throw new Error('Incomplete data returned from the API');
    }

    return {
      city,
      current: {
        temp,
        condition: {
          text: conditionText,
          icon: conditionIcon,
        },
      },
    };
  } catch (error) {
    console.error(`Error fetching weather data from service ${url}:`, error);
    throw null;
  }
}