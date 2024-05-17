const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  target: "node",
  node: {
    __dirname: false,
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "assets", to: path.resolve(__dirname, "dist") }],
    }),
  ],
  module: {
    rules: [
      {
        sideEffects: false,
      },
      {
        test: /\.ts/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.node$/,
        loader: "node-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  optimization: {
    usedExports: true,
  },
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs2",
  },
};
