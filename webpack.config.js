var webpack = require('webpack');
var path = require('path');

module.exports = 
{
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/index.jsx',
  ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/static/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    module:{
      loaders: [
        {
          test: /\.jsx?/,
          loaders: ['react-hot','babel'],
          include: path.join(__dirname, 'app')
        },
        {
          test: /\.less$/,
          loader: "style!css!less"
        },
        {
          test: /\.scss$/,
          loader: "style!css?sourceMap!sass?sourceMap"
        }
      ]
    }
};
  