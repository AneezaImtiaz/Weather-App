import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { TextInputField } from '../components';
import styles from './HomeScreenStyles';
import { ENTER_CITY_NAME } from '../utils/Constants';

const HomeScreen: React.FC = () => {

  const [city, setCity] = useState<string>('');

  const handleTextChange = (text: string) => {
    // Filter out non-alphabet characters
    const filteredText = text.replace(/[^a-zA-Z]/g, ' ');
    setCity(filteredText);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.innerContainer}>
        <TextInputField
          placeholder={ENTER_CITY_NAME}
          text={city}
          onChangeText={handleTextChange} />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default HomeScreen;