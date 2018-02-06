const webpack = require('webpack');

module.exports = {
  entry: {
    filename: './src/js/scripts.js'
  },
  output: {
    filename: './dist/js/build.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['es2015', {modules: false}]
          ]
        }
      }
    ]
  }
}
