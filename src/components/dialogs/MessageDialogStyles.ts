import { StyleSheet } from 'react-native';
import Theme from '../../../Theme';

export default StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.activityBackDrop,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    backgroundColor: Theme.colors.background.default,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: Theme.spacing.large,
  },
  title: {
    lineHeight: Theme.text.lineHeight.h1,
    fontFamily: Theme.text.font.bold,
    fontSize: Theme.text.size.default,
    marginBottom: Theme.spacing.half,
  },
  description: {
    textAlign: 'center',
    fontFamily: Theme.text.font.regular,
    color: Theme.colors.text.default,
    fontSize: Theme.text.size.medium,
    marginBottom: Theme.spacing.medium,
  },
  buttonContent: {
    alignItems: 'center',
    borderRadius: Theme.spacing.half,
    backgroundColor: Theme.colors.primary.default,
    padding: Theme.spacing.half,
  },
  button: {
    paddingHorizontal: Theme.spacing.default,
    borderRadius: Theme.spacing.half,
    fontSize: Theme.text.size.medium,
    color: Theme.colors.background.default,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
} as const);