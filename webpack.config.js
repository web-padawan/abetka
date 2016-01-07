var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');

const PROD = process.env.NODE_ENV === 'production';
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};
const common = {
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: PATHS.app,
      }
    ]
  }
};

if (PROD !== true) {
  module.exports = merge(common, {
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new OpenBrowserPlugin(),
      new webpack.NoErrorsPlugin(),
      new HtmlWebpackPlugin({
        title: 'Abetka'
      })
    ]
  });
} else {
  module.exports = merge(common, {
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings:     false,
          drop_console: true,
          unsafe:       true
        }
      }),
      new HtmlWebpackPlugin({
        title: 'Abetka'
      })
    ]
  });
}
