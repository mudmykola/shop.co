/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    darkMode: false,
    theme: {
        colors: {
            'c100': '#000000',
            'c101': '#F0F0F0',
            'c102': '#FFC633',
            'c103': '#F2F0F1',
            'default': '#ffff',

        },
        extend: {
            fill: {
                filled: "red",
            },
        },
        fontFamily: {
            'ubuntu': ['Ubuntu', 'sans-serif'],
        }
    },
    plugins: [],
}

