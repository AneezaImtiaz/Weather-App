import React, { useState } from 'react';
import { Keyboard, SafeAreaView, Pressable, TouchableWithoutFeedback, Text } from 'react-native';
import { TextInputField } from '../components';
import Theme from '../../Theme';
import styles from './HomeScreenStyles';
import { fetchWeatherData } from '../api/WeatherApi'
import { ENTER_CITY_NAME } from '../utils/Constants';

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
  const [weather, setWeather] = useState<WeatherItem | null>(null);

  const getWeather = async () => {
    Keyboard.dismiss();
    try {
      const response = await fetchWeatherData(city);
      setWeather(response);
    } catch (error) {
      console.error(error);
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
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;