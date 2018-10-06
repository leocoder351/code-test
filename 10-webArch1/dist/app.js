"use strict";

var _koa = require("koa");

var _koa2 = _interopRequireDefault(_koa);

var _controllerInit = require("./controllers/controllerInit.js");

var _controllerInit2 = _interopRequireDefault(_controllerInit);

var _koaSimpleRouter = require("koa-simple-router");

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa2.default();
// const config = configure(app);
_controllerInit2.default.getAllrouters(app, _koaSimpleRouter2.default);
app.listen(_config2.default.port, () => {
  console.log(`yd-web listening on ${_config2.default.port}`);
});