import { StyleSheet } from 'react-native';
import Theme from '../../Theme';
import Responsive from '../utils/Responsive';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background.default,
  },
  innerContainer: {
    paddingHorizontal: Theme.spacing.default,
    paddingVertical: Theme.spacing.large,
  },
  buttonContainer: {
    backgroundColor: Theme.colors.background.header,
    borderRadius: 5,
    height: Responsive.font(45),
    marginVertical: Theme.spacing.medium,
    alignItems: 'center',
    justifyContent: 'center',

  },
  button: {
    fontSize: Theme.text.size.large,
    color: Theme.colors.background.default,
    fontFamily: Theme.text.font.semiBold,
  },
} as const);
