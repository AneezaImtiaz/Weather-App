import React from 'react';
import { SafeAreaView, Pressable, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInputField, ToggleSwitch, ActivityIndicatorOverlay, WeatherCard, MessageDialog } from '../components';
import styles from './HomeScreenStyles';
import Theme from '../../Theme';
import useWeather from '../hooks/useWeather';
import { LOADING, ERROR_MODAL, CLOSE, TRY_AGAIN, ENTER_CITY_NAME, GET_WEATHER, ServiceOptions } from '../utils/Constants';

const HomeScreen: React.FC = () => {
    const { state, setCity, setActiveService, getWeather, setError } = useWeather();

    /**
     * This function is responsible for the validation of input entered.
     * @param text - It takes text input which user has enter in the input field.
     */
    const handleTextChange = (text: string) => {
        const alphaRegex = /^[a-zA-Z\s]*$/;
        if (alphaRegex.test(text)) {
            setCity(text);
        }
    };

    /**
     * This function is meant to be displaying the specific content depending on the status of state.
     * @returns Specific UI element depending on the current status of state.
     */
    const renderContent = () => {
        if (state?.loader) {
            return <ActivityIndicatorOverlay label={LOADING} />;
        }
        if (state?.error) {
            return (
                <MessageDialog
                    title={ERROR_MODAL.title}
                    description={ERROR_MODAL.description}
                    button={TRY_AGAIN}
                    closeButton={CLOSE}
                    onClose={() => setError(false)}
                    onButtonClick={() => {
                        setError(false);
                        getWeather();
                    }}
                />
            );
        }
        if (state?.weather) {
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
                        text={state?.city}
                        onChangeText={handleTextChange}
                    />
                    <Pressable
                        disabled={!state?.city ? true : false}
                        onPress={getWeather}
                        style={[styles.buttonContainer, !state?.city && { backgroundColor: Theme.colors.background.disabled, opacity: 0.6 }]}>
                        <Text style={styles.button}>{GET_WEATHER}</Text>
                    </Pressable>
                    <ToggleSwitch
                        activeOption={state.activeService}
                        options={[ServiceOptions.weatherAPI.label, ServiceOptions.openWeatherMap.label]}
                        onToggle={setActiveService}
                        disabled={!state?.city ? true : false}
                    />
                </View>
                {renderContent()}
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default HomeScreen;