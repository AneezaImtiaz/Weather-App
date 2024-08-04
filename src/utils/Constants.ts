export const TYPE_HERE = 'Type here...' as const;
export const ENTER_CITY_NAME = 'Enter city name...' as const;
export const GET_WEATHER = 'Get Weather' as const;

export const ServiceOptions = {
    weatherAPI: {
        label: 'Weather-API',
        url: 'https://api.weatherapi.com/v1/current.json?key=b0d7fdcdc29349c7a0d100223241805'
    },
    openWeatherMap: {
        label: 'Weather-Map',
        url: 'https://api.openweathermap.org/data/2.5/weather?appid=dec65e98dc0151e7f1eb1ef81fdf3a6a&units=metric'
    }
} as const;