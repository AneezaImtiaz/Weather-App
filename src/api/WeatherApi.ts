import axios from 'axios';
import { WeatherItem, HourForecast } from '../../weatherTypes';
import { API_KEY, BASE_URL } from '@env';

const getNextFiveHoursForecast = (weatherItem: WeatherItem): HourForecast[] => {
  if (!weatherItem?.forecast?.forecastday?.length) return [];

  const now = new Date(weatherItem?.location?.localtime);
  const currentHour = now.getHours();
  const todayHours = weatherItem?.forecast?.forecastday[0]?.hour?.filter((hour: HourForecast) => {
    const hourDate = new Date(hour?.time);
    return hourDate.getHours() > currentHour;
  });

  let nextHours = todayHours?.slice(0, 5);
  if (nextHours?.length < 5) {
    // If today's remaining hours are less than 5, take some from the next day
    const neededHours = 5 - nextHours?.length;
    const tomorrowHours = weatherItem?.forecast?.forecastday[1]?.hour.slice(0, neededHours) ?? [];
    nextHours = nextHours.concat(tomorrowHours);
  }

  return nextHours;
};

export async function fetchWeatherData(
  cityName: string,
): Promise<WeatherItem | null> {
  try {
    const response = await axios.get(`${BASE_URL}/forecast.json`, {
      params: {
        key: API_KEY,
        q: cityName,
        days: 2,
      }
    });
    const weatherItem: WeatherItem = {
      ...response?.data,
      nextFiveHoursForecast: getNextFiveHoursForecast(response?.data),
    };
    return weatherItem;
  } catch (error) {
    console.error(`Error fetching weather data of city ${cityName}:`, error);
    throw null;
  }
}
