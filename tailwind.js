/**
 * @Note Please reset react app whenever you modify something inside
 */
const config = {
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        screens: {
            phone: '600px',
            // => @media (min-width: 600px) { ... }

            laptop: '1024px',
            // => @media (min-width: 1024px) { ... }

            desktop: '1270px',
            // => @media (min-width: 1270px) { ... }
        },
        colors: {
            transparent: 'transparent',
            primary: '#1d1616',
            secondary: '#616161',
            dark: '#000000',
            light: '#443c3c',

            success:'#2e7d32',
            danger:'#771b7c',
            warning:'#feff55',
            white: '#FFFFFF',
            black: '#2F2F2F',
        },
        fontSize: {
            8: '0.8rem',
            9:'0.9rem',
            11: '1.1rem',
            12: '1.2rem',
            13: '1.3rem',
            16: '1.6rem',
            20: '2rem',
            24: '2.4rem',
            33: '3.3rem',
            36: '3.3rem',
            50: '5rem',
        },
        /**
         * 1 means 10px
         */
        spacing: {
            0: '0',
            0.5: '0.5rem',
            1: '1rem',
            1.5: '1.5rem',
            2: '2rem',
            2.5: '2.5rem',
            3: '3rem',
            3.5: '3.5rem',
            4: '4rem',
            4.5: '4.5rem',
            5: '5rem',
            5.5: '5.5rem',
            6: '6rem',
            7: '7rem',
            8: '8rem',
            10: '10rem',
            11: '11rem',
            13: '13rem',
            15: '15rem',
            20: '20rem',
            22: '22rem',
            25: '25rem',
            30: '30rem',
            32: '32rem',
            35: '35rem',
            40: '40rem',
            50: '50rem',
        },
        maxWidth: {
            10: '10rem',
            11: '11rem',
            13: '13rem',
            15: '15rem',
            20: '20rem',
            22: '22rem',
            25: '25rem',
            30: '30rem',
            32: '32rem',
            35: '35rem',
            40: '40rem',
            50: '50rem',
            phone: '600px',
            laptop: '1024px',
            desktop: '1270px',
        },
        opacity: {
            0: '0',
            20: '0.2',
            40: '0.4',
            60: '0.6',
            80: '0.8',
            100: '1',
        },
        fontWeight: {
            hairline: 100,
            'extra-light': 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            'extra-bold': 800,
            black: 900,
        },
        minHeight: {
            0: '0',
            5: '5rem',
            10: '10rem',
            15: '15rem',
            20: '20rem',
            25: '25rem',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            full: '100%',
        },
        minWidth: {
            0: '0',
            5: '5rem',
            10: '10rem',
            15: '15rem',
            20: '20rem',
            25: '25rem',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            full: '100%',
        },
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
    },
    variants: {
        extend: {
            borderWidth: ['last'],
        },
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
};

module.exports = config;
