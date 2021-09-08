const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        "twoTeam": "470px",
      },
      // colors: {
      //   'dark-surface': '#121212',
      //   'dark-high-emphasis': 'rgba(255,255,255,0.87)',
      //   'dark-med-emphasis': 'rgba(255, 255, 255, 0.60)',
      //   'dark-disabled-emphasis': 'rgba(255, 255, 255, 0.38)',
      // },
      boxShadow: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
        solid: '0 0 0 2px currentColor',
        outline: `0 0 0 3px rgba(156, 163, 175, .5)`,
        'outline-gray': `0 0 0 3px rgba(254, 202, 202, .5)`,
        'outline-blue': `0 0 0 3px rgba(191, 219, 254, .5)`,
        'outline-green': `0 0 0 3px rgba(167, 243, 208, .5)`,
        'outline-yellow': `0 0 0 3px rgba(253, 230, 138, .5)`,
        'outline-red': `0 0 0 3px rgba(254, 202, 202, .5)`,
        'outline-pink': `0 0 0 3px rgba(251, 207, 232, .5)`,
        'outline-purple': `0 0 0 3px rgba(221, 214, 254, .5)`,
        'outline-indigo': `0 0 0 3px rgba(199, 210, 254, .5)`,
      },
      colors: {
        orange: colors.orange,
        teal: colors.teal,
        cyan: colors.cyan,
      }
    },
  },  variants: {
    extend: {
      backgroundColor: ['group-focus', 'active'],
      borderColor: ['group-focus'],
      boxShadow: ['group-focus', 'focus'],
      opacity: ['group-focus'],
      textColor: ['group-focus', 'active'],
      textDecoration: ['group-focus'],
    }
  },
  plugins: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
};