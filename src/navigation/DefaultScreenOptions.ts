import { StackNavigationOptions } from '@react-navigation/stack';
import Theme from '../../Theme';
import styles from './DefaultScreenOptionsStyles';

const screenOptions: StackNavigationOptions = {
  headerTintColor: Theme.colors.primary.default,
  headerTitleStyle: styles.title,
  headerStyle: styles.header,
  headerTitleAlign: 'center',
};

export default screenOptions;
