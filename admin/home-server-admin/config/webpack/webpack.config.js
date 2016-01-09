var path = require("path");
var webpack = require("webpack");

module.exports = {
  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: {
      "app": path.join(__dirname, "../../app/frontend")
    }
  },

  entry: [
    "./app/frontend/main.jsx"
  ],

  output: {
    filename: "main.bundle.js",
    path: path.join(__dirname, "app/assets/javascripts"),
  },

  plugins: [],

  module: {
    loaders: [
      {id: "js", test: /\.jsx?$/, loaders: ["babel?presets[]=react,presets[]=es2015"], exclude: /(node_modules|bower_components)/}
    ]
  }
};
