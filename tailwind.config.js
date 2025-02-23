const plugin = require('tailwindcss/plugin')
// const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],

    theme: {
        fontFamily: {
            Poppins: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
        },

    },

    variants: {
        extend: {
            visibility: ['group-hover'],
        },
    },

    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'text-shadow': (value) => ({
                        textShadow: value,
                    }),
                },
                { values: theme('textShadow') }
            )
        }),
    ],
}
