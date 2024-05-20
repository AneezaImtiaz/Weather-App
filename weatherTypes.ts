type WeatherCondition = {
  text: string;
  icon: string;
}

export type HourForecast = {
  time: string;
  temp_c: number;
  condition: WeatherCondition;
}

type ForecastDay = {
  hour: HourForecast[];
}

type WeatherForecast = {
  forecastday: ForecastDay[];
}

type CurrentWeather = {
  condition: WeatherCondition;
  temp_c: number;
}

type LocationInfo = {
  name: string;
  country: string;
  localtime: string;
}

export type WeatherItem = {
  current: CurrentWeather;
  location: LocationInfo;
  forecast?: WeatherForecast;
  nextFiveHoursForecast: HourForecast[];
}
