var webpack = require('webpack');
var path = require('path');

module.exports = 
{
  devtool: 'cheap-module-source-map',
  entry: [

    './app/index.jsx',
  ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/static/'
    },
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': "'production'"}
      })
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
  