const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WatchMissingNodeModulesPlugin = require("react-dev-utils/WatchMissingNodeModulesPlugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: `./`,
    pathinfo: true,
    filename: "static/js/[name].js",
    chunkFilename: "static/js/[name].chunk.js",
    crossOriginLoading: "anonymous",
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3001,
    publicPath: "http://localhost:3001/",
    hotOnly: true,
    historyApiFallback: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, "assets/index.ejs"),
      filename: path.join(__dirname, "dist/index.html"),
      title: "React Boilerplate",
      favicon: path.join(__dirname, "public/favicon.ico"),
      url: "https://localhost:3001",
      custom: {
        react_lib: "https://unpkg.com/react@18/umd/react.development.js",
        react_dom_lib: "https://unpkg.com/react-dom@18/umd/react-dom.development.js",
      },
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].css",
      chunkFilename: "static/css/[id].css",
      ignoreOrder: true,
    }),
    new WatchMissingNodeModulesPlugin(path.resolve("node_modules")),
    new ReactRefreshWebpackPlugin(),
  ],
});
