"use strict";

var _koa = require("koa");

var _koa2 = _interopRequireDefault(_koa);

var _koaSimpleRouter = require("koa-simple-router");

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

var _controllerInit = require("./controllers/controllerInit.js");

var _controllerInit2 = _interopRequireDefault(_controllerInit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa2.default();
const config = (0, _config2.default)(app);

_controllerInit2.default.getAllRouters(app, _koaSimpleRouter2.default);

app.listen(config.port, () => {
  console.log(`Server running at http://localhost:${config.port}`);
});