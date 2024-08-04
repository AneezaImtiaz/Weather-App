import { useReducer, useEffect } from 'react';
import { Keyboard } from 'react-native';
import { fetchWeatherData } from '../api/WeatherApi';
import { WeatherItem } from '../../weatherTypes';
import { ServiceOptions } from '../utils/Constants';

type State = {
    city: string;
    loader: boolean;
    weather: WeatherItem | null;
    activeService: string;
};

type Action =
    | { type: 'SET_CITY'; payload: string }
    | { type: 'SET_LOADER'; payload: boolean }
    | { type: 'SET_WEATHER'; payload: WeatherItem | null }
    | { type: 'SET_ACTIVE_SERVICE'; payload: string };

const initialState: State = {
    city: '',
    loader: false,
    weather: null,
    activeService: ServiceOptions.weatherAPI.label,
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_CITY':
            return { ...state, city: action.payload };
        case 'SET_LOADER':
            return { ...state, loader: action.payload };
        case 'SET_WEATHER':
            return { ...state, weather: action.payload };
        case 'SET_ACTIVE_SERVICE':
            return { ...state, activeService: action.payload };
        default:
            return state;
    }
};

const useWeather = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setCity = (city: string) => dispatch({ type: 'SET_CITY', payload: city });
    const setLoader = (loader: boolean) => dispatch({ type: 'SET_LOADER', payload: loader });
    const setWeather = (weather: WeatherItem | null) => dispatch({ type: 'SET_WEATHER', payload: weather });
    const setActiveService = (service: string) => dispatch({ type: 'SET_ACTIVE_SERVICE', payload: service });

    const getWeather = async () => {
        if (!state.city) return;
        try {
            Keyboard.dismiss();
            setLoader(true);
            setWeather(null);
            const serviceOption = Object.values(ServiceOptions).find(option => option.label === state.activeService);
            if (!serviceOption) {
                throw new Error('Invalid weather service');
            }
            const response = await fetchWeatherData(`${serviceOption.url}&q=${state.city}`);
            setWeather(response);
        } catch (error) {
            console.error(error);
        } finally {
            setLoader(false);
        }
    };

    useEffect(() => {
        if (state.city) {
            getWeather();
        }
    }, [state.activeService]);

    return {
        state,
        setCity,
        setActiveService,
        getWeather,
    };
};

export default useWeather;