const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.config');
const glob = require('glob');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

const config = merge(base, {
  entry: {
    app: path.resolve(__dirname, '../src/entry-client.js')
  },
  optimization: {
    minimize: true,
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      cacheGroups: {
        vender: {
          name: 'vender',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        'VUE_ENV': JSON.stringify('client'),
        'DEBUG_API': JSON.stringify(true)
      }
    }),
    // 这是将客户端的整个输出构建为单个 JSON 文件的插件
    // 默认文件名为 'vue-ssr-server-bundle.json'
    new VueSSRClientPlugin()
  ]
});

module.exports = config;