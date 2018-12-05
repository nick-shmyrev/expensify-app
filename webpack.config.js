const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: './src/app.js',
  module: {
    rules: [
      { // Babel
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      { // CSS-SCSS-SASS
        test: /\.(s?[ac]ss)$/,
        exclude: /node_modules/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
  devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/style.css',
    }),
  ],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
