export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          bg1: '#f7faff', // Table
          border: '#d8dee5', // Table border
          500: '#828699' // Gray Text
        },
        blue: {
          100: '#EAF0F9',
          500: '#0074f0' // Button
        },
        red: {
          500: '#ff4e4e'
        },
        'off-black': '#101113',
        'off-white': '#fafbfb'
      }
    },

    backgroundImage: {
      'blue-gradient': 'linear-gradient(90deg, #8c66fc -29%, #0274f1 145%)',
      'blue-gradient-light': `linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%), linear-gradient(90deg, #8c66fc -29%, #0274f1 145%)`,
      'orange-gradient':
        'linear-gradient(91deg, #FEDBA8 -3.29%, #CF75D5 106.42%)'
    }
  },
  plugins: []
}
