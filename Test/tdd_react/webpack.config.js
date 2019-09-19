const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    carousel: "./src/Carousel.js",
    example: "./src/webpack_demo.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: require.resolve("babel-loader")
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ title: "webpack demo", chunks: ["example"] })
  ]
};
