module.exports = {
  theme: {
    fontFamily: {
      sans: ['-apple-system', 'BlinkMacSystemFont'],
      serif: ['Playfair Display', 'Georgia', 'Cambria'],
    },

    extend: {
      colors: {
        yellow: {
          100: '#FFFAEB',
          200: '#FEF3CE',
          300: '#FDEBB0',
          400: '#FCDD74',
          500: '#FBCE39',
          600: '#E2B933',
          700: '#977C22',
          800: '#715D1A',
          900: '#4B3E11',
        },

        orange: {
          100: '#FEF0E9',
          200: '#FCDAC8',
          300: '#FAC3A7',
          400: '#F69666',
          500: '#F26924',
          600: '#DA5F20',
          700: '#913F16',
          800: '#6D2F10',
          900: '#49200B',
        },
      },

      spacing: {
        '72': '18rem',
      },

      fontSize: {
        '8xl': '6rem',
        '10xl': '8rem',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
};
