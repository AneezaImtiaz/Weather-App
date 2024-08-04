import { StyleSheet } from 'react-native';
import Theme from '../../../Theme';
import { Responsive } from '../../utils';

export default StyleSheet.create({
  transparent: {
    backgroundColor: Theme.colors.transparent,
  },
  label: {
    marginTop: Theme.spacing.half,
    fontSize: Theme.text.size.default + 1,
    color: Theme.colors.primary.default,
    fontFamily: Theme.text.font.bold,
    textAlign: 'center',
  },
  container: {
    backgroundColor: Theme.colors.activityBackDrop,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: Responsive.font(20),
    backgroundColor: Theme.colors.background.default,
    borderRadius: 8,
  },
} as const);