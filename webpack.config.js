const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
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
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      output: {comments: false},
      sourceMap: true
    })
  ]
}
