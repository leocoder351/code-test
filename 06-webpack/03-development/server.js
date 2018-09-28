const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// 让express使用webpack-dev-middleware和webpack.config.js
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// 监听3000端口
app.listen(3000, function() {
  console.log('Example app listening on port 3000!\n');
});