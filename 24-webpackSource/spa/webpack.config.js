const path = require('path');
const glob = require('glob');
const WebpackDeepScopePlugin = require('webpack-deep-scope-plugin').default;
// const PurifyCSSPlugin = require('purifycss-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const argv = require('yargs-parser')(process.argv.slice(2));
const merge = require('webpack-merge');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
// const DashboardPlugin = require('webpack-dashboard');
const setTitle = require('node-bash-title');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

setTitle('🍌webpack单页应用');
console.log(argv);

const loading = {
  html: '加载中...'
};

const _mode = argv.mode || 'development';
const _devFlag = _mode === 'development';
const _mergeConfig = require(path.resolve(__dirname, `./config/webpack.${_mode}.js`));

module.exports = smp.wrap(merge(_mergeConfig, {
  entry: './src/index.js',

  devServer: {
    port: 3000,
    before(app) {
      app.get('/api/test', (req, res) => {
        res.json({
          code: 200,
          message: 'Hello World'
        })
      })
    }
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          name: 'common',
          minChunks: 1,
          minSize: 0,
          maxInitialRequests: 5
        }
      }
    },
    runtimeChunk: {
      name: 'runtime'
    }
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          }, 
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]_[local]-[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    // new DashboardPlugin(),
    new ProgressBarPlugin(),
    new WebpackDeepScopePlugin(),
    new WebpackBuildNotifierPlugin({
      title: 'webpack单页应用',
      // logo: path.resolve(__dirname, './img/favicon.png'),
      suppressSuccess: true
    }),
    new ManifestPlugin(),
    // new PurifyCSSPlugin({
    //   paths: glob.sync(path.join(__dirname, './dist/*.html'))
    // }),
    new MiniCssExtractPlugin({
      filename: _devFlag ? 'styles/[name].css' : 'styles/[name].[hash:5].css',
      chunkFilename: _devFlag ? 'styles/[id].css' : 'styles/[id].[hash:5].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      loading: loading
    }),
    new CleanWebpackPlugin(['dist'])
  ]
}));