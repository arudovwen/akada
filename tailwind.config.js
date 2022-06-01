module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",  "./node_modules/flowbite/**/*.js"],
  theme: {
    backgroundImage: {
      "akada-background": "url('../src/images/background-image.jpg')",
    },
    extend: {
      colors: {
        "text-color": "var(--text-color)",
        primary: "var(--main-color)",
        dashboardgreen: "var(--dashboardgreen)",
        dashboardgray: "var(--dashboardgray)",
      },
      boxShadow: {
        "mb": "0px 4px 75px rgba(0, 0, 0, 0.1)",
      },
    },
    plugins: [require('flowbite/plugin')],
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
