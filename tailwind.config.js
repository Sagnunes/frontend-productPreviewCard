/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        screens: {
            'sm': '375px',
            // => @media (min-width: 375px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            colors: {
                darkCyan: 'hsl(158, 36%, 37%)',
                darkCyanHover: '#1A4032',
                cream: 'hsl(30, 38%, 92%)',
                veryDarkBlue: 'hsl(212, 21%, 14%)',
                darkGrayishBlue: 'hsl(228, 12%, 48%)',
                white: 'hsl(0, 0%, 100%)'
            },
            fontFamily: {
                'montserrat': 'Montserrat, sans-serif',
                'fraunces': 'Fraunces, sans-serif'
            }
        },
    },
    plugins: [],
}

