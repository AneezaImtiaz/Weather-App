import { Responsive } from './src/utils';

export default {
    spacing: {
        large: Responsive.font(32),
        medium: Responsive.font(24),
        default: Responsive.font(16),
        half: Responsive.font(8),
        small: Responsive.font(4),
    },
    text: {
        size: {
            small: Responsive.font(12),
            medium: Responsive.font(14),
            default: Responsive.font(16),
            large: Responsive.font(18),
            xLarge: Responsive.font(24),
            xxLarge: Responsive.font(32),
        },
        font: {
            regular: 'OpenSans-Regular',
            semiBold: 'OpenSans-SemiBold',
            bold: 'OpenSans-Bold',
        },
        lineHeight: {
            default: Responsive.font(16),
            h1: Responsive.font(32),
            h2: Responsive.font(28),
            h3: Responsive.font(24),
          },
    },
    colors: {
        primary: {
            default: '#2ca2c9',
        },
        background: {
            default: '#ffffff',
            dark: '#000000',
            disabled: '#ccc',
        },
        gray: {
            border: '#5b6163',
        },
        text: {
            default: '#525257',
        },
        transparent: 'transparent',
        activityBackDrop: 'rgba(0, 0, 0, 0.5)',
        charcoal: '#36454F',
    },
    images: {
        weather: require('./src/resources/images/weather.png'),
      },
};