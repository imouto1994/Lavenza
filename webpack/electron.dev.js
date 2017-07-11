const webpack = require("webpack");
const path = require("path");

const ASSETS_PATH = path.resolve(__dirname, "../build");

module.exports = {
  devtool: "source-map",
  target: "electron-main",
  entry: "./src/electron/index.js",
  output: {
    path: ASSETS_PATH,
    filename: "electron.js",
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
                "../.cache-loader-electron"
              ),
            },
          },
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

    // Global variables definition
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
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
  externals: ["edge-js"],
};
