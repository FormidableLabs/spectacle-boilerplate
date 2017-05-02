/* eslint-disable */

var path = require("path");
var webpack = require("webpack");
var assign = require("object-assign");

var config = require("./webpack.config");

config.devtool = 'cheap-module-eval-source-map';

config.output = assign(config.output, {
  publicPath: "/"
});

config.plugins = config.plugins.concat([
  new webpack.NoEmitOnErrorsPlugin()
]);

config.module.rules[0] = {
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
};

module.exports = config;
