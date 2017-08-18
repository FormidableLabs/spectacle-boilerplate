/* eslint-disable */

var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "source-map",
  entry: [
    "webpack-hot-middleware/client",
    "babel-polyfill",
    "./index"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.md$/,
      loader: "html-loader!markdown-loader?gfm=false"
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
        plugins: [
          [
            "react-transform", {
              transforms: [{
                transform: "react-transform-hmr",
                imports: ["react"],
                locals: ["module"]
              }, {
                transform: "react-transform-catch-errors",
                imports: ["react", "redbox-react"]
              }]
            }
          ]
        ]
      },
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.css$/,
      loaders: ["style-loader", "css-loader"],
      include: __dirname
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'url-loader',
      options: {
        limit: 10000
      },
      include: path.join(__dirname, 'assets')
    }]
  }
};
