import { StyleSheet } from 'react-native';
import Theme from '../../../Theme';
import { Responsive } from '../../utils';

export default StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Theme.colors.gray.border,
    borderRadius: 4,
    padding: Theme.spacing.half,
    height: Responsive.font(45),
    fontSize: Theme.text.size.default,
    color: Theme.colors.text.default,
  },
} as const);
