import { StyleSheet } from 'react-native';
import Theme from '../../../Theme';
import Responsive from '../../utils/Responsive';

export default StyleSheet.create({
  card: {
    marginHorizontal: Theme.spacing.default,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    paddingVertical: Theme.spacing.medium,
  },
  location: {
    fontSize: Responsive.font(22),
    fontFamily: Theme.text.font.bold,
  },
  temp: {
    fontSize: Responsive.font(60),
    fontFamily: Theme.text.font.bold,
  },
  text: {
    fontSize: Theme.text.size.large,
    fontFamily: Theme.text.font.semiBold,
  },
  forecast: {
    flexDirection: 'row',
    marginTop: Theme.spacing.large,
    backgroundColor: Theme.colors.gray.light,
    borderRadius: 8,
  },
  item: {
    alignItems: 'center',
    padding: Theme.text.size.small,
  },
  icon: {
    height: 40,
    width: 40,
    marginVertical: Theme.spacing.small,
  },
  hourTemp: {
    fontSize: Theme.text.size.default,
    fontFamily: Theme.text.font.bold,
  },
  content: {
    alignItems: 'center',
    marginVertical: Theme.spacing.half,
    flexDirection: 'row',
  },
  currentIcon: {
    width: 100,
    height: 100,
  },
} as const);
