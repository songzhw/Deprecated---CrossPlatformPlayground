const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ZipPlugin = require("zip-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    carousel: "./src/index.js",
    example: "./src/webpack_demo.js"
  },
  output:{
    path: path.resolve(__dirname, "dist_[hash]")
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ title: "Carousel", chunks: ["carousel"] }),
    new ZipPlugin({
      filename: "carousel.zip"
    })
  ]
};
