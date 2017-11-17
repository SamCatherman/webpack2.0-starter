// require webpack
const webpack = require('webpack');

// config object
let config = {
  entry: './index.js',
  output: {
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
