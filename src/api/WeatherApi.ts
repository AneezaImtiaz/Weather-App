import axios from 'axios';
import { WeatherItem } from '../../weatherTypes';

const extractWeatherData = (data: any): WeatherItem => {
  const city = data?.name || data?.location?.name;
  const temp = data?.main?.temp || data?.current?.temp_c;
  const conditionText = data?.weather?.[0]?.description || data?.current?.condition?.text;
  const conditionIcon = data?.weather?.[0]?.icon
  ? `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
  : `https:${data?.current?.condition?.icon}`;

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
};

export async function fetchWeatherData(url: string): Promise<WeatherItem | null> {
  try {
    const response = await axios.get(url);
    const weatherItem = response?.data;

    if (!weatherItem) {
      throw new Error('No data returned from the API');
    }

    return extractWeatherData(weatherItem);
  } catch (error) {
    console.error(`Error fetching weather data from service ${url}:`, error);
    throw null;
  }
}