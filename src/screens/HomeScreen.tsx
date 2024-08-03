import React, { useState } from 'react';
import { SafeAreaView, Pressable, Text } from 'react-native';
import { TextInputField } from '../components';
import styles from './HomeScreenStyles';
import Theme from '../../Theme';
import { ENTER_CITY_NAME, GET_WEATHER } from '../utils/Constants';

const HomeScreen: React.FC = () => {
    const [city, setCity] = useState<string>('');

    const handleTextChange = (text: string) => {
        const alphaRegex = /^[a-zA-Z\s]*$/;
        alphaRegex.test(text) && setCity(text); // Enter valid input 
    };

    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.innerContainer}>
                <TextInputField
                    placeholder={ENTER_CITY_NAME}
                    text={city}
                    onChangeText={handleTextChange} />
                <Pressable onPress={() => null} style={[styles.buttonContainer, !city && { backgroundColor: Theme.colors.background.disabled }]} >
                    <Text style={styles.button}>{GET_WEATHER}</Text>
                </Pressable>
            </SafeAreaView>
        </SafeAreaView>
    );
};

export default HomeScreen;