import React, { useState } from 'react';
import { SafeAreaView, Pressable, Text } from 'react-native';
import { TextInputField, ToggleSwitch } from '../components';
import styles from './HomeScreenStyles';
import Theme from '../../Theme';
import { ENTER_CITY_NAME, GET_WEATHER } from '../utils/Constants';

enum ServiceOptions {
    firstService = 'Service-1',
    secondService = 'Service-2',
}

const HomeScreen: React.FC = () => {
    const [city, setCity] = useState<string>('');
    const [activeService, setActiveService] = useState<ServiceOptions>(ServiceOptions.firstService);

    const handleToggle = (service: string) => {
        setActiveService(service as ServiceOptions);
    };

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
                <ToggleSwitch
                    activeOption={activeService}
                    options={[ServiceOptions.firstService, ServiceOptions.secondService]}
                    onToggle={handleToggle}
                />
            </SafeAreaView>
        </SafeAreaView>
    );
};

export default HomeScreen;