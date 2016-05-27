var path = require('path');
var webpack = require('webpack');
var babelConfig = require('./babel.config.client');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '../src/client/index'),
  ],
  output: {
    path: path.join(__dirname, '../build/public/js'),
    filename: 'bundle.js',
    publicPath: '/js/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        BROWSER: JSON.stringify(true),
      },
    }),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, '../src'),
      loader: 'babel',
      query: babelConfig,
    },],
  },
};
