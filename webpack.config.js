var webpack = require('webpack');
var path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader','css-loader'],
        test: /\.css$/
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    contentBase: './',
    stats: {
      warnings: false
    },
    clientLogLevel: 'none',
  },
  performance: {
    maxEntrypointSize: 4000000,
    maxAssetSize: 100000000
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};

module.exports = config;