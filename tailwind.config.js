module.exports = {
  content: ["./public/index.html"],
  safelist: ['animate-fade-in', 'animate-fade-out', 'animate-scale-in', 'animate-scale-out'],
  theme: {
      extend: {
          keyframes: {
              'fade-in':{
                '0%': { opacity: '0' },
                '100%': { opacity: '1'}
              },
              'fade-out': {
                '0%': { opacity: '1' },
                '100%': { opacity: '0' }
              },
              'scale-in': {
                '0%': { transform: 'scale(0)' },
                '100%': { transform: 'scale(1)'  }
              },
              'scale-out': {
                '0%': { transform: 'scale(1)' },
              '100%': { transform: 'scale(0)'  }
              }
          },
          animation: {
              'fade-in' : 'fade-in 0.5s ease-in ',
              'fade-out': 'fade-out 0.5s ease-in ',
              'scale-in': 'scale-in 0.3s ease-in ',
              'scale-out': 'scale-out 0.3s ease-in '
          }
      },
  },
      variants: {},
      plugins: [],
  }