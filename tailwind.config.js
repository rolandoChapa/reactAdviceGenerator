module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        screens: {
            'sm': '576px',
            // => @media (min-width: 576px) { ... }

            'md': '960px',
            // => @media (min-width: 960px) { ... }

            'lg': '1440px',
            // => @media (min-width: 1440px) { ... }
        },
        container: {
            center: true,
        },
        extend: {
            colors: {

                'lightCyan': '#cee3e9',
                'neonGreen': '#52ffa8',
                'greyBlue': '#4e5d73',
                'darkGreyBlue': '#323a49',
                'darkBlue': '#1f2632'
            },
            fontFamily: {
                'manrope': ['Manrope', 'sans-serif']
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}