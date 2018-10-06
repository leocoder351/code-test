const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'production',
  devtool: '#cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name]-[chunkhash].js'
  },
  resolve: {
    alias: {
      'public': path.resolve(__dirname, '../public'),
      'components': path.resolve(__dirname, '../src/components')
    },
    extensions: ['.js', 'vue']
  },
  module: {
    noParse: [/es6-promise\.js$/],
    rules: [
      // {
      //   test: /\.(js|jsx|vue)$/,
      //   use: 'eslint-loader',
      //   enforce: 'pre',
      //   exclude: /node_modules/
      // },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            preserveWhitespace: false,
            postcss: [
              require('autoprefixer')({
                browsers: ['last 3 versions']
              })
            ]
          }
        }
      }, 
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'img/[name].[hash:7].[ext]'
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'fonts/[name].[hash:7].[ext]'
          }
        }
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: 'warning'
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'common.[chunkhash].css'
    }),
    new VueLoaderPlugin()
  ]
};