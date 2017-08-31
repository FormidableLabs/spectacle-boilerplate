/* eslint-disable */

var path = require("path");
var webpack = require("webpack");

var config = require('./webpack.config');

config.plugins = config.plugins.concat([
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
]);

module.exports = config;
