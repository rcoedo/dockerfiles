var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config.js");

config.plugins.push(new webpack.HotModuleReplacementPlugin());

config.entry.unshift("webpack/hot/only-dev-server");
config.entry.unshift("webpack-dev-server/client?http://localhost:4000");

config.output.publicPath = "http://localhost:4000/";


var getLoader = function(config, loaderId) {
  return config.module.loaders.find(function(loader) {return loader.id === loaderId});
}

if (loader = getLoader(config, "js")) {
  loader.loaders.unshift("react-hot");
}

var compiler = webpack(config);

new WebpackDevServer(compiler, {
  contentBase: "http://localhost:4000",
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    chunkModules: false
  }})
  .listen(4000, "0.0.0.0", function (err, result) {
    if (err){
      console.error(err);
    }
    console.log("webpack-dev-server running on port 4000");
  });

process.stdin.resume();
process.stdin.on("end", function () {
  process.exit(0);
});
