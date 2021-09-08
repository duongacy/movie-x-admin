/**
 * @Note Please reset react app whenever you modify something inside
 */

const config = {
    darkMode: 'class',
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
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
};

module.exports = config;
