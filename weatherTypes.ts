type WeatherCondition = {
  text: string;
  icon: string;
}

type CurrentWeather = {
  condition: WeatherCondition;
  temp: number;
}


export type WeatherItem = {
  current: CurrentWeather;
  city: string;
}
