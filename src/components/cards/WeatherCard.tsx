import React from 'react';
import { Text, Image, ImageBackground, View } from 'react-native';
import styles from './WeatherCardStyles';
import { WeatherItem } from '../../../weatherTypes';
import Theme from '../../../Theme';

type WeatherCardProps = { weatherItem: WeatherItem };

/**
 * This component is meant to be displaying the weather information under card view.
 * @param WeatherCardProps -  This is an object containing props weatherItem of type WeatherItem being used inside this component.
 * @returns UI element for the WeatherCard.
 */
const WeatherCard: React.FC<WeatherCardProps> = ({ weatherItem }) => {
    return (
        <ImageBackground resizeMode="cover" source={Theme.images.weather} style={styles.card}>
            <Text style={styles.location}>{weatherItem?.city}</Text>
            <View style={styles.content}>
                <View>
                    <Text style={styles.temp}>{`${weatherItem?.current?.temp}°`}</Text>
                    <Text style={styles.text}>{weatherItem?.current?.condition?.text}</Text>
                </View>
                <Image testID="conditionIcon" style={styles.currentIcon} source={{ uri: `${weatherItem?.current?.condition?.icon}` }} />
            </View>
        </ImageBackground>
    );
};

export default WeatherCard;