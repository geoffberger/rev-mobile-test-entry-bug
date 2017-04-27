const merge = require('webpack-merge');
const config = require('./webpack.common.config');

module.exports = merge(config, {
  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'ignore-loader',
        exclude: /node_modules/
      }
    ]
  }
});
