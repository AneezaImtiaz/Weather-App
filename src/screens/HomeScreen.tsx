import React, { useState } from 'react';
import { Keyboard, SafeAreaView, Pressable, TouchableWithoutFeedback, Text } from 'react-native';
import { TextInputField, ActivityIndicatorOverlay, MessageDialog, WeatherCard } from '../components';
import Theme from '../../Theme';
import styles from './HomeScreenStyles';
import { fetchWeatherData } from '../api/WeatherApi'
import { ENTER_CITY_NAME, LOADING, ERROR_MODAL, TRY_AGAIN, CLOSE, GET_WEATHER } from '../utils/Constants';
import { WeatherItem } from '../../weatherTypes';

const HomeScreen: React.FC = () => {

  const [city, setCity] = useState<string>('');
  const [loader, setLoader] = useState<boolean>(false);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
  const [weather, setWeather] = useState<WeatherItem | null>(null);

  const getWeather = async () => {
    Keyboard.dismiss();
    try {
      setLoader(true);
      const response = await fetchWeatherData(city);
      setWeather(response);
    } catch (error) {
      setShowErrorModal(true);
    } finally {
      setLoader(false);
    }
  };

  const handleTextChange = (text: string) => {
    // Filter out non-alphabet characters
    const filteredText = text.replace(/[^a-zA-Z]/g, ' ');
    setCity(filteredText);
  };

  const renderErrorModal = () => {
    return (
      <MessageDialog
        title={ERROR_MODAL.title}
        description={ERROR_MODAL.description}
        button={TRY_AGAIN}
        closeButton={CLOSE}
        onClose={() => setShowErrorModal(false)}
        onButtonClick={() => {
          setShowErrorModal(false);
          getWeather();
        }}
      />
    );
  };
  const renderContent = () => {
    if (loader) {
      return <ActivityIndicatorOverlay label={LOADING} />;
    }

    if (showErrorModal) {
      return renderErrorModal();
    }

    if (weather) {
      return <WeatherCard weatherItem={weather} />;
    }

    return null;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.innerContainer}>
          <TextInputField
            placeholder={ENTER_CITY_NAME}
            text={city}
            onChangeText={handleTextChange} />
          <Pressable onPress={getWeather} style={[styles.buttonContainer, !city && { backgroundColor: Theme.colors.background.disabled }]} >
            <Text style={styles.button}>{GET_WEATHER}</Text>
          </Pressable>
        </SafeAreaView>
        {renderContent()}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;