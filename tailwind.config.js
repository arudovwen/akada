module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    backgroundImage: {
      'akada-background': "url('../src/images/background-image.jpg')",
    },
    extend: {
      colors: {
        'text-color': 'var(--text-color)',
      },
    },
    plugins: [],
  },
};
