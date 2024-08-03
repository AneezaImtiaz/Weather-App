import { StackNavigationOptions } from '@react-navigation/stack';
import Theme from '../../Theme';
import styles from './DefaultScreenOptionsStyles';

const screenOptions: StackNavigationOptions = {
  headerTitleStyle: styles.title,
  headerStyle: styles.header,
  headerTitleAlign: 'center',
};

export default screenOptions;