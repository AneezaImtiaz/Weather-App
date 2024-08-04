import React, { useState, useEffect } from 'react';
import { SafeAreaView, Pressable, Text } from 'react-native';
import { TextInputField, ToggleSwitch } from '../components';
import styles from './HomeScreenStyles';
import Theme from '../../Theme';
import { fetchWeatherData } from '../api/WeatherApi'
import { ENTER_CITY_NAME, GET_WEATHER, ServiceOptions } from '../utils/Constants';

const HomeScreen: React.FC = () => {
    const [city, setCity] = useState<string>('');
    const [activeService, setActiveService] = useState<string>(ServiceOptions.weatherAPI.label);

    const handleToggle = (service: string) => {
        setActiveService(service);
    };

    const handleTextChange = (text: string) => {
        const alphaRegex = /^[a-zA-Z\s]*$/;
        alphaRegex.test(text) && setCity(text); // Enter valid input 
    };


    const getWeather = async () => {
        try {
            const url = Object.values(ServiceOptions).find(option => option.label === activeService)?.url;
            if (!url) {
                throw new Error('Invalid weather service');
            }
            const response = await fetchWeatherData(`${url}&q=${city}`);
        } catch (error) {
        }
    };

    useEffect(() => {
        if (city) {
            getWeather();
        }
    }, [activeService]);

    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.innerContainer}>
                <TextInputField
                    placeholder={ENTER_CITY_NAME}
                    text={city}
                    onChangeText={handleTextChange} />
                <Pressable onPress={getWeather} style={[styles.buttonContainer, !city && { backgroundColor: Theme.colors.background.disabled }]} >
                    <Text style={styles.button}>{GET_WEATHER}</Text>
                </Pressable>
                <ToggleSwitch
                    activeOption={activeService}
                    options={[ServiceOptions.weatherAPI.label, ServiceOptions.openWeatherMap.label]}
                    onToggle={handleToggle}
                />
            </SafeAreaView>
        </SafeAreaView>
    );
};

export default HomeScreen;