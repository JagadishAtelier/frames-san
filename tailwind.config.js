module.exports = {
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      colors: {
        secondary: '#999', // Matches the grey-ish secondary text in CSS
      }
    },
  },
}