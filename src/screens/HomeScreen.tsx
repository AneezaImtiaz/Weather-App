import React, { useState } from 'react';
import { Keyboard, SafeAreaView, Pressable, TouchableWithoutFeedback, Text } from 'react-native';
import { TextInputField, ActivityIndicatorOverlay } from '../components';
import Theme from '../../Theme';
import styles from './HomeScreenStyles';
import { fetchWeatherData } from '../api/WeatherApi'
import { ENTER_CITY_NAME, LOADING } from '../utils/Constants';

export type WeatherItem = {
  current: {
    condition: {
      text: string;
      icon: string;
    };
  };
  location: {
    name: string;
    country: string;
  };
  forecast: {
    forecastday: [{
      hour: [{
        time: string,
        condition: {
          text: string;
          icon: string;
        };
      }];
    }];
  };
};

const HomeScreen: React.FC = () => {

  const [city, setCity] = useState<string>('');
  const [loader, setLoader] = useState<boolean>(false);
  const [weather, setWeather] = useState<WeatherItem | null>(null);

  const getWeather = async () => {
    Keyboard.dismiss();
    try {
      setLoader(true);
      const response = await fetchWeatherData(city);
      setWeather(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoader(false);
    }
  };

  const handleTextChange = (text: string) => {
    // Filter out non-alphabet characters
    const filteredText = text.replace(/[^a-zA-Z]/g, ' ');
    setCity(filteredText);
  };

  const renderButton = () => {
    return (
      <Pressable onPress={getWeather} style={[styles.buttonContainer, !city && { backgroundColor: Theme.colors.background.disabled }]} >
        <Text style={styles.button}>{'Get Weather'}</Text>
      </Pressable>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.innerContainer}>
          <TextInputField
            placeholder={ENTER_CITY_NAME}
            text={city}
            onChangeText={handleTextChange} />
          {renderButton()}
        </SafeAreaView>
        {loader && <ActivityIndicatorOverlay label={LOADING} />}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;