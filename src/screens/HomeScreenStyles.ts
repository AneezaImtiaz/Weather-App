import { StyleSheet } from 'react-native';
import Theme from '../../Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background.default,
  },
  innerContainer: {
    paddingHorizontal: Theme.spacing.default,
    marginVertical: Theme.spacing.large,
  },
} as const);
