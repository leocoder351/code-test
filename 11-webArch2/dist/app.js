"use strict";

var _koa = require("koa");

var _koa2 = _interopRequireDefault(_koa);

var _controllerInit = require("./controllers/controllerInit.js");

var _controllerInit2 = _interopRequireDefault(_controllerInit);

var _koaSimpleRouter = require("koa-simple-router");

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

var _log4js = require("log4js");

var _log4js2 = _interopRequireDefault(_log4js);

var _errorHandler = require("./middwares/errorHandler");

var _errorHandler2 = _interopRequireDefault(_errorHandler);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _koaStatic = require("koa-static");

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaSwig = require("koa-swig");

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _co = require("co");

var _co2 = _interopRequireDefault(_co);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa2.default();
// const config = configure(app);

app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
  root: _path2.default.resolve(__dirname, _config2.default.viewDir),
  autoescape: true,
  varControls: ["[[", "]]"],
  cache: 'memory',
  ext: 'html'
}));

_log4js2.default.configure({
  appenders: { cheese: { type: 'file', filename: _path2.default.resolve(__dirname, 'logs/yd.log') } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});

const logger = _log4js2.default.getLogger('cheese');

// 错误处理中心
_errorHandler2.default.error(app, logger);

// 集中处理所有路由
_controllerInit2.default.getAllrouters(app, _koaSimpleRouter2.default);

app.use((0, _koaStatic2.default)(_config2.default.staticDir));

app.listen(_config2.default.port, () => {
  logger.error('cheese is to ripe');
  console.log(`yd-web listening on ${_config2.default.port}`);
});