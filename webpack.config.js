const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      // Drop Options API from bundle
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
  }),
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx','.vue']
  },
};