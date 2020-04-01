const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ZipPlugin = require("zip-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    carousel: "./src/index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: require.resolve("babel-loader")
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
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
