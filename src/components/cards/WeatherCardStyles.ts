import { StyleSheet } from 'react-native';
import Theme from '../../../Theme';
import { Responsive } from '../../utils';

export default StyleSheet.create({
  card: {
    marginHorizontal: Theme.spacing.default,
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'flex-start',
    padding: Theme.spacing.medium,
  },
  location: {
    color: Theme.colors.charcoal,
    marginBottom: Theme.spacing.small,
    fontSize: Theme.text.size.xxLarge,
    fontFamily: Theme.text.font.bold,
    textTransform: "uppercase",
  },
  content: {
    width: "100%",
    alignItems: 'center',
    justifyContent: "space-between",
    marginTop: Theme.spacing.half,
    flexDirection: 'row',
  },
  temp: {
    color: Theme.colors.charcoal,
    fontSize: Responsive.font(38),
    fontFamily: Theme.text.font.bold,
  },
  text: {
    color: Theme.colors.charcoal,
    fontSize: Theme.text.size.large,
    fontFamily: Theme.text.font.semiBold,
  },
  currentIcon: {
    resizeMode: "contain",
    width: 100,
    height: 100,
  },
} as const);