const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    carousel: "./src/index.js",
    example: "./src/webpack_demo.js",
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
    new HtmlWebpackPlugin({ title: "Carousel", chunks: ["carousel"] })
  ]
};
