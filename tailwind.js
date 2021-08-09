/**
 * @Note Please reset react app whenever you modify something inside
 */
const {
    spacingConfig,
    screenConfig,
    fontSizeConfig,
    maxWidthConfig,
    opacityConfig,
    fontWeightConfig,
    minHeightConfig,
    minWidthConfig,
} = require('./tailwindConfig');

const config = {
    darkMode: 'class',
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        screens: screenConfig,
        colors: {
            'transparent': 'transparent',
            'primary': 'var(--color-primary)',
            'secondary': 'var(--color-secondary)',
            'dark': 'var(--color-dark)',
            'light': 'var(--color-light)',
            'white': 'var(--color-white)',
            'primary-contrast': 'var(--color-primary-contrast)',
            'txt': 'var(--color-txt)',
            'txt-primary': 'var(--color-txt-primary)',
        },
        fontSize: fontSizeConfig,
        spacing: spacingConfig,
        maxWidth: maxWidthConfig,
        opacity: opacityConfig,
        fontWeight: fontWeightConfig,
        minHeight: minHeightConfig,
        minWidth: minWidthConfig,
        extend: {
            gridTemplateColumns: {
                'auto-1fr': 'auto 1fr',
                '1fr-auto': '1fr auto',
            },
            borderRadius: {
                md: '5px',
                lg: '8px',
                xl: '20px',
                full: '9999999px',
            },
            zIndex: {
                '-1': '-1',
            },
        },
        fill: (theme) => ({
            gray: theme('colors.gray'),
        }),
    },
    variants: {
        extend: {
            borderWidth: ['last'],
        },
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
};

module.exports = config;
