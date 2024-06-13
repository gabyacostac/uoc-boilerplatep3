/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],  
  theme: {
    extend: {
      colors: {
        'negro': '#0B1215',
        'blanco': '#FAF9F6',
        'violeta': {
          '50': '#faf6fd',
          '100': '#f3edfa',
          '200': '#e7d9f5',
          '300': '#d6bbec',
          '400': '#bf93df',
          '500': '#a268cd',
          '600': '#884ab2',
          '700': '#6f3a91',
          '800': '#5d3177',
          '900': '#502c63',
          '950': '#30133f',
        },
        'amarillo': {
            '50': '#fffaed',
            '100': '#fff3d4',
            '200': '#ffe4a8',
            '300': '#ffcf70',
            '400': '#ffaf37',
            '500': '#ff930a',
            '600': '#f07906',
            '700': '#c75c07',
            '800': '#9e480e',
            '900': '#7f3d0f',
            '950': '#451d05',
        },
        'naranja': {
            '50': '#fff6ec',
            '100': '#ffebd3',
            '200': '#ffd3a7',
            '300': '#ffb46f',
            '400': '#ff8835',
            '500': '#ff670e',
            '600': '#f24b04',
            '700': '#c93505',
            '800': '#9f2c0d',
            '900': '#80260e',
            '950': '#451005',
        },
      },
      fontFamily: {
        'display': 'degular-display, sans-serif',
        'text': 'degular-text, sans-serif',
      }
    },
  },
  plugins: [],
}

