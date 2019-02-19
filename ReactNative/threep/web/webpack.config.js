module.exports = {
  module: {
    rules: [
      {
        // 支持图片等静态文件的加载
        test: /\.(gif|jpe?g|png|svg)$/,
        use: {
          loader: "file-loader",
        },
      },
      {
        // React Native 包中有很多 es6 语法的 js，需要用 babel 转换后才能在浏览器中运行
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: false,
            presets: ["react-native"],
            plugins: [
              // 支持 async/await 语法
              "transform-runtime",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    // 优先加载以 web.js 结尾的针对 web 平台的文件
    extensions: [
      ".web.js",
      ".js",
      ".json",
    ],
    alias: {
      // 把 react-native 包映射成 react-native-web
      "react-native$": "react-native-web",
    },
  },
};