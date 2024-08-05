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
    error: boolean;
};

type Action =
    { type: 'SET_CITY'; payload: string }
    | { type: 'SET_LOADER'; payload: boolean }
    | { type: 'SET_WEATHER'; payload: WeatherItem | null }
    | { type: 'SET_ACTIVE_SERVICE'; payload: string }
    | { type: 'SET_ERROR'; payload: boolean };

const initialState: State = {
    city: '',
    loader: false,
    weather: null,
    activeService: ServiceOptions.weatherAPI.label,
    error: false,
};

/**
 * This function is responsible to manage the state of the weather component.
 * @param state - The current state of the component.
 * @param action - The action dispatched to modify the state.
 * @returns The new state after applying the action passed.
 */
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_CITY':
            return { ...state, city: action.payload, weather: null };
        case 'SET_LOADER':
            return { ...state, loader: action.payload, weather: action.payload ? null : state.weather };
        case 'SET_WEATHER':
            return { ...state, weather: action.payload };
        case 'SET_ACTIVE_SERVICE':
            return { ...state, activeService: action.payload };
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

/**
 * This is a custom hook component to manage the state and actions related to weather.
 * @returns An object containing the state and action dispatchers.
 */
const useWeather = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setCity = (city: string) => dispatch({ type: 'SET_CITY', payload: city });
    const setLoader = (loader: boolean) => dispatch({ type: 'SET_LOADER', payload: loader });
    const setWeather = (weather: WeatherItem | null) => dispatch({ type: 'SET_WEATHER', payload: weather });
    const setActiveService = (service: string) => dispatch({ type: 'SET_ACTIVE_SERVICE', payload: service });
    const setError = (error: boolean) => dispatch({ type: 'SET_ERROR', payload: error });

    /**
     * This function is responsible for fetching the current weather information for the city entered.
     * - Uses the active weather service for it.
     */
    const getWeather = async () => {
        try {
            Keyboard.dismiss();
            setLoader(true);
            const serviceOption = Object.values(ServiceOptions).find(option => option.label === state.activeService);
            if (!serviceOption) {
                throw new Error('Invalid weather service');
            }
            const response = await fetchWeatherData(`${serviceOption.url}&q=${state.city}`);
            setWeather(response);
        } catch (error) {
            setError(true);
        } finally {
            setLoader(false);
        }
    };

    /**
     * Fetches the weather data whenever the active service changes.
     */
    useEffect(() => {
        if (state.city) {
            getWeather();
        }
    }, [state.activeService]);

    return {
        state,
        setCity,
        setError,
        setActiveService,
        getWeather,
    };
};

export default useWeather;