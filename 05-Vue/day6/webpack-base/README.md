## vue-cli

- 下载一个全局生成vue项目的脚手架
- npm i vue-cli -g
- vue init webpack <项目名字>
- cd <项目名字>
- npm install
- npm run dev

## 模块

- Commonjs规范 nodejs 服务端
- CMD规范 sea.js 前端
- AMD规范 require.js 前端
- UMD规范 为了做兼容处理的
- ES Moudle规范 前端 + 服务端 
  - 如何定义模块  （一个js就是一个模块）
  - 如何导出模块  （export）
  - 如何使用模块  （import）

## webpack

```
npm i webpack -g  // 全局安装
npm i webpack -D  // 本地安装
```

> 安装webpack或者less最好不要安装全局的，否则可能导致webpack的版本差异

- 在package.json中配置一个脚本，这个脚本用的命令是webpack 会去当前的node_modules下找bin对应的webpack名字让其执行，执行的就是bin/weboack.js webpack.js需要当前目录下有个名字叫weboack.config.js的文件，我们通过npm run build执行的目录是当前文件的目录，所以会去当前目录下查找

## babel

- 安装babel
```
// babel 核心
npm i babel-core -D
// babel解析ES6语法
npm i babel-preset-env -D
// webpack 使用的loader
npm i babel-loader -D
// babel解析ES7语法
npm i babel-preset-stage-0
```

```
babel-preset-stage-0
babel-preset-stage-1
babel-preset-stage-2
babel-preset-stage-3
babel-preset-stage-4    // ES6

钻戒 车 包 化妆品 stage-0
车 包 化妆品 stage-1
包 化妆品 stage-2
化妆品 stage-3
化妆品买便宜的 stage-4
```

## 解析样式

- css-loader 将css解析成模块
- style-loader 将解析的内容插入到style标签内

```
npm i css-loader -D
npm i style-loader -D
```

## less, sass, stylus（CSS预处理语言）

- less-loader   less 
- sass-loader
- stylus-loader

```
npm i less less-loader -D
```

## 解析图片

- file-loader
- url-loader（是依赖于file-loader的）

```
npm i file-loader url-loader -D
```

## 需要解析html插件

- 插件的作用是以我们自己的html为模板，将打包后的结果，自动引入到html中产出的dist目录下

```
npm i html-webpack-plugin -D
```

## webpack-dev-server

- 这里面内置了服务，可以帮我们启动一个端口号，当代码更新时，可以自动打包（内存中打包），代码有变化，就重新执行

```
npm i webpack-dev-server -D
```