const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BabiliPlugin = require("babili-webpack-plugin");

const ASSETS_PATH = path.resolve(__dirname, "../build");

module.exports = {
  target: "electron-renderer",
  devtool: "source-map",
  entry: "./src/renderer/index.js",
  output: {
    path: ASSETS_PATH,
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
        exclude: [path.resolve(__dirname, "../node_modules/")],
      },
      // CSS Modules
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              singleton: true,
            },
          },
          {
            loader: "cache-loader",
            options: {
              cacheDirectory: path.resolve(
                __dirname,
                "../.cache-loader-renderer",
              ),
            },
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]__[local]___[hash:base64:5]",
            },
          },
          {
            loader: "postcss-loader",
          },
        ],
        include: [path.resolve(__dirname, "../src/")],
      },
    ],
  },
  plugins: [
    // Prevent creating assets if there is error in building phase
    new webpack.NoEmitOnErrorsPlugin(),

    // Uglify by using Babili
    new BabiliPlugin(),

    // Global variables definition
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),

    // Optimization Plugins
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),

    // Optimize Plugins
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),

    // Html Webpack Plugin
    new HtmlWebpackPlugin({
      template: "./src/renderer/index.html",
      filename: "index.html",
      inject: "body",
      minify: { collapseWhitespace: true },
    }),
  ],
  externals: [],
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
    setImmediate: false,
  },
};
