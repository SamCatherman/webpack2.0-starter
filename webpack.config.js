// require webpack
const webpack = require('webpack');
const path = require('path');

// config object
let config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'output.js'
  },
  //specify a loader and a set of rules - webpack finds all js files and compiles them with babel-loader
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      //loader for files ending in .scss
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}

// export
module.exports = config;
