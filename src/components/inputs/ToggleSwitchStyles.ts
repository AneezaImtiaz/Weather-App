import { StyleSheet } from 'react-native';
import Theme from '../../../Theme';

export default StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 0.8,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 35,
  },
  toggleItem: {
    flexGrow: 1,
    padding: Theme.spacing.half,
    borderRadius: 35,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: Theme.spacing.small,
  },
  text: {
    fontSize: Theme.text.size.large,
    justifyContent: 'center',
    alignItems: 'center',
  },
} as const);