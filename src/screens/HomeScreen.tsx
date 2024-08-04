import React from 'react';
import { SafeAreaView, Pressable, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInputField, ToggleSwitch, ActivityIndicatorOverlay, WeatherCard } from '../components';
import styles from './HomeScreenStyles';
import Theme from '../../Theme';
import useWeather from '../hooks/useWeather';
import { LOADING, ENTER_CITY_NAME, GET_WEATHER, ServiceOptions } from '../utils/Constants';

const HomeScreen: React.FC = () => {
    const { state, setCity, setActiveService, getWeather } = useWeather();

    const handleTextChange = (text: string) => {
        const alphaRegex = /^[a-zA-Z\s]*$/;
        if (alphaRegex.test(text)) {
            setCity(text);
        }
    };

    const renderContent = () => {
        if (state.loader) {
            return <ActivityIndicatorOverlay label={LOADING} />;
        }
        if (state.city && state.weather) {
            return <WeatherCard weatherItem={state.weather} />
        }
        return null;
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <View style={styles.innerContainer}>
                    <TextInputField
                        placeholder={ENTER_CITY_NAME}
                        text={state.city}
                        onChangeText={handleTextChange}
                    />
                    <Pressable
                        onPress={getWeather}
                        style={[styles.buttonContainer, !state.city && { backgroundColor: Theme.colors.background.disabled }]}>
                        <Text style={styles.button}>{GET_WEATHER}</Text>
                    </Pressable>
                    <ToggleSwitch
                        activeOption={state.activeService}
                        options={[ServiceOptions.weatherAPI.label, ServiceOptions.openWeatherMap.label]}
                        onToggle={setActiveService}
                        disabled={!state.city ? true : false}
                    />
                </View>
                {renderContent()}
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default HomeScreen;