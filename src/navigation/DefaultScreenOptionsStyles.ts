import { StyleSheet } from 'react-native';
import { Responsive } from '../utils';
import Theme from '../../Theme';

export default StyleSheet.create({
  title: {
    fontFamily: Theme.text.font.bold,
    fontSize: Theme.text.size.large,
    textAlign: 'center',
    width: Responsive.font(200),
    color: Theme.colors.background.default,
  },
  header: {
    backgroundColor: Theme.colors.primary.default,
    borderBottomColor: Theme.colors.gray.border,
    borderBottomWidth: 0.8,
  },
} as const);