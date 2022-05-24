module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    backgroundImage: {
      'akada-background': "url('../src/images/background-image.jpg')",
    },
    extend: {
      colors: {
        'text-color': 'var(--text-color)',
        primary: 'var(--main-color)',
        dashboardgreen: 'var(--dashboardgreen)',
        dashboardgray: 'var(--dashboardgray)',
      },
    },
    plugins: [],
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
};
