var path = require("path");
var webpack = require("webpack");

module.exports = function(env) {
  return {
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
      filename: "javascripts/main.bundle.js",
      path: path.join(__dirname, "../../app/assets")
    },

    plugins: [new webpack.DefinePlugin({"process.env": {NODE_ENV: "'" + env + "'"}})],

    module: {
      loaders: [{id: "js", test: /\.jsx?$/, loaders: ["babel"], exclude: /node_modules/}]
    }
  };
};
