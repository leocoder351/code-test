## webpack开发优化

#### 1. 监控面板

安装
```
yarn add speed-measure-webpack-plugin -D
```

配置
```
// webpack.config.js

const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }
});
```

#### 2. 开启通知面板

安装
```
yarn add webpack-build-notifier -D
```

配置
```
// webpack.config.js

const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

module.exports = smp.wrap({
  plugins: [
    new WebpackBuildNotifierPlugin({
      title: 'webpack单页应用',
      // logo: path.resolve(__dirname, './img/favicon.png'),
      suppressSuccess: true
    })
  ]
});
```

#### 3. 开启打包进度

安装
```
yarn add progress-bar-webpack-plugin -D
```

配置
```
// webpack.config.js

const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = smp.wrap({
  plugins: [
    new ProgressBarPlugin()
  ]
});
```

#### 4. 让开发面板更清晰

> 这个暂时不能用了

安装
```
yarn add webpack-dashboard -D
```

配置
```
// webpack.config.js

const DashboardPlugin = require('webpack-dashboard');

module.exports = smp.wrap({
  plugins: [
    new DashboardPlugin()
  ]
});
```

#### 5. 开启窗口标题

安装
```
yarn add node-bash-title -D
```

配置
```
// webpack.config.js

const setTitle = require('node-bash-title');

module.exports = smp.wrap({
  plugins: [
    new DashboardPlugin()
  ]
});
```

## webpack性能优化

#### 1. ES6不需要编译

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>浏览器原生支持</title>
</head>
<body>
  
  <script type="module" src="./main.js"></script>
  <script nomodule src="./main.es5.js"></script>
</body> 
</html>
```

用到Set、Map等ES5不支持的新API，不要使用babel-polyfill，这个非常大，使用CDN根据浏览器动态生成相应API的单独polyfill代码：

```https://cdn.polyfill.io/v2/polyfill.min.js?features=Map,Set```

#### 2. 开启多核压缩

安装
```
yarn add uglifyjs-webpack-plugin -D
```

配置
```
// webpack.config.js

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }
};
```

#### 3. 前端缓存小负载 webapp

a.js -> a.xxx.js

a.xxx.js -> 代码 后台每次计算出当前包

安装
```
yarn add webpack-manifest-plugin -D
```

配置
```
// webpack.config.js

const UglifyJsPlugin = require('webpack-manifest-plugin');

module.exports = {
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }
};
```

#### 4. 真正的loading

```
// webpack.config.js

const loading = {
  html: '加载中...'
};

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      loading: loading
    })
  ]
}

// index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>构建webpack单页应用</title>
</head>
<body>
  <div id="app">
    <%= htmlWebpackPlugin.options.loading.html %>
  </div>
  
</body>
</html>
```

#### 5. 单页转多页

#### 6. 分析打包结果 CI

github 搜 bundlesize，在CI上限制文件大小

#### 7. 根据图表分析

生成 stats.json，上传到 [webpack-chart](https://alexkuz.github.io/webpack-chart/)

> 注意要去掉 webpack.config.js 中的 smp.wrap() 包裹 、setTitle('🍌webpack单页应用') 以及 console.log()

```
// package.json

"scripts": {
  "chart": "webpack --mode development --profile --json > stats.json"
}

```

#### 8. test exclude include 非常重要

#### 9. 压缩CSS、JS

安装
```
yarn add webpack-parallel-uglify-plugin -D
```

配置
```
// webpack.config.js

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }
};
```

#### 10. happypack

#### 11. 多核处理CSS：nano optimize-css-assets-webpack-plugin