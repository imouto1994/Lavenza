const webpack = require("webpack");
const path = require("path");

const ASSETS_PATH = path.resolve(__dirname, "../build/");

module.exports = {
  target: "electron-renderer",
  devtool: "inline-source-map",
  entry: "./src/renderer/index.js",
  output: {
    path: ASSETS_PATH,
    filename: "[name].js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "cache-loader",
            options: {
              cacheDirectory: path.resolve(
                __dirname,
                "../.cache-loader-renderer"
              ),
            },
          },
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
                "../.cache-loader-renderer"
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
      // Node_modules css
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "cache-loader",
            options: {
              cacheDirectory: path.resolve(
                __dirname,
                "../.cache-loader-renderer"
              ),
            },
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
        ],
        include: [path.resolve(__dirname, "../node_modules/")],
      },
    ],
  },
  plugins: [
    // Enable Hot Module Replacement
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),

    // Prevent creating assets if there is error in building phase
    new webpack.NoEmitOnErrorsPlugin(),

    // Global variables definition
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  performance: false,
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
    setImmediate: false,
  },
  devServer: {
    port: process.env.PORT || 2110,
    contentBase: "./build",
    inline: true,
    hot: true,
    historyApiFallback: true,
  },
};
