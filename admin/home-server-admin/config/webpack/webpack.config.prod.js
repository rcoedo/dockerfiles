var path = require("path");
var config = require("./webpack.config")("production");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

config.module.loaders.push({
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")
});

config.plugins.push(new ExtractTextPlugin("stylesheets/styles.css"));

module.exports = config;
