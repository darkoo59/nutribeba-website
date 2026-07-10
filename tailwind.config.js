import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'brand': {
                    50: '#fdf2f2',
                    100: '#fce7e7',
                    200: '#fad1d1',
                    300: '#f9abab',
                    400: '#f67c7c',
                    500: '#f05252',
                    600: '#e02424',
                    700: '#c81e1e',
                    800: '#9b1c1c',
                    900: '#771d1d',
                },
                'pregnancy': {
                    'pink': '#FDF2F2',
                    'peach': '#FFF7ED',
                    'rose': '#F9A8D4',
                    'soft': '#FAF5FF',
                }
            }
        },
    },

    plugins: [forms],
};
