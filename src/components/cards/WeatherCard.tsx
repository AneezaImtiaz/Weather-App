import React from 'react';
import { Text, Image, ImageBackground, View, FlatList } from 'react-native';
import styles from './WeatherCardStyles';
import { WeatherItem, HourForecast } from '../../../weatherTypes';
import moment from 'moment';
import Theme from '../../../Theme';

type WeatherCardProps = { weatherItem: WeatherItem };

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherItem }) => {

  const renderForecastItem = ({ item }: { item: HourForecast }) => {
    return (
      <View style={styles.item}>
        <Text >{moment(item?.time).format('h A')}</Text>
        <Image style={styles.icon} source={{ uri: `https:${item?.condition?.icon}` }} />
        <Text style={styles.hourTemp} >{item?.temp_c}°</Text>
      </View>
    );
  };

  return (
    <ImageBackground resizeMode="cover" source={Theme.images.weather} style={styles.card}>

      <Text style={styles.location}>{`${weatherItem?.location?.name}, ${weatherItem?.location?.country}`.toUpperCase()}</Text>
      <Text style={styles.temp}>{weatherItem?.current?.temp_c}°</Text>
      <Text style={styles.text} >{weatherItem?.current?.condition?.text}</Text>

      <FlatList
        data={weatherItem?.nextFiveHoursForecast}
        renderItem={renderForecastItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.forecast} />

    </ImageBackground>
  );
};

export default WeatherCard;
