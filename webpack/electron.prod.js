const webpack = require("webpack");
const path = require("path");
const BabiliPlugin = require("babili-webpack-plugin");

const ASSETS_PATH = path.resolve(__dirname, "../build");

module.exports = {
  devtool: "source-map",
  target: "electron-main",
  entry: "./src/electron/index.js",
  output: {
    path: ASSETS_PATH,
    filename: "electron.js",
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
    ],
  },
  plugins: [
    // Prevent creating assets if there is error in building phase
    new webpack.NoEmitOnErrorsPlugin(),

    // Uglify by using Babili1
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
  ],
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
    setImmediate: false,
  },
  externals: [],
};
