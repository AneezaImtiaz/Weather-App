import { Responsive } from './src/utils';

export default {
    text: {
        size: {
            small: Responsive.font(12),
            medium: Responsive.font(14),
            default: Responsive.font(16),
            large: Responsive.font(18),
        },
        font: {
            regular: 'OpenSans-Regular',
            semiBold: 'OpenSans-SemiBold',
            bold: 'OpenSans-Bold',
        },
    },
    colors: {
        primary: {
            default: '#9e9ea7',
        },
        background: {
            default: '#ffffff',
            header: '#2ca2c9',
            dark: '#000000',
        },
        gray: {
            border: '#5b6163',
        },
    },
};