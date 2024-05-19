import React from 'react';
import { Text, Image, ImageBackground, View } from 'react-native';
import styles from './WeatherCardStyles';
import { WeatherItem, HourForecast } from '../../screens/HomeScreen';
import moment from 'moment';
import Theme from '../../../Theme';

type WeatherCardProps = { weatherItem: WeatherItem };

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherItem }) => {

  const getNextFiveHoursForecast = () => {
    if (!weatherItem?.forecast?.forecastday?.length) return [];

    const now = new Date();
    const currentHour = now.getHours();
    const todayHours = weatherItem?.forecast?.forecastday[0]?.hour?.filter((hour: HourForecast) => {
      const hourDate = new Date(hour?.time);
      return hourDate.getHours() >= currentHour;
    });

    let nextHours = todayHours?.slice(0, 5);
    if (nextHours?.length < 5) {
      // If today's remaining hours are less than 5, take some from the next day
      const neededHours = 5 - nextHours?.length;
      const tomorrowHours = weatherItem?.forecast?.forecastday[1]?.hour.slice(0, neededHours) ?? [];
      nextHours = nextHours.concat(tomorrowHours);
    }

    return nextHours;
  };

  const renderForecastItem = (hour: HourForecast, index: number) => {
    return (
      <View key={index} style={styles.item}>
        <Text >{moment(hour?.time).format('h A')}</Text>
        <Image style={styles.icon} source={{ uri: `https:${hour?.condition?.icon}` }} />
        <Text style={styles.hourTemp} >{hour?.temp_c}°</Text>
      </View>
    );
  };

  return (
    <ImageBackground resizeMode="cover" source={Theme.images.weather} style={styles.card}>

      <Text style={styles.location}>{`${weatherItem?.location?.name}, ${weatherItem?.location?.country}`.toUpperCase()}</Text>
      <Text style={styles.temp}>{weatherItem?.current?.temp_c}°</Text>
      <Text style={styles.text} >{weatherItem?.current?.condition?.text}</Text>

      <View style={styles.forecast}>
        {getNextFiveHoursForecast()?.map((hour: HourForecast, index: number) =>
          renderForecastItem(hour, index)
        )}
      </View>
    </ImageBackground>
  );
};

export default WeatherCard;
