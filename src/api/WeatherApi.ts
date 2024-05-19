import axios from 'axios';
import { WeatherItem } from '../screens/HomeScreen';

const API_KEY = 'b0d7fdcdc29349c7a0d100223241805';
const BASE_URL = 'https://api.weatherapi.com/v1';

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
    const weatherItem: WeatherItem =
      response?.data;
    return weatherItem;
  } catch (error) {
    console.error(`Error fetching weather data of city ${cityName}:`, error);
    throw null;
  }
}
