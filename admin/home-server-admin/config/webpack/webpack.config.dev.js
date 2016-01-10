var config = require("./webpack.config")("development");

config.module.loaders.push({test: /\.scss$/, loader: "style-loader!css-loader!postcss-loader!sass-loader"});

module.exports = config;
