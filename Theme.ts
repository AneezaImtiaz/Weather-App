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
        },
        font: {
            regular: 'OpenSans-Regular',
            semiBold: 'OpenSans-SemiBold',
            bold: 'OpenSans-Bold',
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
    },
};