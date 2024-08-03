import { StyleSheet } from 'react-native';
import Theme from '../../Theme';
import { Responsive } from '../utils';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.background.default,
    },
    innerContainer: {
        paddingHorizontal: Theme.spacing.default,
        marginVertical: Theme.spacing.large,
    },
    buttonContainer: {
        backgroundColor: Theme.colors.primary.default,
        borderRadius: 4,
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