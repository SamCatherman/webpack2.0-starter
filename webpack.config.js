// require webpack
const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');


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
        //call plugin's extract method
        use: ExtractTextWebpackPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          'fallback': 'style-loader'
        })
      }
    ]
  },
  //call ExtractTextWebpackPlugin constructor and link css file
  plugins: [
    new ExtractTextWebpackPlugin('styles.css')
  ],
  //sets directory to serve HTML content from, fallback to index.html on SPAs,
  //inline mode(set false to disable including client scripts), and open default browser while launching.
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    historyApiFallback: true,
    inline: true,
    open: true
  },
  //enable devtool for debugging
  devtool: 'eval-source-map'
}

// export
module.exports = config;
