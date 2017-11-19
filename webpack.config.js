// require webpack
const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssets = require('optimize-css-assets-webpack-plugin');


// config object
let config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'output.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.css', '.jpeg', '.jpg', '.gif', '.png'], //resolve certain file extensions
    alias: {
      images: path.resolve(__dirname, 'src/assets/images')
    }
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
      },
      //loader for files ending in .jsx, to compile into vanillaJS
      {
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    //loader for images
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: ['file-loader?context=src/assets/images/&name=images/[path][name].[ext]', {
        loader: 'image-webpack-loader',
        query: {
          mozjpeg: {
            progressive: true,
          },
          gifsicle: {
            interlaced: false,
          },
          optipng: {
            optimizationLevel: 4,
          },
          pngquant: {
            quality: '75-90',
            speed: 3,
          },
        },
      }],
      exclude: /node_modules/,
      include: __dirname,
    }
    ]
  },
  //call ExtractTextWebpackPlugin constructor and link css file
  plugins: [
    new ExtractTextWebpackPlugin('styles.css'),
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

//only uglify if production script is run
if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new OptimizeCssAssets()
  );
}
